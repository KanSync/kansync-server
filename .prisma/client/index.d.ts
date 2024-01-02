
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model KanSyncUsers
 * 
 */
export type KanSyncUsers = $Result.DefaultSelection<Prisma.$KanSyncUsersPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>
/**
 * Model Issues
 * 
 */
export type Issues = $Result.DefaultSelection<Prisma.$IssuesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more KanSyncUsers
 * const kanSyncUsers = await prisma.kanSyncUsers.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more KanSyncUsers
   * const kanSyncUsers = await prisma.kanSyncUsers.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.kanSyncUsers`: Exposes CRUD operations for the **KanSyncUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KanSyncUsers
    * const kanSyncUsers = await prisma.kanSyncUsers.findMany()
    * ```
    */
  get kanSyncUsers(): Prisma.KanSyncUsersDelegate<ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs>;

  /**
   * `prisma.issues`: Exposes CRUD operations for the **Issues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issues.findMany()
    * ```
    */
  get issues(): Prisma.IssuesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    KanSyncUsers: 'KanSyncUsers',
    Projects: 'Projects',
    Issues: 'Issues'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'kanSyncUsers' | 'projects' | 'issues'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      KanSyncUsers: {
        payload: Prisma.$KanSyncUsersPayload<ExtArgs>
        fields: Prisma.KanSyncUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KanSyncUsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KanSyncUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KanSyncUsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KanSyncUsersPayload>
          }
          findFirst: {
            args: Prisma.KanSyncUsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KanSyncUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KanSyncUsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KanSyncUsersPayload>
          }
          findMany: {
            args: Prisma.KanSyncUsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KanSyncUsersPayload>[]
          }
          create: {
            args: Prisma.KanSyncUsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KanSyncUsersPayload>
          }
          createMany: {
            args: Prisma.KanSyncUsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KanSyncUsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KanSyncUsersPayload>
          }
          update: {
            args: Prisma.KanSyncUsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KanSyncUsersPayload>
          }
          deleteMany: {
            args: Prisma.KanSyncUsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KanSyncUsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KanSyncUsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KanSyncUsersPayload>
          }
          aggregate: {
            args: Prisma.KanSyncUsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKanSyncUsers>
          }
          groupBy: {
            args: Prisma.KanSyncUsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KanSyncUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.KanSyncUsersCountArgs<ExtArgs>,
            result: $Utils.Optional<KanSyncUsersCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      Issues: {
        payload: Prisma.$IssuesPayload<ExtArgs>
        fields: Prisma.IssuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssuesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssuesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          findFirst: {
            args: Prisma.IssuesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssuesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          findMany: {
            args: Prisma.IssuesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>[]
          }
          create: {
            args: Prisma.IssuesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          createMany: {
            args: Prisma.IssuesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IssuesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          update: {
            args: Prisma.IssuesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          deleteMany: {
            args: Prisma.IssuesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IssuesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IssuesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          aggregate: {
            args: Prisma.IssuesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIssues>
          }
          groupBy: {
            args: Prisma.IssuesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IssuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssuesCountArgs<ExtArgs>,
            result: $Utils.Optional<IssuesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type KanSyncUsersCountOutputType
   */

  export type KanSyncUsersCountOutputType = {
    Projects: number
  }

  export type KanSyncUsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Projects?: boolean | KanSyncUsersCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes

  /**
   * KanSyncUsersCountOutputType without action
   */
  export type KanSyncUsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsersCountOutputType
     */
    select?: KanSyncUsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * KanSyncUsersCountOutputType without action
   */
  export type KanSyncUsersCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }



  /**
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    Issues: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Issues?: boolean | ProjectsCountOutputTypeCountIssuesArgs
  }

  // Custom InputTypes

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model KanSyncUsers
   */

  export type AggregateKanSyncUsers = {
    _count: KanSyncUsersCountAggregateOutputType | null
    _min: KanSyncUsersMinAggregateOutputType | null
    _max: KanSyncUsersMaxAggregateOutputType | null
  }

  export type KanSyncUsersMinAggregateOutputType = {
    login: string | null
  }

  export type KanSyncUsersMaxAggregateOutputType = {
    login: string | null
  }

  export type KanSyncUsersCountAggregateOutputType = {
    login: number
    _all: number
  }


  export type KanSyncUsersMinAggregateInputType = {
    login?: true
  }

  export type KanSyncUsersMaxAggregateInputType = {
    login?: true
  }

  export type KanSyncUsersCountAggregateInputType = {
    login?: true
    _all?: true
  }

  export type KanSyncUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KanSyncUsers to aggregate.
     */
    where?: KanSyncUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KanSyncUsers to fetch.
     */
    orderBy?: KanSyncUsersOrderByWithRelationInput | KanSyncUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KanSyncUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KanSyncUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KanSyncUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KanSyncUsers
    **/
    _count?: true | KanSyncUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KanSyncUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KanSyncUsersMaxAggregateInputType
  }

  export type GetKanSyncUsersAggregateType<T extends KanSyncUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateKanSyncUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKanSyncUsers[P]>
      : GetScalarType<T[P], AggregateKanSyncUsers[P]>
  }




  export type KanSyncUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KanSyncUsersWhereInput
    orderBy?: KanSyncUsersOrderByWithAggregationInput | KanSyncUsersOrderByWithAggregationInput[]
    by: KanSyncUsersScalarFieldEnum[] | KanSyncUsersScalarFieldEnum
    having?: KanSyncUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KanSyncUsersCountAggregateInputType | true
    _min?: KanSyncUsersMinAggregateInputType
    _max?: KanSyncUsersMaxAggregateInputType
  }

  export type KanSyncUsersGroupByOutputType = {
    login: string
    _count: KanSyncUsersCountAggregateOutputType | null
    _min: KanSyncUsersMinAggregateOutputType | null
    _max: KanSyncUsersMaxAggregateOutputType | null
  }

  type GetKanSyncUsersGroupByPayload<T extends KanSyncUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KanSyncUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KanSyncUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KanSyncUsersGroupByOutputType[P]>
            : GetScalarType<T[P], KanSyncUsersGroupByOutputType[P]>
        }
      >
    >


  export type KanSyncUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    login?: boolean
    Projects?: boolean | KanSyncUsers$ProjectsArgs<ExtArgs>
    _count?: boolean | KanSyncUsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kanSyncUsers"]>

  export type KanSyncUsersSelectScalar = {
    login?: boolean
  }

  export type KanSyncUsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Projects?: boolean | KanSyncUsers$ProjectsArgs<ExtArgs>
    _count?: boolean | KanSyncUsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $KanSyncUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KanSyncUsers"
    objects: {
      Projects: Prisma.$ProjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      login: string
    }, ExtArgs["result"]["kanSyncUsers"]>
    composites: {}
  }


  type KanSyncUsersGetPayload<S extends boolean | null | undefined | KanSyncUsersDefaultArgs> = $Result.GetResult<Prisma.$KanSyncUsersPayload, S>

  type KanSyncUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KanSyncUsersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: KanSyncUsersCountAggregateInputType | true
    }

  export interface KanSyncUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KanSyncUsers'], meta: { name: 'KanSyncUsers' } }
    /**
     * Find zero or one KanSyncUsers that matches the filter.
     * @param {KanSyncUsersFindUniqueArgs} args - Arguments to find a KanSyncUsers
     * @example
     * // Get one KanSyncUsers
     * const kanSyncUsers = await prisma.kanSyncUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KanSyncUsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KanSyncUsersFindUniqueArgs<ExtArgs>>
    ): Prisma__KanSyncUsersClient<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one KanSyncUsers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KanSyncUsersFindUniqueOrThrowArgs} args - Arguments to find a KanSyncUsers
     * @example
     * // Get one KanSyncUsers
     * const kanSyncUsers = await prisma.kanSyncUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KanSyncUsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KanSyncUsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KanSyncUsersClient<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first KanSyncUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KanSyncUsersFindFirstArgs} args - Arguments to find a KanSyncUsers
     * @example
     * // Get one KanSyncUsers
     * const kanSyncUsers = await prisma.kanSyncUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KanSyncUsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KanSyncUsersFindFirstArgs<ExtArgs>>
    ): Prisma__KanSyncUsersClient<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first KanSyncUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KanSyncUsersFindFirstOrThrowArgs} args - Arguments to find a KanSyncUsers
     * @example
     * // Get one KanSyncUsers
     * const kanSyncUsers = await prisma.kanSyncUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KanSyncUsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KanSyncUsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KanSyncUsersClient<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more KanSyncUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KanSyncUsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KanSyncUsers
     * const kanSyncUsers = await prisma.kanSyncUsers.findMany()
     * 
     * // Get first 10 KanSyncUsers
     * const kanSyncUsers = await prisma.kanSyncUsers.findMany({ take: 10 })
     * 
     * // Only select the `login`
     * const kanSyncUsersWithLoginOnly = await prisma.kanSyncUsers.findMany({ select: { login: true } })
     * 
    **/
    findMany<T extends KanSyncUsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KanSyncUsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a KanSyncUsers.
     * @param {KanSyncUsersCreateArgs} args - Arguments to create a KanSyncUsers.
     * @example
     * // Create one KanSyncUsers
     * const KanSyncUsers = await prisma.kanSyncUsers.create({
     *   data: {
     *     // ... data to create a KanSyncUsers
     *   }
     * })
     * 
    **/
    create<T extends KanSyncUsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KanSyncUsersCreateArgs<ExtArgs>>
    ): Prisma__KanSyncUsersClient<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many KanSyncUsers.
     *     @param {KanSyncUsersCreateManyArgs} args - Arguments to create many KanSyncUsers.
     *     @example
     *     // Create many KanSyncUsers
     *     const kanSyncUsers = await prisma.kanSyncUsers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KanSyncUsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KanSyncUsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KanSyncUsers.
     * @param {KanSyncUsersDeleteArgs} args - Arguments to delete one KanSyncUsers.
     * @example
     * // Delete one KanSyncUsers
     * const KanSyncUsers = await prisma.kanSyncUsers.delete({
     *   where: {
     *     // ... filter to delete one KanSyncUsers
     *   }
     * })
     * 
    **/
    delete<T extends KanSyncUsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KanSyncUsersDeleteArgs<ExtArgs>>
    ): Prisma__KanSyncUsersClient<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one KanSyncUsers.
     * @param {KanSyncUsersUpdateArgs} args - Arguments to update one KanSyncUsers.
     * @example
     * // Update one KanSyncUsers
     * const kanSyncUsers = await prisma.kanSyncUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KanSyncUsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KanSyncUsersUpdateArgs<ExtArgs>>
    ): Prisma__KanSyncUsersClient<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more KanSyncUsers.
     * @param {KanSyncUsersDeleteManyArgs} args - Arguments to filter KanSyncUsers to delete.
     * @example
     * // Delete a few KanSyncUsers
     * const { count } = await prisma.kanSyncUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KanSyncUsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KanSyncUsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KanSyncUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KanSyncUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KanSyncUsers
     * const kanSyncUsers = await prisma.kanSyncUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KanSyncUsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KanSyncUsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KanSyncUsers.
     * @param {KanSyncUsersUpsertArgs} args - Arguments to update or create a KanSyncUsers.
     * @example
     * // Update or create a KanSyncUsers
     * const kanSyncUsers = await prisma.kanSyncUsers.upsert({
     *   create: {
     *     // ... data to create a KanSyncUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KanSyncUsers we want to update
     *   }
     * })
    **/
    upsert<T extends KanSyncUsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KanSyncUsersUpsertArgs<ExtArgs>>
    ): Prisma__KanSyncUsersClient<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of KanSyncUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KanSyncUsersCountArgs} args - Arguments to filter KanSyncUsers to count.
     * @example
     * // Count the number of KanSyncUsers
     * const count = await prisma.kanSyncUsers.count({
     *   where: {
     *     // ... the filter for the KanSyncUsers we want to count
     *   }
     * })
    **/
    count<T extends KanSyncUsersCountArgs>(
      args?: Subset<T, KanSyncUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KanSyncUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KanSyncUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KanSyncUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KanSyncUsersAggregateArgs>(args: Subset<T, KanSyncUsersAggregateArgs>): Prisma.PrismaPromise<GetKanSyncUsersAggregateType<T>>

    /**
     * Group by KanSyncUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KanSyncUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KanSyncUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KanSyncUsersGroupByArgs['orderBy'] }
        : { orderBy?: KanSyncUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KanSyncUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKanSyncUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KanSyncUsers model
   */
  readonly fields: KanSyncUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KanSyncUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KanSyncUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Projects<T extends KanSyncUsers$ProjectsArgs<ExtArgs> = {}>(args?: Subset<T, KanSyncUsers$ProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the KanSyncUsers model
   */ 
  interface KanSyncUsersFieldRefs {
    readonly login: FieldRef<"KanSyncUsers", 'String'>
  }
    

  // Custom InputTypes

  /**
   * KanSyncUsers findUnique
   */
  export type KanSyncUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
    /**
     * Filter, which KanSyncUsers to fetch.
     */
    where: KanSyncUsersWhereUniqueInput
  }


  /**
   * KanSyncUsers findUniqueOrThrow
   */
  export type KanSyncUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
    /**
     * Filter, which KanSyncUsers to fetch.
     */
    where: KanSyncUsersWhereUniqueInput
  }


  /**
   * KanSyncUsers findFirst
   */
  export type KanSyncUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
    /**
     * Filter, which KanSyncUsers to fetch.
     */
    where?: KanSyncUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KanSyncUsers to fetch.
     */
    orderBy?: KanSyncUsersOrderByWithRelationInput | KanSyncUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KanSyncUsers.
     */
    cursor?: KanSyncUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KanSyncUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KanSyncUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KanSyncUsers.
     */
    distinct?: KanSyncUsersScalarFieldEnum | KanSyncUsersScalarFieldEnum[]
  }


  /**
   * KanSyncUsers findFirstOrThrow
   */
  export type KanSyncUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
    /**
     * Filter, which KanSyncUsers to fetch.
     */
    where?: KanSyncUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KanSyncUsers to fetch.
     */
    orderBy?: KanSyncUsersOrderByWithRelationInput | KanSyncUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KanSyncUsers.
     */
    cursor?: KanSyncUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KanSyncUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KanSyncUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KanSyncUsers.
     */
    distinct?: KanSyncUsersScalarFieldEnum | KanSyncUsersScalarFieldEnum[]
  }


  /**
   * KanSyncUsers findMany
   */
  export type KanSyncUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
    /**
     * Filter, which KanSyncUsers to fetch.
     */
    where?: KanSyncUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KanSyncUsers to fetch.
     */
    orderBy?: KanSyncUsersOrderByWithRelationInput | KanSyncUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KanSyncUsers.
     */
    cursor?: KanSyncUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KanSyncUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KanSyncUsers.
     */
    skip?: number
    distinct?: KanSyncUsersScalarFieldEnum | KanSyncUsersScalarFieldEnum[]
  }


  /**
   * KanSyncUsers create
   */
  export type KanSyncUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
    /**
     * The data needed to create a KanSyncUsers.
     */
    data: XOR<KanSyncUsersCreateInput, KanSyncUsersUncheckedCreateInput>
  }


  /**
   * KanSyncUsers createMany
   */
  export type KanSyncUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KanSyncUsers.
     */
    data: KanSyncUsersCreateManyInput | KanSyncUsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * KanSyncUsers update
   */
  export type KanSyncUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
    /**
     * The data needed to update a KanSyncUsers.
     */
    data: XOR<KanSyncUsersUpdateInput, KanSyncUsersUncheckedUpdateInput>
    /**
     * Choose, which KanSyncUsers to update.
     */
    where: KanSyncUsersWhereUniqueInput
  }


  /**
   * KanSyncUsers updateMany
   */
  export type KanSyncUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KanSyncUsers.
     */
    data: XOR<KanSyncUsersUpdateManyMutationInput, KanSyncUsersUncheckedUpdateManyInput>
    /**
     * Filter which KanSyncUsers to update
     */
    where?: KanSyncUsersWhereInput
  }


  /**
   * KanSyncUsers upsert
   */
  export type KanSyncUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
    /**
     * The filter to search for the KanSyncUsers to update in case it exists.
     */
    where: KanSyncUsersWhereUniqueInput
    /**
     * In case the KanSyncUsers found by the `where` argument doesn't exist, create a new KanSyncUsers with this data.
     */
    create: XOR<KanSyncUsersCreateInput, KanSyncUsersUncheckedCreateInput>
    /**
     * In case the KanSyncUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KanSyncUsersUpdateInput, KanSyncUsersUncheckedUpdateInput>
  }


  /**
   * KanSyncUsers delete
   */
  export type KanSyncUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
    /**
     * Filter which KanSyncUsers to delete.
     */
    where: KanSyncUsersWhereUniqueInput
  }


  /**
   * KanSyncUsers deleteMany
   */
  export type KanSyncUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KanSyncUsers to delete
     */
    where?: KanSyncUsersWhereInput
  }


  /**
   * KanSyncUsers.Projects
   */
  export type KanSyncUsers$ProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * KanSyncUsers without action
   */
  export type KanSyncUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KanSyncUsers
     */
    select?: KanSyncUsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KanSyncUsersInclude<ExtArgs> | null
  }



  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    name: string | null
    user_name: string | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    user_name: string | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    name: number
    user_name: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    name?: true
    user_name?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    name?: true
    user_name?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    name?: true
    user_name?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    name: string
    user_name: string
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_name?: boolean
    user?: boolean | KanSyncUsersDefaultArgs<ExtArgs>
    Issues?: boolean | Projects$IssuesArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectScalar = {
    id?: boolean
    name?: boolean
    user_name?: boolean
  }

  export type ProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | KanSyncUsersDefaultArgs<ExtArgs>
    Issues?: boolean | Projects$IssuesArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      user: Prisma.$KanSyncUsersPayload<ExtArgs>
      Issues: Prisma.$IssuesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      user_name: string
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }


  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Projects that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
    **/
    create<T extends ProjectsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const projects = await prisma.projects.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
    **/
    delete<T extends ProjectsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends KanSyncUsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KanSyncUsersDefaultArgs<ExtArgs>>): Prisma__KanSyncUsersClient<$Result.GetResult<Prisma.$KanSyncUsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Issues<T extends Projects$IssuesArgs<ExtArgs> = {}>(args?: Subset<T, Projects$IssuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Projects model
   */ 
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'Int'>
    readonly name: FieldRef<"Projects", 'String'>
    readonly user_name: FieldRef<"Projects", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }


  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
  }


  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }


  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
  }


  /**
   * Projects.Issues
   */
  export type Projects$IssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    where?: IssuesWhereInput
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    cursor?: IssuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }


  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
  }



  /**
   * Model Issues
   */

  export type AggregateIssues = {
    _count: IssuesCountAggregateOutputType | null
    _avg: IssuesAvgAggregateOutputType | null
    _sum: IssuesSumAggregateOutputType | null
    _min: IssuesMinAggregateOutputType | null
    _max: IssuesMaxAggregateOutputType | null
  }

  export type IssuesAvgAggregateOutputType = {
    id: number | null
    projectID: number | null
  }

  export type IssuesSumAggregateOutputType = {
    id: number | null
    projectID: number | null
  }

  export type IssuesMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    category: string | null
    statusChangeTime: Date | null
    createdAt: Date | null
    lastEditedAt: Date | null
    dueDate: Date | null
    projectID: number | null
  }

  export type IssuesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    category: string | null
    statusChangeTime: Date | null
    createdAt: Date | null
    lastEditedAt: Date | null
    dueDate: Date | null
    projectID: number | null
  }

  export type IssuesCountAggregateOutputType = {
    id: number
    title: number
    assignees: number
    author: number
    body: number
    category: number
    statusChangeTime: number
    createdAt: number
    comments: number
    lastEditedAt: number
    dueDate: number
    labels: number
    projectID: number
    _all: number
  }


  export type IssuesAvgAggregateInputType = {
    id?: true
    projectID?: true
  }

  export type IssuesSumAggregateInputType = {
    id?: true
    projectID?: true
  }

  export type IssuesMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    category?: true
    statusChangeTime?: true
    createdAt?: true
    lastEditedAt?: true
    dueDate?: true
    projectID?: true
  }

  export type IssuesMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    category?: true
    statusChangeTime?: true
    createdAt?: true
    lastEditedAt?: true
    dueDate?: true
    projectID?: true
  }

  export type IssuesCountAggregateInputType = {
    id?: true
    title?: true
    assignees?: true
    author?: true
    body?: true
    category?: true
    statusChangeTime?: true
    createdAt?: true
    comments?: true
    lastEditedAt?: true
    dueDate?: true
    labels?: true
    projectID?: true
    _all?: true
  }

  export type IssuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to aggregate.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssuesMaxAggregateInputType
  }

  export type GetIssuesAggregateType<T extends IssuesAggregateArgs> = {
        [P in keyof T & keyof AggregateIssues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssues[P]>
      : GetScalarType<T[P], AggregateIssues[P]>
  }




  export type IssuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuesWhereInput
    orderBy?: IssuesOrderByWithAggregationInput | IssuesOrderByWithAggregationInput[]
    by: IssuesScalarFieldEnum[] | IssuesScalarFieldEnum
    having?: IssuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssuesCountAggregateInputType | true
    _avg?: IssuesAvgAggregateInputType
    _sum?: IssuesSumAggregateInputType
    _min?: IssuesMinAggregateInputType
    _max?: IssuesMaxAggregateInputType
  }

  export type IssuesGroupByOutputType = {
    id: number
    title: string
    assignees: JsonValue | null
    author: JsonValue | null
    body: string | null
    category: string
    statusChangeTime: Date | null
    createdAt: Date
    comments: string[]
    lastEditedAt: Date | null
    dueDate: Date | null
    labels: string[]
    projectID: number
    _count: IssuesCountAggregateOutputType | null
    _avg: IssuesAvgAggregateOutputType | null
    _sum: IssuesSumAggregateOutputType | null
    _min: IssuesMinAggregateOutputType | null
    _max: IssuesMaxAggregateOutputType | null
  }

  type GetIssuesGroupByPayload<T extends IssuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssuesGroupByOutputType[P]>
            : GetScalarType<T[P], IssuesGroupByOutputType[P]>
        }
      >
    >


  export type IssuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    assignees?: boolean
    author?: boolean
    body?: boolean
    category?: boolean
    statusChangeTime?: boolean
    createdAt?: boolean
    comments?: boolean
    lastEditedAt?: boolean
    dueDate?: boolean
    labels?: boolean
    projectID?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issues"]>

  export type IssuesSelectScalar = {
    id?: boolean
    title?: boolean
    assignees?: boolean
    author?: boolean
    body?: boolean
    category?: boolean
    statusChangeTime?: boolean
    createdAt?: boolean
    comments?: boolean
    lastEditedAt?: boolean
    dueDate?: boolean
    labels?: boolean
    projectID?: boolean
  }

  export type IssuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
  }


  export type $IssuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issues"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      assignees: Prisma.JsonValue | null
      author: Prisma.JsonValue | null
      body: string | null
      category: string
      statusChangeTime: Date | null
      createdAt: Date
      comments: string[]
      lastEditedAt: Date | null
      dueDate: Date | null
      labels: string[]
      projectID: number
    }, ExtArgs["result"]["issues"]>
    composites: {}
  }


  type IssuesGetPayload<S extends boolean | null | undefined | IssuesDefaultArgs> = $Result.GetResult<Prisma.$IssuesPayload, S>

  type IssuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IssuesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: IssuesCountAggregateInputType | true
    }

  export interface IssuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issues'], meta: { name: 'Issues' } }
    /**
     * Find zero or one Issues that matches the filter.
     * @param {IssuesFindUniqueArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IssuesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IssuesFindUniqueArgs<ExtArgs>>
    ): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Issues that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IssuesFindUniqueOrThrowArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IssuesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssuesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesFindFirstArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IssuesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IssuesFindFirstArgs<ExtArgs>>
    ): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Issues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesFindFirstOrThrowArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IssuesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssuesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issues.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issues.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issuesWithIdOnly = await prisma.issues.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IssuesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssuesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Issues.
     * @param {IssuesCreateArgs} args - Arguments to create a Issues.
     * @example
     * // Create one Issues
     * const Issues = await prisma.issues.create({
     *   data: {
     *     // ... data to create a Issues
     *   }
     * })
     * 
    **/
    create<T extends IssuesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IssuesCreateArgs<ExtArgs>>
    ): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Issues.
     *     @param {IssuesCreateManyArgs} args - Arguments to create many Issues.
     *     @example
     *     // Create many Issues
     *     const issues = await prisma.issues.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IssuesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssuesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Issues.
     * @param {IssuesDeleteArgs} args - Arguments to delete one Issues.
     * @example
     * // Delete one Issues
     * const Issues = await prisma.issues.delete({
     *   where: {
     *     // ... filter to delete one Issues
     *   }
     * })
     * 
    **/
    delete<T extends IssuesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IssuesDeleteArgs<ExtArgs>>
    ): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Issues.
     * @param {IssuesUpdateArgs} args - Arguments to update one Issues.
     * @example
     * // Update one Issues
     * const issues = await prisma.issues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IssuesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IssuesUpdateArgs<ExtArgs>>
    ): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Issues.
     * @param {IssuesDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IssuesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssuesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issues = await prisma.issues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IssuesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IssuesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Issues.
     * @param {IssuesUpsertArgs} args - Arguments to update or create a Issues.
     * @example
     * // Update or create a Issues
     * const issues = await prisma.issues.upsert({
     *   create: {
     *     // ... data to create a Issues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issues we want to update
     *   }
     * })
    **/
    upsert<T extends IssuesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IssuesUpsertArgs<ExtArgs>>
    ): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issues.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssuesCountArgs>(
      args?: Subset<T, IssuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssuesAggregateArgs>(args: Subset<T, IssuesAggregateArgs>): Prisma.PrismaPromise<GetIssuesAggregateType<T>>

    /**
     * Group by Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssuesGroupByArgs['orderBy'] }
        : { orderBy?: IssuesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issues model
   */
  readonly fields: IssuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Issues model
   */ 
  interface IssuesFieldRefs {
    readonly id: FieldRef<"Issues", 'Int'>
    readonly title: FieldRef<"Issues", 'String'>
    readonly assignees: FieldRef<"Issues", 'Json'>
    readonly author: FieldRef<"Issues", 'Json'>
    readonly body: FieldRef<"Issues", 'String'>
    readonly category: FieldRef<"Issues", 'String'>
    readonly statusChangeTime: FieldRef<"Issues", 'DateTime'>
    readonly createdAt: FieldRef<"Issues", 'DateTime'>
    readonly comments: FieldRef<"Issues", 'String[]'>
    readonly lastEditedAt: FieldRef<"Issues", 'DateTime'>
    readonly dueDate: FieldRef<"Issues", 'DateTime'>
    readonly labels: FieldRef<"Issues", 'String[]'>
    readonly projectID: FieldRef<"Issues", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Issues findUnique
   */
  export type IssuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where: IssuesWhereUniqueInput
  }


  /**
   * Issues findUniqueOrThrow
   */
  export type IssuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where: IssuesWhereUniqueInput
  }


  /**
   * Issues findFirst
   */
  export type IssuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }


  /**
   * Issues findFirstOrThrow
   */
  export type IssuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }


  /**
   * Issues findMany
   */
  export type IssuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }


  /**
   * Issues create
   */
  export type IssuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Issues.
     */
    data: XOR<IssuesCreateInput, IssuesUncheckedCreateInput>
  }


  /**
   * Issues createMany
   */
  export type IssuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssuesCreateManyInput | IssuesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Issues update
   */
  export type IssuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Issues.
     */
    data: XOR<IssuesUpdateInput, IssuesUncheckedUpdateInput>
    /**
     * Choose, which Issues to update.
     */
    where: IssuesWhereUniqueInput
  }


  /**
   * Issues updateMany
   */
  export type IssuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssuesUpdateManyMutationInput, IssuesUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssuesWhereInput
  }


  /**
   * Issues upsert
   */
  export type IssuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Issues to update in case it exists.
     */
    where: IssuesWhereUniqueInput
    /**
     * In case the Issues found by the `where` argument doesn't exist, create a new Issues with this data.
     */
    create: XOR<IssuesCreateInput, IssuesUncheckedCreateInput>
    /**
     * In case the Issues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssuesUpdateInput, IssuesUncheckedUpdateInput>
  }


  /**
   * Issues delete
   */
  export type IssuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter which Issues to delete.
     */
    where: IssuesWhereUniqueInput
  }


  /**
   * Issues deleteMany
   */
  export type IssuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssuesWhereInput
  }


  /**
   * Issues without action
   */
  export type IssuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssuesInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KanSyncUsersScalarFieldEnum: {
    login: 'login'
  };

  export type KanSyncUsersScalarFieldEnum = (typeof KanSyncUsersScalarFieldEnum)[keyof typeof KanSyncUsersScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_name: 'user_name'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const IssuesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    assignees: 'assignees',
    author: 'author',
    body: 'body',
    category: 'category',
    statusChangeTime: 'statusChangeTime',
    createdAt: 'createdAt',
    comments: 'comments',
    lastEditedAt: 'lastEditedAt',
    dueDate: 'dueDate',
    labels: 'labels',
    projectID: 'projectID'
  };

  export type IssuesScalarFieldEnum = (typeof IssuesScalarFieldEnum)[keyof typeof IssuesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type KanSyncUsersWhereInput = {
    AND?: KanSyncUsersWhereInput | KanSyncUsersWhereInput[]
    OR?: KanSyncUsersWhereInput[]
    NOT?: KanSyncUsersWhereInput | KanSyncUsersWhereInput[]
    login?: StringFilter<"KanSyncUsers"> | string
    Projects?: ProjectsListRelationFilter
  }

  export type KanSyncUsersOrderByWithRelationInput = {
    login?: SortOrder
    Projects?: ProjectsOrderByRelationAggregateInput
  }

  export type KanSyncUsersWhereUniqueInput = Prisma.AtLeast<{
    login?: string
    AND?: KanSyncUsersWhereInput | KanSyncUsersWhereInput[]
    OR?: KanSyncUsersWhereInput[]
    NOT?: KanSyncUsersWhereInput | KanSyncUsersWhereInput[]
    Projects?: ProjectsListRelationFilter
  }, "login">

  export type KanSyncUsersOrderByWithAggregationInput = {
    login?: SortOrder
    _count?: KanSyncUsersCountOrderByAggregateInput
    _max?: KanSyncUsersMaxOrderByAggregateInput
    _min?: KanSyncUsersMinOrderByAggregateInput
  }

  export type KanSyncUsersScalarWhereWithAggregatesInput = {
    AND?: KanSyncUsersScalarWhereWithAggregatesInput | KanSyncUsersScalarWhereWithAggregatesInput[]
    OR?: KanSyncUsersScalarWhereWithAggregatesInput[]
    NOT?: KanSyncUsersScalarWhereWithAggregatesInput | KanSyncUsersScalarWhereWithAggregatesInput[]
    login?: StringWithAggregatesFilter<"KanSyncUsers"> | string
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: IntFilter<"Projects"> | number
    name?: StringFilter<"Projects"> | string
    user_name?: StringFilter<"Projects"> | string
    user?: XOR<KanSyncUsersRelationFilter, KanSyncUsersWhereInput>
    Issues?: IssuesListRelationFilter
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_name?: SortOrder
    user?: KanSyncUsersOrderByWithRelationInput
    Issues?: IssuesOrderByRelationAggregateInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_name_name?: ProjectsUser_nameNameCompoundUniqueInput
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    name?: StringFilter<"Projects"> | string
    user_name?: StringFilter<"Projects"> | string
    user?: XOR<KanSyncUsersRelationFilter, KanSyncUsersWhereInput>
    Issues?: IssuesListRelationFilter
  }, "id" | "user_name_name">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_name?: SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _avg?: ProjectsAvgOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
    _sum?: ProjectsSumOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projects"> | number
    name?: StringWithAggregatesFilter<"Projects"> | string
    user_name?: StringWithAggregatesFilter<"Projects"> | string
  }

  export type IssuesWhereInput = {
    AND?: IssuesWhereInput | IssuesWhereInput[]
    OR?: IssuesWhereInput[]
    NOT?: IssuesWhereInput | IssuesWhereInput[]
    id?: IntFilter<"Issues"> | number
    title?: StringFilter<"Issues"> | string
    assignees?: JsonNullableFilter<"Issues">
    author?: JsonNullableFilter<"Issues">
    body?: StringNullableFilter<"Issues"> | string | null
    category?: StringFilter<"Issues"> | string
    statusChangeTime?: DateTimeNullableFilter<"Issues"> | Date | string | null
    createdAt?: DateTimeFilter<"Issues"> | Date | string
    comments?: StringNullableListFilter<"Issues">
    lastEditedAt?: DateTimeNullableFilter<"Issues"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Issues"> | Date | string | null
    labels?: StringNullableListFilter<"Issues">
    projectID?: IntFilter<"Issues"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }

  export type IssuesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    assignees?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    category?: SortOrder
    statusChangeTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    comments?: SortOrder
    lastEditedAt?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    labels?: SortOrder
    projectID?: SortOrder
    project?: ProjectsOrderByWithRelationInput
  }

  export type IssuesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssuesWhereInput | IssuesWhereInput[]
    OR?: IssuesWhereInput[]
    NOT?: IssuesWhereInput | IssuesWhereInput[]
    title?: StringFilter<"Issues"> | string
    assignees?: JsonNullableFilter<"Issues">
    author?: JsonNullableFilter<"Issues">
    body?: StringNullableFilter<"Issues"> | string | null
    category?: StringFilter<"Issues"> | string
    statusChangeTime?: DateTimeNullableFilter<"Issues"> | Date | string | null
    createdAt?: DateTimeFilter<"Issues"> | Date | string
    comments?: StringNullableListFilter<"Issues">
    lastEditedAt?: DateTimeNullableFilter<"Issues"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Issues"> | Date | string | null
    labels?: StringNullableListFilter<"Issues">
    projectID?: IntFilter<"Issues"> | number
    project?: XOR<ProjectsRelationFilter, ProjectsWhereInput>
  }, "id">

  export type IssuesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    assignees?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    category?: SortOrder
    statusChangeTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    comments?: SortOrder
    lastEditedAt?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    labels?: SortOrder
    projectID?: SortOrder
    _count?: IssuesCountOrderByAggregateInput
    _avg?: IssuesAvgOrderByAggregateInput
    _max?: IssuesMaxOrderByAggregateInput
    _min?: IssuesMinOrderByAggregateInput
    _sum?: IssuesSumOrderByAggregateInput
  }

  export type IssuesScalarWhereWithAggregatesInput = {
    AND?: IssuesScalarWhereWithAggregatesInput | IssuesScalarWhereWithAggregatesInput[]
    OR?: IssuesScalarWhereWithAggregatesInput[]
    NOT?: IssuesScalarWhereWithAggregatesInput | IssuesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Issues"> | number
    title?: StringWithAggregatesFilter<"Issues"> | string
    assignees?: JsonNullableWithAggregatesFilter<"Issues">
    author?: JsonNullableWithAggregatesFilter<"Issues">
    body?: StringNullableWithAggregatesFilter<"Issues"> | string | null
    category?: StringWithAggregatesFilter<"Issues"> | string
    statusChangeTime?: DateTimeNullableWithAggregatesFilter<"Issues"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Issues"> | Date | string
    comments?: StringNullableListFilter<"Issues">
    lastEditedAt?: DateTimeNullableWithAggregatesFilter<"Issues"> | Date | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Issues"> | Date | string | null
    labels?: StringNullableListFilter<"Issues">
    projectID?: IntWithAggregatesFilter<"Issues"> | number
  }

  export type KanSyncUsersCreateInput = {
    login: string
    Projects?: ProjectsCreateNestedManyWithoutUserInput
  }

  export type KanSyncUsersUncheckedCreateInput = {
    login: string
    Projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
  }

  export type KanSyncUsersUpdateInput = {
    login?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectsUpdateManyWithoutUserNestedInput
  }

  export type KanSyncUsersUncheckedUpdateInput = {
    login?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KanSyncUsersCreateManyInput = {
    login: string
  }

  export type KanSyncUsersUpdateManyMutationInput = {
    login?: StringFieldUpdateOperationsInput | string
  }

  export type KanSyncUsersUncheckedUpdateManyInput = {
    login?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsCreateInput = {
    name: string
    user: KanSyncUsersCreateNestedOneWithoutProjectsInput
    Issues?: IssuesCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: number
    name: string
    user_name: string
    Issues?: IssuesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: KanSyncUsersUpdateOneRequiredWithoutProjectsNestedInput
    Issues?: IssuesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    Issues?: IssuesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsCreateManyInput = {
    id?: number
    name: string
    user_name: string
  }

  export type ProjectsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
  }

  export type IssuesCreateInput = {
    title: string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    category: string
    statusChangeTime?: Date | string | null
    createdAt: Date | string
    comments?: IssuesCreatecommentsInput | string[]
    lastEditedAt?: Date | string | null
    dueDate?: Date | string | null
    labels?: IssuesCreatelabelsInput | string[]
    project: ProjectsCreateNestedOneWithoutIssuesInput
  }

  export type IssuesUncheckedCreateInput = {
    id?: number
    title: string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    category: string
    statusChangeTime?: Date | string | null
    createdAt: Date | string
    comments?: IssuesCreatecommentsInput | string[]
    lastEditedAt?: Date | string | null
    dueDate?: Date | string | null
    labels?: IssuesCreatelabelsInput | string[]
    projectID: number
  }

  export type IssuesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    statusChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: IssuesUpdatecommentsInput | string[]
    lastEditedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: IssuesUpdatelabelsInput | string[]
    project?: ProjectsUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    statusChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: IssuesUpdatecommentsInput | string[]
    lastEditedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: IssuesUpdatelabelsInput | string[]
    projectID?: IntFieldUpdateOperationsInput | number
  }

  export type IssuesCreateManyInput = {
    id?: number
    title: string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    category: string
    statusChangeTime?: Date | string | null
    createdAt: Date | string
    comments?: IssuesCreatecommentsInput | string[]
    lastEditedAt?: Date | string | null
    dueDate?: Date | string | null
    labels?: IssuesCreatelabelsInput | string[]
    projectID: number
  }

  export type IssuesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    statusChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: IssuesUpdatecommentsInput | string[]
    lastEditedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: IssuesUpdatelabelsInput | string[]
  }

  export type IssuesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    statusChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: IssuesUpdatecommentsInput | string[]
    lastEditedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: IssuesUpdatelabelsInput | string[]
    projectID?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KanSyncUsersCountOrderByAggregateInput = {
    login?: SortOrder
  }

  export type KanSyncUsersMaxOrderByAggregateInput = {
    login?: SortOrder
  }

  export type KanSyncUsersMinOrderByAggregateInput = {
    login?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type KanSyncUsersRelationFilter = {
    is?: KanSyncUsersWhereInput
    isNot?: KanSyncUsersWhereInput
  }

  export type IssuesListRelationFilter = {
    every?: IssuesWhereInput
    some?: IssuesWhereInput
    none?: IssuesWhereInput
  }

  export type IssuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsUser_nameNameCompoundUniqueInput = {
    user_name: string
    name: string
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_name?: SortOrder
  }

  export type ProjectsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_name?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_name?: SortOrder
  }

  export type ProjectsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProjectsRelationFilter = {
    is?: ProjectsWhereInput
    isNot?: ProjectsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IssuesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    assignees?: SortOrder
    author?: SortOrder
    body?: SortOrder
    category?: SortOrder
    statusChangeTime?: SortOrder
    createdAt?: SortOrder
    comments?: SortOrder
    lastEditedAt?: SortOrder
    dueDate?: SortOrder
    labels?: SortOrder
    projectID?: SortOrder
  }

  export type IssuesAvgOrderByAggregateInput = {
    id?: SortOrder
    projectID?: SortOrder
  }

  export type IssuesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    category?: SortOrder
    statusChangeTime?: SortOrder
    createdAt?: SortOrder
    lastEditedAt?: SortOrder
    dueDate?: SortOrder
    projectID?: SortOrder
  }

  export type IssuesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    category?: SortOrder
    statusChangeTime?: SortOrder
    createdAt?: SortOrder
    lastEditedAt?: SortOrder
    dueDate?: SortOrder
    projectID?: SortOrder
  }

  export type IssuesSumOrderByAggregateInput = {
    id?: SortOrder
    projectID?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectsCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProjectsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutUserInput | ProjectsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutUserInput | ProjectsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutUserInput | ProjectsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutUserInput | ProjectsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutUserInput | ProjectsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutUserInput | ProjectsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type KanSyncUsersCreateNestedOneWithoutProjectsInput = {
    create?: XOR<KanSyncUsersCreateWithoutProjectsInput, KanSyncUsersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: KanSyncUsersCreateOrConnectWithoutProjectsInput
    connect?: KanSyncUsersWhereUniqueInput
  }

  export type IssuesCreateNestedManyWithoutProjectInput = {
    create?: XOR<IssuesCreateWithoutProjectInput, IssuesUncheckedCreateWithoutProjectInput> | IssuesCreateWithoutProjectInput[] | IssuesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutProjectInput | IssuesCreateOrConnectWithoutProjectInput[]
    createMany?: IssuesCreateManyProjectInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type IssuesUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<IssuesCreateWithoutProjectInput, IssuesUncheckedCreateWithoutProjectInput> | IssuesCreateWithoutProjectInput[] | IssuesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutProjectInput | IssuesCreateOrConnectWithoutProjectInput[]
    createMany?: IssuesCreateManyProjectInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type KanSyncUsersUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<KanSyncUsersCreateWithoutProjectsInput, KanSyncUsersUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: KanSyncUsersCreateOrConnectWithoutProjectsInput
    upsert?: KanSyncUsersUpsertWithoutProjectsInput
    connect?: KanSyncUsersWhereUniqueInput
    update?: XOR<XOR<KanSyncUsersUpdateToOneWithWhereWithoutProjectsInput, KanSyncUsersUpdateWithoutProjectsInput>, KanSyncUsersUncheckedUpdateWithoutProjectsInput>
  }

  export type IssuesUpdateManyWithoutProjectNestedInput = {
    create?: XOR<IssuesCreateWithoutProjectInput, IssuesUncheckedCreateWithoutProjectInput> | IssuesCreateWithoutProjectInput[] | IssuesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutProjectInput | IssuesCreateOrConnectWithoutProjectInput[]
    upsert?: IssuesUpsertWithWhereUniqueWithoutProjectInput | IssuesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: IssuesCreateManyProjectInputEnvelope
    set?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    disconnect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    delete?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    update?: IssuesUpdateWithWhereUniqueWithoutProjectInput | IssuesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: IssuesUpdateManyWithWhereWithoutProjectInput | IssuesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IssuesUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<IssuesCreateWithoutProjectInput, IssuesUncheckedCreateWithoutProjectInput> | IssuesCreateWithoutProjectInput[] | IssuesUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutProjectInput | IssuesCreateOrConnectWithoutProjectInput[]
    upsert?: IssuesUpsertWithWhereUniqueWithoutProjectInput | IssuesUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: IssuesCreateManyProjectInputEnvelope
    set?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    disconnect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    delete?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    update?: IssuesUpdateWithWhereUniqueWithoutProjectInput | IssuesUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: IssuesUpdateManyWithWhereWithoutProjectInput | IssuesUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
  }

  export type IssuesCreatecommentsInput = {
    set: string[]
  }

  export type IssuesCreatelabelsInput = {
    set: string[]
  }

  export type ProjectsCreateNestedOneWithoutIssuesInput = {
    create?: XOR<ProjectsCreateWithoutIssuesInput, ProjectsUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutIssuesInput
    connect?: ProjectsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IssuesUpdatecommentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IssuesUpdatelabelsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectsUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<ProjectsCreateWithoutIssuesInput, ProjectsUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutIssuesInput
    upsert?: ProjectsUpsertWithoutIssuesInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutIssuesInput, ProjectsUpdateWithoutIssuesInput>, ProjectsUncheckedUpdateWithoutIssuesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectsCreateWithoutUserInput = {
    name: string
    Issues?: IssuesCreateNestedManyWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    Issues?: IssuesUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput>
  }

  export type ProjectsCreateManyUserInputEnvelope = {
    data: ProjectsCreateManyUserInput | ProjectsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectsUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutUserInput, ProjectsUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutUserInput, ProjectsUncheckedUpdateWithoutUserInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutUserInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: IntFilter<"Projects"> | number
    name?: StringFilter<"Projects"> | string
    user_name?: StringFilter<"Projects"> | string
  }

  export type KanSyncUsersCreateWithoutProjectsInput = {
    login: string
  }

  export type KanSyncUsersUncheckedCreateWithoutProjectsInput = {
    login: string
  }

  export type KanSyncUsersCreateOrConnectWithoutProjectsInput = {
    where: KanSyncUsersWhereUniqueInput
    create: XOR<KanSyncUsersCreateWithoutProjectsInput, KanSyncUsersUncheckedCreateWithoutProjectsInput>
  }

  export type IssuesCreateWithoutProjectInput = {
    title: string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    category: string
    statusChangeTime?: Date | string | null
    createdAt: Date | string
    comments?: IssuesCreatecommentsInput | string[]
    lastEditedAt?: Date | string | null
    dueDate?: Date | string | null
    labels?: IssuesCreatelabelsInput | string[]
  }

  export type IssuesUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    category: string
    statusChangeTime?: Date | string | null
    createdAt: Date | string
    comments?: IssuesCreatecommentsInput | string[]
    lastEditedAt?: Date | string | null
    dueDate?: Date | string | null
    labels?: IssuesCreatelabelsInput | string[]
  }

  export type IssuesCreateOrConnectWithoutProjectInput = {
    where: IssuesWhereUniqueInput
    create: XOR<IssuesCreateWithoutProjectInput, IssuesUncheckedCreateWithoutProjectInput>
  }

  export type IssuesCreateManyProjectInputEnvelope = {
    data: IssuesCreateManyProjectInput | IssuesCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type KanSyncUsersUpsertWithoutProjectsInput = {
    update: XOR<KanSyncUsersUpdateWithoutProjectsInput, KanSyncUsersUncheckedUpdateWithoutProjectsInput>
    create: XOR<KanSyncUsersCreateWithoutProjectsInput, KanSyncUsersUncheckedCreateWithoutProjectsInput>
    where?: KanSyncUsersWhereInput
  }

  export type KanSyncUsersUpdateToOneWithWhereWithoutProjectsInput = {
    where?: KanSyncUsersWhereInput
    data: XOR<KanSyncUsersUpdateWithoutProjectsInput, KanSyncUsersUncheckedUpdateWithoutProjectsInput>
  }

  export type KanSyncUsersUpdateWithoutProjectsInput = {
    login?: StringFieldUpdateOperationsInput | string
  }

  export type KanSyncUsersUncheckedUpdateWithoutProjectsInput = {
    login?: StringFieldUpdateOperationsInput | string
  }

  export type IssuesUpsertWithWhereUniqueWithoutProjectInput = {
    where: IssuesWhereUniqueInput
    update: XOR<IssuesUpdateWithoutProjectInput, IssuesUncheckedUpdateWithoutProjectInput>
    create: XOR<IssuesCreateWithoutProjectInput, IssuesUncheckedCreateWithoutProjectInput>
  }

  export type IssuesUpdateWithWhereUniqueWithoutProjectInput = {
    where: IssuesWhereUniqueInput
    data: XOR<IssuesUpdateWithoutProjectInput, IssuesUncheckedUpdateWithoutProjectInput>
  }

  export type IssuesUpdateManyWithWhereWithoutProjectInput = {
    where: IssuesScalarWhereInput
    data: XOR<IssuesUpdateManyMutationInput, IssuesUncheckedUpdateManyWithoutProjectInput>
  }

  export type IssuesScalarWhereInput = {
    AND?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
    OR?: IssuesScalarWhereInput[]
    NOT?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
    id?: IntFilter<"Issues"> | number
    title?: StringFilter<"Issues"> | string
    assignees?: JsonNullableFilter<"Issues">
    author?: JsonNullableFilter<"Issues">
    body?: StringNullableFilter<"Issues"> | string | null
    category?: StringFilter<"Issues"> | string
    statusChangeTime?: DateTimeNullableFilter<"Issues"> | Date | string | null
    createdAt?: DateTimeFilter<"Issues"> | Date | string
    comments?: StringNullableListFilter<"Issues">
    lastEditedAt?: DateTimeNullableFilter<"Issues"> | Date | string | null
    dueDate?: DateTimeNullableFilter<"Issues"> | Date | string | null
    labels?: StringNullableListFilter<"Issues">
    projectID?: IntFilter<"Issues"> | number
  }

  export type ProjectsCreateWithoutIssuesInput = {
    name: string
    user: KanSyncUsersCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateWithoutIssuesInput = {
    id?: number
    name: string
    user_name: string
  }

  export type ProjectsCreateOrConnectWithoutIssuesInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutIssuesInput, ProjectsUncheckedCreateWithoutIssuesInput>
  }

  export type ProjectsUpsertWithoutIssuesInput = {
    update: XOR<ProjectsUpdateWithoutIssuesInput, ProjectsUncheckedUpdateWithoutIssuesInput>
    create: XOR<ProjectsCreateWithoutIssuesInput, ProjectsUncheckedCreateWithoutIssuesInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutIssuesInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutIssuesInput, ProjectsUncheckedUpdateWithoutIssuesInput>
  }

  export type ProjectsUpdateWithoutIssuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: KanSyncUsersUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsCreateManyUserInput = {
    id?: number
    name: string
  }

  export type ProjectsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    Issues?: IssuesUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Issues?: IssuesUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IssuesCreateManyProjectInput = {
    id?: number
    title: string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: string | null
    category: string
    statusChangeTime?: Date | string | null
    createdAt: Date | string
    comments?: IssuesCreatecommentsInput | string[]
    lastEditedAt?: Date | string | null
    dueDate?: Date | string | null
    labels?: IssuesCreatelabelsInput | string[]
  }

  export type IssuesUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    statusChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: IssuesUpdatecommentsInput | string[]
    lastEditedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: IssuesUpdatelabelsInput | string[]
  }

  export type IssuesUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    statusChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: IssuesUpdatecommentsInput | string[]
    lastEditedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: IssuesUpdatelabelsInput | string[]
  }

  export type IssuesUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    assignees?: NullableJsonNullValueInput | InputJsonValue
    author?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    statusChangeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: IssuesUpdatecommentsInput | string[]
    lastEditedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    labels?: IssuesUpdatelabelsInput | string[]
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use KanSyncUsersCountOutputTypeDefaultArgs instead
     */
    export type KanSyncUsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KanSyncUsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsCountOutputTypeDefaultArgs instead
     */
    export type ProjectsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KanSyncUsersDefaultArgs instead
     */
    export type KanSyncUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KanSyncUsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsDefaultArgs instead
     */
    export type ProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IssuesDefaultArgs instead
     */
    export type IssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IssuesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}