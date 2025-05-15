
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
 * Model Trafo
 * 
 */
export type Trafo = $Result.DefaultSelection<Prisma.$TrafoPayload>
/**
 * Model TrafoLocation
 * 
 */
export type TrafoLocation = $Result.DefaultSelection<Prisma.$TrafoLocationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Trafos
 * const trafos = await prisma.trafo.findMany()
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
   * // Fetch zero or more Trafos
   * const trafos = await prisma.trafo.findMany()
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
   * `prisma.trafo`: Exposes CRUD operations for the **Trafo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trafos
    * const trafos = await prisma.trafo.findMany()
    * ```
    */
  get trafo(): Prisma.TrafoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trafoLocation`: Exposes CRUD operations for the **TrafoLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrafoLocations
    * const trafoLocations = await prisma.trafoLocation.findMany()
    * ```
    */
  get trafoLocation(): Prisma.TrafoLocationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Trafo: 'Trafo',
    TrafoLocation: 'TrafoLocation'
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
      modelProps: "trafo" | "trafoLocation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Trafo: {
        payload: Prisma.$TrafoPayload<ExtArgs>
        fields: Prisma.TrafoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrafoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrafoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoPayload>
          }
          findFirst: {
            args: Prisma.TrafoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrafoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoPayload>
          }
          findMany: {
            args: Prisma.TrafoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoPayload>[]
          }
          create: {
            args: Prisma.TrafoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoPayload>
          }
          createMany: {
            args: Prisma.TrafoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrafoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoPayload>
          }
          update: {
            args: Prisma.TrafoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoPayload>
          }
          deleteMany: {
            args: Prisma.TrafoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrafoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrafoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoPayload>
          }
          aggregate: {
            args: Prisma.TrafoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrafo>
          }
          groupBy: {
            args: Prisma.TrafoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrafoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrafoCountArgs<ExtArgs>
            result: $Utils.Optional<TrafoCountAggregateOutputType> | number
          }
        }
      }
      TrafoLocation: {
        payload: Prisma.$TrafoLocationPayload<ExtArgs>
        fields: Prisma.TrafoLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrafoLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrafoLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoLocationPayload>
          }
          findFirst: {
            args: Prisma.TrafoLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrafoLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoLocationPayload>
          }
          findMany: {
            args: Prisma.TrafoLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoLocationPayload>[]
          }
          create: {
            args: Prisma.TrafoLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoLocationPayload>
          }
          createMany: {
            args: Prisma.TrafoLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrafoLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoLocationPayload>
          }
          update: {
            args: Prisma.TrafoLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoLocationPayload>
          }
          deleteMany: {
            args: Prisma.TrafoLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrafoLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrafoLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrafoLocationPayload>
          }
          aggregate: {
            args: Prisma.TrafoLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrafoLocation>
          }
          groupBy: {
            args: Prisma.TrafoLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrafoLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrafoLocationCountArgs<ExtArgs>
            result: $Utils.Optional<TrafoLocationCountAggregateOutputType> | number
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
    trafo?: TrafoOmit
    trafoLocation?: TrafoLocationOmit
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
   * Models
   */

  /**
   * Model Trafo
   */

  export type AggregateTrafo = {
    _count: TrafoCountAggregateOutputType | null
    _avg: TrafoAvgAggregateOutputType | null
    _sum: TrafoSumAggregateOutputType | null
    _min: TrafoMinAggregateOutputType | null
    _max: TrafoMaxAggregateOutputType | null
  }

  export type TrafoAvgAggregateOutputType = {
    id: number | null
    suhu: Decimal | null
    volt: Decimal | null
    arus1: Decimal | null
    arus2: Decimal | null
    arus3: Decimal | null
  }

  export type TrafoSumAggregateOutputType = {
    id: number | null
    suhu: Decimal | null
    volt: Decimal | null
    arus1: Decimal | null
    arus2: Decimal | null
    arus3: Decimal | null
  }

  export type TrafoMinAggregateOutputType = {
    id: number | null
    trafo_id: string | null
    suhu: Decimal | null
    volt: Decimal | null
    arus1: Decimal | null
    arus2: Decimal | null
    arus3: Decimal | null
    status: boolean | null
    feedback: string | null
  }

  export type TrafoMaxAggregateOutputType = {
    id: number | null
    trafo_id: string | null
    suhu: Decimal | null
    volt: Decimal | null
    arus1: Decimal | null
    arus2: Decimal | null
    arus3: Decimal | null
    status: boolean | null
    feedback: string | null
  }

  export type TrafoCountAggregateOutputType = {
    id: number
    trafo_id: number
    suhu: number
    volt: number
    arus1: number
    arus2: number
    arus3: number
    status: number
    feedback: number
    _all: number
  }


  export type TrafoAvgAggregateInputType = {
    id?: true
    suhu?: true
    volt?: true
    arus1?: true
    arus2?: true
    arus3?: true
  }

  export type TrafoSumAggregateInputType = {
    id?: true
    suhu?: true
    volt?: true
    arus1?: true
    arus2?: true
    arus3?: true
  }

  export type TrafoMinAggregateInputType = {
    id?: true
    trafo_id?: true
    suhu?: true
    volt?: true
    arus1?: true
    arus2?: true
    arus3?: true
    status?: true
    feedback?: true
  }

  export type TrafoMaxAggregateInputType = {
    id?: true
    trafo_id?: true
    suhu?: true
    volt?: true
    arus1?: true
    arus2?: true
    arus3?: true
    status?: true
    feedback?: true
  }

  export type TrafoCountAggregateInputType = {
    id?: true
    trafo_id?: true
    suhu?: true
    volt?: true
    arus1?: true
    arus2?: true
    arus3?: true
    status?: true
    feedback?: true
    _all?: true
  }

  export type TrafoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trafo to aggregate.
     */
    where?: TrafoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trafos to fetch.
     */
    orderBy?: TrafoOrderByWithRelationInput | TrafoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrafoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trafos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trafos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trafos
    **/
    _count?: true | TrafoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrafoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrafoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrafoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrafoMaxAggregateInputType
  }

  export type GetTrafoAggregateType<T extends TrafoAggregateArgs> = {
        [P in keyof T & keyof AggregateTrafo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafo[P]>
      : GetScalarType<T[P], AggregateTrafo[P]>
  }




  export type TrafoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafoWhereInput
    orderBy?: TrafoOrderByWithAggregationInput | TrafoOrderByWithAggregationInput[]
    by: TrafoScalarFieldEnum[] | TrafoScalarFieldEnum
    having?: TrafoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafoCountAggregateInputType | true
    _avg?: TrafoAvgAggregateInputType
    _sum?: TrafoSumAggregateInputType
    _min?: TrafoMinAggregateInputType
    _max?: TrafoMaxAggregateInputType
  }

  export type TrafoGroupByOutputType = {
    id: number
    trafo_id: string
    suhu: Decimal
    volt: Decimal
    arus1: Decimal
    arus2: Decimal
    arus3: Decimal
    status: boolean
    feedback: string | null
    _count: TrafoCountAggregateOutputType | null
    _avg: TrafoAvgAggregateOutputType | null
    _sum: TrafoSumAggregateOutputType | null
    _min: TrafoMinAggregateOutputType | null
    _max: TrafoMaxAggregateOutputType | null
  }

  type GetTrafoGroupByPayload<T extends TrafoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrafoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrafoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrafoGroupByOutputType[P]>
            : GetScalarType<T[P], TrafoGroupByOutputType[P]>
        }
      >
    >


  export type TrafoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trafo_id?: boolean
    suhu?: boolean
    volt?: boolean
    arus1?: boolean
    arus2?: boolean
    arus3?: boolean
    status?: boolean
    feedback?: boolean
  }, ExtArgs["result"]["trafo"]>



  export type TrafoSelectScalar = {
    id?: boolean
    trafo_id?: boolean
    suhu?: boolean
    volt?: boolean
    arus1?: boolean
    arus2?: boolean
    arus3?: boolean
    status?: boolean
    feedback?: boolean
  }

  export type TrafoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trafo_id" | "suhu" | "volt" | "arus1" | "arus2" | "arus3" | "status" | "feedback", ExtArgs["result"]["trafo"]>

  export type $TrafoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trafo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trafo_id: string
      suhu: Prisma.Decimal
      volt: Prisma.Decimal
      arus1: Prisma.Decimal
      arus2: Prisma.Decimal
      arus3: Prisma.Decimal
      status: boolean
      feedback: string | null
    }, ExtArgs["result"]["trafo"]>
    composites: {}
  }

  type TrafoGetPayload<S extends boolean | null | undefined | TrafoDefaultArgs> = $Result.GetResult<Prisma.$TrafoPayload, S>

  type TrafoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrafoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrafoCountAggregateInputType | true
    }

  export interface TrafoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trafo'], meta: { name: 'Trafo' } }
    /**
     * Find zero or one Trafo that matches the filter.
     * @param {TrafoFindUniqueArgs} args - Arguments to find a Trafo
     * @example
     * // Get one Trafo
     * const trafo = await prisma.trafo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrafoFindUniqueArgs>(args: SelectSubset<T, TrafoFindUniqueArgs<ExtArgs>>): Prisma__TrafoClient<$Result.GetResult<Prisma.$TrafoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trafo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrafoFindUniqueOrThrowArgs} args - Arguments to find a Trafo
     * @example
     * // Get one Trafo
     * const trafo = await prisma.trafo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrafoFindUniqueOrThrowArgs>(args: SelectSubset<T, TrafoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrafoClient<$Result.GetResult<Prisma.$TrafoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trafo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoFindFirstArgs} args - Arguments to find a Trafo
     * @example
     * // Get one Trafo
     * const trafo = await prisma.trafo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrafoFindFirstArgs>(args?: SelectSubset<T, TrafoFindFirstArgs<ExtArgs>>): Prisma__TrafoClient<$Result.GetResult<Prisma.$TrafoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trafo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoFindFirstOrThrowArgs} args - Arguments to find a Trafo
     * @example
     * // Get one Trafo
     * const trafo = await prisma.trafo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrafoFindFirstOrThrowArgs>(args?: SelectSubset<T, TrafoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrafoClient<$Result.GetResult<Prisma.$TrafoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trafos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trafos
     * const trafos = await prisma.trafo.findMany()
     * 
     * // Get first 10 Trafos
     * const trafos = await prisma.trafo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trafoWithIdOnly = await prisma.trafo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrafoFindManyArgs>(args?: SelectSubset<T, TrafoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trafo.
     * @param {TrafoCreateArgs} args - Arguments to create a Trafo.
     * @example
     * // Create one Trafo
     * const Trafo = await prisma.trafo.create({
     *   data: {
     *     // ... data to create a Trafo
     *   }
     * })
     * 
     */
    create<T extends TrafoCreateArgs>(args: SelectSubset<T, TrafoCreateArgs<ExtArgs>>): Prisma__TrafoClient<$Result.GetResult<Prisma.$TrafoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trafos.
     * @param {TrafoCreateManyArgs} args - Arguments to create many Trafos.
     * @example
     * // Create many Trafos
     * const trafo = await prisma.trafo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrafoCreateManyArgs>(args?: SelectSubset<T, TrafoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trafo.
     * @param {TrafoDeleteArgs} args - Arguments to delete one Trafo.
     * @example
     * // Delete one Trafo
     * const Trafo = await prisma.trafo.delete({
     *   where: {
     *     // ... filter to delete one Trafo
     *   }
     * })
     * 
     */
    delete<T extends TrafoDeleteArgs>(args: SelectSubset<T, TrafoDeleteArgs<ExtArgs>>): Prisma__TrafoClient<$Result.GetResult<Prisma.$TrafoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trafo.
     * @param {TrafoUpdateArgs} args - Arguments to update one Trafo.
     * @example
     * // Update one Trafo
     * const trafo = await prisma.trafo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrafoUpdateArgs>(args: SelectSubset<T, TrafoUpdateArgs<ExtArgs>>): Prisma__TrafoClient<$Result.GetResult<Prisma.$TrafoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trafos.
     * @param {TrafoDeleteManyArgs} args - Arguments to filter Trafos to delete.
     * @example
     * // Delete a few Trafos
     * const { count } = await prisma.trafo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrafoDeleteManyArgs>(args?: SelectSubset<T, TrafoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trafos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trafos
     * const trafo = await prisma.trafo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrafoUpdateManyArgs>(args: SelectSubset<T, TrafoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trafo.
     * @param {TrafoUpsertArgs} args - Arguments to update or create a Trafo.
     * @example
     * // Update or create a Trafo
     * const trafo = await prisma.trafo.upsert({
     *   create: {
     *     // ... data to create a Trafo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trafo we want to update
     *   }
     * })
     */
    upsert<T extends TrafoUpsertArgs>(args: SelectSubset<T, TrafoUpsertArgs<ExtArgs>>): Prisma__TrafoClient<$Result.GetResult<Prisma.$TrafoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trafos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoCountArgs} args - Arguments to filter Trafos to count.
     * @example
     * // Count the number of Trafos
     * const count = await prisma.trafo.count({
     *   where: {
     *     // ... the filter for the Trafos we want to count
     *   }
     * })
    **/
    count<T extends TrafoCountArgs>(
      args?: Subset<T, TrafoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trafo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrafoAggregateArgs>(args: Subset<T, TrafoAggregateArgs>): Prisma.PrismaPromise<GetTrafoAggregateType<T>>

    /**
     * Group by Trafo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoGroupByArgs} args - Group by arguments.
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
      T extends TrafoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafoGroupByArgs['orderBy'] }
        : { orderBy?: TrafoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrafoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrafoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trafo model
   */
  readonly fields: TrafoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trafo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrafoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Trafo model
   */
  interface TrafoFieldRefs {
    readonly id: FieldRef<"Trafo", 'Int'>
    readonly trafo_id: FieldRef<"Trafo", 'String'>
    readonly suhu: FieldRef<"Trafo", 'Decimal'>
    readonly volt: FieldRef<"Trafo", 'Decimal'>
    readonly arus1: FieldRef<"Trafo", 'Decimal'>
    readonly arus2: FieldRef<"Trafo", 'Decimal'>
    readonly arus3: FieldRef<"Trafo", 'Decimal'>
    readonly status: FieldRef<"Trafo", 'Boolean'>
    readonly feedback: FieldRef<"Trafo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trafo findUnique
   */
  export type TrafoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
    /**
     * Filter, which Trafo to fetch.
     */
    where: TrafoWhereUniqueInput
  }

  /**
   * Trafo findUniqueOrThrow
   */
  export type TrafoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
    /**
     * Filter, which Trafo to fetch.
     */
    where: TrafoWhereUniqueInput
  }

  /**
   * Trafo findFirst
   */
  export type TrafoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
    /**
     * Filter, which Trafo to fetch.
     */
    where?: TrafoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trafos to fetch.
     */
    orderBy?: TrafoOrderByWithRelationInput | TrafoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trafos.
     */
    cursor?: TrafoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trafos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trafos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trafos.
     */
    distinct?: TrafoScalarFieldEnum | TrafoScalarFieldEnum[]
  }

  /**
   * Trafo findFirstOrThrow
   */
  export type TrafoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
    /**
     * Filter, which Trafo to fetch.
     */
    where?: TrafoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trafos to fetch.
     */
    orderBy?: TrafoOrderByWithRelationInput | TrafoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trafos.
     */
    cursor?: TrafoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trafos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trafos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trafos.
     */
    distinct?: TrafoScalarFieldEnum | TrafoScalarFieldEnum[]
  }

  /**
   * Trafo findMany
   */
  export type TrafoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
    /**
     * Filter, which Trafos to fetch.
     */
    where?: TrafoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trafos to fetch.
     */
    orderBy?: TrafoOrderByWithRelationInput | TrafoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trafos.
     */
    cursor?: TrafoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trafos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trafos.
     */
    skip?: number
    distinct?: TrafoScalarFieldEnum | TrafoScalarFieldEnum[]
  }

  /**
   * Trafo create
   */
  export type TrafoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
    /**
     * The data needed to create a Trafo.
     */
    data: XOR<TrafoCreateInput, TrafoUncheckedCreateInput>
  }

  /**
   * Trafo createMany
   */
  export type TrafoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trafos.
     */
    data: TrafoCreateManyInput | TrafoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trafo update
   */
  export type TrafoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
    /**
     * The data needed to update a Trafo.
     */
    data: XOR<TrafoUpdateInput, TrafoUncheckedUpdateInput>
    /**
     * Choose, which Trafo to update.
     */
    where: TrafoWhereUniqueInput
  }

  /**
   * Trafo updateMany
   */
  export type TrafoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trafos.
     */
    data: XOR<TrafoUpdateManyMutationInput, TrafoUncheckedUpdateManyInput>
    /**
     * Filter which Trafos to update
     */
    where?: TrafoWhereInput
    /**
     * Limit how many Trafos to update.
     */
    limit?: number
  }

  /**
   * Trafo upsert
   */
  export type TrafoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
    /**
     * The filter to search for the Trafo to update in case it exists.
     */
    where: TrafoWhereUniqueInput
    /**
     * In case the Trafo found by the `where` argument doesn't exist, create a new Trafo with this data.
     */
    create: XOR<TrafoCreateInput, TrafoUncheckedCreateInput>
    /**
     * In case the Trafo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrafoUpdateInput, TrafoUncheckedUpdateInput>
  }

  /**
   * Trafo delete
   */
  export type TrafoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
    /**
     * Filter which Trafo to delete.
     */
    where: TrafoWhereUniqueInput
  }

  /**
   * Trafo deleteMany
   */
  export type TrafoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trafos to delete
     */
    where?: TrafoWhereInput
    /**
     * Limit how many Trafos to delete.
     */
    limit?: number
  }

  /**
   * Trafo without action
   */
  export type TrafoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trafo
     */
    select?: TrafoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trafo
     */
    omit?: TrafoOmit<ExtArgs> | null
  }


  /**
   * Model TrafoLocation
   */

  export type AggregateTrafoLocation = {
    _count: TrafoLocationCountAggregateOutputType | null
    _avg: TrafoLocationAvgAggregateOutputType | null
    _sum: TrafoLocationSumAggregateOutputType | null
    _min: TrafoLocationMinAggregateOutputType | null
    _max: TrafoLocationMaxAggregateOutputType | null
  }

  export type TrafoLocationAvgAggregateOutputType = {
    lat: number | null
    lang: number | null
  }

  export type TrafoLocationSumAggregateOutputType = {
    lat: number | null
    lang: number | null
  }

  export type TrafoLocationMinAggregateOutputType = {
    id: string | null
    lat: number | null
    lang: number | null
    trafo_id: string | null
  }

  export type TrafoLocationMaxAggregateOutputType = {
    id: string | null
    lat: number | null
    lang: number | null
    trafo_id: string | null
  }

  export type TrafoLocationCountAggregateOutputType = {
    id: number
    lat: number
    lang: number
    trafo_id: number
    _all: number
  }


  export type TrafoLocationAvgAggregateInputType = {
    lat?: true
    lang?: true
  }

  export type TrafoLocationSumAggregateInputType = {
    lat?: true
    lang?: true
  }

  export type TrafoLocationMinAggregateInputType = {
    id?: true
    lat?: true
    lang?: true
    trafo_id?: true
  }

  export type TrafoLocationMaxAggregateInputType = {
    id?: true
    lat?: true
    lang?: true
    trafo_id?: true
  }

  export type TrafoLocationCountAggregateInputType = {
    id?: true
    lat?: true
    lang?: true
    trafo_id?: true
    _all?: true
  }

  export type TrafoLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafoLocation to aggregate.
     */
    where?: TrafoLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafoLocations to fetch.
     */
    orderBy?: TrafoLocationOrderByWithRelationInput | TrafoLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrafoLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafoLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafoLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrafoLocations
    **/
    _count?: true | TrafoLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrafoLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrafoLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrafoLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrafoLocationMaxAggregateInputType
  }

  export type GetTrafoLocationAggregateType<T extends TrafoLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateTrafoLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrafoLocation[P]>
      : GetScalarType<T[P], AggregateTrafoLocation[P]>
  }




  export type TrafoLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrafoLocationWhereInput
    orderBy?: TrafoLocationOrderByWithAggregationInput | TrafoLocationOrderByWithAggregationInput[]
    by: TrafoLocationScalarFieldEnum[] | TrafoLocationScalarFieldEnum
    having?: TrafoLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrafoLocationCountAggregateInputType | true
    _avg?: TrafoLocationAvgAggregateInputType
    _sum?: TrafoLocationSumAggregateInputType
    _min?: TrafoLocationMinAggregateInputType
    _max?: TrafoLocationMaxAggregateInputType
  }

  export type TrafoLocationGroupByOutputType = {
    id: string
    lat: number
    lang: number
    trafo_id: string
    _count: TrafoLocationCountAggregateOutputType | null
    _avg: TrafoLocationAvgAggregateOutputType | null
    _sum: TrafoLocationSumAggregateOutputType | null
    _min: TrafoLocationMinAggregateOutputType | null
    _max: TrafoLocationMaxAggregateOutputType | null
  }

  type GetTrafoLocationGroupByPayload<T extends TrafoLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrafoLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrafoLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrafoLocationGroupByOutputType[P]>
            : GetScalarType<T[P], TrafoLocationGroupByOutputType[P]>
        }
      >
    >


  export type TrafoLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lat?: boolean
    lang?: boolean
    trafo_id?: boolean
  }, ExtArgs["result"]["trafoLocation"]>



  export type TrafoLocationSelectScalar = {
    id?: boolean
    lat?: boolean
    lang?: boolean
    trafo_id?: boolean
  }

  export type TrafoLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lat" | "lang" | "trafo_id", ExtArgs["result"]["trafoLocation"]>

  export type $TrafoLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrafoLocation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lat: number
      lang: number
      trafo_id: string
    }, ExtArgs["result"]["trafoLocation"]>
    composites: {}
  }

  type TrafoLocationGetPayload<S extends boolean | null | undefined | TrafoLocationDefaultArgs> = $Result.GetResult<Prisma.$TrafoLocationPayload, S>

  type TrafoLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrafoLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrafoLocationCountAggregateInputType | true
    }

  export interface TrafoLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrafoLocation'], meta: { name: 'TrafoLocation' } }
    /**
     * Find zero or one TrafoLocation that matches the filter.
     * @param {TrafoLocationFindUniqueArgs} args - Arguments to find a TrafoLocation
     * @example
     * // Get one TrafoLocation
     * const trafoLocation = await prisma.trafoLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrafoLocationFindUniqueArgs>(args: SelectSubset<T, TrafoLocationFindUniqueArgs<ExtArgs>>): Prisma__TrafoLocationClient<$Result.GetResult<Prisma.$TrafoLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrafoLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrafoLocationFindUniqueOrThrowArgs} args - Arguments to find a TrafoLocation
     * @example
     * // Get one TrafoLocation
     * const trafoLocation = await prisma.trafoLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrafoLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, TrafoLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrafoLocationClient<$Result.GetResult<Prisma.$TrafoLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafoLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoLocationFindFirstArgs} args - Arguments to find a TrafoLocation
     * @example
     * // Get one TrafoLocation
     * const trafoLocation = await prisma.trafoLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrafoLocationFindFirstArgs>(args?: SelectSubset<T, TrafoLocationFindFirstArgs<ExtArgs>>): Prisma__TrafoLocationClient<$Result.GetResult<Prisma.$TrafoLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrafoLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoLocationFindFirstOrThrowArgs} args - Arguments to find a TrafoLocation
     * @example
     * // Get one TrafoLocation
     * const trafoLocation = await prisma.trafoLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrafoLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, TrafoLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrafoLocationClient<$Result.GetResult<Prisma.$TrafoLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrafoLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrafoLocations
     * const trafoLocations = await prisma.trafoLocation.findMany()
     * 
     * // Get first 10 TrafoLocations
     * const trafoLocations = await prisma.trafoLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trafoLocationWithIdOnly = await prisma.trafoLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrafoLocationFindManyArgs>(args?: SelectSubset<T, TrafoLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrafoLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrafoLocation.
     * @param {TrafoLocationCreateArgs} args - Arguments to create a TrafoLocation.
     * @example
     * // Create one TrafoLocation
     * const TrafoLocation = await prisma.trafoLocation.create({
     *   data: {
     *     // ... data to create a TrafoLocation
     *   }
     * })
     * 
     */
    create<T extends TrafoLocationCreateArgs>(args: SelectSubset<T, TrafoLocationCreateArgs<ExtArgs>>): Prisma__TrafoLocationClient<$Result.GetResult<Prisma.$TrafoLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrafoLocations.
     * @param {TrafoLocationCreateManyArgs} args - Arguments to create many TrafoLocations.
     * @example
     * // Create many TrafoLocations
     * const trafoLocation = await prisma.trafoLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrafoLocationCreateManyArgs>(args?: SelectSubset<T, TrafoLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrafoLocation.
     * @param {TrafoLocationDeleteArgs} args - Arguments to delete one TrafoLocation.
     * @example
     * // Delete one TrafoLocation
     * const TrafoLocation = await prisma.trafoLocation.delete({
     *   where: {
     *     // ... filter to delete one TrafoLocation
     *   }
     * })
     * 
     */
    delete<T extends TrafoLocationDeleteArgs>(args: SelectSubset<T, TrafoLocationDeleteArgs<ExtArgs>>): Prisma__TrafoLocationClient<$Result.GetResult<Prisma.$TrafoLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrafoLocation.
     * @param {TrafoLocationUpdateArgs} args - Arguments to update one TrafoLocation.
     * @example
     * // Update one TrafoLocation
     * const trafoLocation = await prisma.trafoLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrafoLocationUpdateArgs>(args: SelectSubset<T, TrafoLocationUpdateArgs<ExtArgs>>): Prisma__TrafoLocationClient<$Result.GetResult<Prisma.$TrafoLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrafoLocations.
     * @param {TrafoLocationDeleteManyArgs} args - Arguments to filter TrafoLocations to delete.
     * @example
     * // Delete a few TrafoLocations
     * const { count } = await prisma.trafoLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrafoLocationDeleteManyArgs>(args?: SelectSubset<T, TrafoLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrafoLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrafoLocations
     * const trafoLocation = await prisma.trafoLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrafoLocationUpdateManyArgs>(args: SelectSubset<T, TrafoLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrafoLocation.
     * @param {TrafoLocationUpsertArgs} args - Arguments to update or create a TrafoLocation.
     * @example
     * // Update or create a TrafoLocation
     * const trafoLocation = await prisma.trafoLocation.upsert({
     *   create: {
     *     // ... data to create a TrafoLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrafoLocation we want to update
     *   }
     * })
     */
    upsert<T extends TrafoLocationUpsertArgs>(args: SelectSubset<T, TrafoLocationUpsertArgs<ExtArgs>>): Prisma__TrafoLocationClient<$Result.GetResult<Prisma.$TrafoLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrafoLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoLocationCountArgs} args - Arguments to filter TrafoLocations to count.
     * @example
     * // Count the number of TrafoLocations
     * const count = await prisma.trafoLocation.count({
     *   where: {
     *     // ... the filter for the TrafoLocations we want to count
     *   }
     * })
    **/
    count<T extends TrafoLocationCountArgs>(
      args?: Subset<T, TrafoLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrafoLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrafoLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrafoLocationAggregateArgs>(args: Subset<T, TrafoLocationAggregateArgs>): Prisma.PrismaPromise<GetTrafoLocationAggregateType<T>>

    /**
     * Group by TrafoLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrafoLocationGroupByArgs} args - Group by arguments.
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
      T extends TrafoLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrafoLocationGroupByArgs['orderBy'] }
        : { orderBy?: TrafoLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrafoLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrafoLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrafoLocation model
   */
  readonly fields: TrafoLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrafoLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrafoLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TrafoLocation model
   */
  interface TrafoLocationFieldRefs {
    readonly id: FieldRef<"TrafoLocation", 'String'>
    readonly lat: FieldRef<"TrafoLocation", 'Float'>
    readonly lang: FieldRef<"TrafoLocation", 'Float'>
    readonly trafo_id: FieldRef<"TrafoLocation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrafoLocation findUnique
   */
  export type TrafoLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
    /**
     * Filter, which TrafoLocation to fetch.
     */
    where: TrafoLocationWhereUniqueInput
  }

  /**
   * TrafoLocation findUniqueOrThrow
   */
  export type TrafoLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
    /**
     * Filter, which TrafoLocation to fetch.
     */
    where: TrafoLocationWhereUniqueInput
  }

  /**
   * TrafoLocation findFirst
   */
  export type TrafoLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
    /**
     * Filter, which TrafoLocation to fetch.
     */
    where?: TrafoLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafoLocations to fetch.
     */
    orderBy?: TrafoLocationOrderByWithRelationInput | TrafoLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafoLocations.
     */
    cursor?: TrafoLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafoLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafoLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafoLocations.
     */
    distinct?: TrafoLocationScalarFieldEnum | TrafoLocationScalarFieldEnum[]
  }

  /**
   * TrafoLocation findFirstOrThrow
   */
  export type TrafoLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
    /**
     * Filter, which TrafoLocation to fetch.
     */
    where?: TrafoLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafoLocations to fetch.
     */
    orderBy?: TrafoLocationOrderByWithRelationInput | TrafoLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrafoLocations.
     */
    cursor?: TrafoLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafoLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafoLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrafoLocations.
     */
    distinct?: TrafoLocationScalarFieldEnum | TrafoLocationScalarFieldEnum[]
  }

  /**
   * TrafoLocation findMany
   */
  export type TrafoLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
    /**
     * Filter, which TrafoLocations to fetch.
     */
    where?: TrafoLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrafoLocations to fetch.
     */
    orderBy?: TrafoLocationOrderByWithRelationInput | TrafoLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrafoLocations.
     */
    cursor?: TrafoLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrafoLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrafoLocations.
     */
    skip?: number
    distinct?: TrafoLocationScalarFieldEnum | TrafoLocationScalarFieldEnum[]
  }

  /**
   * TrafoLocation create
   */
  export type TrafoLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
    /**
     * The data needed to create a TrafoLocation.
     */
    data: XOR<TrafoLocationCreateInput, TrafoLocationUncheckedCreateInput>
  }

  /**
   * TrafoLocation createMany
   */
  export type TrafoLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrafoLocations.
     */
    data: TrafoLocationCreateManyInput | TrafoLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrafoLocation update
   */
  export type TrafoLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
    /**
     * The data needed to update a TrafoLocation.
     */
    data: XOR<TrafoLocationUpdateInput, TrafoLocationUncheckedUpdateInput>
    /**
     * Choose, which TrafoLocation to update.
     */
    where: TrafoLocationWhereUniqueInput
  }

  /**
   * TrafoLocation updateMany
   */
  export type TrafoLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrafoLocations.
     */
    data: XOR<TrafoLocationUpdateManyMutationInput, TrafoLocationUncheckedUpdateManyInput>
    /**
     * Filter which TrafoLocations to update
     */
    where?: TrafoLocationWhereInput
    /**
     * Limit how many TrafoLocations to update.
     */
    limit?: number
  }

  /**
   * TrafoLocation upsert
   */
  export type TrafoLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
    /**
     * The filter to search for the TrafoLocation to update in case it exists.
     */
    where: TrafoLocationWhereUniqueInput
    /**
     * In case the TrafoLocation found by the `where` argument doesn't exist, create a new TrafoLocation with this data.
     */
    create: XOR<TrafoLocationCreateInput, TrafoLocationUncheckedCreateInput>
    /**
     * In case the TrafoLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrafoLocationUpdateInput, TrafoLocationUncheckedUpdateInput>
  }

  /**
   * TrafoLocation delete
   */
  export type TrafoLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
    /**
     * Filter which TrafoLocation to delete.
     */
    where: TrafoLocationWhereUniqueInput
  }

  /**
   * TrafoLocation deleteMany
   */
  export type TrafoLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrafoLocations to delete
     */
    where?: TrafoLocationWhereInput
    /**
     * Limit how many TrafoLocations to delete.
     */
    limit?: number
  }

  /**
   * TrafoLocation without action
   */
  export type TrafoLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrafoLocation
     */
    select?: TrafoLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrafoLocation
     */
    omit?: TrafoLocationOmit<ExtArgs> | null
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


  export const TrafoScalarFieldEnum: {
    id: 'id',
    trafo_id: 'trafo_id',
    suhu: 'suhu',
    volt: 'volt',
    arus1: 'arus1',
    arus2: 'arus2',
    arus3: 'arus3',
    status: 'status',
    feedback: 'feedback'
  };

  export type TrafoScalarFieldEnum = (typeof TrafoScalarFieldEnum)[keyof typeof TrafoScalarFieldEnum]


  export const TrafoLocationScalarFieldEnum: {
    id: 'id',
    lat: 'lat',
    lang: 'lang',
    trafo_id: 'trafo_id'
  };

  export type TrafoLocationScalarFieldEnum = (typeof TrafoLocationScalarFieldEnum)[keyof typeof TrafoLocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TrafoOrderByRelevanceFieldEnum: {
    trafo_id: 'trafo_id',
    feedback: 'feedback'
  };

  export type TrafoOrderByRelevanceFieldEnum = (typeof TrafoOrderByRelevanceFieldEnum)[keyof typeof TrafoOrderByRelevanceFieldEnum]


  export const TrafoLocationOrderByRelevanceFieldEnum: {
    id: 'id',
    trafo_id: 'trafo_id'
  };

  export type TrafoLocationOrderByRelevanceFieldEnum = (typeof TrafoLocationOrderByRelevanceFieldEnum)[keyof typeof TrafoLocationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TrafoWhereInput = {
    AND?: TrafoWhereInput | TrafoWhereInput[]
    OR?: TrafoWhereInput[]
    NOT?: TrafoWhereInput | TrafoWhereInput[]
    id?: IntFilter<"Trafo"> | number
    trafo_id?: StringFilter<"Trafo"> | string
    suhu?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    volt?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    arus1?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    arus2?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    arus3?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    status?: BoolFilter<"Trafo"> | boolean
    feedback?: StringNullableFilter<"Trafo"> | string | null
  }

  export type TrafoOrderByWithRelationInput = {
    id?: SortOrder
    trafo_id?: SortOrder
    suhu?: SortOrder
    volt?: SortOrder
    arus1?: SortOrder
    arus2?: SortOrder
    arus3?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    _relevance?: TrafoOrderByRelevanceInput
  }

  export type TrafoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trafo_id?: string
    AND?: TrafoWhereInput | TrafoWhereInput[]
    OR?: TrafoWhereInput[]
    NOT?: TrafoWhereInput | TrafoWhereInput[]
    suhu?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    volt?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    arus1?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    arus2?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    arus3?: DecimalFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    status?: BoolFilter<"Trafo"> | boolean
    feedback?: StringNullableFilter<"Trafo"> | string | null
  }, "id" | "trafo_id">

  export type TrafoOrderByWithAggregationInput = {
    id?: SortOrder
    trafo_id?: SortOrder
    suhu?: SortOrder
    volt?: SortOrder
    arus1?: SortOrder
    arus2?: SortOrder
    arus3?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    _count?: TrafoCountOrderByAggregateInput
    _avg?: TrafoAvgOrderByAggregateInput
    _max?: TrafoMaxOrderByAggregateInput
    _min?: TrafoMinOrderByAggregateInput
    _sum?: TrafoSumOrderByAggregateInput
  }

  export type TrafoScalarWhereWithAggregatesInput = {
    AND?: TrafoScalarWhereWithAggregatesInput | TrafoScalarWhereWithAggregatesInput[]
    OR?: TrafoScalarWhereWithAggregatesInput[]
    NOT?: TrafoScalarWhereWithAggregatesInput | TrafoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trafo"> | number
    trafo_id?: StringWithAggregatesFilter<"Trafo"> | string
    suhu?: DecimalWithAggregatesFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    volt?: DecimalWithAggregatesFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    arus1?: DecimalWithAggregatesFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    arus2?: DecimalWithAggregatesFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    arus3?: DecimalWithAggregatesFilter<"Trafo"> | Decimal | DecimalJsLike | number | string
    status?: BoolWithAggregatesFilter<"Trafo"> | boolean
    feedback?: StringNullableWithAggregatesFilter<"Trafo"> | string | null
  }

  export type TrafoLocationWhereInput = {
    AND?: TrafoLocationWhereInput | TrafoLocationWhereInput[]
    OR?: TrafoLocationWhereInput[]
    NOT?: TrafoLocationWhereInput | TrafoLocationWhereInput[]
    id?: StringFilter<"TrafoLocation"> | string
    lat?: FloatFilter<"TrafoLocation"> | number
    lang?: FloatFilter<"TrafoLocation"> | number
    trafo_id?: StringFilter<"TrafoLocation"> | string
  }

  export type TrafoLocationOrderByWithRelationInput = {
    id?: SortOrder
    lat?: SortOrder
    lang?: SortOrder
    trafo_id?: SortOrder
    _relevance?: TrafoLocationOrderByRelevanceInput
  }

  export type TrafoLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trafo_id?: string
    AND?: TrafoLocationWhereInput | TrafoLocationWhereInput[]
    OR?: TrafoLocationWhereInput[]
    NOT?: TrafoLocationWhereInput | TrafoLocationWhereInput[]
    lat?: FloatFilter<"TrafoLocation"> | number
    lang?: FloatFilter<"TrafoLocation"> | number
  }, "id" | "trafo_id">

  export type TrafoLocationOrderByWithAggregationInput = {
    id?: SortOrder
    lat?: SortOrder
    lang?: SortOrder
    trafo_id?: SortOrder
    _count?: TrafoLocationCountOrderByAggregateInput
    _avg?: TrafoLocationAvgOrderByAggregateInput
    _max?: TrafoLocationMaxOrderByAggregateInput
    _min?: TrafoLocationMinOrderByAggregateInput
    _sum?: TrafoLocationSumOrderByAggregateInput
  }

  export type TrafoLocationScalarWhereWithAggregatesInput = {
    AND?: TrafoLocationScalarWhereWithAggregatesInput | TrafoLocationScalarWhereWithAggregatesInput[]
    OR?: TrafoLocationScalarWhereWithAggregatesInput[]
    NOT?: TrafoLocationScalarWhereWithAggregatesInput | TrafoLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrafoLocation"> | string
    lat?: FloatWithAggregatesFilter<"TrafoLocation"> | number
    lang?: FloatWithAggregatesFilter<"TrafoLocation"> | number
    trafo_id?: StringWithAggregatesFilter<"TrafoLocation"> | string
  }

  export type TrafoCreateInput = {
    trafo_id: string
    suhu: Decimal | DecimalJsLike | number | string
    volt: Decimal | DecimalJsLike | number | string
    arus1: Decimal | DecimalJsLike | number | string
    arus2: Decimal | DecimalJsLike | number | string
    arus3: Decimal | DecimalJsLike | number | string
    status: boolean
    feedback?: string | null
  }

  export type TrafoUncheckedCreateInput = {
    id?: number
    trafo_id: string
    suhu: Decimal | DecimalJsLike | number | string
    volt: Decimal | DecimalJsLike | number | string
    arus1: Decimal | DecimalJsLike | number | string
    arus2: Decimal | DecimalJsLike | number | string
    arus3: Decimal | DecimalJsLike | number | string
    status: boolean
    feedback?: string | null
  }

  export type TrafoUpdateInput = {
    trafo_id?: StringFieldUpdateOperationsInput | string
    suhu?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrafoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trafo_id?: StringFieldUpdateOperationsInput | string
    suhu?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrafoCreateManyInput = {
    id?: number
    trafo_id: string
    suhu: Decimal | DecimalJsLike | number | string
    volt: Decimal | DecimalJsLike | number | string
    arus1: Decimal | DecimalJsLike | number | string
    arus2: Decimal | DecimalJsLike | number | string
    arus3: Decimal | DecimalJsLike | number | string
    status: boolean
    feedback?: string | null
  }

  export type TrafoUpdateManyMutationInput = {
    trafo_id?: StringFieldUpdateOperationsInput | string
    suhu?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrafoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trafo_id?: StringFieldUpdateOperationsInput | string
    suhu?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus1?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus2?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    arus3?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrafoLocationCreateInput = {
    id?: string
    lat: number
    lang: number
    trafo_id: string
  }

  export type TrafoLocationUncheckedCreateInput = {
    id?: string
    lat: number
    lang: number
    trafo_id: string
  }

  export type TrafoLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lang?: FloatFieldUpdateOperationsInput | number
    trafo_id?: StringFieldUpdateOperationsInput | string
  }

  export type TrafoLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lang?: FloatFieldUpdateOperationsInput | number
    trafo_id?: StringFieldUpdateOperationsInput | string
  }

  export type TrafoLocationCreateManyInput = {
    id?: string
    lat: number
    lang: number
    trafo_id: string
  }

  export type TrafoLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lang?: FloatFieldUpdateOperationsInput | number
    trafo_id?: StringFieldUpdateOperationsInput | string
  }

  export type TrafoLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lang?: FloatFieldUpdateOperationsInput | number
    trafo_id?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrafoOrderByRelevanceInput = {
    fields: TrafoOrderByRelevanceFieldEnum | TrafoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrafoCountOrderByAggregateInput = {
    id?: SortOrder
    trafo_id?: SortOrder
    suhu?: SortOrder
    volt?: SortOrder
    arus1?: SortOrder
    arus2?: SortOrder
    arus3?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
  }

  export type TrafoAvgOrderByAggregateInput = {
    id?: SortOrder
    suhu?: SortOrder
    volt?: SortOrder
    arus1?: SortOrder
    arus2?: SortOrder
    arus3?: SortOrder
  }

  export type TrafoMaxOrderByAggregateInput = {
    id?: SortOrder
    trafo_id?: SortOrder
    suhu?: SortOrder
    volt?: SortOrder
    arus1?: SortOrder
    arus2?: SortOrder
    arus3?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
  }

  export type TrafoMinOrderByAggregateInput = {
    id?: SortOrder
    trafo_id?: SortOrder
    suhu?: SortOrder
    volt?: SortOrder
    arus1?: SortOrder
    arus2?: SortOrder
    arus3?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
  }

  export type TrafoSumOrderByAggregateInput = {
    id?: SortOrder
    suhu?: SortOrder
    volt?: SortOrder
    arus1?: SortOrder
    arus2?: SortOrder
    arus3?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TrafoLocationOrderByRelevanceInput = {
    fields: TrafoLocationOrderByRelevanceFieldEnum | TrafoLocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrafoLocationCountOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lang?: SortOrder
    trafo_id?: SortOrder
  }

  export type TrafoLocationAvgOrderByAggregateInput = {
    lat?: SortOrder
    lang?: SortOrder
  }

  export type TrafoLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lang?: SortOrder
    trafo_id?: SortOrder
  }

  export type TrafoLocationMinOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lang?: SortOrder
    trafo_id?: SortOrder
  }

  export type TrafoLocationSumOrderByAggregateInput = {
    lat?: SortOrder
    lang?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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