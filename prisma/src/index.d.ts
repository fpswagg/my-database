
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Scheduler
 * 
 */
export type Scheduler = $Result.DefaultSelection<Prisma.$SchedulerPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model NumberPost
 * 
 */
export type NumberPost = $Result.DefaultSelection<Prisma.$NumberPostPayload>
/**
 * Model NumberRecord
 * 
 */
export type NumberRecord = $Result.DefaultSelection<Prisma.$NumberRecordPayload>
/**
 * Model CodeBlueprint
 * 
 */
export type CodeBlueprint = $Result.DefaultSelection<Prisma.$CodeBlueprintPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schedulers
 * const schedulers = await prisma.scheduler.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Schedulers
   * const schedulers = await prisma.scheduler.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.scheduler`: Exposes CRUD operations for the **Scheduler** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedulers
    * const schedulers = await prisma.scheduler.findMany()
    * ```
    */
  get scheduler(): Prisma.SchedulerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.numberPost`: Exposes CRUD operations for the **NumberPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NumberPosts
    * const numberPosts = await prisma.numberPost.findMany()
    * ```
    */
  get numberPost(): Prisma.NumberPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.numberRecord`: Exposes CRUD operations for the **NumberRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NumberRecords
    * const numberRecords = await prisma.numberRecord.findMany()
    * ```
    */
  get numberRecord(): Prisma.NumberRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeBlueprint`: Exposes CRUD operations for the **CodeBlueprint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeBlueprints
    * const codeBlueprints = await prisma.codeBlueprint.findMany()
    * ```
    */
  get codeBlueprint(): Prisma.CodeBlueprintDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Scheduler: 'Scheduler',
    Schedule: 'Schedule',
    Meal: 'Meal',
    Ingredient: 'Ingredient',
    NumberPost: 'NumberPost',
    NumberRecord: 'NumberRecord',
    CodeBlueprint: 'CodeBlueprint'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "scheduler" | "schedule" | "meal" | "ingredient" | "numberPost" | "numberRecord" | "codeBlueprint"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Scheduler: {
        payload: Prisma.$SchedulerPayload<ExtArgs>
        fields: Prisma.SchedulerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchedulerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchedulerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload>
          }
          findFirst: {
            args: Prisma.SchedulerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchedulerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload>
          }
          findMany: {
            args: Prisma.SchedulerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload>[]
          }
          create: {
            args: Prisma.SchedulerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload>
          }
          createMany: {
            args: Prisma.SchedulerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchedulerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload>[]
          }
          delete: {
            args: Prisma.SchedulerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload>
          }
          update: {
            args: Prisma.SchedulerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload>
          }
          deleteMany: {
            args: Prisma.SchedulerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchedulerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchedulerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload>[]
          }
          upsert: {
            args: Prisma.SchedulerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulerPayload>
          }
          aggregate: {
            args: Prisma.SchedulerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduler>
          }
          groupBy: {
            args: Prisma.SchedulerGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulerGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchedulerCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulerCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      NumberPost: {
        payload: Prisma.$NumberPostPayload<ExtArgs>
        fields: Prisma.NumberPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NumberPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NumberPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload>
          }
          findFirst: {
            args: Prisma.NumberPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NumberPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload>
          }
          findMany: {
            args: Prisma.NumberPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload>[]
          }
          create: {
            args: Prisma.NumberPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload>
          }
          createMany: {
            args: Prisma.NumberPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NumberPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload>[]
          }
          delete: {
            args: Prisma.NumberPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload>
          }
          update: {
            args: Prisma.NumberPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload>
          }
          deleteMany: {
            args: Prisma.NumberPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NumberPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NumberPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload>[]
          }
          upsert: {
            args: Prisma.NumberPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberPostPayload>
          }
          aggregate: {
            args: Prisma.NumberPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNumberPost>
          }
          groupBy: {
            args: Prisma.NumberPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<NumberPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.NumberPostCountArgs<ExtArgs>
            result: $Utils.Optional<NumberPostCountAggregateOutputType> | number
          }
        }
      }
      NumberRecord: {
        payload: Prisma.$NumberRecordPayload<ExtArgs>
        fields: Prisma.NumberRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NumberRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NumberRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload>
          }
          findFirst: {
            args: Prisma.NumberRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NumberRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload>
          }
          findMany: {
            args: Prisma.NumberRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload>[]
          }
          create: {
            args: Prisma.NumberRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload>
          }
          createMany: {
            args: Prisma.NumberRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NumberRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload>[]
          }
          delete: {
            args: Prisma.NumberRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload>
          }
          update: {
            args: Prisma.NumberRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload>
          }
          deleteMany: {
            args: Prisma.NumberRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NumberRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NumberRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload>[]
          }
          upsert: {
            args: Prisma.NumberRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumberRecordPayload>
          }
          aggregate: {
            args: Prisma.NumberRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNumberRecord>
          }
          groupBy: {
            args: Prisma.NumberRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<NumberRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.NumberRecordCountArgs<ExtArgs>
            result: $Utils.Optional<NumberRecordCountAggregateOutputType> | number
          }
        }
      }
      CodeBlueprint: {
        payload: Prisma.$CodeBlueprintPayload<ExtArgs>
        fields: Prisma.CodeBlueprintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeBlueprintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeBlueprintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload>
          }
          findFirst: {
            args: Prisma.CodeBlueprintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeBlueprintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload>
          }
          findMany: {
            args: Prisma.CodeBlueprintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload>[]
          }
          create: {
            args: Prisma.CodeBlueprintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload>
          }
          createMany: {
            args: Prisma.CodeBlueprintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeBlueprintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload>[]
          }
          delete: {
            args: Prisma.CodeBlueprintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload>
          }
          update: {
            args: Prisma.CodeBlueprintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload>
          }
          deleteMany: {
            args: Prisma.CodeBlueprintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeBlueprintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeBlueprintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload>[]
          }
          upsert: {
            args: Prisma.CodeBlueprintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeBlueprintPayload>
          }
          aggregate: {
            args: Prisma.CodeBlueprintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeBlueprint>
          }
          groupBy: {
            args: Prisma.CodeBlueprintGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeBlueprintGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeBlueprintCountArgs<ExtArgs>
            result: $Utils.Optional<CodeBlueprintCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    scheduler?: SchedulerOmit
    schedule?: ScheduleOmit
    meal?: MealOmit
    ingredient?: IngredientOmit
    numberPost?: NumberPostOmit
    numberRecord?: NumberRecordOmit
    codeBlueprint?: CodeBlueprintOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type SchedulerCountOutputType
   */

  export type SchedulerCountOutputType = {
    schedules: number
  }

  export type SchedulerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | SchedulerCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * SchedulerCountOutputType without action
   */
  export type SchedulerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchedulerCountOutputType
     */
    select?: SchedulerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchedulerCountOutputType without action
   */
  export type SchedulerCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    ingredients: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | MealCountOutputTypeCountIngredientsArgs
  }

  // Custom InputTypes
  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
  }


  /**
   * Count Type NumberRecordCountOutputType
   */

  export type NumberRecordCountOutputType = {
    posts: number
  }

  export type NumberRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | NumberRecordCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * NumberRecordCountOutputType without action
   */
  export type NumberRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecordCountOutputType
     */
    select?: NumberRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NumberRecordCountOutputType without action
   */
  export type NumberRecordCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumberPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Scheduler
   */

  export type AggregateScheduler = {
    _count: SchedulerCountAggregateOutputType | null
    _min: SchedulerMinAggregateOutputType | null
    _max: SchedulerMaxAggregateOutputType | null
  }

  export type SchedulerMinAggregateOutputType = {
    id: string | null
    detailedName: string | null
    author: string | null
  }

  export type SchedulerMaxAggregateOutputType = {
    id: string | null
    detailedName: string | null
    author: string | null
  }

  export type SchedulerCountAggregateOutputType = {
    id: number
    detailedName: number
    author: number
    _all: number
  }


  export type SchedulerMinAggregateInputType = {
    id?: true
    detailedName?: true
    author?: true
  }

  export type SchedulerMaxAggregateInputType = {
    id?: true
    detailedName?: true
    author?: true
  }

  export type SchedulerCountAggregateInputType = {
    id?: true
    detailedName?: true
    author?: true
    _all?: true
  }

  export type SchedulerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scheduler to aggregate.
     */
    where?: SchedulerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulers to fetch.
     */
    orderBy?: SchedulerOrderByWithRelationInput | SchedulerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchedulerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedulers
    **/
    _count?: true | SchedulerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulerMaxAggregateInputType
  }

  export type GetSchedulerAggregateType<T extends SchedulerAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduler]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduler[P]>
      : GetScalarType<T[P], AggregateScheduler[P]>
  }




  export type SchedulerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulerWhereInput
    orderBy?: SchedulerOrderByWithAggregationInput | SchedulerOrderByWithAggregationInput[]
    by: SchedulerScalarFieldEnum[] | SchedulerScalarFieldEnum
    having?: SchedulerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulerCountAggregateInputType | true
    _min?: SchedulerMinAggregateInputType
    _max?: SchedulerMaxAggregateInputType
  }

  export type SchedulerGroupByOutputType = {
    id: string
    detailedName: string
    author: string
    _count: SchedulerCountAggregateOutputType | null
    _min: SchedulerMinAggregateOutputType | null
    _max: SchedulerMaxAggregateOutputType | null
  }

  type GetSchedulerGroupByPayload<T extends SchedulerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulerGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulerGroupByOutputType[P]>
        }
      >
    >


  export type SchedulerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detailedName?: boolean
    author?: boolean
    schedules?: boolean | Scheduler$schedulesArgs<ExtArgs>
    _count?: boolean | SchedulerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduler"]>

  export type SchedulerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detailedName?: boolean
    author?: boolean
  }, ExtArgs["result"]["scheduler"]>

  export type SchedulerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    detailedName?: boolean
    author?: boolean
  }, ExtArgs["result"]["scheduler"]>

  export type SchedulerSelectScalar = {
    id?: boolean
    detailedName?: boolean
    author?: boolean
  }

  export type SchedulerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "detailedName" | "author", ExtArgs["result"]["scheduler"]>
  export type SchedulerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | Scheduler$schedulesArgs<ExtArgs>
    _count?: boolean | SchedulerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchedulerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchedulerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchedulerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scheduler"
    objects: {
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      detailedName: string
      author: string
    }, ExtArgs["result"]["scheduler"]>
    composites: {}
  }

  type SchedulerGetPayload<S extends boolean | null | undefined | SchedulerDefaultArgs> = $Result.GetResult<Prisma.$SchedulerPayload, S>

  type SchedulerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchedulerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulerCountAggregateInputType | true
    }

  export interface SchedulerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scheduler'], meta: { name: 'Scheduler' } }
    /**
     * Find zero or one Scheduler that matches the filter.
     * @param {SchedulerFindUniqueArgs} args - Arguments to find a Scheduler
     * @example
     * // Get one Scheduler
     * const scheduler = await prisma.scheduler.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchedulerFindUniqueArgs>(args: SelectSubset<T, SchedulerFindUniqueArgs<ExtArgs>>): Prisma__SchedulerClient<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scheduler that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchedulerFindUniqueOrThrowArgs} args - Arguments to find a Scheduler
     * @example
     * // Get one Scheduler
     * const scheduler = await prisma.scheduler.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchedulerFindUniqueOrThrowArgs>(args: SelectSubset<T, SchedulerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchedulerClient<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduler that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulerFindFirstArgs} args - Arguments to find a Scheduler
     * @example
     * // Get one Scheduler
     * const scheduler = await prisma.scheduler.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchedulerFindFirstArgs>(args?: SelectSubset<T, SchedulerFindFirstArgs<ExtArgs>>): Prisma__SchedulerClient<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduler that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulerFindFirstOrThrowArgs} args - Arguments to find a Scheduler
     * @example
     * // Get one Scheduler
     * const scheduler = await prisma.scheduler.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchedulerFindFirstOrThrowArgs>(args?: SelectSubset<T, SchedulerFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchedulerClient<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedulers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedulers
     * const schedulers = await prisma.scheduler.findMany()
     * 
     * // Get first 10 Schedulers
     * const schedulers = await prisma.scheduler.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulerWithIdOnly = await prisma.scheduler.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchedulerFindManyArgs>(args?: SelectSubset<T, SchedulerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scheduler.
     * @param {SchedulerCreateArgs} args - Arguments to create a Scheduler.
     * @example
     * // Create one Scheduler
     * const Scheduler = await prisma.scheduler.create({
     *   data: {
     *     // ... data to create a Scheduler
     *   }
     * })
     * 
     */
    create<T extends SchedulerCreateArgs>(args: SelectSubset<T, SchedulerCreateArgs<ExtArgs>>): Prisma__SchedulerClient<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedulers.
     * @param {SchedulerCreateManyArgs} args - Arguments to create many Schedulers.
     * @example
     * // Create many Schedulers
     * const scheduler = await prisma.scheduler.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchedulerCreateManyArgs>(args?: SelectSubset<T, SchedulerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedulers and returns the data saved in the database.
     * @param {SchedulerCreateManyAndReturnArgs} args - Arguments to create many Schedulers.
     * @example
     * // Create many Schedulers
     * const scheduler = await prisma.scheduler.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedulers and only return the `id`
     * const schedulerWithIdOnly = await prisma.scheduler.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchedulerCreateManyAndReturnArgs>(args?: SelectSubset<T, SchedulerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scheduler.
     * @param {SchedulerDeleteArgs} args - Arguments to delete one Scheduler.
     * @example
     * // Delete one Scheduler
     * const Scheduler = await prisma.scheduler.delete({
     *   where: {
     *     // ... filter to delete one Scheduler
     *   }
     * })
     * 
     */
    delete<T extends SchedulerDeleteArgs>(args: SelectSubset<T, SchedulerDeleteArgs<ExtArgs>>): Prisma__SchedulerClient<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scheduler.
     * @param {SchedulerUpdateArgs} args - Arguments to update one Scheduler.
     * @example
     * // Update one Scheduler
     * const scheduler = await prisma.scheduler.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchedulerUpdateArgs>(args: SelectSubset<T, SchedulerUpdateArgs<ExtArgs>>): Prisma__SchedulerClient<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedulers.
     * @param {SchedulerDeleteManyArgs} args - Arguments to filter Schedulers to delete.
     * @example
     * // Delete a few Schedulers
     * const { count } = await prisma.scheduler.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchedulerDeleteManyArgs>(args?: SelectSubset<T, SchedulerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedulers
     * const scheduler = await prisma.scheduler.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchedulerUpdateManyArgs>(args: SelectSubset<T, SchedulerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulers and returns the data updated in the database.
     * @param {SchedulerUpdateManyAndReturnArgs} args - Arguments to update many Schedulers.
     * @example
     * // Update many Schedulers
     * const scheduler = await prisma.scheduler.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedulers and only return the `id`
     * const schedulerWithIdOnly = await prisma.scheduler.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SchedulerUpdateManyAndReturnArgs>(args: SelectSubset<T, SchedulerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scheduler.
     * @param {SchedulerUpsertArgs} args - Arguments to update or create a Scheduler.
     * @example
     * // Update or create a Scheduler
     * const scheduler = await prisma.scheduler.upsert({
     *   create: {
     *     // ... data to create a Scheduler
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scheduler we want to update
     *   }
     * })
     */
    upsert<T extends SchedulerUpsertArgs>(args: SelectSubset<T, SchedulerUpsertArgs<ExtArgs>>): Prisma__SchedulerClient<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedulers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulerCountArgs} args - Arguments to filter Schedulers to count.
     * @example
     * // Count the number of Schedulers
     * const count = await prisma.scheduler.count({
     *   where: {
     *     // ... the filter for the Schedulers we want to count
     *   }
     * })
    **/
    count<T extends SchedulerCountArgs>(
      args?: Subset<T, SchedulerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scheduler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulerAggregateArgs>(args: Subset<T, SchedulerAggregateArgs>): Prisma.PrismaPromise<GetSchedulerAggregateType<T>>

    /**
     * Group by Scheduler.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulerGroupByArgs} args - Group by arguments.
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
      T extends SchedulerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulerGroupByArgs['orderBy'] }
        : { orderBy?: SchedulerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchedulerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scheduler model
   */
  readonly fields: SchedulerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scheduler.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchedulerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedules<T extends Scheduler$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Scheduler$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scheduler model
   */
  interface SchedulerFieldRefs {
    readonly id: FieldRef<"Scheduler", 'String'>
    readonly detailedName: FieldRef<"Scheduler", 'String'>
    readonly author: FieldRef<"Scheduler", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Scheduler findUnique
   */
  export type SchedulerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
    /**
     * Filter, which Scheduler to fetch.
     */
    where: SchedulerWhereUniqueInput
  }

  /**
   * Scheduler findUniqueOrThrow
   */
  export type SchedulerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
    /**
     * Filter, which Scheduler to fetch.
     */
    where: SchedulerWhereUniqueInput
  }

  /**
   * Scheduler findFirst
   */
  export type SchedulerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
    /**
     * Filter, which Scheduler to fetch.
     */
    where?: SchedulerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulers to fetch.
     */
    orderBy?: SchedulerOrderByWithRelationInput | SchedulerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulers.
     */
    cursor?: SchedulerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulers.
     */
    distinct?: SchedulerScalarFieldEnum | SchedulerScalarFieldEnum[]
  }

  /**
   * Scheduler findFirstOrThrow
   */
  export type SchedulerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
    /**
     * Filter, which Scheduler to fetch.
     */
    where?: SchedulerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulers to fetch.
     */
    orderBy?: SchedulerOrderByWithRelationInput | SchedulerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulers.
     */
    cursor?: SchedulerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulers.
     */
    distinct?: SchedulerScalarFieldEnum | SchedulerScalarFieldEnum[]
  }

  /**
   * Scheduler findMany
   */
  export type SchedulerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
    /**
     * Filter, which Schedulers to fetch.
     */
    where?: SchedulerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulers to fetch.
     */
    orderBy?: SchedulerOrderByWithRelationInput | SchedulerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedulers.
     */
    cursor?: SchedulerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulers.
     */
    skip?: number
    distinct?: SchedulerScalarFieldEnum | SchedulerScalarFieldEnum[]
  }

  /**
   * Scheduler create
   */
  export type SchedulerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
    /**
     * The data needed to create a Scheduler.
     */
    data: XOR<SchedulerCreateInput, SchedulerUncheckedCreateInput>
  }

  /**
   * Scheduler createMany
   */
  export type SchedulerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedulers.
     */
    data: SchedulerCreateManyInput | SchedulerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scheduler createManyAndReturn
   */
  export type SchedulerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * The data used to create many Schedulers.
     */
    data: SchedulerCreateManyInput | SchedulerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scheduler update
   */
  export type SchedulerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
    /**
     * The data needed to update a Scheduler.
     */
    data: XOR<SchedulerUpdateInput, SchedulerUncheckedUpdateInput>
    /**
     * Choose, which Scheduler to update.
     */
    where: SchedulerWhereUniqueInput
  }

  /**
   * Scheduler updateMany
   */
  export type SchedulerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedulers.
     */
    data: XOR<SchedulerUpdateManyMutationInput, SchedulerUncheckedUpdateManyInput>
    /**
     * Filter which Schedulers to update
     */
    where?: SchedulerWhereInput
    /**
     * Limit how many Schedulers to update.
     */
    limit?: number
  }

  /**
   * Scheduler updateManyAndReturn
   */
  export type SchedulerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * The data used to update Schedulers.
     */
    data: XOR<SchedulerUpdateManyMutationInput, SchedulerUncheckedUpdateManyInput>
    /**
     * Filter which Schedulers to update
     */
    where?: SchedulerWhereInput
    /**
     * Limit how many Schedulers to update.
     */
    limit?: number
  }

  /**
   * Scheduler upsert
   */
  export type SchedulerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
    /**
     * The filter to search for the Scheduler to update in case it exists.
     */
    where: SchedulerWhereUniqueInput
    /**
     * In case the Scheduler found by the `where` argument doesn't exist, create a new Scheduler with this data.
     */
    create: XOR<SchedulerCreateInput, SchedulerUncheckedCreateInput>
    /**
     * In case the Scheduler was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchedulerUpdateInput, SchedulerUncheckedUpdateInput>
  }

  /**
   * Scheduler delete
   */
  export type SchedulerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
    /**
     * Filter which Scheduler to delete.
     */
    where: SchedulerWhereUniqueInput
  }

  /**
   * Scheduler deleteMany
   */
  export type SchedulerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedulers to delete
     */
    where?: SchedulerWhereInput
    /**
     * Limit how many Schedulers to delete.
     */
    limit?: number
  }

  /**
   * Scheduler.schedules
   */
  export type Scheduler$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Scheduler without action
   */
  export type SchedulerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduler
     */
    select?: SchedulerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduler
     */
    omit?: SchedulerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulerInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    schedulerId: string | null
    creationTime: Date | null
    toPostAt: Date | null
    posted: boolean | null
    webhook: string | null
    content: string | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    schedulerId: string | null
    creationTime: Date | null
    toPostAt: Date | null
    posted: boolean | null
    webhook: string | null
    content: string | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    schedulerId: number
    creationTime: number
    toPostAt: number
    posted: number
    webhook: number
    content: number
    details: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    schedulerId?: true
    creationTime?: true
    toPostAt?: true
    posted?: true
    webhook?: true
    content?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    schedulerId?: true
    creationTime?: true
    toPostAt?: true
    posted?: true
    webhook?: true
    content?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    schedulerId?: true
    creationTime?: true
    toPostAt?: true
    posted?: true
    webhook?: true
    content?: true
    details?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    schedulerId: string
    creationTime: Date
    toPostAt: Date
    posted: boolean
    webhook: string | null
    content: string
    details: JsonValue
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedulerId?: boolean
    creationTime?: boolean
    toPostAt?: boolean
    posted?: boolean
    webhook?: boolean
    content?: boolean
    details?: boolean
    scheduler?: boolean | SchedulerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedulerId?: boolean
    creationTime?: boolean
    toPostAt?: boolean
    posted?: boolean
    webhook?: boolean
    content?: boolean
    details?: boolean
    scheduler?: boolean | SchedulerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schedulerId?: boolean
    creationTime?: boolean
    toPostAt?: boolean
    posted?: boolean
    webhook?: boolean
    content?: boolean
    details?: boolean
    scheduler?: boolean | SchedulerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>

  export type ScheduleSelectScalar = {
    id?: boolean
    schedulerId?: boolean
    creationTime?: boolean
    toPostAt?: boolean
    posted?: boolean
    webhook?: boolean
    content?: boolean
    details?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schedulerId" | "creationTime" | "toPostAt" | "posted" | "webhook" | "content" | "details", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduler?: boolean | SchedulerDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduler?: boolean | SchedulerDefaultArgs<ExtArgs>
  }
  export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduler?: boolean | SchedulerDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      scheduler: Prisma.$SchedulerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      schedulerId: string
      creationTime: Date
      toPostAt: Date
      posted: boolean
      webhook: string | null
      content: string
      details: Prisma.JsonValue
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedules and returns the data saved in the database.
     * @param {ScheduleCreateManyAndReturnArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules and returns the data updated in the database.
     * @param {ScheduleUpdateManyAndReturnArgs} args - Arguments to update many Schedules.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedules and only return the `id`
     * const scheduleWithIdOnly = await prisma.schedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduler<T extends SchedulerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchedulerDefaultArgs<ExtArgs>>): Prisma__SchedulerClient<$Result.GetResult<Prisma.$SchedulerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly schedulerId: FieldRef<"Schedule", 'String'>
    readonly creationTime: FieldRef<"Schedule", 'DateTime'>
    readonly toPostAt: FieldRef<"Schedule", 'DateTime'>
    readonly posted: FieldRef<"Schedule", 'Boolean'>
    readonly webhook: FieldRef<"Schedule", 'String'>
    readonly content: FieldRef<"Schedule", 'String'>
    readonly details: FieldRef<"Schedule", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule createManyAndReturn
   */
  export type ScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule updateManyAndReturn
   */
  export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    area: string | null
    instructions: string | null
    thumbnail: string | null
    youtube: string | null
    source: string | null
    imageSource: string | null
    creativeCommonsConfirmed: string | null
    dateModified: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    area: string | null
    instructions: string | null
    thumbnail: string | null
    youtube: string | null
    source: string | null
    imageSource: string | null
    creativeCommonsConfirmed: string | null
    dateModified: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    name: number
    category: number
    area: number
    instructions: number
    thumbnail: number
    tags: number
    youtube: number
    source: number
    imageSource: number
    creativeCommonsConfirmed: number
    dateModified: number
    _all: number
  }


  export type MealMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    area?: true
    instructions?: true
    thumbnail?: true
    youtube?: true
    source?: true
    imageSource?: true
    creativeCommonsConfirmed?: true
    dateModified?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    area?: true
    instructions?: true
    thumbnail?: true
    youtube?: true
    source?: true
    imageSource?: true
    creativeCommonsConfirmed?: true
    dateModified?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    area?: true
    instructions?: true
    thumbnail?: true
    tags?: true
    youtube?: true
    source?: true
    imageSource?: true
    creativeCommonsConfirmed?: true
    dateModified?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: string
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    tags: string[]
    youtube: string
    source: string
    imageSource: string | null
    creativeCommonsConfirmed: string | null
    dateModified: Date | null
    _count: MealCountAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    area?: boolean
    instructions?: boolean
    thumbnail?: boolean
    tags?: boolean
    youtube?: boolean
    source?: boolean
    imageSource?: boolean
    creativeCommonsConfirmed?: boolean
    dateModified?: boolean
    ingredients?: boolean | Meal$ingredientsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    area?: boolean
    instructions?: boolean
    thumbnail?: boolean
    tags?: boolean
    youtube?: boolean
    source?: boolean
    imageSource?: boolean
    creativeCommonsConfirmed?: boolean
    dateModified?: boolean
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    area?: boolean
    instructions?: boolean
    thumbnail?: boolean
    tags?: boolean
    youtube?: boolean
    source?: boolean
    imageSource?: boolean
    creativeCommonsConfirmed?: boolean
    dateModified?: boolean
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    area?: boolean
    instructions?: boolean
    thumbnail?: boolean
    tags?: boolean
    youtube?: boolean
    source?: boolean
    imageSource?: boolean
    creativeCommonsConfirmed?: boolean
    dateModified?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "area" | "instructions" | "thumbnail" | "tags" | "youtube" | "source" | "imageSource" | "creativeCommonsConfirmed" | "dateModified", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Meal$ingredientsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      ingredients: Prisma.$IngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      area: string
      instructions: string
      thumbnail: string
      tags: string[]
      youtube: string
      source: string
      imageSource: string | null
      creativeCommonsConfirmed: string | null
      dateModified: Date | null
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Meal$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'String'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly category: FieldRef<"Meal", 'String'>
    readonly area: FieldRef<"Meal", 'String'>
    readonly instructions: FieldRef<"Meal", 'String'>
    readonly thumbnail: FieldRef<"Meal", 'String'>
    readonly tags: FieldRef<"Meal", 'String[]'>
    readonly youtube: FieldRef<"Meal", 'String'>
    readonly source: FieldRef<"Meal", 'String'>
    readonly imageSource: FieldRef<"Meal", 'String'>
    readonly creativeCommonsConfirmed: FieldRef<"Meal", 'String'>
    readonly dateModified: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal.ingredients
   */
  export type Meal$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    cursor?: IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredientSumAggregateOutputType = {
    id: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: number | null
    mealId: string | null
    ingredient: string | null
    measure: string | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: number | null
    mealId: string | null
    ingredient: string | null
    measure: string | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    mealId: number
    ingredient: number
    measure: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    id?: true
  }

  export type IngredientSumAggregateInputType = {
    id?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    mealId?: true
    ingredient?: true
    measure?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    mealId?: true
    ingredient?: true
    measure?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    mealId?: true
    ingredient?: true
    measure?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: number
    mealId: string
    ingredient: string
    measure: string
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    ingredient?: boolean
    measure?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    ingredient?: boolean
    measure?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    ingredient?: boolean
    measure?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    mealId?: boolean
    ingredient?: boolean
    measure?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mealId" | "ingredient" | "measure", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mealId: string
      ingredient: string
      measure: string
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'Int'>
    readonly mealId: FieldRef<"Ingredient", 'String'>
    readonly ingredient: FieldRef<"Ingredient", 'String'>
    readonly measure: FieldRef<"Ingredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model NumberPost
   */

  export type AggregateNumberPost = {
    _count: NumberPostCountAggregateOutputType | null
    _avg: NumberPostAvgAggregateOutputType | null
    _sum: NumberPostSumAggregateOutputType | null
    _min: NumberPostMinAggregateOutputType | null
    _max: NumberPostMaxAggregateOutputType | null
  }

  export type NumberPostAvgAggregateOutputType = {
    id: number | null
  }

  export type NumberPostSumAggregateOutputType = {
    id: number | null
  }

  export type NumberPostMinAggregateOutputType = {
    id: number | null
    number_id: string | null
    time: Date | null
    post_type: string | null
    destination_id: string | null
    sender_id: string | null
  }

  export type NumberPostMaxAggregateOutputType = {
    id: number | null
    number_id: string | null
    time: Date | null
    post_type: string | null
    destination_id: string | null
    sender_id: string | null
  }

  export type NumberPostCountAggregateOutputType = {
    id: number
    number_id: number
    time: number
    post_type: number
    destination_id: number
    sender_id: number
    content: number
    _all: number
  }


  export type NumberPostAvgAggregateInputType = {
    id?: true
  }

  export type NumberPostSumAggregateInputType = {
    id?: true
  }

  export type NumberPostMinAggregateInputType = {
    id?: true
    number_id?: true
    time?: true
    post_type?: true
    destination_id?: true
    sender_id?: true
  }

  export type NumberPostMaxAggregateInputType = {
    id?: true
    number_id?: true
    time?: true
    post_type?: true
    destination_id?: true
    sender_id?: true
  }

  export type NumberPostCountAggregateInputType = {
    id?: true
    number_id?: true
    time?: true
    post_type?: true
    destination_id?: true
    sender_id?: true
    content?: true
    _all?: true
  }

  export type NumberPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberPost to aggregate.
     */
    where?: NumberPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberPosts to fetch.
     */
    orderBy?: NumberPostOrderByWithRelationInput | NumberPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NumberPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NumberPosts
    **/
    _count?: true | NumberPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NumberPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NumberPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NumberPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NumberPostMaxAggregateInputType
  }

  export type GetNumberPostAggregateType<T extends NumberPostAggregateArgs> = {
        [P in keyof T & keyof AggregateNumberPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNumberPost[P]>
      : GetScalarType<T[P], AggregateNumberPost[P]>
  }




  export type NumberPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumberPostWhereInput
    orderBy?: NumberPostOrderByWithAggregationInput | NumberPostOrderByWithAggregationInput[]
    by: NumberPostScalarFieldEnum[] | NumberPostScalarFieldEnum
    having?: NumberPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NumberPostCountAggregateInputType | true
    _avg?: NumberPostAvgAggregateInputType
    _sum?: NumberPostSumAggregateInputType
    _min?: NumberPostMinAggregateInputType
    _max?: NumberPostMaxAggregateInputType
  }

  export type NumberPostGroupByOutputType = {
    id: number
    number_id: string
    time: Date
    post_type: string
    destination_id: string
    sender_id: string
    content: JsonValue
    _count: NumberPostCountAggregateOutputType | null
    _avg: NumberPostAvgAggregateOutputType | null
    _sum: NumberPostSumAggregateOutputType | null
    _min: NumberPostMinAggregateOutputType | null
    _max: NumberPostMaxAggregateOutputType | null
  }

  type GetNumberPostGroupByPayload<T extends NumberPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NumberPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NumberPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NumberPostGroupByOutputType[P]>
            : GetScalarType<T[P], NumberPostGroupByOutputType[P]>
        }
      >
    >


  export type NumberPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number_id?: boolean
    time?: boolean
    post_type?: boolean
    destination_id?: boolean
    sender_id?: boolean
    content?: boolean
    number?: boolean | NumberRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numberPost"]>

  export type NumberPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number_id?: boolean
    time?: boolean
    post_type?: boolean
    destination_id?: boolean
    sender_id?: boolean
    content?: boolean
    number?: boolean | NumberRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numberPost"]>

  export type NumberPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number_id?: boolean
    time?: boolean
    post_type?: boolean
    destination_id?: boolean
    sender_id?: boolean
    content?: boolean
    number?: boolean | NumberRecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numberPost"]>

  export type NumberPostSelectScalar = {
    id?: boolean
    number_id?: boolean
    time?: boolean
    post_type?: boolean
    destination_id?: boolean
    sender_id?: boolean
    content?: boolean
  }

  export type NumberPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number_id" | "time" | "post_type" | "destination_id" | "sender_id" | "content", ExtArgs["result"]["numberPost"]>
  export type NumberPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    number?: boolean | NumberRecordDefaultArgs<ExtArgs>
  }
  export type NumberPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    number?: boolean | NumberRecordDefaultArgs<ExtArgs>
  }
  export type NumberPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    number?: boolean | NumberRecordDefaultArgs<ExtArgs>
  }

  export type $NumberPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NumberPost"
    objects: {
      number: Prisma.$NumberRecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number_id: string
      time: Date
      post_type: string
      destination_id: string
      sender_id: string
      content: Prisma.JsonValue
    }, ExtArgs["result"]["numberPost"]>
    composites: {}
  }

  type NumberPostGetPayload<S extends boolean | null | undefined | NumberPostDefaultArgs> = $Result.GetResult<Prisma.$NumberPostPayload, S>

  type NumberPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NumberPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NumberPostCountAggregateInputType | true
    }

  export interface NumberPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NumberPost'], meta: { name: 'NumberPost' } }
    /**
     * Find zero or one NumberPost that matches the filter.
     * @param {NumberPostFindUniqueArgs} args - Arguments to find a NumberPost
     * @example
     * // Get one NumberPost
     * const numberPost = await prisma.numberPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NumberPostFindUniqueArgs>(args: SelectSubset<T, NumberPostFindUniqueArgs<ExtArgs>>): Prisma__NumberPostClient<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NumberPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NumberPostFindUniqueOrThrowArgs} args - Arguments to find a NumberPost
     * @example
     * // Get one NumberPost
     * const numberPost = await prisma.numberPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NumberPostFindUniqueOrThrowArgs>(args: SelectSubset<T, NumberPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NumberPostClient<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NumberPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberPostFindFirstArgs} args - Arguments to find a NumberPost
     * @example
     * // Get one NumberPost
     * const numberPost = await prisma.numberPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NumberPostFindFirstArgs>(args?: SelectSubset<T, NumberPostFindFirstArgs<ExtArgs>>): Prisma__NumberPostClient<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NumberPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberPostFindFirstOrThrowArgs} args - Arguments to find a NumberPost
     * @example
     * // Get one NumberPost
     * const numberPost = await prisma.numberPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NumberPostFindFirstOrThrowArgs>(args?: SelectSubset<T, NumberPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__NumberPostClient<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NumberPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NumberPosts
     * const numberPosts = await prisma.numberPost.findMany()
     * 
     * // Get first 10 NumberPosts
     * const numberPosts = await prisma.numberPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const numberPostWithIdOnly = await prisma.numberPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NumberPostFindManyArgs>(args?: SelectSubset<T, NumberPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NumberPost.
     * @param {NumberPostCreateArgs} args - Arguments to create a NumberPost.
     * @example
     * // Create one NumberPost
     * const NumberPost = await prisma.numberPost.create({
     *   data: {
     *     // ... data to create a NumberPost
     *   }
     * })
     * 
     */
    create<T extends NumberPostCreateArgs>(args: SelectSubset<T, NumberPostCreateArgs<ExtArgs>>): Prisma__NumberPostClient<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NumberPosts.
     * @param {NumberPostCreateManyArgs} args - Arguments to create many NumberPosts.
     * @example
     * // Create many NumberPosts
     * const numberPost = await prisma.numberPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NumberPostCreateManyArgs>(args?: SelectSubset<T, NumberPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NumberPosts and returns the data saved in the database.
     * @param {NumberPostCreateManyAndReturnArgs} args - Arguments to create many NumberPosts.
     * @example
     * // Create many NumberPosts
     * const numberPost = await prisma.numberPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NumberPosts and only return the `id`
     * const numberPostWithIdOnly = await prisma.numberPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NumberPostCreateManyAndReturnArgs>(args?: SelectSubset<T, NumberPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NumberPost.
     * @param {NumberPostDeleteArgs} args - Arguments to delete one NumberPost.
     * @example
     * // Delete one NumberPost
     * const NumberPost = await prisma.numberPost.delete({
     *   where: {
     *     // ... filter to delete one NumberPost
     *   }
     * })
     * 
     */
    delete<T extends NumberPostDeleteArgs>(args: SelectSubset<T, NumberPostDeleteArgs<ExtArgs>>): Prisma__NumberPostClient<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NumberPost.
     * @param {NumberPostUpdateArgs} args - Arguments to update one NumberPost.
     * @example
     * // Update one NumberPost
     * const numberPost = await prisma.numberPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NumberPostUpdateArgs>(args: SelectSubset<T, NumberPostUpdateArgs<ExtArgs>>): Prisma__NumberPostClient<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NumberPosts.
     * @param {NumberPostDeleteManyArgs} args - Arguments to filter NumberPosts to delete.
     * @example
     * // Delete a few NumberPosts
     * const { count } = await prisma.numberPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NumberPostDeleteManyArgs>(args?: SelectSubset<T, NumberPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumberPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NumberPosts
     * const numberPost = await prisma.numberPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NumberPostUpdateManyArgs>(args: SelectSubset<T, NumberPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumberPosts and returns the data updated in the database.
     * @param {NumberPostUpdateManyAndReturnArgs} args - Arguments to update many NumberPosts.
     * @example
     * // Update many NumberPosts
     * const numberPost = await prisma.numberPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NumberPosts and only return the `id`
     * const numberPostWithIdOnly = await prisma.numberPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NumberPostUpdateManyAndReturnArgs>(args: SelectSubset<T, NumberPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NumberPost.
     * @param {NumberPostUpsertArgs} args - Arguments to update or create a NumberPost.
     * @example
     * // Update or create a NumberPost
     * const numberPost = await prisma.numberPost.upsert({
     *   create: {
     *     // ... data to create a NumberPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NumberPost we want to update
     *   }
     * })
     */
    upsert<T extends NumberPostUpsertArgs>(args: SelectSubset<T, NumberPostUpsertArgs<ExtArgs>>): Prisma__NumberPostClient<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NumberPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberPostCountArgs} args - Arguments to filter NumberPosts to count.
     * @example
     * // Count the number of NumberPosts
     * const count = await prisma.numberPost.count({
     *   where: {
     *     // ... the filter for the NumberPosts we want to count
     *   }
     * })
    **/
    count<T extends NumberPostCountArgs>(
      args?: Subset<T, NumberPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NumberPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NumberPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NumberPostAggregateArgs>(args: Subset<T, NumberPostAggregateArgs>): Prisma.PrismaPromise<GetNumberPostAggregateType<T>>

    /**
     * Group by NumberPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberPostGroupByArgs} args - Group by arguments.
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
      T extends NumberPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NumberPostGroupByArgs['orderBy'] }
        : { orderBy?: NumberPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NumberPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumberPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NumberPost model
   */
  readonly fields: NumberPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NumberPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NumberPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    number<T extends NumberRecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NumberRecordDefaultArgs<ExtArgs>>): Prisma__NumberRecordClient<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NumberPost model
   */
  interface NumberPostFieldRefs {
    readonly id: FieldRef<"NumberPost", 'Int'>
    readonly number_id: FieldRef<"NumberPost", 'String'>
    readonly time: FieldRef<"NumberPost", 'DateTime'>
    readonly post_type: FieldRef<"NumberPost", 'String'>
    readonly destination_id: FieldRef<"NumberPost", 'String'>
    readonly sender_id: FieldRef<"NumberPost", 'String'>
    readonly content: FieldRef<"NumberPost", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * NumberPost findUnique
   */
  export type NumberPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    /**
     * Filter, which NumberPost to fetch.
     */
    where: NumberPostWhereUniqueInput
  }

  /**
   * NumberPost findUniqueOrThrow
   */
  export type NumberPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    /**
     * Filter, which NumberPost to fetch.
     */
    where: NumberPostWhereUniqueInput
  }

  /**
   * NumberPost findFirst
   */
  export type NumberPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    /**
     * Filter, which NumberPost to fetch.
     */
    where?: NumberPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberPosts to fetch.
     */
    orderBy?: NumberPostOrderByWithRelationInput | NumberPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberPosts.
     */
    cursor?: NumberPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberPosts.
     */
    distinct?: NumberPostScalarFieldEnum | NumberPostScalarFieldEnum[]
  }

  /**
   * NumberPost findFirstOrThrow
   */
  export type NumberPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    /**
     * Filter, which NumberPost to fetch.
     */
    where?: NumberPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberPosts to fetch.
     */
    orderBy?: NumberPostOrderByWithRelationInput | NumberPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberPosts.
     */
    cursor?: NumberPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberPosts.
     */
    distinct?: NumberPostScalarFieldEnum | NumberPostScalarFieldEnum[]
  }

  /**
   * NumberPost findMany
   */
  export type NumberPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    /**
     * Filter, which NumberPosts to fetch.
     */
    where?: NumberPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberPosts to fetch.
     */
    orderBy?: NumberPostOrderByWithRelationInput | NumberPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NumberPosts.
     */
    cursor?: NumberPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberPosts.
     */
    skip?: number
    distinct?: NumberPostScalarFieldEnum | NumberPostScalarFieldEnum[]
  }

  /**
   * NumberPost create
   */
  export type NumberPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    /**
     * The data needed to create a NumberPost.
     */
    data: XOR<NumberPostCreateInput, NumberPostUncheckedCreateInput>
  }

  /**
   * NumberPost createMany
   */
  export type NumberPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NumberPosts.
     */
    data: NumberPostCreateManyInput | NumberPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NumberPost createManyAndReturn
   */
  export type NumberPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * The data used to create many NumberPosts.
     */
    data: NumberPostCreateManyInput | NumberPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NumberPost update
   */
  export type NumberPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    /**
     * The data needed to update a NumberPost.
     */
    data: XOR<NumberPostUpdateInput, NumberPostUncheckedUpdateInput>
    /**
     * Choose, which NumberPost to update.
     */
    where: NumberPostWhereUniqueInput
  }

  /**
   * NumberPost updateMany
   */
  export type NumberPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NumberPosts.
     */
    data: XOR<NumberPostUpdateManyMutationInput, NumberPostUncheckedUpdateManyInput>
    /**
     * Filter which NumberPosts to update
     */
    where?: NumberPostWhereInput
    /**
     * Limit how many NumberPosts to update.
     */
    limit?: number
  }

  /**
   * NumberPost updateManyAndReturn
   */
  export type NumberPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * The data used to update NumberPosts.
     */
    data: XOR<NumberPostUpdateManyMutationInput, NumberPostUncheckedUpdateManyInput>
    /**
     * Filter which NumberPosts to update
     */
    where?: NumberPostWhereInput
    /**
     * Limit how many NumberPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NumberPost upsert
   */
  export type NumberPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    /**
     * The filter to search for the NumberPost to update in case it exists.
     */
    where: NumberPostWhereUniqueInput
    /**
     * In case the NumberPost found by the `where` argument doesn't exist, create a new NumberPost with this data.
     */
    create: XOR<NumberPostCreateInput, NumberPostUncheckedCreateInput>
    /**
     * In case the NumberPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NumberPostUpdateInput, NumberPostUncheckedUpdateInput>
  }

  /**
   * NumberPost delete
   */
  export type NumberPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    /**
     * Filter which NumberPost to delete.
     */
    where: NumberPostWhereUniqueInput
  }

  /**
   * NumberPost deleteMany
   */
  export type NumberPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberPosts to delete
     */
    where?: NumberPostWhereInput
    /**
     * Limit how many NumberPosts to delete.
     */
    limit?: number
  }

  /**
   * NumberPost without action
   */
  export type NumberPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
  }


  /**
   * Model NumberRecord
   */

  export type AggregateNumberRecord = {
    _count: NumberRecordCountAggregateOutputType | null
    _avg: NumberRecordAvgAggregateOutputType | null
    _sum: NumberRecordSumAggregateOutputType | null
    _min: NumberRecordMinAggregateOutputType | null
    _max: NumberRecordMaxAggregateOutputType | null
  }

  export type NumberRecordAvgAggregateOutputType = {
    discussionFrequency: number | null
  }

  export type NumberRecordSumAggregateOutputType = {
    discussionFrequency: number | null
  }

  export type NumberRecordMinAggregateOutputType = {
    id: string | null
    source: string | null
    saved_as: string | null
    reason: string | null
    discussionFrequency: number | null
  }

  export type NumberRecordMaxAggregateOutputType = {
    id: string | null
    source: string | null
    saved_as: string | null
    reason: string | null
    discussionFrequency: number | null
  }

  export type NumberRecordCountAggregateOutputType = {
    id: number
    source: number
    keywords: number
    saved_as: number
    reason: number
    discussionFrequency: number
    _all: number
  }


  export type NumberRecordAvgAggregateInputType = {
    discussionFrequency?: true
  }

  export type NumberRecordSumAggregateInputType = {
    discussionFrequency?: true
  }

  export type NumberRecordMinAggregateInputType = {
    id?: true
    source?: true
    saved_as?: true
    reason?: true
    discussionFrequency?: true
  }

  export type NumberRecordMaxAggregateInputType = {
    id?: true
    source?: true
    saved_as?: true
    reason?: true
    discussionFrequency?: true
  }

  export type NumberRecordCountAggregateInputType = {
    id?: true
    source?: true
    keywords?: true
    saved_as?: true
    reason?: true
    discussionFrequency?: true
    _all?: true
  }

  export type NumberRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberRecord to aggregate.
     */
    where?: NumberRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberRecords to fetch.
     */
    orderBy?: NumberRecordOrderByWithRelationInput | NumberRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NumberRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NumberRecords
    **/
    _count?: true | NumberRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NumberRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NumberRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NumberRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NumberRecordMaxAggregateInputType
  }

  export type GetNumberRecordAggregateType<T extends NumberRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateNumberRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNumberRecord[P]>
      : GetScalarType<T[P], AggregateNumberRecord[P]>
  }




  export type NumberRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumberRecordWhereInput
    orderBy?: NumberRecordOrderByWithAggregationInput | NumberRecordOrderByWithAggregationInput[]
    by: NumberRecordScalarFieldEnum[] | NumberRecordScalarFieldEnum
    having?: NumberRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NumberRecordCountAggregateInputType | true
    _avg?: NumberRecordAvgAggregateInputType
    _sum?: NumberRecordSumAggregateInputType
    _min?: NumberRecordMinAggregateInputType
    _max?: NumberRecordMaxAggregateInputType
  }

  export type NumberRecordGroupByOutputType = {
    id: string
    source: string
    keywords: string[]
    saved_as: string | null
    reason: string | null
    discussionFrequency: number | null
    _count: NumberRecordCountAggregateOutputType | null
    _avg: NumberRecordAvgAggregateOutputType | null
    _sum: NumberRecordSumAggregateOutputType | null
    _min: NumberRecordMinAggregateOutputType | null
    _max: NumberRecordMaxAggregateOutputType | null
  }

  type GetNumberRecordGroupByPayload<T extends NumberRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NumberRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NumberRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NumberRecordGroupByOutputType[P]>
            : GetScalarType<T[P], NumberRecordGroupByOutputType[P]>
        }
      >
    >


  export type NumberRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    keywords?: boolean
    saved_as?: boolean
    reason?: boolean
    discussionFrequency?: boolean
    posts?: boolean | NumberRecord$postsArgs<ExtArgs>
    _count?: boolean | NumberRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numberRecord"]>

  export type NumberRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    keywords?: boolean
    saved_as?: boolean
    reason?: boolean
    discussionFrequency?: boolean
  }, ExtArgs["result"]["numberRecord"]>

  export type NumberRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    keywords?: boolean
    saved_as?: boolean
    reason?: boolean
    discussionFrequency?: boolean
  }, ExtArgs["result"]["numberRecord"]>

  export type NumberRecordSelectScalar = {
    id?: boolean
    source?: boolean
    keywords?: boolean
    saved_as?: boolean
    reason?: boolean
    discussionFrequency?: boolean
  }

  export type NumberRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "keywords" | "saved_as" | "reason" | "discussionFrequency", ExtArgs["result"]["numberRecord"]>
  export type NumberRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | NumberRecord$postsArgs<ExtArgs>
    _count?: boolean | NumberRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NumberRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NumberRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NumberRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NumberRecord"
    objects: {
      posts: Prisma.$NumberPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      keywords: string[]
      saved_as: string | null
      reason: string | null
      discussionFrequency: number | null
    }, ExtArgs["result"]["numberRecord"]>
    composites: {}
  }

  type NumberRecordGetPayload<S extends boolean | null | undefined | NumberRecordDefaultArgs> = $Result.GetResult<Prisma.$NumberRecordPayload, S>

  type NumberRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NumberRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NumberRecordCountAggregateInputType | true
    }

  export interface NumberRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NumberRecord'], meta: { name: 'NumberRecord' } }
    /**
     * Find zero or one NumberRecord that matches the filter.
     * @param {NumberRecordFindUniqueArgs} args - Arguments to find a NumberRecord
     * @example
     * // Get one NumberRecord
     * const numberRecord = await prisma.numberRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NumberRecordFindUniqueArgs>(args: SelectSubset<T, NumberRecordFindUniqueArgs<ExtArgs>>): Prisma__NumberRecordClient<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NumberRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NumberRecordFindUniqueOrThrowArgs} args - Arguments to find a NumberRecord
     * @example
     * // Get one NumberRecord
     * const numberRecord = await prisma.numberRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NumberRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, NumberRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NumberRecordClient<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NumberRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberRecordFindFirstArgs} args - Arguments to find a NumberRecord
     * @example
     * // Get one NumberRecord
     * const numberRecord = await prisma.numberRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NumberRecordFindFirstArgs>(args?: SelectSubset<T, NumberRecordFindFirstArgs<ExtArgs>>): Prisma__NumberRecordClient<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NumberRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberRecordFindFirstOrThrowArgs} args - Arguments to find a NumberRecord
     * @example
     * // Get one NumberRecord
     * const numberRecord = await prisma.numberRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NumberRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, NumberRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__NumberRecordClient<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NumberRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NumberRecords
     * const numberRecords = await prisma.numberRecord.findMany()
     * 
     * // Get first 10 NumberRecords
     * const numberRecords = await prisma.numberRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const numberRecordWithIdOnly = await prisma.numberRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NumberRecordFindManyArgs>(args?: SelectSubset<T, NumberRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NumberRecord.
     * @param {NumberRecordCreateArgs} args - Arguments to create a NumberRecord.
     * @example
     * // Create one NumberRecord
     * const NumberRecord = await prisma.numberRecord.create({
     *   data: {
     *     // ... data to create a NumberRecord
     *   }
     * })
     * 
     */
    create<T extends NumberRecordCreateArgs>(args: SelectSubset<T, NumberRecordCreateArgs<ExtArgs>>): Prisma__NumberRecordClient<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NumberRecords.
     * @param {NumberRecordCreateManyArgs} args - Arguments to create many NumberRecords.
     * @example
     * // Create many NumberRecords
     * const numberRecord = await prisma.numberRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NumberRecordCreateManyArgs>(args?: SelectSubset<T, NumberRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NumberRecords and returns the data saved in the database.
     * @param {NumberRecordCreateManyAndReturnArgs} args - Arguments to create many NumberRecords.
     * @example
     * // Create many NumberRecords
     * const numberRecord = await prisma.numberRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NumberRecords and only return the `id`
     * const numberRecordWithIdOnly = await prisma.numberRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NumberRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, NumberRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NumberRecord.
     * @param {NumberRecordDeleteArgs} args - Arguments to delete one NumberRecord.
     * @example
     * // Delete one NumberRecord
     * const NumberRecord = await prisma.numberRecord.delete({
     *   where: {
     *     // ... filter to delete one NumberRecord
     *   }
     * })
     * 
     */
    delete<T extends NumberRecordDeleteArgs>(args: SelectSubset<T, NumberRecordDeleteArgs<ExtArgs>>): Prisma__NumberRecordClient<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NumberRecord.
     * @param {NumberRecordUpdateArgs} args - Arguments to update one NumberRecord.
     * @example
     * // Update one NumberRecord
     * const numberRecord = await prisma.numberRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NumberRecordUpdateArgs>(args: SelectSubset<T, NumberRecordUpdateArgs<ExtArgs>>): Prisma__NumberRecordClient<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NumberRecords.
     * @param {NumberRecordDeleteManyArgs} args - Arguments to filter NumberRecords to delete.
     * @example
     * // Delete a few NumberRecords
     * const { count } = await prisma.numberRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NumberRecordDeleteManyArgs>(args?: SelectSubset<T, NumberRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumberRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NumberRecords
     * const numberRecord = await prisma.numberRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NumberRecordUpdateManyArgs>(args: SelectSubset<T, NumberRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumberRecords and returns the data updated in the database.
     * @param {NumberRecordUpdateManyAndReturnArgs} args - Arguments to update many NumberRecords.
     * @example
     * // Update many NumberRecords
     * const numberRecord = await prisma.numberRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NumberRecords and only return the `id`
     * const numberRecordWithIdOnly = await prisma.numberRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NumberRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, NumberRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NumberRecord.
     * @param {NumberRecordUpsertArgs} args - Arguments to update or create a NumberRecord.
     * @example
     * // Update or create a NumberRecord
     * const numberRecord = await prisma.numberRecord.upsert({
     *   create: {
     *     // ... data to create a NumberRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NumberRecord we want to update
     *   }
     * })
     */
    upsert<T extends NumberRecordUpsertArgs>(args: SelectSubset<T, NumberRecordUpsertArgs<ExtArgs>>): Prisma__NumberRecordClient<$Result.GetResult<Prisma.$NumberRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NumberRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberRecordCountArgs} args - Arguments to filter NumberRecords to count.
     * @example
     * // Count the number of NumberRecords
     * const count = await prisma.numberRecord.count({
     *   where: {
     *     // ... the filter for the NumberRecords we want to count
     *   }
     * })
    **/
    count<T extends NumberRecordCountArgs>(
      args?: Subset<T, NumberRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NumberRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NumberRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NumberRecordAggregateArgs>(args: Subset<T, NumberRecordAggregateArgs>): Prisma.PrismaPromise<GetNumberRecordAggregateType<T>>

    /**
     * Group by NumberRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberRecordGroupByArgs} args - Group by arguments.
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
      T extends NumberRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NumberRecordGroupByArgs['orderBy'] }
        : { orderBy?: NumberRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NumberRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumberRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NumberRecord model
   */
  readonly fields: NumberRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NumberRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NumberRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends NumberRecord$postsArgs<ExtArgs> = {}>(args?: Subset<T, NumberRecord$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumberPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NumberRecord model
   */
  interface NumberRecordFieldRefs {
    readonly id: FieldRef<"NumberRecord", 'String'>
    readonly source: FieldRef<"NumberRecord", 'String'>
    readonly keywords: FieldRef<"NumberRecord", 'String[]'>
    readonly saved_as: FieldRef<"NumberRecord", 'String'>
    readonly reason: FieldRef<"NumberRecord", 'String'>
    readonly discussionFrequency: FieldRef<"NumberRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NumberRecord findUnique
   */
  export type NumberRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
    /**
     * Filter, which NumberRecord to fetch.
     */
    where: NumberRecordWhereUniqueInput
  }

  /**
   * NumberRecord findUniqueOrThrow
   */
  export type NumberRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
    /**
     * Filter, which NumberRecord to fetch.
     */
    where: NumberRecordWhereUniqueInput
  }

  /**
   * NumberRecord findFirst
   */
  export type NumberRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
    /**
     * Filter, which NumberRecord to fetch.
     */
    where?: NumberRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberRecords to fetch.
     */
    orderBy?: NumberRecordOrderByWithRelationInput | NumberRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberRecords.
     */
    cursor?: NumberRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberRecords.
     */
    distinct?: NumberRecordScalarFieldEnum | NumberRecordScalarFieldEnum[]
  }

  /**
   * NumberRecord findFirstOrThrow
   */
  export type NumberRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
    /**
     * Filter, which NumberRecord to fetch.
     */
    where?: NumberRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberRecords to fetch.
     */
    orderBy?: NumberRecordOrderByWithRelationInput | NumberRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberRecords.
     */
    cursor?: NumberRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberRecords.
     */
    distinct?: NumberRecordScalarFieldEnum | NumberRecordScalarFieldEnum[]
  }

  /**
   * NumberRecord findMany
   */
  export type NumberRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
    /**
     * Filter, which NumberRecords to fetch.
     */
    where?: NumberRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberRecords to fetch.
     */
    orderBy?: NumberRecordOrderByWithRelationInput | NumberRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NumberRecords.
     */
    cursor?: NumberRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberRecords.
     */
    skip?: number
    distinct?: NumberRecordScalarFieldEnum | NumberRecordScalarFieldEnum[]
  }

  /**
   * NumberRecord create
   */
  export type NumberRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a NumberRecord.
     */
    data: XOR<NumberRecordCreateInput, NumberRecordUncheckedCreateInput>
  }

  /**
   * NumberRecord createMany
   */
  export type NumberRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NumberRecords.
     */
    data: NumberRecordCreateManyInput | NumberRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NumberRecord createManyAndReturn
   */
  export type NumberRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * The data used to create many NumberRecords.
     */
    data: NumberRecordCreateManyInput | NumberRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NumberRecord update
   */
  export type NumberRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a NumberRecord.
     */
    data: XOR<NumberRecordUpdateInput, NumberRecordUncheckedUpdateInput>
    /**
     * Choose, which NumberRecord to update.
     */
    where: NumberRecordWhereUniqueInput
  }

  /**
   * NumberRecord updateMany
   */
  export type NumberRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NumberRecords.
     */
    data: XOR<NumberRecordUpdateManyMutationInput, NumberRecordUncheckedUpdateManyInput>
    /**
     * Filter which NumberRecords to update
     */
    where?: NumberRecordWhereInput
    /**
     * Limit how many NumberRecords to update.
     */
    limit?: number
  }

  /**
   * NumberRecord updateManyAndReturn
   */
  export type NumberRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * The data used to update NumberRecords.
     */
    data: XOR<NumberRecordUpdateManyMutationInput, NumberRecordUncheckedUpdateManyInput>
    /**
     * Filter which NumberRecords to update
     */
    where?: NumberRecordWhereInput
    /**
     * Limit how many NumberRecords to update.
     */
    limit?: number
  }

  /**
   * NumberRecord upsert
   */
  export type NumberRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the NumberRecord to update in case it exists.
     */
    where: NumberRecordWhereUniqueInput
    /**
     * In case the NumberRecord found by the `where` argument doesn't exist, create a new NumberRecord with this data.
     */
    create: XOR<NumberRecordCreateInput, NumberRecordUncheckedCreateInput>
    /**
     * In case the NumberRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NumberRecordUpdateInput, NumberRecordUncheckedUpdateInput>
  }

  /**
   * NumberRecord delete
   */
  export type NumberRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
    /**
     * Filter which NumberRecord to delete.
     */
    where: NumberRecordWhereUniqueInput
  }

  /**
   * NumberRecord deleteMany
   */
  export type NumberRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberRecords to delete
     */
    where?: NumberRecordWhereInput
    /**
     * Limit how many NumberRecords to delete.
     */
    limit?: number
  }

  /**
   * NumberRecord.posts
   */
  export type NumberRecord$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberPost
     */
    select?: NumberPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberPost
     */
    omit?: NumberPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberPostInclude<ExtArgs> | null
    where?: NumberPostWhereInput
    orderBy?: NumberPostOrderByWithRelationInput | NumberPostOrderByWithRelationInput[]
    cursor?: NumberPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NumberPostScalarFieldEnum | NumberPostScalarFieldEnum[]
  }

  /**
   * NumberRecord without action
   */
  export type NumberRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberRecord
     */
    select?: NumberRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NumberRecord
     */
    omit?: NumberRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumberRecordInclude<ExtArgs> | null
  }


  /**
   * Model CodeBlueprint
   */

  export type AggregateCodeBlueprint = {
    _count: CodeBlueprintCountAggregateOutputType | null
    _avg: CodeBlueprintAvgAggregateOutputType | null
    _sum: CodeBlueprintSumAggregateOutputType | null
    _min: CodeBlueprintMinAggregateOutputType | null
    _max: CodeBlueprintMaxAggregateOutputType | null
  }

  export type CodeBlueprintAvgAggregateOutputType = {
    id: number | null
  }

  export type CodeBlueprintSumAggregateOutputType = {
    id: number | null
  }

  export type CodeBlueprintMinAggregateOutputType = {
    id: number | null
    code: string | null
  }

  export type CodeBlueprintMaxAggregateOutputType = {
    id: number | null
    code: string | null
  }

  export type CodeBlueprintCountAggregateOutputType = {
    id: number
    code: number
    metadata: number
    _all: number
  }


  export type CodeBlueprintAvgAggregateInputType = {
    id?: true
  }

  export type CodeBlueprintSumAggregateInputType = {
    id?: true
  }

  export type CodeBlueprintMinAggregateInputType = {
    id?: true
    code?: true
  }

  export type CodeBlueprintMaxAggregateInputType = {
    id?: true
    code?: true
  }

  export type CodeBlueprintCountAggregateInputType = {
    id?: true
    code?: true
    metadata?: true
    _all?: true
  }

  export type CodeBlueprintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeBlueprint to aggregate.
     */
    where?: CodeBlueprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeBlueprints to fetch.
     */
    orderBy?: CodeBlueprintOrderByWithRelationInput | CodeBlueprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeBlueprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeBlueprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeBlueprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeBlueprints
    **/
    _count?: true | CodeBlueprintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeBlueprintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeBlueprintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeBlueprintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeBlueprintMaxAggregateInputType
  }

  export type GetCodeBlueprintAggregateType<T extends CodeBlueprintAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeBlueprint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeBlueprint[P]>
      : GetScalarType<T[P], AggregateCodeBlueprint[P]>
  }




  export type CodeBlueprintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeBlueprintWhereInput
    orderBy?: CodeBlueprintOrderByWithAggregationInput | CodeBlueprintOrderByWithAggregationInput[]
    by: CodeBlueprintScalarFieldEnum[] | CodeBlueprintScalarFieldEnum
    having?: CodeBlueprintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeBlueprintCountAggregateInputType | true
    _avg?: CodeBlueprintAvgAggregateInputType
    _sum?: CodeBlueprintSumAggregateInputType
    _min?: CodeBlueprintMinAggregateInputType
    _max?: CodeBlueprintMaxAggregateInputType
  }

  export type CodeBlueprintGroupByOutputType = {
    id: number
    code: string
    metadata: JsonValue
    _count: CodeBlueprintCountAggregateOutputType | null
    _avg: CodeBlueprintAvgAggregateOutputType | null
    _sum: CodeBlueprintSumAggregateOutputType | null
    _min: CodeBlueprintMinAggregateOutputType | null
    _max: CodeBlueprintMaxAggregateOutputType | null
  }

  type GetCodeBlueprintGroupByPayload<T extends CodeBlueprintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeBlueprintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeBlueprintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeBlueprintGroupByOutputType[P]>
            : GetScalarType<T[P], CodeBlueprintGroupByOutputType[P]>
        }
      >
    >


  export type CodeBlueprintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["codeBlueprint"]>

  export type CodeBlueprintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["codeBlueprint"]>

  export type CodeBlueprintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["codeBlueprint"]>

  export type CodeBlueprintSelectScalar = {
    id?: boolean
    code?: boolean
    metadata?: boolean
  }

  export type CodeBlueprintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "metadata", ExtArgs["result"]["codeBlueprint"]>

  export type $CodeBlueprintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeBlueprint"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["codeBlueprint"]>
    composites: {}
  }

  type CodeBlueprintGetPayload<S extends boolean | null | undefined | CodeBlueprintDefaultArgs> = $Result.GetResult<Prisma.$CodeBlueprintPayload, S>

  type CodeBlueprintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeBlueprintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeBlueprintCountAggregateInputType | true
    }

  export interface CodeBlueprintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeBlueprint'], meta: { name: 'CodeBlueprint' } }
    /**
     * Find zero or one CodeBlueprint that matches the filter.
     * @param {CodeBlueprintFindUniqueArgs} args - Arguments to find a CodeBlueprint
     * @example
     * // Get one CodeBlueprint
     * const codeBlueprint = await prisma.codeBlueprint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeBlueprintFindUniqueArgs>(args: SelectSubset<T, CodeBlueprintFindUniqueArgs<ExtArgs>>): Prisma__CodeBlueprintClient<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeBlueprint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeBlueprintFindUniqueOrThrowArgs} args - Arguments to find a CodeBlueprint
     * @example
     * // Get one CodeBlueprint
     * const codeBlueprint = await prisma.codeBlueprint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeBlueprintFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeBlueprintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeBlueprintClient<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeBlueprint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeBlueprintFindFirstArgs} args - Arguments to find a CodeBlueprint
     * @example
     * // Get one CodeBlueprint
     * const codeBlueprint = await prisma.codeBlueprint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeBlueprintFindFirstArgs>(args?: SelectSubset<T, CodeBlueprintFindFirstArgs<ExtArgs>>): Prisma__CodeBlueprintClient<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeBlueprint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeBlueprintFindFirstOrThrowArgs} args - Arguments to find a CodeBlueprint
     * @example
     * // Get one CodeBlueprint
     * const codeBlueprint = await prisma.codeBlueprint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeBlueprintFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeBlueprintFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeBlueprintClient<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeBlueprints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeBlueprintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeBlueprints
     * const codeBlueprints = await prisma.codeBlueprint.findMany()
     * 
     * // Get first 10 CodeBlueprints
     * const codeBlueprints = await prisma.codeBlueprint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeBlueprintWithIdOnly = await prisma.codeBlueprint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeBlueprintFindManyArgs>(args?: SelectSubset<T, CodeBlueprintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeBlueprint.
     * @param {CodeBlueprintCreateArgs} args - Arguments to create a CodeBlueprint.
     * @example
     * // Create one CodeBlueprint
     * const CodeBlueprint = await prisma.codeBlueprint.create({
     *   data: {
     *     // ... data to create a CodeBlueprint
     *   }
     * })
     * 
     */
    create<T extends CodeBlueprintCreateArgs>(args: SelectSubset<T, CodeBlueprintCreateArgs<ExtArgs>>): Prisma__CodeBlueprintClient<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeBlueprints.
     * @param {CodeBlueprintCreateManyArgs} args - Arguments to create many CodeBlueprints.
     * @example
     * // Create many CodeBlueprints
     * const codeBlueprint = await prisma.codeBlueprint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeBlueprintCreateManyArgs>(args?: SelectSubset<T, CodeBlueprintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeBlueprints and returns the data saved in the database.
     * @param {CodeBlueprintCreateManyAndReturnArgs} args - Arguments to create many CodeBlueprints.
     * @example
     * // Create many CodeBlueprints
     * const codeBlueprint = await prisma.codeBlueprint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeBlueprints and only return the `id`
     * const codeBlueprintWithIdOnly = await prisma.codeBlueprint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeBlueprintCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeBlueprintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodeBlueprint.
     * @param {CodeBlueprintDeleteArgs} args - Arguments to delete one CodeBlueprint.
     * @example
     * // Delete one CodeBlueprint
     * const CodeBlueprint = await prisma.codeBlueprint.delete({
     *   where: {
     *     // ... filter to delete one CodeBlueprint
     *   }
     * })
     * 
     */
    delete<T extends CodeBlueprintDeleteArgs>(args: SelectSubset<T, CodeBlueprintDeleteArgs<ExtArgs>>): Prisma__CodeBlueprintClient<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeBlueprint.
     * @param {CodeBlueprintUpdateArgs} args - Arguments to update one CodeBlueprint.
     * @example
     * // Update one CodeBlueprint
     * const codeBlueprint = await prisma.codeBlueprint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeBlueprintUpdateArgs>(args: SelectSubset<T, CodeBlueprintUpdateArgs<ExtArgs>>): Prisma__CodeBlueprintClient<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeBlueprints.
     * @param {CodeBlueprintDeleteManyArgs} args - Arguments to filter CodeBlueprints to delete.
     * @example
     * // Delete a few CodeBlueprints
     * const { count } = await prisma.codeBlueprint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeBlueprintDeleteManyArgs>(args?: SelectSubset<T, CodeBlueprintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeBlueprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeBlueprintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeBlueprints
     * const codeBlueprint = await prisma.codeBlueprint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeBlueprintUpdateManyArgs>(args: SelectSubset<T, CodeBlueprintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeBlueprints and returns the data updated in the database.
     * @param {CodeBlueprintUpdateManyAndReturnArgs} args - Arguments to update many CodeBlueprints.
     * @example
     * // Update many CodeBlueprints
     * const codeBlueprint = await prisma.codeBlueprint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodeBlueprints and only return the `id`
     * const codeBlueprintWithIdOnly = await prisma.codeBlueprint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeBlueprintUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeBlueprintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodeBlueprint.
     * @param {CodeBlueprintUpsertArgs} args - Arguments to update or create a CodeBlueprint.
     * @example
     * // Update or create a CodeBlueprint
     * const codeBlueprint = await prisma.codeBlueprint.upsert({
     *   create: {
     *     // ... data to create a CodeBlueprint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeBlueprint we want to update
     *   }
     * })
     */
    upsert<T extends CodeBlueprintUpsertArgs>(args: SelectSubset<T, CodeBlueprintUpsertArgs<ExtArgs>>): Prisma__CodeBlueprintClient<$Result.GetResult<Prisma.$CodeBlueprintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeBlueprints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeBlueprintCountArgs} args - Arguments to filter CodeBlueprints to count.
     * @example
     * // Count the number of CodeBlueprints
     * const count = await prisma.codeBlueprint.count({
     *   where: {
     *     // ... the filter for the CodeBlueprints we want to count
     *   }
     * })
    **/
    count<T extends CodeBlueprintCountArgs>(
      args?: Subset<T, CodeBlueprintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeBlueprintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeBlueprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeBlueprintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeBlueprintAggregateArgs>(args: Subset<T, CodeBlueprintAggregateArgs>): Prisma.PrismaPromise<GetCodeBlueprintAggregateType<T>>

    /**
     * Group by CodeBlueprint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeBlueprintGroupByArgs} args - Group by arguments.
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
      T extends CodeBlueprintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeBlueprintGroupByArgs['orderBy'] }
        : { orderBy?: CodeBlueprintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeBlueprintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeBlueprintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeBlueprint model
   */
  readonly fields: CodeBlueprintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeBlueprint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeBlueprintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodeBlueprint model
   */
  interface CodeBlueprintFieldRefs {
    readonly id: FieldRef<"CodeBlueprint", 'Int'>
    readonly code: FieldRef<"CodeBlueprint", 'String'>
    readonly metadata: FieldRef<"CodeBlueprint", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * CodeBlueprint findUnique
   */
  export type CodeBlueprintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * Filter, which CodeBlueprint to fetch.
     */
    where: CodeBlueprintWhereUniqueInput
  }

  /**
   * CodeBlueprint findUniqueOrThrow
   */
  export type CodeBlueprintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * Filter, which CodeBlueprint to fetch.
     */
    where: CodeBlueprintWhereUniqueInput
  }

  /**
   * CodeBlueprint findFirst
   */
  export type CodeBlueprintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * Filter, which CodeBlueprint to fetch.
     */
    where?: CodeBlueprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeBlueprints to fetch.
     */
    orderBy?: CodeBlueprintOrderByWithRelationInput | CodeBlueprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeBlueprints.
     */
    cursor?: CodeBlueprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeBlueprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeBlueprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeBlueprints.
     */
    distinct?: CodeBlueprintScalarFieldEnum | CodeBlueprintScalarFieldEnum[]
  }

  /**
   * CodeBlueprint findFirstOrThrow
   */
  export type CodeBlueprintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * Filter, which CodeBlueprint to fetch.
     */
    where?: CodeBlueprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeBlueprints to fetch.
     */
    orderBy?: CodeBlueprintOrderByWithRelationInput | CodeBlueprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeBlueprints.
     */
    cursor?: CodeBlueprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeBlueprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeBlueprints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeBlueprints.
     */
    distinct?: CodeBlueprintScalarFieldEnum | CodeBlueprintScalarFieldEnum[]
  }

  /**
   * CodeBlueprint findMany
   */
  export type CodeBlueprintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * Filter, which CodeBlueprints to fetch.
     */
    where?: CodeBlueprintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeBlueprints to fetch.
     */
    orderBy?: CodeBlueprintOrderByWithRelationInput | CodeBlueprintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeBlueprints.
     */
    cursor?: CodeBlueprintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeBlueprints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeBlueprints.
     */
    skip?: number
    distinct?: CodeBlueprintScalarFieldEnum | CodeBlueprintScalarFieldEnum[]
  }

  /**
   * CodeBlueprint create
   */
  export type CodeBlueprintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * The data needed to create a CodeBlueprint.
     */
    data: XOR<CodeBlueprintCreateInput, CodeBlueprintUncheckedCreateInput>
  }

  /**
   * CodeBlueprint createMany
   */
  export type CodeBlueprintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeBlueprints.
     */
    data: CodeBlueprintCreateManyInput | CodeBlueprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeBlueprint createManyAndReturn
   */
  export type CodeBlueprintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * The data used to create many CodeBlueprints.
     */
    data: CodeBlueprintCreateManyInput | CodeBlueprintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeBlueprint update
   */
  export type CodeBlueprintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * The data needed to update a CodeBlueprint.
     */
    data: XOR<CodeBlueprintUpdateInput, CodeBlueprintUncheckedUpdateInput>
    /**
     * Choose, which CodeBlueprint to update.
     */
    where: CodeBlueprintWhereUniqueInput
  }

  /**
   * CodeBlueprint updateMany
   */
  export type CodeBlueprintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeBlueprints.
     */
    data: XOR<CodeBlueprintUpdateManyMutationInput, CodeBlueprintUncheckedUpdateManyInput>
    /**
     * Filter which CodeBlueprints to update
     */
    where?: CodeBlueprintWhereInput
    /**
     * Limit how many CodeBlueprints to update.
     */
    limit?: number
  }

  /**
   * CodeBlueprint updateManyAndReturn
   */
  export type CodeBlueprintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * The data used to update CodeBlueprints.
     */
    data: XOR<CodeBlueprintUpdateManyMutationInput, CodeBlueprintUncheckedUpdateManyInput>
    /**
     * Filter which CodeBlueprints to update
     */
    where?: CodeBlueprintWhereInput
    /**
     * Limit how many CodeBlueprints to update.
     */
    limit?: number
  }

  /**
   * CodeBlueprint upsert
   */
  export type CodeBlueprintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * The filter to search for the CodeBlueprint to update in case it exists.
     */
    where: CodeBlueprintWhereUniqueInput
    /**
     * In case the CodeBlueprint found by the `where` argument doesn't exist, create a new CodeBlueprint with this data.
     */
    create: XOR<CodeBlueprintCreateInput, CodeBlueprintUncheckedCreateInput>
    /**
     * In case the CodeBlueprint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeBlueprintUpdateInput, CodeBlueprintUncheckedUpdateInput>
  }

  /**
   * CodeBlueprint delete
   */
  export type CodeBlueprintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
    /**
     * Filter which CodeBlueprint to delete.
     */
    where: CodeBlueprintWhereUniqueInput
  }

  /**
   * CodeBlueprint deleteMany
   */
  export type CodeBlueprintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeBlueprints to delete
     */
    where?: CodeBlueprintWhereInput
    /**
     * Limit how many CodeBlueprints to delete.
     */
    limit?: number
  }

  /**
   * CodeBlueprint without action
   */
  export type CodeBlueprintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeBlueprint
     */
    select?: CodeBlueprintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeBlueprint
     */
    omit?: CodeBlueprintOmit<ExtArgs> | null
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


  export const SchedulerScalarFieldEnum: {
    id: 'id',
    detailedName: 'detailedName',
    author: 'author'
  };

  export type SchedulerScalarFieldEnum = (typeof SchedulerScalarFieldEnum)[keyof typeof SchedulerScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    schedulerId: 'schedulerId',
    creationTime: 'creationTime',
    toPostAt: 'toPostAt',
    posted: 'posted',
    webhook: 'webhook',
    content: 'content',
    details: 'details'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    area: 'area',
    instructions: 'instructions',
    thumbnail: 'thumbnail',
    tags: 'tags',
    youtube: 'youtube',
    source: 'source',
    imageSource: 'imageSource',
    creativeCommonsConfirmed: 'creativeCommonsConfirmed',
    dateModified: 'dateModified'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    mealId: 'mealId',
    ingredient: 'ingredient',
    measure: 'measure'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const NumberPostScalarFieldEnum: {
    id: 'id',
    number_id: 'number_id',
    time: 'time',
    post_type: 'post_type',
    destination_id: 'destination_id',
    sender_id: 'sender_id',
    content: 'content'
  };

  export type NumberPostScalarFieldEnum = (typeof NumberPostScalarFieldEnum)[keyof typeof NumberPostScalarFieldEnum]


  export const NumberRecordScalarFieldEnum: {
    id: 'id',
    source: 'source',
    keywords: 'keywords',
    saved_as: 'saved_as',
    reason: 'reason',
    discussionFrequency: 'discussionFrequency'
  };

  export type NumberRecordScalarFieldEnum = (typeof NumberRecordScalarFieldEnum)[keyof typeof NumberRecordScalarFieldEnum]


  export const CodeBlueprintScalarFieldEnum: {
    id: 'id',
    code: 'code',
    metadata: 'metadata'
  };

  export type CodeBlueprintScalarFieldEnum = (typeof CodeBlueprintScalarFieldEnum)[keyof typeof CodeBlueprintScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type SchedulerWhereInput = {
    AND?: SchedulerWhereInput | SchedulerWhereInput[]
    OR?: SchedulerWhereInput[]
    NOT?: SchedulerWhereInput | SchedulerWhereInput[]
    id?: StringFilter<"Scheduler"> | string
    detailedName?: StringFilter<"Scheduler"> | string
    author?: StringFilter<"Scheduler"> | string
    schedules?: ScheduleListRelationFilter
  }

  export type SchedulerOrderByWithRelationInput = {
    id?: SortOrder
    detailedName?: SortOrder
    author?: SortOrder
    schedules?: ScheduleOrderByRelationAggregateInput
  }

  export type SchedulerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchedulerWhereInput | SchedulerWhereInput[]
    OR?: SchedulerWhereInput[]
    NOT?: SchedulerWhereInput | SchedulerWhereInput[]
    detailedName?: StringFilter<"Scheduler"> | string
    author?: StringFilter<"Scheduler"> | string
    schedules?: ScheduleListRelationFilter
  }, "id">

  export type SchedulerOrderByWithAggregationInput = {
    id?: SortOrder
    detailedName?: SortOrder
    author?: SortOrder
    _count?: SchedulerCountOrderByAggregateInput
    _max?: SchedulerMaxOrderByAggregateInput
    _min?: SchedulerMinOrderByAggregateInput
  }

  export type SchedulerScalarWhereWithAggregatesInput = {
    AND?: SchedulerScalarWhereWithAggregatesInput | SchedulerScalarWhereWithAggregatesInput[]
    OR?: SchedulerScalarWhereWithAggregatesInput[]
    NOT?: SchedulerScalarWhereWithAggregatesInput | SchedulerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scheduler"> | string
    detailedName?: StringWithAggregatesFilter<"Scheduler"> | string
    author?: StringWithAggregatesFilter<"Scheduler"> | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    schedulerId?: StringFilter<"Schedule"> | string
    creationTime?: DateTimeFilter<"Schedule"> | Date | string
    toPostAt?: DateTimeFilter<"Schedule"> | Date | string
    posted?: BoolFilter<"Schedule"> | boolean
    webhook?: StringNullableFilter<"Schedule"> | string | null
    content?: StringFilter<"Schedule"> | string
    details?: JsonFilter<"Schedule">
    scheduler?: XOR<SchedulerScalarRelationFilter, SchedulerWhereInput>
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    schedulerId?: SortOrder
    creationTime?: SortOrder
    toPostAt?: SortOrder
    posted?: SortOrder
    webhook?: SortOrderInput | SortOrder
    content?: SortOrder
    details?: SortOrder
    scheduler?: SchedulerOrderByWithRelationInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    schedulerId?: StringFilter<"Schedule"> | string
    creationTime?: DateTimeFilter<"Schedule"> | Date | string
    toPostAt?: DateTimeFilter<"Schedule"> | Date | string
    posted?: BoolFilter<"Schedule"> | boolean
    webhook?: StringNullableFilter<"Schedule"> | string | null
    content?: StringFilter<"Schedule"> | string
    details?: JsonFilter<"Schedule">
    scheduler?: XOR<SchedulerScalarRelationFilter, SchedulerWhereInput>
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    schedulerId?: SortOrder
    creationTime?: SortOrder
    toPostAt?: SortOrder
    posted?: SortOrder
    webhook?: SortOrderInput | SortOrder
    content?: SortOrder
    details?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    schedulerId?: StringWithAggregatesFilter<"Schedule"> | string
    creationTime?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    toPostAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    posted?: BoolWithAggregatesFilter<"Schedule"> | boolean
    webhook?: StringNullableWithAggregatesFilter<"Schedule"> | string | null
    content?: StringWithAggregatesFilter<"Schedule"> | string
    details?: JsonWithAggregatesFilter<"Schedule">
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    category?: StringFilter<"Meal"> | string
    area?: StringFilter<"Meal"> | string
    instructions?: StringFilter<"Meal"> | string
    thumbnail?: StringFilter<"Meal"> | string
    tags?: StringNullableListFilter<"Meal">
    youtube?: StringFilter<"Meal"> | string
    source?: StringFilter<"Meal"> | string
    imageSource?: StringNullableFilter<"Meal"> | string | null
    creativeCommonsConfirmed?: StringNullableFilter<"Meal"> | string | null
    dateModified?: DateTimeNullableFilter<"Meal"> | Date | string | null
    ingredients?: IngredientListRelationFilter
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    tags?: SortOrder
    youtube?: SortOrder
    source?: SortOrder
    imageSource?: SortOrderInput | SortOrder
    creativeCommonsConfirmed?: SortOrderInput | SortOrder
    dateModified?: SortOrderInput | SortOrder
    ingredients?: IngredientOrderByRelationAggregateInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    name?: StringFilter<"Meal"> | string
    category?: StringFilter<"Meal"> | string
    area?: StringFilter<"Meal"> | string
    instructions?: StringFilter<"Meal"> | string
    thumbnail?: StringFilter<"Meal"> | string
    tags?: StringNullableListFilter<"Meal">
    youtube?: StringFilter<"Meal"> | string
    source?: StringFilter<"Meal"> | string
    imageSource?: StringNullableFilter<"Meal"> | string | null
    creativeCommonsConfirmed?: StringNullableFilter<"Meal"> | string | null
    dateModified?: DateTimeNullableFilter<"Meal"> | Date | string | null
    ingredients?: IngredientListRelationFilter
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    tags?: SortOrder
    youtube?: SortOrder
    source?: SortOrder
    imageSource?: SortOrderInput | SortOrder
    creativeCommonsConfirmed?: SortOrderInput | SortOrder
    dateModified?: SortOrderInput | SortOrder
    _count?: MealCountOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meal"> | string
    name?: StringWithAggregatesFilter<"Meal"> | string
    category?: StringWithAggregatesFilter<"Meal"> | string
    area?: StringWithAggregatesFilter<"Meal"> | string
    instructions?: StringWithAggregatesFilter<"Meal"> | string
    thumbnail?: StringWithAggregatesFilter<"Meal"> | string
    tags?: StringNullableListFilter<"Meal">
    youtube?: StringWithAggregatesFilter<"Meal"> | string
    source?: StringWithAggregatesFilter<"Meal"> | string
    imageSource?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    creativeCommonsConfirmed?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    dateModified?: DateTimeNullableWithAggregatesFilter<"Meal"> | Date | string | null
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    mealId?: StringFilter<"Ingredient"> | string
    ingredient?: StringFilter<"Ingredient"> | string
    measure?: StringFilter<"Ingredient"> | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredient?: SortOrder
    measure?: SortOrder
    meal?: MealOrderByWithRelationInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    mealId?: StringFilter<"Ingredient"> | string
    ingredient?: StringFilter<"Ingredient"> | string
    measure?: StringFilter<"Ingredient"> | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }, "id">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredient?: SortOrder
    measure?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredient"> | number
    mealId?: StringWithAggregatesFilter<"Ingredient"> | string
    ingredient?: StringWithAggregatesFilter<"Ingredient"> | string
    measure?: StringWithAggregatesFilter<"Ingredient"> | string
  }

  export type NumberPostWhereInput = {
    AND?: NumberPostWhereInput | NumberPostWhereInput[]
    OR?: NumberPostWhereInput[]
    NOT?: NumberPostWhereInput | NumberPostWhereInput[]
    id?: IntFilter<"NumberPost"> | number
    number_id?: StringFilter<"NumberPost"> | string
    time?: DateTimeFilter<"NumberPost"> | Date | string
    post_type?: StringFilter<"NumberPost"> | string
    destination_id?: StringFilter<"NumberPost"> | string
    sender_id?: StringFilter<"NumberPost"> | string
    content?: JsonFilter<"NumberPost">
    number?: XOR<NumberRecordScalarRelationFilter, NumberRecordWhereInput>
  }

  export type NumberPostOrderByWithRelationInput = {
    id?: SortOrder
    number_id?: SortOrder
    time?: SortOrder
    post_type?: SortOrder
    destination_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    number?: NumberRecordOrderByWithRelationInput
  }

  export type NumberPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NumberPostWhereInput | NumberPostWhereInput[]
    OR?: NumberPostWhereInput[]
    NOT?: NumberPostWhereInput | NumberPostWhereInput[]
    number_id?: StringFilter<"NumberPost"> | string
    time?: DateTimeFilter<"NumberPost"> | Date | string
    post_type?: StringFilter<"NumberPost"> | string
    destination_id?: StringFilter<"NumberPost"> | string
    sender_id?: StringFilter<"NumberPost"> | string
    content?: JsonFilter<"NumberPost">
    number?: XOR<NumberRecordScalarRelationFilter, NumberRecordWhereInput>
  }, "id">

  export type NumberPostOrderByWithAggregationInput = {
    id?: SortOrder
    number_id?: SortOrder
    time?: SortOrder
    post_type?: SortOrder
    destination_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
    _count?: NumberPostCountOrderByAggregateInput
    _avg?: NumberPostAvgOrderByAggregateInput
    _max?: NumberPostMaxOrderByAggregateInput
    _min?: NumberPostMinOrderByAggregateInput
    _sum?: NumberPostSumOrderByAggregateInput
  }

  export type NumberPostScalarWhereWithAggregatesInput = {
    AND?: NumberPostScalarWhereWithAggregatesInput | NumberPostScalarWhereWithAggregatesInput[]
    OR?: NumberPostScalarWhereWithAggregatesInput[]
    NOT?: NumberPostScalarWhereWithAggregatesInput | NumberPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NumberPost"> | number
    number_id?: StringWithAggregatesFilter<"NumberPost"> | string
    time?: DateTimeWithAggregatesFilter<"NumberPost"> | Date | string
    post_type?: StringWithAggregatesFilter<"NumberPost"> | string
    destination_id?: StringWithAggregatesFilter<"NumberPost"> | string
    sender_id?: StringWithAggregatesFilter<"NumberPost"> | string
    content?: JsonWithAggregatesFilter<"NumberPost">
  }

  export type NumberRecordWhereInput = {
    AND?: NumberRecordWhereInput | NumberRecordWhereInput[]
    OR?: NumberRecordWhereInput[]
    NOT?: NumberRecordWhereInput | NumberRecordWhereInput[]
    id?: StringFilter<"NumberRecord"> | string
    source?: StringFilter<"NumberRecord"> | string
    keywords?: StringNullableListFilter<"NumberRecord">
    saved_as?: StringNullableFilter<"NumberRecord"> | string | null
    reason?: StringNullableFilter<"NumberRecord"> | string | null
    discussionFrequency?: IntNullableFilter<"NumberRecord"> | number | null
    posts?: NumberPostListRelationFilter
  }

  export type NumberRecordOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    keywords?: SortOrder
    saved_as?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    discussionFrequency?: SortOrderInput | SortOrder
    posts?: NumberPostOrderByRelationAggregateInput
  }

  export type NumberRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NumberRecordWhereInput | NumberRecordWhereInput[]
    OR?: NumberRecordWhereInput[]
    NOT?: NumberRecordWhereInput | NumberRecordWhereInput[]
    source?: StringFilter<"NumberRecord"> | string
    keywords?: StringNullableListFilter<"NumberRecord">
    saved_as?: StringNullableFilter<"NumberRecord"> | string | null
    reason?: StringNullableFilter<"NumberRecord"> | string | null
    discussionFrequency?: IntNullableFilter<"NumberRecord"> | number | null
    posts?: NumberPostListRelationFilter
  }, "id">

  export type NumberRecordOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    keywords?: SortOrder
    saved_as?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    discussionFrequency?: SortOrderInput | SortOrder
    _count?: NumberRecordCountOrderByAggregateInput
    _avg?: NumberRecordAvgOrderByAggregateInput
    _max?: NumberRecordMaxOrderByAggregateInput
    _min?: NumberRecordMinOrderByAggregateInput
    _sum?: NumberRecordSumOrderByAggregateInput
  }

  export type NumberRecordScalarWhereWithAggregatesInput = {
    AND?: NumberRecordScalarWhereWithAggregatesInput | NumberRecordScalarWhereWithAggregatesInput[]
    OR?: NumberRecordScalarWhereWithAggregatesInput[]
    NOT?: NumberRecordScalarWhereWithAggregatesInput | NumberRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NumberRecord"> | string
    source?: StringWithAggregatesFilter<"NumberRecord"> | string
    keywords?: StringNullableListFilter<"NumberRecord">
    saved_as?: StringNullableWithAggregatesFilter<"NumberRecord"> | string | null
    reason?: StringNullableWithAggregatesFilter<"NumberRecord"> | string | null
    discussionFrequency?: IntNullableWithAggregatesFilter<"NumberRecord"> | number | null
  }

  export type CodeBlueprintWhereInput = {
    AND?: CodeBlueprintWhereInput | CodeBlueprintWhereInput[]
    OR?: CodeBlueprintWhereInput[]
    NOT?: CodeBlueprintWhereInput | CodeBlueprintWhereInput[]
    id?: IntFilter<"CodeBlueprint"> | number
    code?: StringFilter<"CodeBlueprint"> | string
    metadata?: JsonFilter<"CodeBlueprint">
  }

  export type CodeBlueprintOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    metadata?: SortOrder
  }

  export type CodeBlueprintWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CodeBlueprintWhereInput | CodeBlueprintWhereInput[]
    OR?: CodeBlueprintWhereInput[]
    NOT?: CodeBlueprintWhereInput | CodeBlueprintWhereInput[]
    code?: StringFilter<"CodeBlueprint"> | string
    metadata?: JsonFilter<"CodeBlueprint">
  }, "id">

  export type CodeBlueprintOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    metadata?: SortOrder
    _count?: CodeBlueprintCountOrderByAggregateInput
    _avg?: CodeBlueprintAvgOrderByAggregateInput
    _max?: CodeBlueprintMaxOrderByAggregateInput
    _min?: CodeBlueprintMinOrderByAggregateInput
    _sum?: CodeBlueprintSumOrderByAggregateInput
  }

  export type CodeBlueprintScalarWhereWithAggregatesInput = {
    AND?: CodeBlueprintScalarWhereWithAggregatesInput | CodeBlueprintScalarWhereWithAggregatesInput[]
    OR?: CodeBlueprintScalarWhereWithAggregatesInput[]
    NOT?: CodeBlueprintScalarWhereWithAggregatesInput | CodeBlueprintScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CodeBlueprint"> | number
    code?: StringWithAggregatesFilter<"CodeBlueprint"> | string
    metadata?: JsonWithAggregatesFilter<"CodeBlueprint">
  }

  export type SchedulerCreateInput = {
    id: string
    detailedName: string
    author?: string
    schedules?: ScheduleCreateNestedManyWithoutSchedulerInput
  }

  export type SchedulerUncheckedCreateInput = {
    id: string
    detailedName: string
    author?: string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutSchedulerInput
  }

  export type SchedulerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    detailedName?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUpdateManyWithoutSchedulerNestedInput
  }

  export type SchedulerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    detailedName?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUncheckedUpdateManyWithoutSchedulerNestedInput
  }

  export type SchedulerCreateManyInput = {
    id: string
    detailedName: string
    author?: string
  }

  export type SchedulerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    detailedName?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    detailedName?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateInput = {
    creationTime?: Date | string
    toPostAt: Date | string
    posted?: boolean
    webhook?: string | null
    content: string
    details?: JsonNullValueInput | InputJsonValue
    scheduler: SchedulerCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    schedulerId: string
    creationTime?: Date | string
    toPostAt: Date | string
    posted?: boolean
    webhook?: string | null
    content: string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type ScheduleUpdateInput = {
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posted?: BoolFieldUpdateOperationsInput | boolean
    webhook?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    scheduler?: SchedulerUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedulerId?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posted?: BoolFieldUpdateOperationsInput | boolean
    webhook?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type ScheduleCreateManyInput = {
    id?: number
    schedulerId: string
    creationTime?: Date | string
    toPostAt: Date | string
    posted?: boolean
    webhook?: string | null
    content: string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type ScheduleUpdateManyMutationInput = {
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posted?: BoolFieldUpdateOperationsInput | boolean
    webhook?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schedulerId?: StringFieldUpdateOperationsInput | string
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posted?: BoolFieldUpdateOperationsInput | boolean
    webhook?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type MealCreateInput = {
    id: string
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    tags?: MealCreatetagsInput | string[]
    youtube: string
    source: string
    imageSource?: string | null
    creativeCommonsConfirmed?: string | null
    dateModified?: Date | string | null
    ingredients?: IngredientCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateInput = {
    id: string
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    tags?: MealCreatetagsInput | string[]
    youtube: string
    source: string
    imageSource?: string | null
    creativeCommonsConfirmed?: string | null
    dateModified?: Date | string | null
    ingredients?: IngredientUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tags?: MealUpdatetagsInput | string[]
    youtube?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    creativeCommonsConfirmed?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: IngredientUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tags?: MealUpdatetagsInput | string[]
    youtube?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    creativeCommonsConfirmed?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ingredients?: IngredientUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id: string
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    tags?: MealCreatetagsInput | string[]
    youtube: string
    source: string
    imageSource?: string | null
    creativeCommonsConfirmed?: string | null
    dateModified?: Date | string | null
  }

  export type MealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tags?: MealUpdatetagsInput | string[]
    youtube?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    creativeCommonsConfirmed?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tags?: MealUpdatetagsInput | string[]
    youtube?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    creativeCommonsConfirmed?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IngredientCreateInput = {
    ingredient: string
    measure: string
    meal: MealCreateNestedOneWithoutIngredientsInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: number
    mealId: string
    ingredient: string
    measure: string
  }

  export type IngredientUpdateInput = {
    ingredient?: StringFieldUpdateOperationsInput | string
    measure?: StringFieldUpdateOperationsInput | string
    meal?: MealUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: StringFieldUpdateOperationsInput | string
    ingredient?: StringFieldUpdateOperationsInput | string
    measure?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientCreateManyInput = {
    id?: number
    mealId: string
    ingredient: string
    measure: string
  }

  export type IngredientUpdateManyMutationInput = {
    ingredient?: StringFieldUpdateOperationsInput | string
    measure?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: StringFieldUpdateOperationsInput | string
    ingredient?: StringFieldUpdateOperationsInput | string
    measure?: StringFieldUpdateOperationsInput | string
  }

  export type NumberPostCreateInput = {
    time?: Date | string
    post_type: string
    destination_id: string
    sender_id: string
    content?: JsonNullValueInput | InputJsonValue
    number: NumberRecordCreateNestedOneWithoutPostsInput
  }

  export type NumberPostUncheckedCreateInput = {
    id?: number
    number_id: string
    time?: Date | string
    post_type: string
    destination_id: string
    sender_id: string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberPostUpdateInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    post_type?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    number?: NumberRecordUpdateOneRequiredWithoutPostsNestedInput
  }

  export type NumberPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    post_type?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberPostCreateManyInput = {
    id?: number
    number_id: string
    time?: Date | string
    post_type: string
    destination_id: string
    sender_id: string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberPostUpdateManyMutationInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    post_type?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    post_type?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberRecordCreateInput = {
    id: string
    source: string
    keywords?: NumberRecordCreatekeywordsInput | string[]
    saved_as?: string | null
    reason?: string | null
    discussionFrequency?: number | null
    posts?: NumberPostCreateNestedManyWithoutNumberInput
  }

  export type NumberRecordUncheckedCreateInput = {
    id: string
    source: string
    keywords?: NumberRecordCreatekeywordsInput | string[]
    saved_as?: string | null
    reason?: string | null
    discussionFrequency?: number | null
    posts?: NumberPostUncheckedCreateNestedManyWithoutNumberInput
  }

  export type NumberRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    keywords?: NumberRecordUpdatekeywordsInput | string[]
    saved_as?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    discussionFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: NumberPostUpdateManyWithoutNumberNestedInput
  }

  export type NumberRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    keywords?: NumberRecordUpdatekeywordsInput | string[]
    saved_as?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    discussionFrequency?: NullableIntFieldUpdateOperationsInput | number | null
    posts?: NumberPostUncheckedUpdateManyWithoutNumberNestedInput
  }

  export type NumberRecordCreateManyInput = {
    id: string
    source: string
    keywords?: NumberRecordCreatekeywordsInput | string[]
    saved_as?: string | null
    reason?: string | null
    discussionFrequency?: number | null
  }

  export type NumberRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    keywords?: NumberRecordUpdatekeywordsInput | string[]
    saved_as?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    discussionFrequency?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NumberRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    keywords?: NumberRecordUpdatekeywordsInput | string[]
    saved_as?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    discussionFrequency?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CodeBlueprintCreateInput = {
    code: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CodeBlueprintUncheckedCreateInput = {
    id?: number
    code: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CodeBlueprintUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CodeBlueprintUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CodeBlueprintCreateManyInput = {
    id?: number
    code: string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CodeBlueprintUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CodeBlueprintUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
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

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchedulerCountOrderByAggregateInput = {
    id?: SortOrder
    detailedName?: SortOrder
    author?: SortOrder
  }

  export type SchedulerMaxOrderByAggregateInput = {
    id?: SortOrder
    detailedName?: SortOrder
    author?: SortOrder
  }

  export type SchedulerMinOrderByAggregateInput = {
    id?: SortOrder
    detailedName?: SortOrder
    author?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SchedulerScalarRelationFilter = {
    is?: SchedulerWhereInput
    isNot?: SchedulerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    schedulerId?: SortOrder
    creationTime?: SortOrder
    toPostAt?: SortOrder
    posted?: SortOrder
    webhook?: SortOrder
    content?: SortOrder
    details?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    schedulerId?: SortOrder
    creationTime?: SortOrder
    toPostAt?: SortOrder
    posted?: SortOrder
    webhook?: SortOrder
    content?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    schedulerId?: SortOrder
    creationTime?: SortOrder
    toPostAt?: SortOrder
    posted?: SortOrder
    webhook?: SortOrder
    content?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput
    some?: IngredientWhereInput
    none?: IngredientWhereInput
  }

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    tags?: SortOrder
    youtube?: SortOrder
    source?: SortOrder
    imageSource?: SortOrder
    creativeCommonsConfirmed?: SortOrder
    dateModified?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    youtube?: SortOrder
    source?: SortOrder
    imageSource?: SortOrder
    creativeCommonsConfirmed?: SortOrder
    dateModified?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    area?: SortOrder
    instructions?: SortOrder
    thumbnail?: SortOrder
    youtube?: SortOrder
    source?: SortOrder
    imageSource?: SortOrder
    creativeCommonsConfirmed?: SortOrder
    dateModified?: SortOrder
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

  export type MealScalarRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredient?: SortOrder
    measure?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredient?: SortOrder
    measure?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    ingredient?: SortOrder
    measure?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NumberRecordScalarRelationFilter = {
    is?: NumberRecordWhereInput
    isNot?: NumberRecordWhereInput
  }

  export type NumberPostCountOrderByAggregateInput = {
    id?: SortOrder
    number_id?: SortOrder
    time?: SortOrder
    post_type?: SortOrder
    destination_id?: SortOrder
    sender_id?: SortOrder
    content?: SortOrder
  }

  export type NumberPostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NumberPostMaxOrderByAggregateInput = {
    id?: SortOrder
    number_id?: SortOrder
    time?: SortOrder
    post_type?: SortOrder
    destination_id?: SortOrder
    sender_id?: SortOrder
  }

  export type NumberPostMinOrderByAggregateInput = {
    id?: SortOrder
    number_id?: SortOrder
    time?: SortOrder
    post_type?: SortOrder
    destination_id?: SortOrder
    sender_id?: SortOrder
  }

  export type NumberPostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NumberPostListRelationFilter = {
    every?: NumberPostWhereInput
    some?: NumberPostWhereInput
    none?: NumberPostWhereInput
  }

  export type NumberPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NumberRecordCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    keywords?: SortOrder
    saved_as?: SortOrder
    reason?: SortOrder
    discussionFrequency?: SortOrder
  }

  export type NumberRecordAvgOrderByAggregateInput = {
    discussionFrequency?: SortOrder
  }

  export type NumberRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    saved_as?: SortOrder
    reason?: SortOrder
    discussionFrequency?: SortOrder
  }

  export type NumberRecordMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    saved_as?: SortOrder
    reason?: SortOrder
    discussionFrequency?: SortOrder
  }

  export type NumberRecordSumOrderByAggregateInput = {
    discussionFrequency?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CodeBlueprintCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    metadata?: SortOrder
  }

  export type CodeBlueprintAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CodeBlueprintMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type CodeBlueprintMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type CodeBlueprintSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ScheduleCreateNestedManyWithoutSchedulerInput = {
    create?: XOR<ScheduleCreateWithoutSchedulerInput, ScheduleUncheckedCreateWithoutSchedulerInput> | ScheduleCreateWithoutSchedulerInput[] | ScheduleUncheckedCreateWithoutSchedulerInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedulerInput | ScheduleCreateOrConnectWithoutSchedulerInput[]
    createMany?: ScheduleCreateManySchedulerInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutSchedulerInput = {
    create?: XOR<ScheduleCreateWithoutSchedulerInput, ScheduleUncheckedCreateWithoutSchedulerInput> | ScheduleCreateWithoutSchedulerInput[] | ScheduleUncheckedCreateWithoutSchedulerInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedulerInput | ScheduleCreateOrConnectWithoutSchedulerInput[]
    createMany?: ScheduleCreateManySchedulerInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ScheduleUpdateManyWithoutSchedulerNestedInput = {
    create?: XOR<ScheduleCreateWithoutSchedulerInput, ScheduleUncheckedCreateWithoutSchedulerInput> | ScheduleCreateWithoutSchedulerInput[] | ScheduleUncheckedCreateWithoutSchedulerInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedulerInput | ScheduleCreateOrConnectWithoutSchedulerInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutSchedulerInput | ScheduleUpsertWithWhereUniqueWithoutSchedulerInput[]
    createMany?: ScheduleCreateManySchedulerInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutSchedulerInput | ScheduleUpdateWithWhereUniqueWithoutSchedulerInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutSchedulerInput | ScheduleUpdateManyWithWhereWithoutSchedulerInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutSchedulerNestedInput = {
    create?: XOR<ScheduleCreateWithoutSchedulerInput, ScheduleUncheckedCreateWithoutSchedulerInput> | ScheduleCreateWithoutSchedulerInput[] | ScheduleUncheckedCreateWithoutSchedulerInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutSchedulerInput | ScheduleCreateOrConnectWithoutSchedulerInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutSchedulerInput | ScheduleUpsertWithWhereUniqueWithoutSchedulerInput[]
    createMany?: ScheduleCreateManySchedulerInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutSchedulerInput | ScheduleUpdateWithWhereUniqueWithoutSchedulerInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutSchedulerInput | ScheduleUpdateManyWithWhereWithoutSchedulerInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type SchedulerCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<SchedulerCreateWithoutSchedulesInput, SchedulerUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: SchedulerCreateOrConnectWithoutSchedulesInput
    connect?: SchedulerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SchedulerUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<SchedulerCreateWithoutSchedulesInput, SchedulerUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: SchedulerCreateOrConnectWithoutSchedulesInput
    upsert?: SchedulerUpsertWithoutSchedulesInput
    connect?: SchedulerWhereUniqueInput
    update?: XOR<XOR<SchedulerUpdateToOneWithWhereWithoutSchedulesInput, SchedulerUpdateWithoutSchedulesInput>, SchedulerUncheckedUpdateWithoutSchedulesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealCreatetagsInput = {
    set: string[]
  }

  export type IngredientCreateNestedManyWithoutMealInput = {
    create?: XOR<IngredientCreateWithoutMealInput, IngredientUncheckedCreateWithoutMealInput> | IngredientCreateWithoutMealInput[] | IngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutMealInput | IngredientCreateOrConnectWithoutMealInput[]
    createMany?: IngredientCreateManyMealInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type IngredientUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<IngredientCreateWithoutMealInput, IngredientUncheckedCreateWithoutMealInput> | IngredientCreateWithoutMealInput[] | IngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutMealInput | IngredientCreateOrConnectWithoutMealInput[]
    createMany?: IngredientCreateManyMealInputEnvelope
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
  }

  export type MealUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IngredientUpdateManyWithoutMealNestedInput = {
    create?: XOR<IngredientCreateWithoutMealInput, IngredientUncheckedCreateWithoutMealInput> | IngredientCreateWithoutMealInput[] | IngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutMealInput | IngredientCreateOrConnectWithoutMealInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutMealInput | IngredientUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: IngredientCreateManyMealInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutMealInput | IngredientUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutMealInput | IngredientUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type IngredientUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<IngredientCreateWithoutMealInput, IngredientUncheckedCreateWithoutMealInput> | IngredientCreateWithoutMealInput[] | IngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: IngredientCreateOrConnectWithoutMealInput | IngredientCreateOrConnectWithoutMealInput[]
    upsert?: IngredientUpsertWithWhereUniqueWithoutMealInput | IngredientUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: IngredientCreateManyMealInputEnvelope
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[]
    update?: IngredientUpdateWithWhereUniqueWithoutMealInput | IngredientUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: IngredientUpdateManyWithWhereWithoutMealInput | IngredientUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
  }

  export type MealCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsInput
    connect?: MealWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsInput
    upsert?: MealUpsertWithoutIngredientsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutIngredientsInput, MealUpdateWithoutIngredientsInput>, MealUncheckedUpdateWithoutIngredientsInput>
  }

  export type NumberRecordCreateNestedOneWithoutPostsInput = {
    create?: XOR<NumberRecordCreateWithoutPostsInput, NumberRecordUncheckedCreateWithoutPostsInput>
    connectOrCreate?: NumberRecordCreateOrConnectWithoutPostsInput
    connect?: NumberRecordWhereUniqueInput
  }

  export type NumberRecordUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<NumberRecordCreateWithoutPostsInput, NumberRecordUncheckedCreateWithoutPostsInput>
    connectOrCreate?: NumberRecordCreateOrConnectWithoutPostsInput
    upsert?: NumberRecordUpsertWithoutPostsInput
    connect?: NumberRecordWhereUniqueInput
    update?: XOR<XOR<NumberRecordUpdateToOneWithWhereWithoutPostsInput, NumberRecordUpdateWithoutPostsInput>, NumberRecordUncheckedUpdateWithoutPostsInput>
  }

  export type NumberRecordCreatekeywordsInput = {
    set: string[]
  }

  export type NumberPostCreateNestedManyWithoutNumberInput = {
    create?: XOR<NumberPostCreateWithoutNumberInput, NumberPostUncheckedCreateWithoutNumberInput> | NumberPostCreateWithoutNumberInput[] | NumberPostUncheckedCreateWithoutNumberInput[]
    connectOrCreate?: NumberPostCreateOrConnectWithoutNumberInput | NumberPostCreateOrConnectWithoutNumberInput[]
    createMany?: NumberPostCreateManyNumberInputEnvelope
    connect?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
  }

  export type NumberPostUncheckedCreateNestedManyWithoutNumberInput = {
    create?: XOR<NumberPostCreateWithoutNumberInput, NumberPostUncheckedCreateWithoutNumberInput> | NumberPostCreateWithoutNumberInput[] | NumberPostUncheckedCreateWithoutNumberInput[]
    connectOrCreate?: NumberPostCreateOrConnectWithoutNumberInput | NumberPostCreateOrConnectWithoutNumberInput[]
    createMany?: NumberPostCreateManyNumberInputEnvelope
    connect?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
  }

  export type NumberRecordUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NumberPostUpdateManyWithoutNumberNestedInput = {
    create?: XOR<NumberPostCreateWithoutNumberInput, NumberPostUncheckedCreateWithoutNumberInput> | NumberPostCreateWithoutNumberInput[] | NumberPostUncheckedCreateWithoutNumberInput[]
    connectOrCreate?: NumberPostCreateOrConnectWithoutNumberInput | NumberPostCreateOrConnectWithoutNumberInput[]
    upsert?: NumberPostUpsertWithWhereUniqueWithoutNumberInput | NumberPostUpsertWithWhereUniqueWithoutNumberInput[]
    createMany?: NumberPostCreateManyNumberInputEnvelope
    set?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
    disconnect?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
    delete?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
    connect?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
    update?: NumberPostUpdateWithWhereUniqueWithoutNumberInput | NumberPostUpdateWithWhereUniqueWithoutNumberInput[]
    updateMany?: NumberPostUpdateManyWithWhereWithoutNumberInput | NumberPostUpdateManyWithWhereWithoutNumberInput[]
    deleteMany?: NumberPostScalarWhereInput | NumberPostScalarWhereInput[]
  }

  export type NumberPostUncheckedUpdateManyWithoutNumberNestedInput = {
    create?: XOR<NumberPostCreateWithoutNumberInput, NumberPostUncheckedCreateWithoutNumberInput> | NumberPostCreateWithoutNumberInput[] | NumberPostUncheckedCreateWithoutNumberInput[]
    connectOrCreate?: NumberPostCreateOrConnectWithoutNumberInput | NumberPostCreateOrConnectWithoutNumberInput[]
    upsert?: NumberPostUpsertWithWhereUniqueWithoutNumberInput | NumberPostUpsertWithWhereUniqueWithoutNumberInput[]
    createMany?: NumberPostCreateManyNumberInputEnvelope
    set?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
    disconnect?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
    delete?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
    connect?: NumberPostWhereUniqueInput | NumberPostWhereUniqueInput[]
    update?: NumberPostUpdateWithWhereUniqueWithoutNumberInput | NumberPostUpdateWithWhereUniqueWithoutNumberInput[]
    updateMany?: NumberPostUpdateManyWithWhereWithoutNumberInput | NumberPostUpdateManyWithWhereWithoutNumberInput[]
    deleteMany?: NumberPostScalarWhereInput | NumberPostScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ScheduleCreateWithoutSchedulerInput = {
    creationTime?: Date | string
    toPostAt: Date | string
    posted?: boolean
    webhook?: string | null
    content: string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type ScheduleUncheckedCreateWithoutSchedulerInput = {
    id?: number
    creationTime?: Date | string
    toPostAt: Date | string
    posted?: boolean
    webhook?: string | null
    content: string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type ScheduleCreateOrConnectWithoutSchedulerInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutSchedulerInput, ScheduleUncheckedCreateWithoutSchedulerInput>
  }

  export type ScheduleCreateManySchedulerInputEnvelope = {
    data: ScheduleCreateManySchedulerInput | ScheduleCreateManySchedulerInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleUpsertWithWhereUniqueWithoutSchedulerInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutSchedulerInput, ScheduleUncheckedUpdateWithoutSchedulerInput>
    create: XOR<ScheduleCreateWithoutSchedulerInput, ScheduleUncheckedCreateWithoutSchedulerInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutSchedulerInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutSchedulerInput, ScheduleUncheckedUpdateWithoutSchedulerInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutSchedulerInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutSchedulerInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: IntFilter<"Schedule"> | number
    schedulerId?: StringFilter<"Schedule"> | string
    creationTime?: DateTimeFilter<"Schedule"> | Date | string
    toPostAt?: DateTimeFilter<"Schedule"> | Date | string
    posted?: BoolFilter<"Schedule"> | boolean
    webhook?: StringNullableFilter<"Schedule"> | string | null
    content?: StringFilter<"Schedule"> | string
    details?: JsonFilter<"Schedule">
  }

  export type SchedulerCreateWithoutSchedulesInput = {
    id: string
    detailedName: string
    author?: string
  }

  export type SchedulerUncheckedCreateWithoutSchedulesInput = {
    id: string
    detailedName: string
    author?: string
  }

  export type SchedulerCreateOrConnectWithoutSchedulesInput = {
    where: SchedulerWhereUniqueInput
    create: XOR<SchedulerCreateWithoutSchedulesInput, SchedulerUncheckedCreateWithoutSchedulesInput>
  }

  export type SchedulerUpsertWithoutSchedulesInput = {
    update: XOR<SchedulerUpdateWithoutSchedulesInput, SchedulerUncheckedUpdateWithoutSchedulesInput>
    create: XOR<SchedulerCreateWithoutSchedulesInput, SchedulerUncheckedCreateWithoutSchedulesInput>
    where?: SchedulerWhereInput
  }

  export type SchedulerUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: SchedulerWhereInput
    data: XOR<SchedulerUpdateWithoutSchedulesInput, SchedulerUncheckedUpdateWithoutSchedulesInput>
  }

  export type SchedulerUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    detailedName?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulerUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    detailedName?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientCreateWithoutMealInput = {
    ingredient: string
    measure: string
  }

  export type IngredientUncheckedCreateWithoutMealInput = {
    id?: number
    ingredient: string
    measure: string
  }

  export type IngredientCreateOrConnectWithoutMealInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutMealInput, IngredientUncheckedCreateWithoutMealInput>
  }

  export type IngredientCreateManyMealInputEnvelope = {
    data: IngredientCreateManyMealInput | IngredientCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type IngredientUpsertWithWhereUniqueWithoutMealInput = {
    where: IngredientWhereUniqueInput
    update: XOR<IngredientUpdateWithoutMealInput, IngredientUncheckedUpdateWithoutMealInput>
    create: XOR<IngredientCreateWithoutMealInput, IngredientUncheckedCreateWithoutMealInput>
  }

  export type IngredientUpdateWithWhereUniqueWithoutMealInput = {
    where: IngredientWhereUniqueInput
    data: XOR<IngredientUpdateWithoutMealInput, IngredientUncheckedUpdateWithoutMealInput>
  }

  export type IngredientUpdateManyWithWhereWithoutMealInput = {
    where: IngredientScalarWhereInput
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyWithoutMealInput>
  }

  export type IngredientScalarWhereInput = {
    AND?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    OR?: IngredientScalarWhereInput[]
    NOT?: IngredientScalarWhereInput | IngredientScalarWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    mealId?: StringFilter<"Ingredient"> | string
    ingredient?: StringFilter<"Ingredient"> | string
    measure?: StringFilter<"Ingredient"> | string
  }

  export type MealCreateWithoutIngredientsInput = {
    id: string
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    tags?: MealCreatetagsInput | string[]
    youtube: string
    source: string
    imageSource?: string | null
    creativeCommonsConfirmed?: string | null
    dateModified?: Date | string | null
  }

  export type MealUncheckedCreateWithoutIngredientsInput = {
    id: string
    name: string
    category: string
    area: string
    instructions: string
    thumbnail: string
    tags?: MealCreatetagsInput | string[]
    youtube: string
    source: string
    imageSource?: string | null
    creativeCommonsConfirmed?: string | null
    dateModified?: Date | string | null
  }

  export type MealCreateOrConnectWithoutIngredientsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
  }

  export type MealUpsertWithoutIngredientsInput = {
    update: XOR<MealUpdateWithoutIngredientsInput, MealUncheckedUpdateWithoutIngredientsInput>
    create: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutIngredientsInput, MealUncheckedUpdateWithoutIngredientsInput>
  }

  export type MealUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tags?: MealUpdatetagsInput | string[]
    youtube?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    creativeCommonsConfirmed?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MealUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tags?: MealUpdatetagsInput | string[]
    youtube?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    imageSource?: NullableStringFieldUpdateOperationsInput | string | null
    creativeCommonsConfirmed?: NullableStringFieldUpdateOperationsInput | string | null
    dateModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NumberRecordCreateWithoutPostsInput = {
    id: string
    source: string
    keywords?: NumberRecordCreatekeywordsInput | string[]
    saved_as?: string | null
    reason?: string | null
    discussionFrequency?: number | null
  }

  export type NumberRecordUncheckedCreateWithoutPostsInput = {
    id: string
    source: string
    keywords?: NumberRecordCreatekeywordsInput | string[]
    saved_as?: string | null
    reason?: string | null
    discussionFrequency?: number | null
  }

  export type NumberRecordCreateOrConnectWithoutPostsInput = {
    where: NumberRecordWhereUniqueInput
    create: XOR<NumberRecordCreateWithoutPostsInput, NumberRecordUncheckedCreateWithoutPostsInput>
  }

  export type NumberRecordUpsertWithoutPostsInput = {
    update: XOR<NumberRecordUpdateWithoutPostsInput, NumberRecordUncheckedUpdateWithoutPostsInput>
    create: XOR<NumberRecordCreateWithoutPostsInput, NumberRecordUncheckedCreateWithoutPostsInput>
    where?: NumberRecordWhereInput
  }

  export type NumberRecordUpdateToOneWithWhereWithoutPostsInput = {
    where?: NumberRecordWhereInput
    data: XOR<NumberRecordUpdateWithoutPostsInput, NumberRecordUncheckedUpdateWithoutPostsInput>
  }

  export type NumberRecordUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    keywords?: NumberRecordUpdatekeywordsInput | string[]
    saved_as?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    discussionFrequency?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NumberRecordUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    keywords?: NumberRecordUpdatekeywordsInput | string[]
    saved_as?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    discussionFrequency?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NumberPostCreateWithoutNumberInput = {
    time?: Date | string
    post_type: string
    destination_id: string
    sender_id: string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberPostUncheckedCreateWithoutNumberInput = {
    id?: number
    time?: Date | string
    post_type: string
    destination_id: string
    sender_id: string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberPostCreateOrConnectWithoutNumberInput = {
    where: NumberPostWhereUniqueInput
    create: XOR<NumberPostCreateWithoutNumberInput, NumberPostUncheckedCreateWithoutNumberInput>
  }

  export type NumberPostCreateManyNumberInputEnvelope = {
    data: NumberPostCreateManyNumberInput | NumberPostCreateManyNumberInput[]
    skipDuplicates?: boolean
  }

  export type NumberPostUpsertWithWhereUniqueWithoutNumberInput = {
    where: NumberPostWhereUniqueInput
    update: XOR<NumberPostUpdateWithoutNumberInput, NumberPostUncheckedUpdateWithoutNumberInput>
    create: XOR<NumberPostCreateWithoutNumberInput, NumberPostUncheckedCreateWithoutNumberInput>
  }

  export type NumberPostUpdateWithWhereUniqueWithoutNumberInput = {
    where: NumberPostWhereUniqueInput
    data: XOR<NumberPostUpdateWithoutNumberInput, NumberPostUncheckedUpdateWithoutNumberInput>
  }

  export type NumberPostUpdateManyWithWhereWithoutNumberInput = {
    where: NumberPostScalarWhereInput
    data: XOR<NumberPostUpdateManyMutationInput, NumberPostUncheckedUpdateManyWithoutNumberInput>
  }

  export type NumberPostScalarWhereInput = {
    AND?: NumberPostScalarWhereInput | NumberPostScalarWhereInput[]
    OR?: NumberPostScalarWhereInput[]
    NOT?: NumberPostScalarWhereInput | NumberPostScalarWhereInput[]
    id?: IntFilter<"NumberPost"> | number
    number_id?: StringFilter<"NumberPost"> | string
    time?: DateTimeFilter<"NumberPost"> | Date | string
    post_type?: StringFilter<"NumberPost"> | string
    destination_id?: StringFilter<"NumberPost"> | string
    sender_id?: StringFilter<"NumberPost"> | string
    content?: JsonFilter<"NumberPost">
  }

  export type ScheduleCreateManySchedulerInput = {
    id?: number
    creationTime?: Date | string
    toPostAt: Date | string
    posted?: boolean
    webhook?: string | null
    content: string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type ScheduleUpdateWithoutSchedulerInput = {
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posted?: BoolFieldUpdateOperationsInput | boolean
    webhook?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type ScheduleUncheckedUpdateWithoutSchedulerInput = {
    id?: IntFieldUpdateOperationsInput | number
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posted?: BoolFieldUpdateOperationsInput | boolean
    webhook?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type ScheduleUncheckedUpdateManyWithoutSchedulerInput = {
    id?: IntFieldUpdateOperationsInput | number
    creationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    toPostAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posted?: BoolFieldUpdateOperationsInput | boolean
    webhook?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
  }

  export type IngredientCreateManyMealInput = {
    id?: number
    ingredient: string
    measure: string
  }

  export type IngredientUpdateWithoutMealInput = {
    ingredient?: StringFieldUpdateOperationsInput | string
    measure?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredient?: StringFieldUpdateOperationsInput | string
    measure?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredient?: StringFieldUpdateOperationsInput | string
    measure?: StringFieldUpdateOperationsInput | string
  }

  export type NumberPostCreateManyNumberInput = {
    id?: number
    time?: Date | string
    post_type: string
    destination_id: string
    sender_id: string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberPostUpdateWithoutNumberInput = {
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    post_type?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberPostUncheckedUpdateWithoutNumberInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    post_type?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
  }

  export type NumberPostUncheckedUpdateManyWithoutNumberInput = {
    id?: IntFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    post_type?: StringFieldUpdateOperationsInput | string
    destination_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
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
  export const dmmf: runtime.BaseDMMF
}