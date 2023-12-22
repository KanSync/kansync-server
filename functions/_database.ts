import "dotenv/config";

import { PrismaClient } from '../.prisma/client';
import { IUnifiedIssue } from './_common';

class DatabaseError extends Error {
    constructor(public status: Number, msg: string) {
        super(msg);
    }
}

const client = new PrismaClient()

export async function getIssuesFromDB(user_name: string, project_name: string): Promise<IUnifiedIssue[]> {
    let project_id = await client.projects.findFirst({ select: { id: true }, where: { user_name: user_name, name: project_name } })

    if (!project_id) {
        throw new DatabaseError(404, "Project not found.");
    }

    let result: IUnifiedIssue[] = await client.issues.findMany({ where: { projectID: project_id.id } })

    return result;
}

export async function storeIssuesToDB(user_name: string, project_name: string, issues: IUnifiedIssue[]): Promise<void> {
    let project_id = await client.projects.findFirst({ select: { id: true }, where: { user_name: user_name, name: project_name } })

    if (project_id) {
        await client.projects.delete({ where: project_id })
    }

    let created_project = await client.projects.create({ data: { name: project_name, user_name: user_name } })
    await client.issues.createMany({ data: issues.map(issue => Object.assign(issue, { projectID: created_project.id })) })
}

export async function projectExists(user_name: string, project_name: string): Promise<boolean> {
    let project = await client.projects.findFirst({ where: { user_name: user_name, name: project_name } })

    return project != null
}


export async function userExists(user_name: string): Promise<boolean> {
    let user = await client.kanSyncUsers.findUnique({ where: { login: user_name } })

    return user != null
}

export async function createUser(user_name: string): Promise<void> {
    await client.kanSyncUsers.create({ data: { login: user_name } })
}