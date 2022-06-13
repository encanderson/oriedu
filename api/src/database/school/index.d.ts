
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model School
 */

export type School = {
  id: string
  cnpj: string
  register: number
  fantasia: string
  logo: string | null
  contacts: Prisma.JsonValue | null
  address: Prisma.JsonValue | null
  modalities: string[]
  new: boolean | null
}

/**
 * Model Employee
 */

export type Employee = {
  id: string
  user_id: string
  name: string
  birthday: Date | null
  gender: string | null
  ethnic: string | null
  docs: string | null
  job: string | null
  contacts: string | null
  address: string | null
  contract: Prisma.JsonValue | null
  qualifications: Prisma.JsonValue | null
  salary: number | null
  bank: string | null
  picture: string | null
  school_id: string
}

/**
 * Model Class
 */

export type Class = {
  id: string
  modality: string
  class: string
  shift: string
  subjects: string[]
  school_id: string
}

/**
 * Model Teacher
 */

export type Teacher = {
  id: string
  employee_id: string
  classes: string[]
}

/**
 * Model Student
 */

export type Student = {
  id: string
  number: string
  name: string
  birthday: Date
  gender: string
  ethnic: string
  birthplace: Prisma.JsonValue
  docs: string
  emergency: string
  go_home_alone: string
  parents: string
  social_program: boolean
  fee: number
  defaulting: boolean | null
  history: Prisma.JsonValue[]
  school_id: string
  class_id: string
}

/**
 * Model Admin
 */

export type Admin = {
  id: string
  user_id: string
  password: string
}

/**
 * Model Questions
 */

