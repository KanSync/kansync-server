import "dotenv/config";

import { PrismaClient } from '../.prisma/client';
import { IUnifiedIssue } from './common';

class DatabaseError extends Error {
    constructor(public status: Number, msg: string) {
        super(msg);
    }
}

const client = new PrismaClient()

export async function getIssuesFromDB(user_name: string, project_name: string): Promise<IUnifiedIssue[]> {
    let project_id = await client.projects.findFirst({ select: {id: true}, where: {user_name: user_name, name: project_name}})
    
    if (!project_id) {
        throw new DatabaseError(404, "Project not found.");
    }

    let result: IUnifiedIssue[] = await client.issues.findMany({where: {projectID: project_id.id}})

    return result;
}

export async function storeIssuesToDB(user_name: string, project_name: string, issues: IUnifiedIssue[]): Promise<void> {
    let project_id = await client.projects.findFirst({ select: {id: true}, where: {user_name: user_name, name: project_name}})

    if (project_id) {
        await client.projects.delete({where: project_id})
    }
    
    let created_project = await client.projects.create({data: {name: project_name, user_name: user_name}})
    await client.issues.createMany({data: issues.map(issue => Object.assign(issue, { projectID: created_project.id}))})
}

// TODO: check if user exists in db
export function userExists(user: string): boolean {
    return true
}

// storeIssuesToDB("Tom", "Bombadil", [{
//     id: undefined,
//     "title": "Wow must be done",
//     "assignees": [],
//     "author": {
//         "name": "Linus"
//     },
//     "body": null,
//     "category": "To Do",
//     "statusChangeTime": new Date("2023-11-16T13:03:54.161Z"),
//     "createdAt": new Date("2023-11-16T13:03:53.690Z"),
//     "comments": [],
//     "lastEditedAt": new Date("2023-11-16T13:03:54.048Z"),
//     "projectID": 0,
//     "dueDate": null,
//     "labels": []
// }])

// getIssuesFromDB("Tom", "Bombadil").then(data => console.log(data))