export type Questions = {
  id: string
  name: string
  subject: string
  email: string
  school_id: string
  message: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<GlobalReject>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<GlobalReject>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<GlobalReject>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<GlobalReject>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;

  /**
   * `prisma.questions`: Exposes CRUD operations for the **Questions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.questions.findMany()
    * ```
    */
  get questions(): Prisma.QuestionsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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

  /**
   * Prisma Client JS version: 3.0.2
   * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
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
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    School: 'School',
    Employee: 'Employee',
    Class: 'Class',
    Teacher: 'Teacher',
    Student: 'Student',
    Admin: 'Admin',
    Questions: 'Questions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SchoolCountOutputType
   */


  export type SchoolCountOutputType = {
    school: number
    turmas: number
    students: number
  }

  export type SchoolCountOutputTypeSelect = {
    school?: boolean
    turmas?: boolean
    students?: boolean
  }

  export type SchoolCountOutputTypeGetPayload<
    S extends boolean | null | undefined | SchoolCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? SchoolCountOutputType
    : S extends undefined
    ? never
    : S extends SchoolCountOutputTypeArgs
    ?'include' extends U
    ? SchoolCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SchoolCountOutputType ?SchoolCountOutputType [P]
  : 
     never
  } 
    : SchoolCountOutputType
  : SchoolCountOutputType




  // Custom InputTypes

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     * 
    **/
    select?: SchoolCountOutputTypeSelect | null
  }



  /**
   * Count Type ClassCountOutputType
   */


  export type ClassCountOutputType = {
    students: number
  }

  export type ClassCountOutputTypeSelect = {
    students?: boolean
  }

  export type ClassCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ClassCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ClassCountOutputType
    : S extends undefined
    ? never
    : S extends ClassCountOutputTypeArgs
    ?'include' extends U
    ? ClassCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ClassCountOutputType ?ClassCountOutputType [P]
  : 
     never
  } 
    : ClassCountOutputType
  : ClassCountOutputType




  // Custom InputTypes

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     * 
    **/
    select?: ClassCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model School
   */


  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    register: number | null
  }

  export type SchoolSumAggregateOutputType = {
    register: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    cnpj: string | null
    register: number | null
    fantasia: string | null
    logo: string | null
    new: boolean | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    cnpj: string | null
    register: number | null
    fantasia: string | null
    logo: string | null
    new: boolean | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    cnpj: number
    register: number
    fantasia: number
    logo: number
    contacts: number
    address: number
    modalities: number
    new: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    register?: true
  }

  export type SchoolSumAggregateInputType = {
    register?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    cnpj?: true
    register?: true
    fantasia?: true
    logo?: true
    new?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    cnpj?: true
    register?: true
    fantasia?: true
    logo?: true
    new?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    cnpj?: true
    register?: true
    fantasia?: true
    logo?: true
    contacts?: true
    address?: true
    modalities?: true
    new?: true
    _all?: true
  }

  export type SchoolAggregateArgs = {
    /**
     * Filter which School to aggregate.
     * 
    **/
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }


    
    
  export type SchoolGroupByArgs = {
    where?: SchoolWhereInput
    orderBy?: Enumerable<SchoolOrderByWithAggregationInput>
    by: Array<SchoolScalarFieldEnum>
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }


  export type SchoolGroupByOutputType = {
    id: string
    cnpj: string
    register: number
    fantasia: string
    logo: string | null
    contacts: JsonValue | null
    address: JsonValue | null
    modalities: string[]
    new: boolean | null
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Promise<
    Array<
      PickArray<SchoolGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SchoolGroupByOutputType[P]> 
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      > 
    >


  export type SchoolSelect = {
    id?: boolean
    cnpj?: boolean
    register?: boolean
    fantasia?: boolean
    logo?: boolean
    contacts?: boolean
    address?: boolean
    modalities?: boolean
    new?: boolean
    school?: boolean | EmployeeFindManyArgs
    turmas?: boolean | ClassFindManyArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | SchoolCountOutputTypeArgs
  }

  export type SchoolInclude = {
    school?: boolean | EmployeeFindManyArgs
    turmas?: boolean | ClassFindManyArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | SchoolCountOutputTypeArgs
  }

  export type SchoolGetPayload<
    S extends boolean | null | undefined | SchoolArgs,
    U = keyof S
      > = S extends true
        ? School
    : S extends undefined
    ? never
    : S extends SchoolArgs | SchoolFindManyArgs
    ?'include' extends U
    ? School  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'school'
        ? Array < EmployeeGetPayload<S['include'][P]>>  :
        P extends 'turmas'
        ? Array < ClassGetPayload<S['include'][P]>>  :
        P extends 'students'
        ? Array < StudentGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? SchoolCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof School ?School [P]
  : 
          P extends 'school'
        ? Array < EmployeeGetPayload<S['select'][P]>>  :
        P extends 'turmas'
        ? Array < ClassGetPayload<S['select'][P]>>  :
        P extends 'students'
        ? Array < StudentGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? SchoolCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : School
  : School


  type SchoolCountArgs = Merge<
    Omit<SchoolFindManyArgs, 'select' | 'include'> & {
      select?: SchoolCountAggregateInputType | true
    }
  >

  export interface SchoolDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SchoolFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SchoolFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'School'> extends True ? CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>> : CheckSelect<T, Prisma__SchoolClient<School | null >, Prisma__SchoolClient<SchoolGetPayload<T> | null >>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SchoolFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SchoolFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'School'> extends True ? CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>> : CheckSelect<T, Prisma__SchoolClient<School | null >, Prisma__SchoolClient<SchoolGetPayload<T> | null >>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SchoolFindManyArgs>(
      args?: SelectSubset<T, SchoolFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<School>>, PrismaPromise<Array<SchoolGetPayload<T>>>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
    **/
    create<T extends SchoolCreateArgs>(
      args: SelectSubset<T, SchoolCreateArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Create many Schools.
     *     @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const school = await prisma.school.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SchoolCreateManyArgs>(
      args?: SelectSubset<T, SchoolCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
    **/
    delete<T extends SchoolDeleteArgs>(
      args: SelectSubset<T, SchoolDeleteArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SchoolUpdateArgs>(
      args: SelectSubset<T, SchoolUpdateArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SchoolDeleteManyArgs>(
      args?: SelectSubset<T, SchoolDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SchoolUpdateManyArgs>(
      args: SelectSubset<T, SchoolUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
    **/
    upsert<T extends SchoolUpsertArgs>(
      args: SelectSubset<T, SchoolUpsertArgs>
    ): CheckSelect<T, Prisma__SchoolClient<School>, Prisma__SchoolClient<SchoolGetPayload<T>>>

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SchoolClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    school<T extends EmployeeFindManyArgs = {}>(args?: Subset<T, EmployeeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Employee>>, PrismaPromise<Array<EmployeeGetPayload<T>>>>;

    turmas<T extends ClassFindManyArgs = {}>(args?: Subset<T, ClassFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Class>>, PrismaPromise<Array<ClassGetPayload<T>>>>;

    students<T extends StudentFindManyArgs = {}>(args?: Subset<T, StudentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * Throw an Error if a School can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which School to fetch.
     * 
    **/
    where: SchoolWhereUniqueInput
  }


  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * Throw an Error if a School can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which School to fetch.
     * 
    **/
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     * 
    **/
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     * 
    **/
    distinct?: Enumerable<SchoolScalarFieldEnum>
  }


  /**
   * School findMany
   */
  export type SchoolFindManyArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * Filter, which Schools to fetch.
     * 
    **/
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     * 
    **/
    orderBy?: Enumerable<SchoolOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     * 
    **/
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SchoolScalarFieldEnum>
  }


  /**
   * School create
   */
  export type SchoolCreateArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * The data needed to create a School.
     * 
    **/
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }


  /**
   * School createMany
   */
  export type SchoolCreateManyArgs = {
    data: Enumerable<SchoolCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * School update
   */
  export type SchoolUpdateArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * The data needed to update a School.
     * 
    **/
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     * 
    **/
    where: SchoolWhereUniqueInput
  }


  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs = {
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    where?: SchoolWhereInput
  }


  /**
   * School upsert
   */
  export type SchoolUpsertArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * The filter to search for the School to update in case it exists.
     * 
    **/
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     * 
    **/
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }


  /**
   * School delete
   */
  export type SchoolDeleteArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
    /**
     * Filter which School to delete.
     * 
    **/
    where: SchoolWhereUniqueInput
  }


  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs = {
    where?: SchoolWhereInput
  }


  /**
   * School without action
   */
  export type SchoolArgs = {
    /**
     * Select specific fields to fetch from the School
     * 
    **/
    select?: SchoolSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SchoolInclude | null
  }



  /**
   * Model Employee
   */


  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    salary: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    birthday: Date | null
    gender: string | null
    ethnic: string | null
    docs: string | null
    job: string | null
    contacts: string | null
    address: string | null
    salary: number | null
    bank: string | null
    picture: string | null
    school_id: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    name: string | null
    birthday: Date | null
    gender: string | null
    ethnic: string | null
    docs: string | null
    job: string | null
    contacts: string | null
    address: string | null
    salary: number | null
    bank: string | null
    picture: string | null
    school_id: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    birthday: number
    gender: number
    ethnic: number
    docs: number
    job: number
    contacts: number
    address: number
    contract: number
    qualifications: number
    salary: number
    bank: number
    picture: number
    school_id: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    salary?: true
  }

  export type EmployeeSumAggregateInputType = {
    salary?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    birthday?: true
    gender?: true
    ethnic?: true
    docs?: true
    job?: true
    contacts?: true
    address?: true
    salary?: true
    bank?: true
    picture?: true
    school_id?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    birthday?: true
    gender?: true
    ethnic?: true
    docs?: true
    job?: true
    contacts?: true
    address?: true
    salary?: true
    bank?: true
    picture?: true
    school_id?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    birthday?: true
    gender?: true
    ethnic?: true
    docs?: true
    job?: true
    contacts?: true
    address?: true
    contract?: true
    qualifications?: true
    salary?: true
    bank?: true
    picture?: true
    school_id?: true
    _all?: true
  }

  export type EmployeeAggregateArgs = {
    /**
     * Filter which Employee to aggregate.
     * 
    **/
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }


    
    
  export type EmployeeGroupByArgs = {
    where?: EmployeeWhereInput
    orderBy?: Enumerable<EmployeeOrderByWithAggregationInput>
    by: Array<EmployeeScalarFieldEnum>
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }


  export type EmployeeGroupByOutputType = {
    id: string
    user_id: string
    name: string
    birthday: Date | null
    gender: string | null
    ethnic: string | null
    docs: string | null
    job: string | null
    contacts: string | null
    address: string | null
    contract: JsonValue | null
    qualifications: JsonValue | null
    salary: number | null
    bank: string | null
    picture: string | null
    school_id: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Promise<
    Array<
      PickArray<EmployeeGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]> 
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      > 
    >


  export type EmployeeSelect = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    birthday?: boolean
    gender?: boolean
    ethnic?: boolean
    docs?: boolean
    job?: boolean
    contacts?: boolean
    address?: boolean
    contract?: boolean
    qualifications?: boolean
    salary?: boolean
    bank?: boolean
    picture?: boolean
    school_id?: boolean
    school?: boolean | SchoolArgs
    teacher?: boolean | TeacherArgs
  }

  export type EmployeeInclude = {
    school?: boolean | SchoolArgs
    teacher?: boolean | TeacherArgs
  }

  export type EmployeeGetPayload<
    S extends boolean | null | undefined | EmployeeArgs,
    U = keyof S
      > = S extends true
        ? Employee
    : S extends undefined
    ? never
    : S extends EmployeeArgs | EmployeeFindManyArgs
    ?'include' extends U
    ? Employee  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'school'
        ? SchoolGetPayload<S['include'][P]> :
        P extends 'teacher'
        ? TeacherGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Employee ?Employee [P]
  : 
          P extends 'school'
        ? SchoolGetPayload<S['select'][P]> :
        P extends 'teacher'
        ? TeacherGetPayload<S['select'][P]> | null : never
  } 
    : Employee
  : Employee


  type EmployeeCountArgs = Merge<
    Omit<EmployeeFindManyArgs, 'select' | 'include'> & {
      select?: EmployeeCountAggregateInputType | true
    }
  >

  export interface EmployeeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EmployeeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Employee'> extends True ? CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeClient<Employee | null >, Prisma__EmployeeClient<EmployeeGetPayload<T> | null >>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EmployeeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Employee'> extends True ? CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>> : CheckSelect<T, Prisma__EmployeeClient<Employee | null >, Prisma__EmployeeClient<EmployeeGetPayload<T> | null >>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeeFindManyArgs>(
      args?: SelectSubset<T, EmployeeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Employee>>, PrismaPromise<Array<EmployeeGetPayload<T>>>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
    **/
    create<T extends EmployeeCreateArgs>(
      args: SelectSubset<T, EmployeeCreateArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Create many Employees.
     *     @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeeCreateManyArgs>(
      args?: SelectSubset<T, EmployeeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
    **/
    delete<T extends EmployeeDeleteArgs>(
      args: SelectSubset<T, EmployeeDeleteArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeeUpdateArgs>(
      args: SelectSubset<T, EmployeeUpdateArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeeDeleteManyArgs>(
      args?: SelectSubset<T, EmployeeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeeUpdateManyArgs>(
      args: SelectSubset<T, EmployeeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeeUpsertArgs>(
      args: SelectSubset<T, EmployeeUpsertArgs>
    ): CheckSelect<T, Prisma__EmployeeClient<Employee>, Prisma__EmployeeClient<EmployeeGetPayload<T>>>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EmployeeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    school<T extends SchoolArgs = {}>(args?: Subset<T, SchoolArgs>): CheckSelect<T, Prisma__SchoolClient<School | null >, Prisma__SchoolClient<SchoolGetPayload<T> | null >>;

    teacher<T extends TeacherArgs = {}>(args?: Subset<T, TeacherArgs>): CheckSelect<T, Prisma__TeacherClient<Teacher | null >, Prisma__TeacherClient<TeacherGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * Throw an Error if a Employee can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Employee to fetch.
     * 
    **/
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * Throw an Error if a Employee can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Employee to fetch.
     * 
    **/
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     * 
    **/
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     * 
    **/
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }


  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * Filter, which Employees to fetch.
     * 
    **/
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     * 
    **/
    orderBy?: Enumerable<EmployeeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     * 
    **/
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EmployeeScalarFieldEnum>
  }


  /**
   * Employee create
   */
  export type EmployeeCreateArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * The data needed to create a Employee.
     * 
    **/
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }


  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs = {
    data: Enumerable<EmployeeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Employee update
   */
  export type EmployeeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * The data needed to update a Employee.
     * 
    **/
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     * 
    **/
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs = {
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    where?: EmployeeWhereInput
  }


  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * The filter to search for the Employee to update in case it exists.
     * 
    **/
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     * 
    **/
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }


  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
    /**
     * Filter which Employee to delete.
     * 
    **/
    where: EmployeeWhereUniqueInput
  }


  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs = {
    where?: EmployeeWhereInput
  }


  /**
   * Employee without action
   */
  export type EmployeeArgs = {
    /**
     * Select specific fields to fetch from the Employee
     * 
    **/
    select?: EmployeeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EmployeeInclude | null
  }



  /**
   * Model Class
   */


  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    modality: string | null
    class: string | null
    shift: string | null
    school_id: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    modality: string | null
    class: string | null
    shift: string | null
    school_id: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    modality: number
    class: number
    shift: number
    subjects: number
    school_id: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    modality?: true
    class?: true
    shift?: true
    school_id?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    modality?: true
    class?: true
    shift?: true
    school_id?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    modality?: true
    class?: true
    shift?: true
    subjects?: true
    school_id?: true
    _all?: true
  }

  export type ClassAggregateArgs = {
    /**
     * Filter which Class to aggregate.
     * 
    **/
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }


    
    
  export type ClassGroupByArgs = {
    where?: ClassWhereInput
    orderBy?: Enumerable<ClassOrderByWithAggregationInput>
    by: Array<ClassScalarFieldEnum>
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }


  export type ClassGroupByOutputType = {
    id: string
    modality: string
    class: string
    shift: string
    subjects: string[]
    school_id: string
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Promise<
    Array<
      PickArray<ClassGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ClassGroupByOutputType[P]> 
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      > 
    >


  export type ClassSelect = {
    id?: boolean
    modality?: boolean
    class?: boolean
    shift?: boolean
    subjects?: boolean
    school_id?: boolean
    school?: boolean | SchoolArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | ClassCountOutputTypeArgs
  }

  export type ClassInclude = {
    school?: boolean | SchoolArgs
    students?: boolean | StudentFindManyArgs
    _count?: boolean | ClassCountOutputTypeArgs
  }

  export type ClassGetPayload<
    S extends boolean | null | undefined | ClassArgs,
    U = keyof S
      > = S extends true
        ? Class
    : S extends undefined
    ? never
    : S extends ClassArgs | ClassFindManyArgs
    ?'include' extends U
    ? Class  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'school'
        ? SchoolGetPayload<S['include'][P]> :
        P extends 'students'
        ? Array < StudentGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? ClassCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Class ?Class [P]
  : 
          P extends 'school'
        ? SchoolGetPayload<S['select'][P]> :
        P extends 'students'
        ? Array < StudentGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? ClassCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Class
  : Class


  type ClassCountArgs = Merge<
    Omit<ClassFindManyArgs, 'select' | 'include'> & {
      select?: ClassCountAggregateInputType | true
    }
  >

  export interface ClassDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClassFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ClassFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Class'> extends True ? CheckSelect<T, Prisma__ClassClient<Class>, Prisma__ClassClient<ClassGetPayload<T>>> : CheckSelect<T, Prisma__ClassClient<Class | null >, Prisma__ClassClient<ClassGetPayload<T> | null >>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClassFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ClassFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Class'> extends True ? CheckSelect<T, Prisma__ClassClient<Class>, Prisma__ClassClient<ClassGetPayload<T>>> : CheckSelect<T, Prisma__ClassClient<Class | null >, Prisma__ClassClient<ClassGetPayload<T> | null >>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClassFindManyArgs>(
      args?: SelectSubset<T, ClassFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Class>>, PrismaPromise<Array<ClassGetPayload<T>>>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
    **/
    create<T extends ClassCreateArgs>(
      args: SelectSubset<T, ClassCreateArgs>
    ): CheckSelect<T, Prisma__ClassClient<Class>, Prisma__ClassClient<ClassGetPayload<T>>>

    /**
     * Create many Classes.
     *     @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     *     @example
     *     // Create many Classes
     *     const class = await prisma.class.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClassCreateManyArgs>(
      args?: SelectSubset<T, ClassCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
    **/
    delete<T extends ClassDeleteArgs>(
      args: SelectSubset<T, ClassDeleteArgs>
    ): CheckSelect<T, Prisma__ClassClient<Class>, Prisma__ClassClient<ClassGetPayload<T>>>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClassUpdateArgs>(
      args: SelectSubset<T, ClassUpdateArgs>
    ): CheckSelect<T, Prisma__ClassClient<Class>, Prisma__ClassClient<ClassGetPayload<T>>>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClassDeleteManyArgs>(
      args?: SelectSubset<T, ClassDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClassUpdateManyArgs>(
      args: SelectSubset<T, ClassUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
    **/
    upsert<T extends ClassUpsertArgs>(
      args: SelectSubset<T, ClassUpsertArgs>
    ): CheckSelect<T, Prisma__ClassClient<Class>, Prisma__ClassClient<ClassGetPayload<T>>>

    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ClassClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    school<T extends SchoolArgs = {}>(args?: Subset<T, SchoolArgs>): CheckSelect<T, Prisma__SchoolClient<School | null >, Prisma__SchoolClient<SchoolGetPayload<T> | null >>;

    students<T extends StudentFindManyArgs = {}>(args?: Subset<T, StudentFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Throw an Error if a Class can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Class to fetch.
     * 
    **/
    where: ClassWhereUniqueInput
  }


  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Throw an Error if a Class can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Class to fetch.
     * 
    **/
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     * 
    **/
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     * 
    **/
    distinct?: Enumerable<ClassScalarFieldEnum>
  }


  /**
   * Class findMany
   */
  export type ClassFindManyArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Filter, which Classes to fetch.
     * 
    **/
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     * 
    **/
    orderBy?: Enumerable<ClassOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     * 
    **/
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ClassScalarFieldEnum>
  }


  /**
   * Class create
   */
  export type ClassCreateArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * The data needed to create a Class.
     * 
    **/
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }


  /**
   * Class createMany
   */
  export type ClassCreateManyArgs = {
    data: Enumerable<ClassCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Class update
   */
  export type ClassUpdateArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * The data needed to update a Class.
     * 
    **/
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     * 
    **/
    where: ClassWhereUniqueInput
  }


  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs = {
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    where?: ClassWhereInput
  }


  /**
   * Class upsert
   */
  export type ClassUpsertArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * The filter to search for the Class to update in case it exists.
     * 
    **/
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     * 
    **/
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }


  /**
   * Class delete
   */
  export type ClassDeleteArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
    /**
     * Filter which Class to delete.
     * 
    **/
    where: ClassWhereUniqueInput
  }


  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs = {
    where?: ClassWhereInput
  }


  /**
   * Class without action
   */
  export type ClassArgs = {
    /**
     * Select specific fields to fetch from the Class
     * 
    **/
    select?: ClassSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ClassInclude | null
  }



  /**
   * Model Teacher
   */


  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    employee_id: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    employee_id: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    employee_id: number
    classes: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    employee_id?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    employee_id?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    employee_id?: true
    classes?: true
    _all?: true
  }

  export type TeacherAggregateArgs = {
    /**
     * Filter which Teacher to aggregate.
     * 
    **/
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     * 
    **/
    orderBy?: Enumerable<TeacherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }


    
    
  export type TeacherGroupByArgs = {
    where?: TeacherWhereInput
    orderBy?: Enumerable<TeacherOrderByWithAggregationInput>
    by: Array<TeacherScalarFieldEnum>
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }


  export type TeacherGroupByOutputType = {
    id: string
    employee_id: string
    classes: string[]
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Promise<
    Array<
      PickArray<TeacherGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TeacherGroupByOutputType[P]> 
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      > 
    >


  export type TeacherSelect = {
    id?: boolean
    employee_id?: boolean
    classes?: boolean
    employee?: boolean | EmployeeArgs
  }

  export type TeacherInclude = {
    employee?: boolean | EmployeeArgs
  }

  export type TeacherGetPayload<
    S extends boolean | null | undefined | TeacherArgs,
    U = keyof S
      > = S extends true
        ? Teacher
    : S extends undefined
    ? never
    : S extends TeacherArgs | TeacherFindManyArgs
    ?'include' extends U
    ? Teacher  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'employee'
        ? EmployeeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Teacher ?Teacher [P]
  : 
          P extends 'employee'
        ? EmployeeGetPayload<S['select'][P]> : never
  } 
    : Teacher
  : Teacher


  type TeacherCountArgs = Merge<
    Omit<TeacherFindManyArgs, 'select' | 'include'> & {
      select?: TeacherCountAggregateInputType | true
    }
  >

  export interface TeacherDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeacherFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TeacherFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Teacher'> extends True ? CheckSelect<T, Prisma__TeacherClient<Teacher>, Prisma__TeacherClient<TeacherGetPayload<T>>> : CheckSelect<T, Prisma__TeacherClient<Teacher | null >, Prisma__TeacherClient<TeacherGetPayload<T> | null >>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeacherFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TeacherFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Teacher'> extends True ? CheckSelect<T, Prisma__TeacherClient<Teacher>, Prisma__TeacherClient<TeacherGetPayload<T>>> : CheckSelect<T, Prisma__TeacherClient<Teacher | null >, Prisma__TeacherClient<TeacherGetPayload<T> | null >>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeacherFindManyArgs>(
      args?: SelectSubset<T, TeacherFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Teacher>>, PrismaPromise<Array<TeacherGetPayload<T>>>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
    **/
    create<T extends TeacherCreateArgs>(
      args: SelectSubset<T, TeacherCreateArgs>
    ): CheckSelect<T, Prisma__TeacherClient<Teacher>, Prisma__TeacherClient<TeacherGetPayload<T>>>

    /**
     * Create many Teachers.
     *     @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     *     @example
     *     // Create many Teachers
     *     const teacher = await prisma.teacher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeacherCreateManyArgs>(
      args?: SelectSubset<T, TeacherCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
    **/
    delete<T extends TeacherDeleteArgs>(
      args: SelectSubset<T, TeacherDeleteArgs>
    ): CheckSelect<T, Prisma__TeacherClient<Teacher>, Prisma__TeacherClient<TeacherGetPayload<T>>>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeacherUpdateArgs>(
      args: SelectSubset<T, TeacherUpdateArgs>
    ): CheckSelect<T, Prisma__TeacherClient<Teacher>, Prisma__TeacherClient<TeacherGetPayload<T>>>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeacherDeleteManyArgs>(
      args?: SelectSubset<T, TeacherDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeacherUpdateManyArgs>(
      args: SelectSubset<T, TeacherUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
    **/
    upsert<T extends TeacherUpsertArgs>(
      args: SelectSubset<T, TeacherUpsertArgs>
    ): CheckSelect<T, Prisma__TeacherClient<Teacher>, Prisma__TeacherClient<TeacherGetPayload<T>>>

    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TeacherClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    employee<T extends EmployeeArgs = {}>(args?: Subset<T, EmployeeArgs>): CheckSelect<T, Prisma__EmployeeClient<Employee | null >, Prisma__EmployeeClient<EmployeeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     * 
    **/
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeacherInclude | null
    /**
     * Throw an Error if a Teacher can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Teacher to fetch.
     * 
    **/
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     * 
    **/
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeacherInclude | null
    /**
     * Throw an Error if a Teacher can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Teacher to fetch.
     * 
    **/
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     * 
    **/
    orderBy?: Enumerable<TeacherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     * 
    **/
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     * 
    **/
    distinct?: Enumerable<TeacherScalarFieldEnum>
  }


  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     * 
    **/
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeacherInclude | null
    /**
     * Filter, which Teachers to fetch.
     * 
    **/
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     * 
    **/
    orderBy?: Enumerable<TeacherOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     * 
    **/
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TeacherScalarFieldEnum>
  }


  /**
   * Teacher create
   */
  export type TeacherCreateArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     * 
    **/
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeacherInclude | null
    /**
     * The data needed to create a Teacher.
     * 
    **/
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }


  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs = {
    data: Enumerable<TeacherCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Teacher update
   */
  export type TeacherUpdateArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     * 
    **/
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeacherInclude | null
    /**
     * The data needed to update a Teacher.
     * 
    **/
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     * 
    **/
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs = {
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    where?: TeacherWhereInput
  }


  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     * 
    **/
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeacherInclude | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     * 
    **/
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     * 
    **/
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }


  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     * 
    **/
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeacherInclude | null
    /**
     * Filter which Teacher to delete.
     * 
    **/
    where: TeacherWhereUniqueInput
  }


  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs = {
    where?: TeacherWhereInput
  }


  /**
   * Teacher without action
   */
  export type TeacherArgs = {
    /**
     * Select specific fields to fetch from the Teacher
     * 
    **/
    select?: TeacherSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TeacherInclude | null
  }



  /**
   * Model Student
   */


  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    fee: number | null
  }

  export type StudentSumAggregateOutputType = {
    fee: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    number: string | null
    name: string | null
    birthday: Date | null
    gender: string | null
    ethnic: string | null
    docs: string | null
    emergency: string | null
    go_home_alone: string | null
    parents: string | null
    social_program: boolean | null
    fee: number | null
    defaulting: boolean | null
    school_id: string | null
    class_id: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    number: string | null
    name: string | null
    birthday: Date | null
    gender: string | null
    ethnic: string | null
    docs: string | null
    emergency: string | null
    go_home_alone: string | null
    parents: string | null
    social_program: boolean | null
    fee: number | null
    defaulting: boolean | null
    school_id: string | null
    class_id: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    number: number
    name: number
    birthday: number
    gender: number
    ethnic: number
    birthplace: number
    docs: number
    emergency: number
    go_home_alone: number
    parents: number
    social_program: number
    fee: number
    defaulting: number
    history: number
    school_id: number
    class_id: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    fee?: true
  }

  export type StudentSumAggregateInputType = {
    fee?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    number?: true
    name?: true
    birthday?: true
    gender?: true
    ethnic?: true
    docs?: true
    emergency?: true
    go_home_alone?: true
    parents?: true
    social_program?: true
    fee?: true
    defaulting?: true
    school_id?: true
    class_id?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    number?: true
    name?: true
    birthday?: true
    gender?: true
    ethnic?: true
    docs?: true
    emergency?: true
    go_home_alone?: true
    parents?: true
    social_program?: true
    fee?: true
    defaulting?: true
    school_id?: true
    class_id?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    number?: true
    name?: true
    birthday?: true
    gender?: true
    ethnic?: true
    birthplace?: true
    docs?: true
    emergency?: true
    go_home_alone?: true
    parents?: true
    social_program?: true
    fee?: true
    defaulting?: true
    history?: true
    school_id?: true
    class_id?: true
    _all?: true
  }

  export type StudentAggregateArgs = {
    /**
     * Filter which Student to aggregate.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }


    
    
  export type StudentGroupByArgs = {
    where?: StudentWhereInput
    orderBy?: Enumerable<StudentOrderByWithAggregationInput>
    by: Array<StudentScalarFieldEnum>
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }


  export type StudentGroupByOutputType = {
    id: string
    number: string
    name: string
    birthday: Date
    gender: string
    ethnic: string
    birthplace: JsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting: boolean | null
    history: JsonValue[]
    school_id: string
    class_id: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Promise<
    Array<
      PickArray<StudentGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], StudentGroupByOutputType[P]> 
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      > 
    >


  export type StudentSelect = {
    id?: boolean
    number?: boolean
    name?: boolean
    birthday?: boolean
    gender?: boolean
    ethnic?: boolean
    birthplace?: boolean
    docs?: boolean
    emergency?: boolean
    go_home_alone?: boolean
    parents?: boolean
    social_program?: boolean
    fee?: boolean
    defaulting?: boolean
    history?: boolean
    school_id?: boolean
    class_id?: boolean
    school?: boolean | SchoolArgs
    class?: boolean | ClassArgs
  }

  export type StudentInclude = {
    school?: boolean | SchoolArgs
    class?: boolean | ClassArgs
  }

  export type StudentGetPayload<
    S extends boolean | null | undefined | StudentArgs,
    U = keyof S
      > = S extends true
        ? Student
    : S extends undefined
    ? never
    : S extends StudentArgs | StudentFindManyArgs
    ?'include' extends U
    ? Student  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'school'
        ? SchoolGetPayload<S['include'][P]> :
        P extends 'class'
        ? ClassGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Student ?Student [P]
  : 
          P extends 'school'
        ? SchoolGetPayload<S['select'][P]> :
        P extends 'class'
        ? ClassGetPayload<S['select'][P]> : never
  } 
    : Student
  : Student


  type StudentCountArgs = Merge<
    Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }
  >

  export interface StudentDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudentFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Student'> extends True ? CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>> : CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudentFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Student'> extends True ? CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>> : CheckSelect<T, Prisma__StudentClient<Student | null >, Prisma__StudentClient<StudentGetPayload<T> | null >>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs>(
      args?: SelectSubset<T, StudentFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Student>>, PrismaPromise<Array<StudentGetPayload<T>>>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs>(
      args: SelectSubset<T, StudentCreateArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs>(
      args?: SelectSubset<T, StudentCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs>(
      args: SelectSubset<T, StudentDeleteArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs>(
      args: SelectSubset<T, StudentUpdateArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs>(
      args?: SelectSubset<T, StudentDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs>(
      args: SelectSubset<T, StudentUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs>(
      args: SelectSubset<T, StudentUpsertArgs>
    ): CheckSelect<T, Prisma__StudentClient<Student>, Prisma__StudentClient<StudentGetPayload<T>>>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudentClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    school<T extends SchoolArgs = {}>(args?: Subset<T, SchoolArgs>): CheckSelect<T, Prisma__SchoolClient<School | null >, Prisma__SchoolClient<SchoolGetPayload<T> | null >>;

    class<T extends ClassArgs = {}>(args?: Subset<T, ClassArgs>): CheckSelect<T, Prisma__ClassClient<Class | null >, Prisma__ClassClient<ClassGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Throw an Error if a Student can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Throw an Error if a Student can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Student to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     * 
    **/
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student findMany
   */
  export type StudentFindManyArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter, which Students to fetch.
     * 
    **/
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     * 
    **/
    orderBy?: Enumerable<StudentOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     * 
    **/
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StudentScalarFieldEnum>
  }


  /**
   * Student create
   */
  export type StudentCreateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to create a Student.
     * 
    **/
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs = {
    data: Enumerable<StudentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The data needed to update a Student.
     * 
    **/
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs = {
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * The filter to search for the Student to update in case it exists.
     * 
    **/
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     * 
    **/
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
    /**
     * Filter which Student to delete.
     * 
    **/
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs = {
    where?: StudentWhereInput
  }


  /**
   * Student without action
   */
  export type StudentArgs = {
    /**
     * Select specific fields to fetch from the Student
     * 
    **/
    select?: StudentSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudentInclude | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    user_id: number
    password: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    user_id?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    user_id?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    user_id?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }


    
    
  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: Array<AdminScalarFieldEnum>
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id: string
    user_id: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Promise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AdminGroupByOutputType[P]> 
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      > 
    >


  export type AdminSelect = {
    id?: boolean
    user_id?: boolean
    password?: boolean
  }

  export type AdminGetPayload<
    S extends boolean | null | undefined | AdminArgs,
    U = keyof S
      > = S extends true
        ? Admin
    : S extends undefined
    ? never
    : S extends AdminArgs | AdminFindManyArgs
    ?'include' extends U
    ? Admin 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Admin ?Admin [P]
  : 
     never
  } 
    : Admin
  : Admin


  type AdminCountArgs = Merge<
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }
  >

  export interface AdminDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Admin>>, PrismaPromise<Array<AdminGetPayload<T>>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Throw an Error if a Admin can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Throw an Error if a Admin can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     * 
    **/
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admins to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to create a Admin.
     * 
    **/
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    data: Enumerable<AdminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to update a Admin.
     * 
    **/
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The filter to search for the Admin to update in case it exists.
     * 
    **/
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     * 
    **/
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter which Admin to delete.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    where?: AdminWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
  }



  /**
   * Model Questions
   */


  export type AggregateQuestions = {
    _count: QuestionsCountAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  export type QuestionsMinAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    email: string | null
    school_id: string | null
    message: string | null
  }

  export type QuestionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    email: string | null
    school_id: string | null
    message: string | null
  }

  export type QuestionsCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    email: number
    school_id: number
    message: number
    _all: number
  }


  export type QuestionsMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    email?: true
    school_id?: true
    message?: true
  }

  export type QuestionsMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    email?: true
    school_id?: true
    message?: true
  }

  export type QuestionsCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    email?: true
    school_id?: true
    message?: true
    _all?: true
  }

  export type QuestionsAggregateArgs = {
    /**
     * Filter which Questions to aggregate.
     * 
    **/
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionsMaxAggregateInputType
  }

  export type GetQuestionsAggregateType<T extends QuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestions[P]>
      : GetScalarType<T[P], AggregateQuestions[P]>
  }


    
    
  export type QuestionsGroupByArgs = {
    where?: QuestionsWhereInput
    orderBy?: Enumerable<QuestionsOrderByWithAggregationInput>
    by: Array<QuestionsScalarFieldEnum>
    having?: QuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionsCountAggregateInputType | true
    _min?: QuestionsMinAggregateInputType
    _max?: QuestionsMaxAggregateInputType
  }


  export type QuestionsGroupByOutputType = {
    id: string
    name: string
    subject: string
    email: string
    school_id: string
    message: string
    _count: QuestionsCountAggregateOutputType | null
    _min: QuestionsMinAggregateOutputType | null
    _max: QuestionsMaxAggregateOutputType | null
  }

  type GetQuestionsGroupByPayload<T extends QuestionsGroupByArgs> = Promise<
    Array<
      PickArray<QuestionsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof QuestionsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], QuestionsGroupByOutputType[P]> 
            : GetScalarType<T[P], QuestionsGroupByOutputType[P]>
        }
      > 
    >


  export type QuestionsSelect = {
    id?: boolean
    name?: boolean
    subject?: boolean
    email?: boolean
    school_id?: boolean
    message?: boolean
  }

  export type QuestionsGetPayload<
    S extends boolean | null | undefined | QuestionsArgs,
    U = keyof S
      > = S extends true
        ? Questions
    : S extends undefined
    ? never
    : S extends QuestionsArgs | QuestionsFindManyArgs
    ?'include' extends U
    ? Questions 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Questions ?Questions [P]
  : 
     never
  } 
    : Questions
  : Questions


  type QuestionsCountArgs = Merge<
    Omit<QuestionsFindManyArgs, 'select' | 'include'> & {
      select?: QuestionsCountAggregateInputType | true
    }
  >

  export interface QuestionsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Questions that matches the filter.
     * @param {QuestionsFindUniqueArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Questions'> extends True ? CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>> : CheckSelect<T, Prisma__QuestionsClient<Questions | null >, Prisma__QuestionsClient<QuestionsGetPayload<T> | null >>

    /**
     * Find the first Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindFirstArgs} args - Arguments to find a Questions
     * @example
     * // Get one Questions
     * const questions = await prisma.questions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Questions'> extends True ? CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>> : CheckSelect<T, Prisma__QuestionsClient<Questions | null >, Prisma__QuestionsClient<QuestionsGetPayload<T> | null >>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.questions.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.questions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionsWithIdOnly = await prisma.questions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionsFindManyArgs>(
      args?: SelectSubset<T, QuestionsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Questions>>, PrismaPromise<Array<QuestionsGetPayload<T>>>>

    /**
     * Create a Questions.
     * @param {QuestionsCreateArgs} args - Arguments to create a Questions.
     * @example
     * // Create one Questions
     * const Questions = await prisma.questions.create({
     *   data: {
     *     // ... data to create a Questions
     *   }
     * })
     * 
    **/
    create<T extends QuestionsCreateArgs>(
      args: SelectSubset<T, QuestionsCreateArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Create many Questions.
     *     @param {QuestionsCreateManyArgs} args - Arguments to create many Questions.
     *     @example
     *     // Create many Questions
     *     const questions = await prisma.questions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QuestionsCreateManyArgs>(
      args?: SelectSubset<T, QuestionsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Questions.
     * @param {QuestionsDeleteArgs} args - Arguments to delete one Questions.
     * @example
     * // Delete one Questions
     * const Questions = await prisma.questions.delete({
     *   where: {
     *     // ... filter to delete one Questions
     *   }
     * })
     * 
    **/
    delete<T extends QuestionsDeleteArgs>(
      args: SelectSubset<T, QuestionsDeleteArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Update one Questions.
     * @param {QuestionsUpdateArgs} args - Arguments to update one Questions.
     * @example
     * // Update one Questions
     * const questions = await prisma.questions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionsUpdateArgs>(
      args: SelectSubset<T, QuestionsUpdateArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Delete zero or more Questions.
     * @param {QuestionsDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.questions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionsDeleteManyArgs>(
      args?: SelectSubset<T, QuestionsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const questions = await prisma.questions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionsUpdateManyArgs>(
      args: SelectSubset<T, QuestionsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Questions.
     * @param {QuestionsUpsertArgs} args - Arguments to update or create a Questions.
     * @example
     * // Update or create a Questions
     * const questions = await prisma.questions.upsert({
     *   create: {
     *     // ... data to create a Questions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questions we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionsUpsertArgs>(
      args: SelectSubset<T, QuestionsUpsertArgs>
    ): CheckSelect<T, Prisma__QuestionsClient<Questions>, Prisma__QuestionsClient<QuestionsGetPayload<T>>>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.questions.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionsCountArgs>(
      args?: Subset<T, QuestionsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionsAggregateArgs>(args: Subset<T, QuestionsAggregateArgs>): PrismaPromise<GetQuestionsAggregateType<T>>

    /**
     * Group by Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionsGroupByArgs} args - Group by arguments.
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
      T extends QuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionsGroupByArgs['orderBy'] }
        : { orderBy?: QuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, QuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Questions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Questions findUnique
   */
  export type QuestionsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Throw an Error if a Questions can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Questions to fetch.
     * 
    **/
    where: QuestionsWhereUniqueInput
  }


  /**
   * Questions findFirst
   */
  export type QuestionsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Throw an Error if a Questions can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Questions to fetch.
     * 
    **/
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     * 
    **/
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     * 
    **/
    distinct?: Enumerable<QuestionsScalarFieldEnum>
  }


  /**
   * Questions findMany
   */
  export type QuestionsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Filter, which Questions to fetch.
     * 
    **/
    where?: QuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     * 
    **/
    orderBy?: Enumerable<QuestionsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     * 
    **/
    cursor?: QuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<QuestionsScalarFieldEnum>
  }


  /**
   * Questions create
   */
  export type QuestionsCreateArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * The data needed to create a Questions.
     * 
    **/
    data: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
  }


  /**
   * Questions createMany
   */
  export type QuestionsCreateManyArgs = {
    data: Enumerable<QuestionsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Questions update
   */
  export type QuestionsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * The data needed to update a Questions.
     * 
    **/
    data: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
    /**
     * Choose, which Questions to update.
     * 
    **/
    where: QuestionsWhereUniqueInput
  }


  /**
   * Questions updateMany
   */
  export type QuestionsUpdateManyArgs = {
    data: XOR<QuestionsUpdateManyMutationInput, QuestionsUncheckedUpdateManyInput>
    where?: QuestionsWhereInput
  }


  /**
   * Questions upsert
   */
  export type QuestionsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * The filter to search for the Questions to update in case it exists.
     * 
    **/
    where: QuestionsWhereUniqueInput
    /**
     * In case the Questions found by the `where` argument doesn't exist, create a new Questions with this data.
     * 
    **/
    create: XOR<QuestionsCreateInput, QuestionsUncheckedCreateInput>
    /**
     * In case the Questions was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<QuestionsUpdateInput, QuestionsUncheckedUpdateInput>
  }


  /**
   * Questions delete
   */
  export type QuestionsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
    /**
     * Filter which Questions to delete.
     * 
    **/
    where: QuestionsWhereUniqueInput
  }


  /**
   * Questions deleteMany
   */
  export type QuestionsDeleteManyArgs = {
    where?: QuestionsWhereInput
  }


  /**
   * Questions without action
   */
  export type QuestionsArgs = {
    /**
     * Select specific fields to fetch from the Questions
     * 
    **/
    select?: QuestionsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SchoolScalarFieldEnum: {
    id: 'id',
    cnpj: 'cnpj',
    register: 'register',
    fantasia: 'fantasia',
    logo: 'logo',
    contacts: 'contacts',
    address: 'address',
    modalities: 'modalities',
    new: 'new'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    birthday: 'birthday',
    gender: 'gender',
    ethnic: 'ethnic',
    docs: 'docs',
    job: 'job',
    contacts: 'contacts',
    address: 'address',
    contract: 'contract',
    qualifications: 'qualifications',
    salary: 'salary',
    bank: 'bank',
    picture: 'picture',
    school_id: 'school_id'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    modality: 'modality',
    class: 'class',
    shift: 'shift',
    subjects: 'subjects',
    school_id: 'school_id'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    employee_id: 'employee_id',
    classes: 'classes'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    number: 'number',
    name: 'name',
    birthday: 'birthday',
    gender: 'gender',
    ethnic: 'ethnic',
    birthplace: 'birthplace',
    docs: 'docs',
    emergency: 'emergency',
    go_home_alone: 'go_home_alone',
    parents: 'parents',
    social_program: 'social_program',
    fee: 'fee',
    defaulting: 'defaulting',
    history: 'history',
    school_id: 'school_id',
    class_id: 'class_id'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const QuestionsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    email: 'email',
    school_id: 'school_id',
    message: 'message'
  };

  export type QuestionsScalarFieldEnum = (typeof QuestionsScalarFieldEnum)[keyof typeof QuestionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull'
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: 'JsonNull'
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: Enumerable<SchoolWhereInput>
    OR?: Enumerable<SchoolWhereInput>
    NOT?: Enumerable<SchoolWhereInput>
    id?: StringFilter | string
    cnpj?: StringFilter | string
    register?: IntFilter | number
    fantasia?: StringFilter | string
    logo?: StringNullableFilter | string | null
    contacts?: JsonNullableFilter
    address?: JsonNullableFilter
    modalities?: StringNullableListFilter
    new?: BoolNullableFilter | boolean | null
    school?: EmployeeListRelationFilter
    turmas?: ClassListRelationFilter
    students?: StudentListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    register?: SortOrder
    fantasia?: SortOrder
    logo?: SortOrder
    contacts?: SortOrder
    address?: SortOrder
    modalities?: SortOrder
    new?: SortOrder
    school?: EmployeeOrderByRelationAggregateInput
    turmas?: ClassOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = {
    id?: string
    cnpj?: string
    register?: number
  }

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    cnpj?: SortOrder
    register?: SortOrder
    fantasia?: SortOrder
    logo?: SortOrder
    contacts?: SortOrder
    address?: SortOrder
    modalities?: SortOrder
    new?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SchoolScalarWhereWithAggregatesInput>
    OR?: Enumerable<SchoolScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SchoolScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    cnpj?: StringWithAggregatesFilter | string
    register?: IntWithAggregatesFilter | number
    fantasia?: StringWithAggregatesFilter | string
    logo?: StringNullableWithAggregatesFilter | string | null
    contacts?: JsonNullableWithAggregatesFilter
    address?: JsonNullableWithAggregatesFilter
    modalities?: StringNullableListFilter
    new?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type EmployeeWhereInput = {
    AND?: Enumerable<EmployeeWhereInput>
    OR?: Enumerable<EmployeeWhereInput>
    NOT?: Enumerable<EmployeeWhereInput>
    id?: StringFilter | string
    user_id?: StringFilter | string
    name?: StringFilter | string
    birthday?: DateTimeNullableFilter | Date | string | null
    gender?: StringNullableFilter | string | null
    ethnic?: StringNullableFilter | string | null
    docs?: StringNullableFilter | string | null
    job?: StringNullableFilter | string | null
    contacts?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    contract?: JsonNullableFilter
    qualifications?: JsonNullableFilter
    salary?: FloatNullableFilter | number | null
    bank?: StringNullableFilter | string | null
    picture?: StringNullableFilter | string | null
    school_id?: StringFilter | string
    school?: XOR<SchoolRelationFilter, SchoolWhereInput>
    teacher?: XOR<TeacherRelationFilter, TeacherWhereInput> | null
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    docs?: SortOrder
    job?: SortOrder
    contacts?: SortOrder
    address?: SortOrder
    contract?: SortOrder
    qualifications?: SortOrder
    salary?: SortOrder
    bank?: SortOrder
    picture?: SortOrder
    school_id?: SortOrder
    school?: SchoolOrderByWithRelationInput
    teacher?: TeacherOrderByWithRelationInput
  }

  export type EmployeeWhereUniqueInput = {
    id?: string
    user_id?: string
  }

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    docs?: SortOrder
    job?: SortOrder
    contacts?: SortOrder
    address?: SortOrder
    contract?: SortOrder
    qualifications?: SortOrder
    salary?: SortOrder
    bank?: SortOrder
    picture?: SortOrder
    school_id?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EmployeeScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    birthday?: DateTimeNullableWithAggregatesFilter | Date | string | null
    gender?: StringNullableWithAggregatesFilter | string | null
    ethnic?: StringNullableWithAggregatesFilter | string | null
    docs?: StringNullableWithAggregatesFilter | string | null
    job?: StringNullableWithAggregatesFilter | string | null
    contacts?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    contract?: JsonNullableWithAggregatesFilter
    qualifications?: JsonNullableWithAggregatesFilter
    salary?: FloatNullableWithAggregatesFilter | number | null
    bank?: StringNullableWithAggregatesFilter | string | null
    picture?: StringNullableWithAggregatesFilter | string | null
    school_id?: StringWithAggregatesFilter | string
  }

  export type ClassWhereInput = {
    AND?: Enumerable<ClassWhereInput>
    OR?: Enumerable<ClassWhereInput>
    NOT?: Enumerable<ClassWhereInput>
    id?: StringFilter | string
    modality?: StringFilter | string
    class?: StringFilter | string
    shift?: StringFilter | string
    subjects?: StringNullableListFilter
    school_id?: StringFilter | string
    school?: XOR<SchoolRelationFilter, SchoolWhereInput>
    students?: StudentListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    modality?: SortOrder
    class?: SortOrder
    shift?: SortOrder
    subjects?: SortOrder
    school_id?: SortOrder
    school?: SchoolOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = {
    id?: string
  }

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    modality?: SortOrder
    class?: SortOrder
    shift?: SortOrder
    subjects?: SortOrder
    school_id?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ClassScalarWhereWithAggregatesInput>
    OR?: Enumerable<ClassScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ClassScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    modality?: StringWithAggregatesFilter | string
    class?: StringWithAggregatesFilter | string
    shift?: StringWithAggregatesFilter | string
    subjects?: StringNullableListFilter
    school_id?: StringWithAggregatesFilter | string
  }

  export type TeacherWhereInput = {
    AND?: Enumerable<TeacherWhereInput>
    OR?: Enumerable<TeacherWhereInput>
    NOT?: Enumerable<TeacherWhereInput>
    id?: StringFilter | string
    employee_id?: StringFilter | string
    classes?: StringNullableListFilter
    employee?: XOR<EmployeeRelationFilter, EmployeeWhereInput>
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    employee_id?: SortOrder
    classes?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type TeacherWhereUniqueInput = {
    id?: string
    employee_id?: string
  }

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    employee_id?: SortOrder
    classes?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TeacherScalarWhereWithAggregatesInput>
    OR?: Enumerable<TeacherScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TeacherScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    employee_id?: StringWithAggregatesFilter | string
    classes?: StringNullableListFilter
  }

  export type StudentWhereInput = {
    AND?: Enumerable<StudentWhereInput>
    OR?: Enumerable<StudentWhereInput>
    NOT?: Enumerable<StudentWhereInput>
    id?: StringFilter | string
    number?: StringFilter | string
    name?: StringFilter | string
    birthday?: DateTimeFilter | Date | string
    gender?: StringFilter | string
    ethnic?: StringFilter | string
    birthplace?: JsonFilter
    docs?: StringFilter | string
    emergency?: StringFilter | string
    go_home_alone?: StringFilter | string
    parents?: StringFilter | string
    social_program?: BoolFilter | boolean
    fee?: FloatFilter | number
    defaulting?: BoolNullableFilter | boolean | null
    history?: JsonNullableListFilter
    school_id?: StringFilter | string
    class_id?: StringFilter | string
    school?: XOR<SchoolRelationFilter, SchoolWhereInput>
    class?: XOR<ClassRelationFilter, ClassWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    birthplace?: SortOrder
    docs?: SortOrder
    emergency?: SortOrder
    go_home_alone?: SortOrder
    parents?: SortOrder
    social_program?: SortOrder
    fee?: SortOrder
    defaulting?: SortOrder
    history?: SortOrder
    school_id?: SortOrder
    class_id?: SortOrder
    school?: SchoolOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = {
    id?: string
  }

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    birthplace?: SortOrder
    docs?: SortOrder
    emergency?: SortOrder
    go_home_alone?: SortOrder
    parents?: SortOrder
    social_program?: SortOrder
    fee?: SortOrder
    defaulting?: SortOrder
    history?: SortOrder
    school_id?: SortOrder
    class_id?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudentScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    number?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    birthday?: DateTimeWithAggregatesFilter | Date | string
    gender?: StringWithAggregatesFilter | string
    ethnic?: StringWithAggregatesFilter | string
    birthplace?: JsonWithAggregatesFilter
    docs?: StringWithAggregatesFilter | string
    emergency?: StringWithAggregatesFilter | string
    go_home_alone?: StringWithAggregatesFilter | string
    parents?: StringWithAggregatesFilter | string
    social_program?: BoolWithAggregatesFilter | boolean
    fee?: FloatWithAggregatesFilter | number
    defaulting?: BoolNullableWithAggregatesFilter | boolean | null
    history?: JsonNullableListFilter
    school_id?: StringWithAggregatesFilter | string
    class_id?: StringWithAggregatesFilter | string
  }

  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    id?: StringFilter | string
    user_id?: StringFilter | string
    password?: StringFilter | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    password?: SortOrder
  }

  export type AdminWhereUniqueInput = {
    id?: string
    user_id?: string
  }

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    user_id?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type QuestionsWhereInput = {
    AND?: Enumerable<QuestionsWhereInput>
    OR?: Enumerable<QuestionsWhereInput>
    NOT?: Enumerable<QuestionsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    subject?: StringFilter | string
    email?: StringFilter | string
    school_id?: StringFilter | string
    message?: StringFilter | string
  }

  export type QuestionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    school_id?: SortOrder
    message?: SortOrder
  }

  export type QuestionsWhereUniqueInput = {
    id?: string
  }

  export type QuestionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    school_id?: SortOrder
    message?: SortOrder
    _count?: QuestionsCountOrderByAggregateInput
    _max?: QuestionsMaxOrderByAggregateInput
    _min?: QuestionsMinOrderByAggregateInput
  }

  export type QuestionsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionsScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    subject?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    school_id?: StringWithAggregatesFilter | string
    message?: StringWithAggregatesFilter | string
  }

  export type SchoolCreateInput = {
    id?: string
    cnpj: string
    register: number
    fantasia: string
    logo?: string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: boolean | null
    modalities?: SchoolCreatemodalitiesInput | Enumerable<string>
    school?: EmployeeCreateNestedManyWithoutSchoolInput
    turmas?: ClassCreateNestedManyWithoutSchoolInput
    students?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    cnpj: string
    register: number
    fantasia: string
    logo?: string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: boolean | null
    modalities?: SchoolCreatemodalitiesInput | Enumerable<string>
    school?: EmployeeUncheckedCreateNestedManyWithoutSchoolInput
    turmas?: ClassUncheckedCreateNestedManyWithoutSchoolInput
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
    school?: EmployeeUpdateManyWithoutSchoolInput
    turmas?: ClassUpdateManyWithoutSchoolInput
    students?: StudentUpdateManyWithoutSchoolInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
    school?: EmployeeUncheckedUpdateManyWithoutSchoolInput
    turmas?: ClassUncheckedUpdateManyWithoutSchoolInput
    students?: StudentUncheckedUpdateManyWithoutSchoolInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    cnpj: string
    register: number
    fantasia: string
    logo?: string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: boolean | null
    modalities?: SchoolCreateManymodalitiesInput | Enumerable<string>
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
  }

  export type EmployeeCreateInput = {
    id?: string
    user_id: string
    name: string
    birthday?: Date | string | null
    gender?: string | null
    ethnic?: string | null
    docs?: string | null
    job?: string | null
    contacts?: string | null
    address?: string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: number | null
    bank?: string | null
    picture?: string | null
    school: SchoolCreateNestedOneWithoutSchoolInput
    teacher?: TeacherCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    user_id: string
    name: string
    birthday?: Date | string | null
    gender?: string | null
    ethnic?: string | null
    docs?: string | null
    job?: string | null
    contacts?: string | null
    address?: string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: number | null
    bank?: string | null
    picture?: string | null
    school_id: string
    teacher?: TeacherUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnic?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutSchoolInput
    teacher?: TeacherUpdateOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnic?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    school_id?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUncheckedUpdateOneWithoutEmployeeInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    user_id: string
    name: string
    birthday?: Date | string | null
    gender?: string | null
    ethnic?: string | null
    docs?: string | null
    job?: string | null
    contacts?: string | null
    address?: string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: number | null
    bank?: string | null
    picture?: string | null
    school_id: string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnic?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnic?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    school_id?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateInput = {
    id?: string
    modality: string
    class: string
    shift: string
    subjects?: ClassCreatesubjectsInput | Enumerable<string>
    school: SchoolCreateNestedOneWithoutTurmasInput
    students?: StudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    modality: string
    class: string
    shift: string
    school_id: string
    subjects?: ClassCreatesubjectsInput | Enumerable<string>
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    subjects?: ClassUpdatesubjectsInput | Enumerable<string>
    school?: SchoolUpdateOneRequiredWithoutTurmasInput
    students?: StudentUpdateManyWithoutClassInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    subjects?: ClassUpdatesubjectsInput | Enumerable<string>
    students?: StudentUncheckedUpdateManyWithoutClassInput
  }

  export type ClassCreateManyInput = {
    id?: string
    modality: string
    class: string
    shift: string
    school_id: string
    subjects?: ClassCreateManysubjectsInput | Enumerable<string>
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    subjects?: ClassUpdatesubjectsInput | Enumerable<string>
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    subjects?: ClassUpdatesubjectsInput | Enumerable<string>
  }

  export type TeacherCreateInput = {
    id?: string
    classes?: TeacherCreateclassesInput | Enumerable<string>
    employee: EmployeeCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    employee_id: string
    classes?: TeacherCreateclassesInput | Enumerable<string>
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes?: TeacherUpdateclassesInput | Enumerable<string>
    employee?: EmployeeUpdateOneRequiredWithoutTeacherInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_id?: StringFieldUpdateOperationsInput | string
    classes?: TeacherUpdateclassesInput | Enumerable<string>
  }

  export type TeacherCreateManyInput = {
    id?: string
    employee_id: string
    classes?: TeacherCreateManyclassesInput | Enumerable<string>
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes?: TeacherUpdateclassesInput | Enumerable<string>
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employee_id?: StringFieldUpdateOperationsInput | string
    classes?: TeacherUpdateclassesInput | Enumerable<string>
  }

  export type StudentCreateInput = {
    id?: string
    number: string
    name: string
    birthday: Date | string
    gender: string
    ethnic: string
    birthplace: JsonNullValueInput | InputJsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting?: boolean | null
    history?: StudentCreatehistoryInput | Enumerable<InputJsonValue>
    school: SchoolCreateNestedOneWithoutStudentsInput
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    number: string
    name: string
    birthday: Date | string
    gender: string
    ethnic: string
    birthplace: JsonNullValueInput | InputJsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting?: boolean | null
    school_id: string
    class_id: string
    history?: StudentCreatehistoryInput | Enumerable<InputJsonValue>
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    ethnic?: StringFieldUpdateOperationsInput | string
    birthplace?: JsonNullValueInput | InputJsonValue
    docs?: StringFieldUpdateOperationsInput | string
    emergency?: StringFieldUpdateOperationsInput | string
    go_home_alone?: StringFieldUpdateOperationsInput | string
    parents?: StringFieldUpdateOperationsInput | string
    social_program?: BoolFieldUpdateOperationsInput | boolean
    fee?: FloatFieldUpdateOperationsInput | number
    defaulting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: StudentUpdatehistoryInput | Enumerable<InputJsonValue>
    school?: SchoolUpdateOneRequiredWithoutStudentsInput
    class?: ClassUpdateOneRequiredWithoutStudentsInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    ethnic?: StringFieldUpdateOperationsInput | string
    birthplace?: JsonNullValueInput | InputJsonValue
    docs?: StringFieldUpdateOperationsInput | string
    emergency?: StringFieldUpdateOperationsInput | string
    go_home_alone?: StringFieldUpdateOperationsInput | string
    parents?: StringFieldUpdateOperationsInput | string
    social_program?: BoolFieldUpdateOperationsInput | boolean
    fee?: FloatFieldUpdateOperationsInput | number
    defaulting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    school_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    history?: StudentUpdatehistoryInput | Enumerable<InputJsonValue>
  }

  export type StudentCreateManyInput = {
    id?: string
    number: string
    name: string
    birthday: Date | string
    gender: string
    ethnic: string
    birthplace: JsonNullValueInput | InputJsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting?: boolean | null
    school_id: string
    class_id: string
    history?: StudentCreateManyhistoryInput | Enumerable<InputJsonValue>
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    ethnic?: StringFieldUpdateOperationsInput | string
    birthplace?: JsonNullValueInput | InputJsonValue
    docs?: StringFieldUpdateOperationsInput | string
    emergency?: StringFieldUpdateOperationsInput | string
    go_home_alone?: StringFieldUpdateOperationsInput | string
    parents?: StringFieldUpdateOperationsInput | string
    social_program?: BoolFieldUpdateOperationsInput | boolean
    fee?: FloatFieldUpdateOperationsInput | number
    defaulting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: StudentUpdatehistoryInput | Enumerable<InputJsonValue>
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    ethnic?: StringFieldUpdateOperationsInput | string
    birthplace?: JsonNullValueInput | InputJsonValue
    docs?: StringFieldUpdateOperationsInput | string
    emergency?: StringFieldUpdateOperationsInput | string
    go_home_alone?: StringFieldUpdateOperationsInput | string
    parents?: StringFieldUpdateOperationsInput | string
    social_program?: BoolFieldUpdateOperationsInput | boolean
    fee?: FloatFieldUpdateOperationsInput | number
    defaulting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    school_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    history?: StudentUpdatehistoryInput | Enumerable<InputJsonValue>
  }

  export type AdminCreateInput = {
    id?: string
    user_id: string
    password: string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    user_id: string
    password: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    user_id: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionsCreateInput = {
    id?: string
    name: string
    subject: string
    email: string
    school_id: string
    message: string
  }

  export type QuestionsUncheckedCreateInput = {
    id?: string
    name: string
    subject: string
    email: string
    school_id: string
    message: string
  }

  export type QuestionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionsCreateManyInput = {
    id?: string
    name: string
    subject: string
    email: string
    school_id: string
    message: string
  }

  export type QuestionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }
  export type JsonNullableFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase>, Exclude<keyof Required<JsonNullableFilterBase>, 'path'>>,
        Required<JsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase>, 'path'>>

  export type JsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    register?: SortOrder
    fantasia?: SortOrder
    logo?: SortOrder
    contacts?: SortOrder
    address?: SortOrder
    modalities?: SortOrder
    new?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    register?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    register?: SortOrder
    fantasia?: SortOrder
    logo?: SortOrder
    new?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    cnpj?: SortOrder
    register?: SortOrder
    fantasia?: SortOrder
    logo?: SortOrder
    new?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    register?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }
  export type JsonNullableWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntNullableFilter
    _min?: NestedJsonNullableFilter
    _max?: NestedJsonNullableFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type SchoolRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type TeacherRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    docs?: SortOrder
    job?: SortOrder
    contacts?: SortOrder
    address?: SortOrder
    contract?: SortOrder
    qualifications?: SortOrder
    salary?: SortOrder
    bank?: SortOrder
    picture?: SortOrder
    school_id?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    docs?: SortOrder
    job?: SortOrder
    contacts?: SortOrder
    address?: SortOrder
    salary?: SortOrder
    bank?: SortOrder
    picture?: SortOrder
    school_id?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    docs?: SortOrder
    job?: SortOrder
    contacts?: SortOrder
    address?: SortOrder
    salary?: SortOrder
    bank?: SortOrder
    picture?: SortOrder
    school_id?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    salary?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    modality?: SortOrder
    class?: SortOrder
    shift?: SortOrder
    subjects?: SortOrder
    school_id?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    modality?: SortOrder
    class?: SortOrder
    shift?: SortOrder
    school_id?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    modality?: SortOrder
    class?: SortOrder
    shift?: SortOrder
    school_id?: SortOrder
  }

  export type EmployeeRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
    classes?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }
  export type JsonNullableListFilter = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase>, Exclude<keyof Required<JsonNullableListFilterBase>, 'path'>>,
        Required<JsonNullableListFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase>, 'path'>>

  export type JsonNullableListFilterBase = {
    equals?: Enumerable<InputJsonValue> | null
    has?: InputJsonValue | null
    hasEvery?: Enumerable<InputJsonValue>
    hasSome?: Enumerable<InputJsonValue>
    isEmpty?: boolean
  }

  export type ClassRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    birthplace?: SortOrder
    docs?: SortOrder
    emergency?: SortOrder
    go_home_alone?: SortOrder
    parents?: SortOrder
    social_program?: SortOrder
    fee?: SortOrder
    defaulting?: SortOrder
    history?: SortOrder
    school_id?: SortOrder
    class_id?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    fee?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    docs?: SortOrder
    emergency?: SortOrder
    go_home_alone?: SortOrder
    parents?: SortOrder
    social_program?: SortOrder
    fee?: SortOrder
    defaulting?: SortOrder
    school_id?: SortOrder
    class_id?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    name?: SortOrder
    birthday?: SortOrder
    gender?: SortOrder
    ethnic?: SortOrder
    docs?: SortOrder
    emergency?: SortOrder
    go_home_alone?: SortOrder
    parents?: SortOrder
    social_program?: SortOrder
    fee?: SortOrder
    defaulting?: SortOrder
    school_id?: SortOrder
    class_id?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    fee?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    password?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    password?: SortOrder
  }

  export type QuestionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    school_id?: SortOrder
    message?: SortOrder
  }

  export type QuestionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    school_id?: SortOrder
    message?: SortOrder
  }

  export type QuestionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    email?: SortOrder
    school_id?: SortOrder
    message?: SortOrder
  }

  export type SchoolCreatemodalitiesInput = {
    set: Enumerable<string>
  }

  export type EmployeeCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutSchoolInput>, Enumerable<EmployeeUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutSchoolInput>
    createMany?: EmployeeCreateManySchoolInputEnvelope
    connect?: Enumerable<EmployeeWhereUniqueInput>
  }

  export type ClassCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<ClassCreateWithoutSchoolInput>, Enumerable<ClassUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<ClassCreateOrConnectWithoutSchoolInput>
    createMany?: ClassCreateManySchoolInputEnvelope
    connect?: Enumerable<ClassWhereUniqueInput>
  }

  export type StudentCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<StudentCreateWithoutSchoolInput>, Enumerable<StudentUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutSchoolInput>
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type EmployeeUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutSchoolInput>, Enumerable<EmployeeUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutSchoolInput>
    createMany?: EmployeeCreateManySchoolInputEnvelope
    connect?: Enumerable<EmployeeWhereUniqueInput>
  }

  export type ClassUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<ClassCreateWithoutSchoolInput>, Enumerable<ClassUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<ClassCreateOrConnectWithoutSchoolInput>
    createMany?: ClassCreateManySchoolInputEnvelope
    connect?: Enumerable<ClassWhereUniqueInput>
  }

  export type StudentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<Enumerable<StudentCreateWithoutSchoolInput>, Enumerable<StudentUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutSchoolInput>
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type SchoolUpdatemodalitiesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type EmployeeUpdateManyWithoutSchoolInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutSchoolInput>, Enumerable<EmployeeUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<EmployeeUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: EmployeeCreateManySchoolInputEnvelope
    connect?: Enumerable<EmployeeWhereUniqueInput>
    set?: Enumerable<EmployeeWhereUniqueInput>
    disconnect?: Enumerable<EmployeeWhereUniqueInput>
    delete?: Enumerable<EmployeeWhereUniqueInput>
    update?: Enumerable<EmployeeUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<EmployeeUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<EmployeeScalarWhereInput>
  }

  export type ClassUpdateManyWithoutSchoolInput = {
    create?: XOR<Enumerable<ClassCreateWithoutSchoolInput>, Enumerable<ClassUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<ClassCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<ClassUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: ClassCreateManySchoolInputEnvelope
    connect?: Enumerable<ClassWhereUniqueInput>
    set?: Enumerable<ClassWhereUniqueInput>
    disconnect?: Enumerable<ClassWhereUniqueInput>
    delete?: Enumerable<ClassWhereUniqueInput>
    update?: Enumerable<ClassUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<ClassUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<ClassScalarWhereInput>
  }

  export type StudentUpdateManyWithoutSchoolInput = {
    create?: XOR<Enumerable<StudentCreateWithoutSchoolInput>, Enumerable<StudentUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type EmployeeUncheckedUpdateManyWithoutSchoolInput = {
    create?: XOR<Enumerable<EmployeeCreateWithoutSchoolInput>, Enumerable<EmployeeUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<EmployeeCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<EmployeeUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: EmployeeCreateManySchoolInputEnvelope
    connect?: Enumerable<EmployeeWhereUniqueInput>
    set?: Enumerable<EmployeeWhereUniqueInput>
    disconnect?: Enumerable<EmployeeWhereUniqueInput>
    delete?: Enumerable<EmployeeWhereUniqueInput>
    update?: Enumerable<EmployeeUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<EmployeeUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<EmployeeScalarWhereInput>
  }

  export type ClassUncheckedUpdateManyWithoutSchoolInput = {
    create?: XOR<Enumerable<ClassCreateWithoutSchoolInput>, Enumerable<ClassUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<ClassCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<ClassUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: ClassCreateManySchoolInputEnvelope
    connect?: Enumerable<ClassWhereUniqueInput>
    set?: Enumerable<ClassWhereUniqueInput>
    disconnect?: Enumerable<ClassWhereUniqueInput>
    delete?: Enumerable<ClassWhereUniqueInput>
    update?: Enumerable<ClassUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<ClassUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<ClassScalarWhereInput>
  }

  export type StudentUncheckedUpdateManyWithoutSchoolInput = {
    create?: XOR<Enumerable<StudentCreateWithoutSchoolInput>, Enumerable<StudentUncheckedCreateWithoutSchoolInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutSchoolInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutSchoolInput>
    createMany?: StudentCreateManySchoolInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutSchoolInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutSchoolInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type SchoolCreateManymodalitiesInput = {
    set: Enumerable<string>
  }

  export type SchoolCreateNestedOneWithoutSchoolInput = {
    create?: XOR<SchoolCreateWithoutSchoolInput, SchoolUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchoolInput
    connect?: SchoolWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<TeacherCreateWithoutEmployeeInput, TeacherUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEmployeeInput
    connect?: TeacherWhereUniqueInput
  }

  export type TeacherUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<TeacherCreateWithoutEmployeeInput, TeacherUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEmployeeInput
    connect?: TeacherWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolUpdateOneRequiredWithoutSchoolInput = {
    create?: XOR<SchoolCreateWithoutSchoolInput, SchoolUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutSchoolInput
    upsert?: SchoolUpsertWithoutSchoolInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<SchoolUpdateWithoutSchoolInput, SchoolUncheckedUpdateWithoutSchoolInput>
  }

  export type TeacherUpdateOneWithoutEmployeeInput = {
    create?: XOR<TeacherCreateWithoutEmployeeInput, TeacherUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEmployeeInput
    upsert?: TeacherUpsertWithoutEmployeeInput
    connect?: TeacherWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<TeacherUpdateWithoutEmployeeInput, TeacherUncheckedUpdateWithoutEmployeeInput>
  }

  export type TeacherUncheckedUpdateOneWithoutEmployeeInput = {
    create?: XOR<TeacherCreateWithoutEmployeeInput, TeacherUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEmployeeInput
    upsert?: TeacherUpsertWithoutEmployeeInput
    connect?: TeacherWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<TeacherUpdateWithoutEmployeeInput, TeacherUncheckedUpdateWithoutEmployeeInput>
  }

  export type ClassCreatesubjectsInput = {
    set: Enumerable<string>
  }

  export type SchoolCreateNestedOneWithoutTurmasInput = {
    create?: XOR<SchoolCreateWithoutTurmasInput, SchoolUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTurmasInput
    connect?: SchoolWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutClassInput = {
    create?: XOR<Enumerable<StudentCreateWithoutClassInput>, Enumerable<StudentUncheckedCreateWithoutClassInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutClassInput>
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type StudentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<Enumerable<StudentCreateWithoutClassInput>, Enumerable<StudentUncheckedCreateWithoutClassInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutClassInput>
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
  }

  export type ClassUpdatesubjectsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type SchoolUpdateOneRequiredWithoutTurmasInput = {
    create?: XOR<SchoolCreateWithoutTurmasInput, SchoolUncheckedCreateWithoutTurmasInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTurmasInput
    upsert?: SchoolUpsertWithoutTurmasInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<SchoolUpdateWithoutTurmasInput, SchoolUncheckedUpdateWithoutTurmasInput>
  }

  export type StudentUpdateManyWithoutClassInput = {
    create?: XOR<Enumerable<StudentCreateWithoutClassInput>, Enumerable<StudentUncheckedCreateWithoutClassInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutClassInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutClassInput>
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutClassInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutClassInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type StudentUncheckedUpdateManyWithoutClassInput = {
    create?: XOR<Enumerable<StudentCreateWithoutClassInput>, Enumerable<StudentUncheckedCreateWithoutClassInput>>
    connectOrCreate?: Enumerable<StudentCreateOrConnectWithoutClassInput>
    upsert?: Enumerable<StudentUpsertWithWhereUniqueWithoutClassInput>
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: Enumerable<StudentWhereUniqueInput>
    set?: Enumerable<StudentWhereUniqueInput>
    disconnect?: Enumerable<StudentWhereUniqueInput>
    delete?: Enumerable<StudentWhereUniqueInput>
    update?: Enumerable<StudentUpdateWithWhereUniqueWithoutClassInput>
    updateMany?: Enumerable<StudentUpdateManyWithWhereWithoutClassInput>
    deleteMany?: Enumerable<StudentScalarWhereInput>
  }

  export type ClassCreateManysubjectsInput = {
    set: Enumerable<string>
  }

  export type TeacherCreateclassesInput = {
    set: Enumerable<string>
  }

  export type EmployeeCreateNestedOneWithoutTeacherInput = {
    create?: XOR<EmployeeCreateWithoutTeacherInput, EmployeeUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTeacherInput
    connect?: EmployeeWhereUniqueInput
  }

  export type TeacherUpdateclassesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type EmployeeUpdateOneRequiredWithoutTeacherInput = {
    create?: XOR<EmployeeCreateWithoutTeacherInput, EmployeeUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTeacherInput
    upsert?: EmployeeUpsertWithoutTeacherInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<EmployeeUpdateWithoutTeacherInput, EmployeeUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherCreateManyclassesInput = {
    set: Enumerable<string>
  }

  export type StudentCreatehistoryInput = {
    set: Enumerable<InputJsonValue>
  }

  export type SchoolCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    connect?: ClassWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdatehistoryInput = {
    set?: Enumerable<InputJsonValue>
    push?: InputJsonValue | Enumerable<InputJsonValue>
  }

  export type SchoolUpdateOneRequiredWithoutStudentsInput = {
    create?: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutStudentsInput
    upsert?: SchoolUpsertWithoutStudentsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassUpdateOneRequiredWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    upsert?: ClassUpsertWithoutStudentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentCreateManyhistoryInput = {
    set: Enumerable<InputJsonValue>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }
  export type NestedJsonNullableFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase>, Exclude<keyof Required<NestedJsonNullableFilterBase>, 'path'>>,
        Required<NestedJsonNullableFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase>, 'path'>>

  export type NestedJsonNullableFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type EmployeeCreateWithoutSchoolInput = {
    id?: string
    user_id: string
    name: string
    birthday?: Date | string | null
    gender?: string | null
    ethnic?: string | null
    docs?: string | null
    job?: string | null
    contacts?: string | null
    address?: string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: number | null
    bank?: string | null
    picture?: string | null
    teacher?: TeacherCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutSchoolInput = {
    id?: string
    user_id: string
    name: string
    birthday?: Date | string | null
    gender?: string | null
    ethnic?: string | null
    docs?: string | null
    job?: string | null
    contacts?: string | null
    address?: string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: number | null
    bank?: string | null
    picture?: string | null
    teacher?: TeacherUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutSchoolInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSchoolInput, EmployeeUncheckedCreateWithoutSchoolInput>
  }

  export type EmployeeCreateManySchoolInputEnvelope = {
    data: Enumerable<EmployeeCreateManySchoolInput>
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutSchoolInput = {
    id?: string
    modality: string
    class: string
    shift: string
    subjects?: ClassCreatesubjectsInput | Enumerable<string>
    students?: StudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSchoolInput = {
    id?: string
    modality: string
    class: string
    shift: string
    subjects?: ClassCreatesubjectsInput | Enumerable<string>
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSchoolInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSchoolInput, ClassUncheckedCreateWithoutSchoolInput>
  }

  export type ClassCreateManySchoolInputEnvelope = {
    data: Enumerable<ClassCreateManySchoolInput>
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutSchoolInput = {
    id?: string
    number: string
    name: string
    birthday: Date | string
    gender: string
    ethnic: string
    birthplace: JsonNullValueInput | InputJsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting?: boolean | null
    history?: StudentCreatehistoryInput | Enumerable<InputJsonValue>
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutSchoolInput = {
    id?: string
    number: string
    name: string
    birthday: Date | string
    gender: string
    ethnic: string
    birthplace: JsonNullValueInput | InputJsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting?: boolean | null
    class_id: string
    history?: StudentCreatehistoryInput | Enumerable<InputJsonValue>
  }

  export type StudentCreateOrConnectWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentCreateManySchoolInputEnvelope = {
    data: Enumerable<StudentCreateManySchoolInput>
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithWhereUniqueWithoutSchoolInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutSchoolInput, EmployeeUncheckedUpdateWithoutSchoolInput>
    create: XOR<EmployeeCreateWithoutSchoolInput, EmployeeUncheckedCreateWithoutSchoolInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutSchoolInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutSchoolInput, EmployeeUncheckedUpdateWithoutSchoolInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutSchoolInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutSchoolInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: Enumerable<EmployeeScalarWhereInput>
    OR?: Enumerable<EmployeeScalarWhereInput>
    NOT?: Enumerable<EmployeeScalarWhereInput>
    id?: StringFilter | string
    user_id?: StringFilter | string
    name?: StringFilter | string
    birthday?: DateTimeNullableFilter | Date | string | null
    gender?: StringNullableFilter | string | null
    ethnic?: StringNullableFilter | string | null
    docs?: StringNullableFilter | string | null
    job?: StringNullableFilter | string | null
    contacts?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    contract?: JsonNullableFilter
    qualifications?: JsonNullableFilter
    salary?: FloatNullableFilter | number | null
    bank?: StringNullableFilter | string | null
    picture?: StringNullableFilter | string | null
    school_id?: StringFilter | string
  }

  export type ClassUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutSchoolInput, ClassUncheckedUpdateWithoutSchoolInput>
    create: XOR<ClassCreateWithoutSchoolInput, ClassUncheckedCreateWithoutSchoolInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutSchoolInput, ClassUncheckedUpdateWithoutSchoolInput>
  }

  export type ClassUpdateManyWithWhereWithoutSchoolInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTurmasInput>
  }

  export type ClassScalarWhereInput = {
    AND?: Enumerable<ClassScalarWhereInput>
    OR?: Enumerable<ClassScalarWhereInput>
    NOT?: Enumerable<ClassScalarWhereInput>
    id?: StringFilter | string
    modality?: StringFilter | string
    class?: StringFilter | string
    shift?: StringFilter | string
    subjects?: StringNullableListFilter
    school_id?: StringFilter | string
  }

  export type StudentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
    create: XOR<StudentCreateWithoutSchoolInput, StudentUncheckedCreateWithoutSchoolInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutSchoolInput, StudentUncheckedUpdateWithoutSchoolInput>
  }

  export type StudentUpdateManyWithWhereWithoutSchoolInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
  }

  export type StudentScalarWhereInput = {
    AND?: Enumerable<StudentScalarWhereInput>
    OR?: Enumerable<StudentScalarWhereInput>
    NOT?: Enumerable<StudentScalarWhereInput>
    id?: StringFilter | string
    number?: StringFilter | string
    name?: StringFilter | string
    birthday?: DateTimeFilter | Date | string
    gender?: StringFilter | string
    ethnic?: StringFilter | string
    birthplace?: JsonFilter
    docs?: StringFilter | string
    emergency?: StringFilter | string
    go_home_alone?: StringFilter | string
    parents?: StringFilter | string
    social_program?: BoolFilter | boolean
    fee?: FloatFilter | number
    defaulting?: BoolNullableFilter | boolean | null
    history?: JsonNullableListFilter
    school_id?: StringFilter | string
    class_id?: StringFilter | string
  }

  export type SchoolCreateWithoutSchoolInput = {
    id?: string
    cnpj: string
    register: number
    fantasia: string
    logo?: string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: boolean | null
    modalities?: SchoolCreatemodalitiesInput | Enumerable<string>
    turmas?: ClassCreateNestedManyWithoutSchoolInput
    students?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutSchoolInput = {
    id?: string
    cnpj: string
    register: number
    fantasia: string
    logo?: string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: boolean | null
    modalities?: SchoolCreatemodalitiesInput | Enumerable<string>
    turmas?: ClassUncheckedCreateNestedManyWithoutSchoolInput
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutSchoolInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutSchoolInput, SchoolUncheckedCreateWithoutSchoolInput>
  }

  export type TeacherCreateWithoutEmployeeInput = {
    id?: string
    classes?: TeacherCreateclassesInput | Enumerable<string>
  }

  export type TeacherUncheckedCreateWithoutEmployeeInput = {
    id?: string
    classes?: TeacherCreateclassesInput | Enumerable<string>
  }

  export type TeacherCreateOrConnectWithoutEmployeeInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutEmployeeInput, TeacherUncheckedCreateWithoutEmployeeInput>
  }

  export type SchoolUpsertWithoutSchoolInput = {
    update: XOR<SchoolUpdateWithoutSchoolInput, SchoolUncheckedUpdateWithoutSchoolInput>
    create: XOR<SchoolCreateWithoutSchoolInput, SchoolUncheckedCreateWithoutSchoolInput>
  }

  export type SchoolUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
    turmas?: ClassUpdateManyWithoutSchoolInput
    students?: StudentUpdateManyWithoutSchoolInput
  }

  export type SchoolUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
    turmas?: ClassUncheckedUpdateManyWithoutSchoolInput
    students?: StudentUncheckedUpdateManyWithoutSchoolInput
  }

  export type TeacherUpsertWithoutEmployeeInput = {
    update: XOR<TeacherUpdateWithoutEmployeeInput, TeacherUncheckedUpdateWithoutEmployeeInput>
    create: XOR<TeacherCreateWithoutEmployeeInput, TeacherUncheckedCreateWithoutEmployeeInput>
  }

  export type TeacherUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes?: TeacherUpdateclassesInput | Enumerable<string>
  }

  export type TeacherUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    classes?: TeacherUpdateclassesInput | Enumerable<string>
  }

  export type SchoolCreateWithoutTurmasInput = {
    id?: string
    cnpj: string
    register: number
    fantasia: string
    logo?: string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: boolean | null
    modalities?: SchoolCreatemodalitiesInput | Enumerable<string>
    school?: EmployeeCreateNestedManyWithoutSchoolInput
    students?: StudentCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutTurmasInput = {
    id?: string
    cnpj: string
    register: number
    fantasia: string
    logo?: string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: boolean | null
    modalities?: SchoolCreatemodalitiesInput | Enumerable<string>
    school?: EmployeeUncheckedCreateNestedManyWithoutSchoolInput
    students?: StudentUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutTurmasInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutTurmasInput, SchoolUncheckedCreateWithoutTurmasInput>
  }

  export type StudentCreateWithoutClassInput = {
    id?: string
    number: string
    name: string
    birthday: Date | string
    gender: string
    ethnic: string
    birthplace: JsonNullValueInput | InputJsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting?: boolean | null
    history?: StudentCreatehistoryInput | Enumerable<InputJsonValue>
    school: SchoolCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutClassInput = {
    id?: string
    number: string
    name: string
    birthday: Date | string
    gender: string
    ethnic: string
    birthplace: JsonNullValueInput | InputJsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting?: boolean | null
    school_id: string
    history?: StudentCreatehistoryInput | Enumerable<InputJsonValue>
  }

  export type StudentCreateOrConnectWithoutClassInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentCreateManyClassInputEnvelope = {
    data: Enumerable<StudentCreateManyClassInput>
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutTurmasInput = {
    update: XOR<SchoolUpdateWithoutTurmasInput, SchoolUncheckedUpdateWithoutTurmasInput>
    create: XOR<SchoolCreateWithoutTurmasInput, SchoolUncheckedCreateWithoutTurmasInput>
  }

  export type SchoolUpdateWithoutTurmasInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
    school?: EmployeeUpdateManyWithoutSchoolInput
    students?: StudentUpdateManyWithoutSchoolInput
  }

  export type SchoolUncheckedUpdateWithoutTurmasInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
    school?: EmployeeUncheckedUpdateManyWithoutSchoolInput
    students?: StudentUncheckedUpdateManyWithoutSchoolInput
  }

  export type StudentUpsertWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
  }

  export type StudentUpdateManyWithWhereWithoutClassInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudentsInput>
  }

  export type EmployeeCreateWithoutTeacherInput = {
    id?: string
    user_id: string
    name: string
    birthday?: Date | string | null
    gender?: string | null
    ethnic?: string | null
    docs?: string | null
    job?: string | null
    contacts?: string | null
    address?: string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: number | null
    bank?: string | null
    picture?: string | null
    school: SchoolCreateNestedOneWithoutSchoolInput
  }

  export type EmployeeUncheckedCreateWithoutTeacherInput = {
    id?: string
    user_id: string
    name: string
    birthday?: Date | string | null
    gender?: string | null
    ethnic?: string | null
    docs?: string | null
    job?: string | null
    contacts?: string | null
    address?: string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: number | null
    bank?: string | null
    picture?: string | null
    school_id: string
  }

  export type EmployeeCreateOrConnectWithoutTeacherInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTeacherInput, EmployeeUncheckedCreateWithoutTeacherInput>
  }

  export type EmployeeUpsertWithoutTeacherInput = {
    update: XOR<EmployeeUpdateWithoutTeacherInput, EmployeeUncheckedUpdateWithoutTeacherInput>
    create: XOR<EmployeeCreateWithoutTeacherInput, EmployeeUncheckedCreateWithoutTeacherInput>
  }

  export type EmployeeUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnic?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneRequiredWithoutSchoolInput
  }

  export type EmployeeUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnic?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    school_id?: StringFieldUpdateOperationsInput | string
  }

  export type SchoolCreateWithoutStudentsInput = {
    id?: string
    cnpj: string
    register: number
    fantasia: string
    logo?: string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: boolean | null
    modalities?: SchoolCreatemodalitiesInput | Enumerable<string>
    school?: EmployeeCreateNestedManyWithoutSchoolInput
    turmas?: ClassCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutStudentsInput = {
    id?: string
    cnpj: string
    register: number
    fantasia: string
    logo?: string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: boolean | null
    modalities?: SchoolCreatemodalitiesInput | Enumerable<string>
    school?: EmployeeUncheckedCreateNestedManyWithoutSchoolInput
    turmas?: ClassUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutStudentsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
  }

  export type ClassCreateWithoutStudentsInput = {
    id?: string
    modality: string
    class: string
    shift: string
    subjects?: ClassCreatesubjectsInput | Enumerable<string>
    school: SchoolCreateNestedOneWithoutTurmasInput
  }

  export type ClassUncheckedCreateWithoutStudentsInput = {
    id?: string
    modality: string
    class: string
    shift: string
    school_id: string
    subjects?: ClassCreatesubjectsInput | Enumerable<string>
  }

  export type ClassCreateOrConnectWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type SchoolUpsertWithoutStudentsInput = {
    update: XOR<SchoolUpdateWithoutStudentsInput, SchoolUncheckedUpdateWithoutStudentsInput>
    create: XOR<SchoolCreateWithoutStudentsInput, SchoolUncheckedCreateWithoutStudentsInput>
  }

  export type SchoolUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
    school?: EmployeeUpdateManyWithoutSchoolInput
    turmas?: ClassUpdateManyWithoutSchoolInput
  }

  export type SchoolUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    register?: IntFieldUpdateOperationsInput | number
    fantasia?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableJsonNullValueInput | InputJsonValue
    address?: NullableJsonNullValueInput | InputJsonValue
    new?: NullableBoolFieldUpdateOperationsInput | boolean | null
    modalities?: SchoolUpdatemodalitiesInput | Enumerable<string>
    school?: EmployeeUncheckedUpdateManyWithoutSchoolInput
    turmas?: ClassUncheckedUpdateManyWithoutSchoolInput
  }

  export type ClassUpsertWithoutStudentsInput = {
    update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type ClassUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    subjects?: ClassUpdatesubjectsInput | Enumerable<string>
    school?: SchoolUpdateOneRequiredWithoutTurmasInput
  }

  export type ClassUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    school_id?: StringFieldUpdateOperationsInput | string
    subjects?: ClassUpdatesubjectsInput | Enumerable<string>
  }

  export type EmployeeCreateManySchoolInput = {
    id?: string
    user_id: string
    name: string
    birthday?: Date | string | null
    gender?: string | null
    ethnic?: string | null
    docs?: string | null
    job?: string | null
    contacts?: string | null
    address?: string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: number | null
    bank?: string | null
    picture?: string | null
  }

  export type ClassCreateManySchoolInput = {
    id?: string
    modality: string
    class: string
    shift: string
    subjects?: ClassCreateManysubjectsInput | Enumerable<string>
  }

  export type StudentCreateManySchoolInput = {
    id?: string
    number: string
    name: string
    birthday: Date | string
    gender: string
    ethnic: string
    birthplace: JsonNullValueInput | InputJsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting?: boolean | null
    class_id: string
    history?: StudentCreateManyhistoryInput | Enumerable<InputJsonValue>
  }

  export type EmployeeUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnic?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: TeacherUpdateOneWithoutEmployeeInput
  }

  export type EmployeeUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnic?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableStringFieldUpdateOperationsInput | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    contacts?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contract?: NullableJsonNullValueInput | InputJsonValue
    qualifications?: NullableJsonNullValueInput | InputJsonValue
    salary?: NullableFloatFieldUpdateOperationsInput | number | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: TeacherUncheckedUpdateOneWithoutEmployeeInput
  }

  export type ClassUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    subjects?: ClassUpdatesubjectsInput | Enumerable<string>
    students?: StudentUpdateManyWithoutClassInput
  }

  export type ClassUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    subjects?: ClassUpdatesubjectsInput | Enumerable<string>
    students?: StudentUncheckedUpdateManyWithoutClassInput
  }

  export type ClassUncheckedUpdateManyWithoutTurmasInput = {
    id?: StringFieldUpdateOperationsInput | string
    modality?: StringFieldUpdateOperationsInput | string
    class?: StringFieldUpdateOperationsInput | string
    shift?: StringFieldUpdateOperationsInput | string
    subjects?: ClassUpdatesubjectsInput | Enumerable<string>
  }

  export type StudentUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    ethnic?: StringFieldUpdateOperationsInput | string
    birthplace?: JsonNullValueInput | InputJsonValue
    docs?: StringFieldUpdateOperationsInput | string
    emergency?: StringFieldUpdateOperationsInput | string
    go_home_alone?: StringFieldUpdateOperationsInput | string
    parents?: StringFieldUpdateOperationsInput | string
    social_program?: BoolFieldUpdateOperationsInput | boolean
    fee?: FloatFieldUpdateOperationsInput | number
    defaulting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: StudentUpdatehistoryInput | Enumerable<InputJsonValue>
    class?: ClassUpdateOneRequiredWithoutStudentsInput
  }

  export type StudentUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    ethnic?: StringFieldUpdateOperationsInput | string
    birthplace?: JsonNullValueInput | InputJsonValue
    docs?: StringFieldUpdateOperationsInput | string
    emergency?: StringFieldUpdateOperationsInput | string
    go_home_alone?: StringFieldUpdateOperationsInput | string
    parents?: StringFieldUpdateOperationsInput | string
    social_program?: BoolFieldUpdateOperationsInput | boolean
    fee?: FloatFieldUpdateOperationsInput | number
    defaulting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class_id?: StringFieldUpdateOperationsInput | string
    history?: StudentUpdatehistoryInput | Enumerable<InputJsonValue>
  }

  export type StudentUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    ethnic?: StringFieldUpdateOperationsInput | string
    birthplace?: JsonNullValueInput | InputJsonValue
    docs?: StringFieldUpdateOperationsInput | string
    emergency?: StringFieldUpdateOperationsInput | string
    go_home_alone?: StringFieldUpdateOperationsInput | string
    parents?: StringFieldUpdateOperationsInput | string
    social_program?: BoolFieldUpdateOperationsInput | boolean
    fee?: FloatFieldUpdateOperationsInput | number
    defaulting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    class_id?: StringFieldUpdateOperationsInput | string
    history?: StudentUpdatehistoryInput | Enumerable<InputJsonValue>
  }

  export type StudentCreateManyClassInput = {
    id?: string
    number: string
    name: string
    birthday: Date | string
    gender: string
    ethnic: string
    birthplace: JsonNullValueInput | InputJsonValue
    docs: string
    emergency: string
    go_home_alone: string
    parents: string
    social_program: boolean
    fee: number
    defaulting?: boolean | null
    school_id: string
    history?: StudentCreateManyhistoryInput | Enumerable<InputJsonValue>
  }

  export type StudentUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    ethnic?: StringFieldUpdateOperationsInput | string
    birthplace?: JsonNullValueInput | InputJsonValue
    docs?: StringFieldUpdateOperationsInput | string
    emergency?: StringFieldUpdateOperationsInput | string
    go_home_alone?: StringFieldUpdateOperationsInput | string
    parents?: StringFieldUpdateOperationsInput | string
    social_program?: BoolFieldUpdateOperationsInput | boolean
    fee?: FloatFieldUpdateOperationsInput | number
    defaulting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    history?: StudentUpdatehistoryInput | Enumerable<InputJsonValue>
    school?: SchoolUpdateOneRequiredWithoutStudentsInput
  }

  export type StudentUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    ethnic?: StringFieldUpdateOperationsInput | string
    birthplace?: JsonNullValueInput | InputJsonValue
    docs?: StringFieldUpdateOperationsInput | string
    emergency?: StringFieldUpdateOperationsInput | string
    go_home_alone?: StringFieldUpdateOperationsInput | string
    parents?: StringFieldUpdateOperationsInput | string
    social_program?: BoolFieldUpdateOperationsInput | boolean
    fee?: FloatFieldUpdateOperationsInput | number
    defaulting?: NullableBoolFieldUpdateOperationsInput | boolean | null
    school_id?: StringFieldUpdateOperationsInput | string
    history?: StudentUpdatehistoryInput | Enumerable<InputJsonValue>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}