
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Meta
 * 
 */
export type Meta = $Result.DefaultSelection<Prisma.$MetaPayload>
/**
 * Model Participante
 * 
 */
export type Participante = $Result.DefaultSelection<Prisma.$ParticipantePayload>
/**
 * Model Parcela
 * 
 */
export type Parcela = $Result.DefaultSelection<Prisma.$ParcelaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meta`: Exposes CRUD operations for the **Meta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metas
    * const metas = await prisma.meta.findMany()
    * ```
    */
  get meta(): Prisma.MetaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participante`: Exposes CRUD operations for the **Participante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participantes
    * const participantes = await prisma.participante.findMany()
    * ```
    */
  get participante(): Prisma.ParticipanteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parcela`: Exposes CRUD operations for the **Parcela** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcelas
    * const parcelas = await prisma.parcela.findMany()
    * ```
    */
  get parcela(): Prisma.ParcelaDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Meta: 'Meta',
    Participante: 'Participante',
    Parcela: 'Parcela'
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
      modelProps: "user" | "meta" | "participante" | "parcela"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Meta: {
        payload: Prisma.$MetaPayload<ExtArgs>
        fields: Prisma.MetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findFirst: {
            args: Prisma.MetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          findMany: {
            args: Prisma.MetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          create: {
            args: Prisma.MetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          createMany: {
            args: Prisma.MetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          delete: {
            args: Prisma.MetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          update: {
            args: Prisma.MetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          deleteMany: {
            args: Prisma.MetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>[]
          }
          upsert: {
            args: Prisma.MetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetaPayload>
          }
          aggregate: {
            args: Prisma.MetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeta>
          }
          groupBy: {
            args: Prisma.MetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetaCountArgs<ExtArgs>
            result: $Utils.Optional<MetaCountAggregateOutputType> | number
          }
        }
      }
      Participante: {
        payload: Prisma.$ParticipantePayload<ExtArgs>
        fields: Prisma.ParticipanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipanteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipanteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          findFirst: {
            args: Prisma.ParticipanteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipanteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          findMany: {
            args: Prisma.ParticipanteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          create: {
            args: Prisma.ParticipanteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          createMany: {
            args: Prisma.ParticipanteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipanteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          delete: {
            args: Prisma.ParticipanteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          update: {
            args: Prisma.ParticipanteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          deleteMany: {
            args: Prisma.ParticipanteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipanteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipanteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>[]
          }
          upsert: {
            args: Prisma.ParticipanteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantePayload>
          }
          aggregate: {
            args: Prisma.ParticipanteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipante>
          }
          groupBy: {
            args: Prisma.ParticipanteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipanteCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipanteCountAggregateOutputType> | number
          }
        }
      }
      Parcela: {
        payload: Prisma.$ParcelaPayload<ExtArgs>
        fields: Prisma.ParcelaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParcelaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParcelaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          findFirst: {
            args: Prisma.ParcelaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParcelaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          findMany: {
            args: Prisma.ParcelaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>[]
          }
          create: {
            args: Prisma.ParcelaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          createMany: {
            args: Prisma.ParcelaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParcelaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>[]
          }
          delete: {
            args: Prisma.ParcelaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          update: {
            args: Prisma.ParcelaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          deleteMany: {
            args: Prisma.ParcelaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParcelaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParcelaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>[]
          }
          upsert: {
            args: Prisma.ParcelaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParcelaPayload>
          }
          aggregate: {
            args: Prisma.ParcelaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParcela>
          }
          groupBy: {
            args: Prisma.ParcelaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParcelaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParcelaCountArgs<ExtArgs>
            result: $Utils.Optional<ParcelaCountAggregateOutputType> | number
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
    user?: UserOmit
    meta?: MetaOmit
    participante?: ParticipanteOmit
    parcela?: ParcelaOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    metasCriadas: number
    participacoes: number
    parcelas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metasCriadas?: boolean | UserCountOutputTypeCountMetasCriadasArgs
    participacoes?: boolean | UserCountOutputTypeCountParticipacoesArgs
    parcelas?: boolean | UserCountOutputTypeCountParcelasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMetasCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParcelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelaWhereInput
  }


  /**
   * Count Type MetaCountOutputType
   */

  export type MetaCountOutputType = {
    participantes: number
    parcelas: number
  }

  export type MetaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participantes?: boolean | MetaCountOutputTypeCountParticipantesArgs
    parcelas?: boolean | MetaCountOutputTypeCountParcelasArgs
  }

  // Custom InputTypes
  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaCountOutputType
     */
    select?: MetaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeCountParticipantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteWhereInput
  }

  /**
   * MetaCountOutputType without action
   */
  export type MetaCountOutputTypeCountParcelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metasCriadas?: boolean | User$metasCriadasArgs<ExtArgs>
    participacoes?: boolean | User$participacoesArgs<ExtArgs>
    parcelas?: boolean | User$parcelasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metasCriadas?: boolean | User$metasCriadasArgs<ExtArgs>
    participacoes?: boolean | User$participacoesArgs<ExtArgs>
    parcelas?: boolean | User$parcelasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      metasCriadas: Prisma.$MetaPayload<ExtArgs>[]
      participacoes: Prisma.$ParticipantePayload<ExtArgs>[]
      parcelas: Prisma.$ParcelaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metasCriadas<T extends User$metasCriadasArgs<ExtArgs> = {}>(args?: Subset<T, User$metasCriadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participacoes<T extends User$participacoesArgs<ExtArgs> = {}>(args?: Subset<T, User$participacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parcelas<T extends User$parcelasArgs<ExtArgs> = {}>(args?: Subset<T, User$parcelasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.metasCriadas
   */
  export type User$metasCriadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    cursor?: MetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * User.participacoes
   */
  export type User$participacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    where?: ParticipanteWhereInput
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    cursor?: ParticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * User.parcelas
   */
  export type User$parcelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    where?: ParcelaWhereInput
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    cursor?: ParcelaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Meta
   */

  export type AggregateMeta = {
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  export type MetaAvgAggregateOutputType = {
    valorTotal: number | null
    valorParcela: number | null
    numParcelas: number | null
    intervalo: number | null
    diaVencimento: number | null
    numExecucoes: number | null
    valorMinParcela: number | null
    valorMaxParcela: number | null
  }

  export type MetaSumAggregateOutputType = {
    valorTotal: number | null
    valorParcela: number | null
    numParcelas: number | null
    intervalo: number | null
    diaVencimento: number | null
    numExecucoes: number | null
    valorMinParcela: number | null
    valorMaxParcela: number | null
  }

  export type MetaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    categoria: string | null
    valorTotal: number | null
    valorParcela: number | null
    numParcelas: number | null
    recorrente: boolean | null
    frequencia: string | null
    intervalo: number | null
    diaVencimento: number | null
    diaSemana: string | null
    horario: string | null
    dataInicio: Date | null
    dataFim: Date | null
    numExecucoes: number | null
    distribuicaoTipo: string | null
    valorMinParcela: number | null
    valorMaxParcela: number | null
    usuarioCriadorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    categoria: string | null
    valorTotal: number | null
    valorParcela: number | null
    numParcelas: number | null
    recorrente: boolean | null
    frequencia: string | null
    intervalo: number | null
    diaVencimento: number | null
    diaSemana: string | null
    horario: string | null
    dataInicio: Date | null
    dataFim: Date | null
    numExecucoes: number | null
    distribuicaoTipo: string | null
    valorMinParcela: number | null
    valorMaxParcela: number | null
    usuarioCriadorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    categoria: number
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente: number
    frequencia: number
    intervalo: number
    diaVencimento: number
    diaSemana: number
    horario: number
    dataInicio: number
    dataFim: number
    numExecucoes: number
    distribuicaoTipo: number
    valorMinParcela: number
    valorMaxParcela: number
    usuarioCriadorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetaAvgAggregateInputType = {
    valorTotal?: true
    valorParcela?: true
    numParcelas?: true
    intervalo?: true
    diaVencimento?: true
    numExecucoes?: true
    valorMinParcela?: true
    valorMaxParcela?: true
  }

  export type MetaSumAggregateInputType = {
    valorTotal?: true
    valorParcela?: true
    numParcelas?: true
    intervalo?: true
    diaVencimento?: true
    numExecucoes?: true
    valorMinParcela?: true
    valorMaxParcela?: true
  }

  export type MetaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoria?: true
    valorTotal?: true
    valorParcela?: true
    numParcelas?: true
    recorrente?: true
    frequencia?: true
    intervalo?: true
    diaVencimento?: true
    diaSemana?: true
    horario?: true
    dataInicio?: true
    dataFim?: true
    numExecucoes?: true
    distribuicaoTipo?: true
    valorMinParcela?: true
    valorMaxParcela?: true
    usuarioCriadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoria?: true
    valorTotal?: true
    valorParcela?: true
    numParcelas?: true
    recorrente?: true
    frequencia?: true
    intervalo?: true
    diaVencimento?: true
    diaSemana?: true
    horario?: true
    dataInicio?: true
    dataFim?: true
    numExecucoes?: true
    distribuicaoTipo?: true
    valorMinParcela?: true
    valorMaxParcela?: true
    usuarioCriadorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    categoria?: true
    valorTotal?: true
    valorParcela?: true
    numParcelas?: true
    recorrente?: true
    frequencia?: true
    intervalo?: true
    diaVencimento?: true
    diaSemana?: true
    horario?: true
    dataInicio?: true
    dataFim?: true
    numExecucoes?: true
    distribuicaoTipo?: true
    valorMinParcela?: true
    valorMaxParcela?: true
    usuarioCriadorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meta to aggregate.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metas
    **/
    _count?: true | MetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaMaxAggregateInputType
  }

  export type GetMetaAggregateType<T extends MetaAggregateArgs> = {
        [P in keyof T & keyof AggregateMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeta[P]>
      : GetScalarType<T[P], AggregateMeta[P]>
  }




  export type MetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaWhereInput
    orderBy?: MetaOrderByWithAggregationInput | MetaOrderByWithAggregationInput[]
    by: MetaScalarFieldEnum[] | MetaScalarFieldEnum
    having?: MetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaCountAggregateInputType | true
    _avg?: MetaAvgAggregateInputType
    _sum?: MetaSumAggregateInputType
    _min?: MetaMinAggregateInputType
    _max?: MetaMaxAggregateInputType
  }

  export type MetaGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente: boolean
    frequencia: string | null
    intervalo: number | null
    diaVencimento: number | null
    diaSemana: string | null
    horario: string | null
    dataInicio: Date
    dataFim: Date | null
    numExecucoes: number | null
    distribuicaoTipo: string
    valorMinParcela: number | null
    valorMaxParcela: number | null
    usuarioCriadorId: string
    createdAt: Date
    updatedAt: Date
    _count: MetaCountAggregateOutputType | null
    _avg: MetaAvgAggregateOutputType | null
    _sum: MetaSumAggregateOutputType | null
    _min: MetaMinAggregateOutputType | null
    _max: MetaMaxAggregateOutputType | null
  }

  type GetMetaGroupByPayload<T extends MetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaGroupByOutputType[P]>
            : GetScalarType<T[P], MetaGroupByOutputType[P]>
        }
      >
    >


  export type MetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    valorTotal?: boolean
    valorParcela?: boolean
    numParcelas?: boolean
    recorrente?: boolean
    frequencia?: boolean
    intervalo?: boolean
    diaVencimento?: boolean
    diaSemana?: boolean
    horario?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    numExecucoes?: boolean
    distribuicaoTipo?: boolean
    valorMinParcela?: boolean
    valorMaxParcela?: boolean
    usuarioCriadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioCriador?: boolean | UserDefaultArgs<ExtArgs>
    participantes?: boolean | Meta$participantesArgs<ExtArgs>
    parcelas?: boolean | Meta$parcelasArgs<ExtArgs>
    _count?: boolean | MetaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    valorTotal?: boolean
    valorParcela?: boolean
    numParcelas?: boolean
    recorrente?: boolean
    frequencia?: boolean
    intervalo?: boolean
    diaVencimento?: boolean
    diaSemana?: boolean
    horario?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    numExecucoes?: boolean
    distribuicaoTipo?: boolean
    valorMinParcela?: boolean
    valorMaxParcela?: boolean
    usuarioCriadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioCriador?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    valorTotal?: boolean
    valorParcela?: boolean
    numParcelas?: boolean
    recorrente?: boolean
    frequencia?: boolean
    intervalo?: boolean
    diaVencimento?: boolean
    diaSemana?: boolean
    horario?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    numExecucoes?: boolean
    distribuicaoTipo?: boolean
    valorMinParcela?: boolean
    valorMaxParcela?: boolean
    usuarioCriadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioCriador?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meta"]>

  export type MetaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    valorTotal?: boolean
    valorParcela?: boolean
    numParcelas?: boolean
    recorrente?: boolean
    frequencia?: boolean
    intervalo?: boolean
    diaVencimento?: boolean
    diaSemana?: boolean
    horario?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    numExecucoes?: boolean
    distribuicaoTipo?: boolean
    valorMinParcela?: boolean
    valorMaxParcela?: boolean
    usuarioCriadorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "categoria" | "valorTotal" | "valorParcela" | "numParcelas" | "recorrente" | "frequencia" | "intervalo" | "diaVencimento" | "diaSemana" | "horario" | "dataInicio" | "dataFim" | "numExecucoes" | "distribuicaoTipo" | "valorMinParcela" | "valorMaxParcela" | "usuarioCriadorId" | "createdAt" | "updatedAt", ExtArgs["result"]["meta"]>
  export type MetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioCriador?: boolean | UserDefaultArgs<ExtArgs>
    participantes?: boolean | Meta$participantesArgs<ExtArgs>
    parcelas?: boolean | Meta$parcelasArgs<ExtArgs>
    _count?: boolean | MetaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioCriador?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioCriador?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meta"
    objects: {
      usuarioCriador: Prisma.$UserPayload<ExtArgs>
      participantes: Prisma.$ParticipantePayload<ExtArgs>[]
      parcelas: Prisma.$ParcelaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      categoria: string
      valorTotal: number
      valorParcela: number
      numParcelas: number
      recorrente: boolean
      frequencia: string | null
      intervalo: number | null
      diaVencimento: number | null
      diaSemana: string | null
      horario: string | null
      dataInicio: Date
      dataFim: Date | null
      numExecucoes: number | null
      distribuicaoTipo: string
      valorMinParcela: number | null
      valorMaxParcela: number | null
      usuarioCriadorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meta"]>
    composites: {}
  }

  type MetaGetPayload<S extends boolean | null | undefined | MetaDefaultArgs> = $Result.GetResult<Prisma.$MetaPayload, S>

  type MetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetaCountAggregateInputType | true
    }

  export interface MetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meta'], meta: { name: 'Meta' } }
    /**
     * Find zero or one Meta that matches the filter.
     * @param {MetaFindUniqueArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetaFindUniqueArgs>(args: SelectSubset<T, MetaFindUniqueArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetaFindUniqueOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetaFindUniqueOrThrowArgs>(args: SelectSubset<T, MetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetaFindFirstArgs>(args?: SelectSubset<T, MetaFindFirstArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindFirstOrThrowArgs} args - Arguments to find a Meta
     * @example
     * // Get one Meta
     * const meta = await prisma.meta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetaFindFirstOrThrowArgs>(args?: SelectSubset<T, MetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metas
     * const metas = await prisma.meta.findMany()
     * 
     * // Get first 10 Metas
     * const metas = await prisma.meta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaWithIdOnly = await prisma.meta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetaFindManyArgs>(args?: SelectSubset<T, MetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meta.
     * @param {MetaCreateArgs} args - Arguments to create a Meta.
     * @example
     * // Create one Meta
     * const Meta = await prisma.meta.create({
     *   data: {
     *     // ... data to create a Meta
     *   }
     * })
     * 
     */
    create<T extends MetaCreateArgs>(args: SelectSubset<T, MetaCreateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metas.
     * @param {MetaCreateManyArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetaCreateManyArgs>(args?: SelectSubset<T, MetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metas and returns the data saved in the database.
     * @param {MetaCreateManyAndReturnArgs} args - Arguments to create many Metas.
     * @example
     * // Create many Metas
     * const meta = await prisma.meta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetaCreateManyAndReturnArgs>(args?: SelectSubset<T, MetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meta.
     * @param {MetaDeleteArgs} args - Arguments to delete one Meta.
     * @example
     * // Delete one Meta
     * const Meta = await prisma.meta.delete({
     *   where: {
     *     // ... filter to delete one Meta
     *   }
     * })
     * 
     */
    delete<T extends MetaDeleteArgs>(args: SelectSubset<T, MetaDeleteArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meta.
     * @param {MetaUpdateArgs} args - Arguments to update one Meta.
     * @example
     * // Update one Meta
     * const meta = await prisma.meta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetaUpdateArgs>(args: SelectSubset<T, MetaUpdateArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metas.
     * @param {MetaDeleteManyArgs} args - Arguments to filter Metas to delete.
     * @example
     * // Delete a few Metas
     * const { count } = await prisma.meta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetaDeleteManyArgs>(args?: SelectSubset<T, MetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetaUpdateManyArgs>(args: SelectSubset<T, MetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metas and returns the data updated in the database.
     * @param {MetaUpdateManyAndReturnArgs} args - Arguments to update many Metas.
     * @example
     * // Update many Metas
     * const meta = await prisma.meta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metas and only return the `id`
     * const metaWithIdOnly = await prisma.meta.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetaUpdateManyAndReturnArgs>(args: SelectSubset<T, MetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meta.
     * @param {MetaUpsertArgs} args - Arguments to update or create a Meta.
     * @example
     * // Update or create a Meta
     * const meta = await prisma.meta.upsert({
     *   create: {
     *     // ... data to create a Meta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meta we want to update
     *   }
     * })
     */
    upsert<T extends MetaUpsertArgs>(args: SelectSubset<T, MetaUpsertArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaCountArgs} args - Arguments to filter Metas to count.
     * @example
     * // Count the number of Metas
     * const count = await prisma.meta.count({
     *   where: {
     *     // ... the filter for the Metas we want to count
     *   }
     * })
    **/
    count<T extends MetaCountArgs>(
      args?: Subset<T, MetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetaAggregateArgs>(args: Subset<T, MetaAggregateArgs>): Prisma.PrismaPromise<GetMetaAggregateType<T>>

    /**
     * Group by Meta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaGroupByArgs} args - Group by arguments.
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
      T extends MetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaGroupByArgs['orderBy'] }
        : { orderBy?: MetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meta model
   */
  readonly fields: MetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarioCriador<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participantes<T extends Meta$participantesArgs<ExtArgs> = {}>(args?: Subset<T, Meta$participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parcelas<T extends Meta$parcelasArgs<ExtArgs> = {}>(args?: Subset<T, Meta$parcelasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meta model
   */
  interface MetaFieldRefs {
    readonly id: FieldRef<"Meta", 'String'>
    readonly titulo: FieldRef<"Meta", 'String'>
    readonly descricao: FieldRef<"Meta", 'String'>
    readonly categoria: FieldRef<"Meta", 'String'>
    readonly valorTotal: FieldRef<"Meta", 'Float'>
    readonly valorParcela: FieldRef<"Meta", 'Float'>
    readonly numParcelas: FieldRef<"Meta", 'Int'>
    readonly recorrente: FieldRef<"Meta", 'Boolean'>
    readonly frequencia: FieldRef<"Meta", 'String'>
    readonly intervalo: FieldRef<"Meta", 'Int'>
    readonly diaVencimento: FieldRef<"Meta", 'Int'>
    readonly diaSemana: FieldRef<"Meta", 'String'>
    readonly horario: FieldRef<"Meta", 'String'>
    readonly dataInicio: FieldRef<"Meta", 'DateTime'>
    readonly dataFim: FieldRef<"Meta", 'DateTime'>
    readonly numExecucoes: FieldRef<"Meta", 'Int'>
    readonly distribuicaoTipo: FieldRef<"Meta", 'String'>
    readonly valorMinParcela: FieldRef<"Meta", 'Float'>
    readonly valorMaxParcela: FieldRef<"Meta", 'Float'>
    readonly usuarioCriadorId: FieldRef<"Meta", 'String'>
    readonly createdAt: FieldRef<"Meta", 'DateTime'>
    readonly updatedAt: FieldRef<"Meta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meta findUnique
   */
  export type MetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findUniqueOrThrow
   */
  export type MetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta findFirst
   */
  export type MetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findFirstOrThrow
   */
  export type MetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Meta to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metas.
     */
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta findMany
   */
  export type MetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter, which Metas to fetch.
     */
    where?: MetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metas to fetch.
     */
    orderBy?: MetaOrderByWithRelationInput | MetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metas.
     */
    cursor?: MetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metas.
     */
    skip?: number
    distinct?: MetaScalarFieldEnum | MetaScalarFieldEnum[]
  }

  /**
   * Meta create
   */
  export type MetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Meta.
     */
    data: XOR<MetaCreateInput, MetaUncheckedCreateInput>
  }

  /**
   * Meta createMany
   */
  export type MetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
  }

  /**
   * Meta createManyAndReturn
   */
  export type MetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to create many Metas.
     */
    data: MetaCreateManyInput | MetaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meta update
   */
  export type MetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Meta.
     */
    data: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
    /**
     * Choose, which Meta to update.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta updateMany
   */
  export type MetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
  }

  /**
   * Meta updateManyAndReturn
   */
  export type MetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * The data used to update Metas.
     */
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyInput>
    /**
     * Filter which Metas to update
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meta upsert
   */
  export type MetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Meta to update in case it exists.
     */
    where: MetaWhereUniqueInput
    /**
     * In case the Meta found by the `where` argument doesn't exist, create a new Meta with this data.
     */
    create: XOR<MetaCreateInput, MetaUncheckedCreateInput>
    /**
     * In case the Meta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaUpdateInput, MetaUncheckedUpdateInput>
  }

  /**
   * Meta delete
   */
  export type MetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
    /**
     * Filter which Meta to delete.
     */
    where: MetaWhereUniqueInput
  }

  /**
   * Meta deleteMany
   */
  export type MetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metas to delete
     */
    where?: MetaWhereInput
    /**
     * Limit how many Metas to delete.
     */
    limit?: number
  }

  /**
   * Meta.participantes
   */
  export type Meta$participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    where?: ParticipanteWhereInput
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    cursor?: ParticipanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Meta.parcelas
   */
  export type Meta$parcelasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    where?: ParcelaWhereInput
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    cursor?: ParcelaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * Meta without action
   */
  export type MetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meta
     */
    select?: MetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meta
     */
    omit?: MetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetaInclude<ExtArgs> | null
  }


  /**
   * Model Participante
   */

  export type AggregateParticipante = {
    _count: ParticipanteCountAggregateOutputType | null
    _avg: ParticipanteAvgAggregateOutputType | null
    _sum: ParticipanteSumAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  export type ParticipanteAvgAggregateOutputType = {
    percentual: number | null
  }

  export type ParticipanteSumAggregateOutputType = {
    percentual: number | null
  }

  export type ParticipanteMinAggregateOutputType = {
    id: string | null
    metaId: string | null
    usuarioId: string | null
    percentual: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipanteMaxAggregateOutputType = {
    id: string | null
    metaId: string | null
    usuarioId: string | null
    percentual: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipanteCountAggregateOutputType = {
    id: number
    metaId: number
    usuarioId: number
    percentual: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipanteAvgAggregateInputType = {
    percentual?: true
  }

  export type ParticipanteSumAggregateInputType = {
    percentual?: true
  }

  export type ParticipanteMinAggregateInputType = {
    id?: true
    metaId?: true
    usuarioId?: true
    percentual?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipanteMaxAggregateInputType = {
    id?: true
    metaId?: true
    usuarioId?: true
    percentual?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipanteCountAggregateInputType = {
    id?: true
    metaId?: true
    usuarioId?: true
    percentual?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participante to aggregate.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participantes
    **/
    _count?: true | ParticipanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipanteMaxAggregateInputType
  }

  export type GetParticipanteAggregateType<T extends ParticipanteAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipante[P]>
      : GetScalarType<T[P], AggregateParticipante[P]>
  }




  export type ParticipanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipanteWhereInput
    orderBy?: ParticipanteOrderByWithAggregationInput | ParticipanteOrderByWithAggregationInput[]
    by: ParticipanteScalarFieldEnum[] | ParticipanteScalarFieldEnum
    having?: ParticipanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipanteCountAggregateInputType | true
    _avg?: ParticipanteAvgAggregateInputType
    _sum?: ParticipanteSumAggregateInputType
    _min?: ParticipanteMinAggregateInputType
    _max?: ParticipanteMaxAggregateInputType
  }

  export type ParticipanteGroupByOutputType = {
    id: string
    metaId: string
    usuarioId: string
    percentual: number
    createdAt: Date
    updatedAt: Date
    _count: ParticipanteCountAggregateOutputType | null
    _avg: ParticipanteAvgAggregateOutputType | null
    _sum: ParticipanteSumAggregateOutputType | null
    _min: ParticipanteMinAggregateOutputType | null
    _max: ParticipanteMaxAggregateOutputType | null
  }

  type GetParticipanteGroupByPayload<T extends ParticipanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipanteGroupByOutputType[P]>
        }
      >
    >


  export type ParticipanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaId?: boolean
    usuarioId?: boolean
    percentual?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>

  export type ParticipanteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaId?: boolean
    usuarioId?: boolean
    percentual?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>

  export type ParticipanteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaId?: boolean
    usuarioId?: boolean
    percentual?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participante"]>

  export type ParticipanteSelectScalar = {
    id?: boolean
    metaId?: boolean
    usuarioId?: boolean
    percentual?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParticipanteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metaId" | "usuarioId" | "percentual" | "createdAt" | "updatedAt", ExtArgs["result"]["participante"]>
  export type ParticipanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipanteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParticipanteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    usuario?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParticipantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participante"
    objects: {
      meta: Prisma.$MetaPayload<ExtArgs>
      usuario: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metaId: string
      usuarioId: string
      percentual: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participante"]>
    composites: {}
  }

  type ParticipanteGetPayload<S extends boolean | null | undefined | ParticipanteDefaultArgs> = $Result.GetResult<Prisma.$ParticipantePayload, S>

  type ParticipanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipanteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipanteCountAggregateInputType | true
    }

  export interface ParticipanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participante'], meta: { name: 'Participante' } }
    /**
     * Find zero or one Participante that matches the filter.
     * @param {ParticipanteFindUniqueArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipanteFindUniqueArgs>(args: SelectSubset<T, ParticipanteFindUniqueArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participante that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipanteFindUniqueOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipanteFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipanteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindFirstArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipanteFindFirstArgs>(args?: SelectSubset<T, ParticipanteFindFirstArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindFirstOrThrowArgs} args - Arguments to find a Participante
     * @example
     * // Get one Participante
     * const participante = await prisma.participante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipanteFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipanteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participantes
     * const participantes = await prisma.participante.findMany()
     * 
     * // Get first 10 Participantes
     * const participantes = await prisma.participante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participanteWithIdOnly = await prisma.participante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipanteFindManyArgs>(args?: SelectSubset<T, ParticipanteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participante.
     * @param {ParticipanteCreateArgs} args - Arguments to create a Participante.
     * @example
     * // Create one Participante
     * const Participante = await prisma.participante.create({
     *   data: {
     *     // ... data to create a Participante
     *   }
     * })
     * 
     */
    create<T extends ParticipanteCreateArgs>(args: SelectSubset<T, ParticipanteCreateArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participantes.
     * @param {ParticipanteCreateManyArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participante = await prisma.participante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipanteCreateManyArgs>(args?: SelectSubset<T, ParticipanteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participantes and returns the data saved in the database.
     * @param {ParticipanteCreateManyAndReturnArgs} args - Arguments to create many Participantes.
     * @example
     * // Create many Participantes
     * const participante = await prisma.participante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participantes and only return the `id`
     * const participanteWithIdOnly = await prisma.participante.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipanteCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipanteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participante.
     * @param {ParticipanteDeleteArgs} args - Arguments to delete one Participante.
     * @example
     * // Delete one Participante
     * const Participante = await prisma.participante.delete({
     *   where: {
     *     // ... filter to delete one Participante
     *   }
     * })
     * 
     */
    delete<T extends ParticipanteDeleteArgs>(args: SelectSubset<T, ParticipanteDeleteArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participante.
     * @param {ParticipanteUpdateArgs} args - Arguments to update one Participante.
     * @example
     * // Update one Participante
     * const participante = await prisma.participante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipanteUpdateArgs>(args: SelectSubset<T, ParticipanteUpdateArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participantes.
     * @param {ParticipanteDeleteManyArgs} args - Arguments to filter Participantes to delete.
     * @example
     * // Delete a few Participantes
     * const { count } = await prisma.participante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipanteDeleteManyArgs>(args?: SelectSubset<T, ParticipanteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participantes
     * const participante = await prisma.participante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipanteUpdateManyArgs>(args: SelectSubset<T, ParticipanteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participantes and returns the data updated in the database.
     * @param {ParticipanteUpdateManyAndReturnArgs} args - Arguments to update many Participantes.
     * @example
     * // Update many Participantes
     * const participante = await prisma.participante.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participantes and only return the `id`
     * const participanteWithIdOnly = await prisma.participante.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipanteUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipanteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participante.
     * @param {ParticipanteUpsertArgs} args - Arguments to update or create a Participante.
     * @example
     * // Update or create a Participante
     * const participante = await prisma.participante.upsert({
     *   create: {
     *     // ... data to create a Participante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participante we want to update
     *   }
     * })
     */
    upsert<T extends ParticipanteUpsertArgs>(args: SelectSubset<T, ParticipanteUpsertArgs<ExtArgs>>): Prisma__ParticipanteClient<$Result.GetResult<Prisma.$ParticipantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteCountArgs} args - Arguments to filter Participantes to count.
     * @example
     * // Count the number of Participantes
     * const count = await prisma.participante.count({
     *   where: {
     *     // ... the filter for the Participantes we want to count
     *   }
     * })
    **/
    count<T extends ParticipanteCountArgs>(
      args?: Subset<T, ParticipanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipanteAggregateArgs>(args: Subset<T, ParticipanteAggregateArgs>): Prisma.PrismaPromise<GetParticipanteAggregateType<T>>

    /**
     * Group by Participante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipanteGroupByArgs} args - Group by arguments.
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
      T extends ParticipanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipanteGroupByArgs['orderBy'] }
        : { orderBy?: ParticipanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participante model
   */
  readonly fields: ParticipanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meta<T extends MetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetaDefaultArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Participante model
   */
  interface ParticipanteFieldRefs {
    readonly id: FieldRef<"Participante", 'String'>
    readonly metaId: FieldRef<"Participante", 'String'>
    readonly usuarioId: FieldRef<"Participante", 'String'>
    readonly percentual: FieldRef<"Participante", 'Float'>
    readonly createdAt: FieldRef<"Participante", 'DateTime'>
    readonly updatedAt: FieldRef<"Participante", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participante findUnique
   */
  export type ParticipanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante findUniqueOrThrow
   */
  export type ParticipanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante findFirst
   */
  export type ParticipanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante findFirstOrThrow
   */
  export type ParticipanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participante to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participantes.
     */
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante findMany
   */
  export type ParticipanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter, which Participantes to fetch.
     */
    where?: ParticipanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participantes to fetch.
     */
    orderBy?: ParticipanteOrderByWithRelationInput | ParticipanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participantes.
     */
    cursor?: ParticipanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participantes.
     */
    skip?: number
    distinct?: ParticipanteScalarFieldEnum | ParticipanteScalarFieldEnum[]
  }

  /**
   * Participante create
   */
  export type ParticipanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Participante.
     */
    data: XOR<ParticipanteCreateInput, ParticipanteUncheckedCreateInput>
  }

  /**
   * Participante createMany
   */
  export type ParticipanteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participantes.
     */
    data: ParticipanteCreateManyInput | ParticipanteCreateManyInput[]
  }

  /**
   * Participante createManyAndReturn
   */
  export type ParticipanteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * The data used to create many Participantes.
     */
    data: ParticipanteCreateManyInput | ParticipanteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participante update
   */
  export type ParticipanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Participante.
     */
    data: XOR<ParticipanteUpdateInput, ParticipanteUncheckedUpdateInput>
    /**
     * Choose, which Participante to update.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante updateMany
   */
  export type ParticipanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to update.
     */
    limit?: number
  }

  /**
   * Participante updateManyAndReturn
   */
  export type ParticipanteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * The data used to update Participantes.
     */
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyInput>
    /**
     * Filter which Participantes to update
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participante upsert
   */
  export type ParticipanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Participante to update in case it exists.
     */
    where: ParticipanteWhereUniqueInput
    /**
     * In case the Participante found by the `where` argument doesn't exist, create a new Participante with this data.
     */
    create: XOR<ParticipanteCreateInput, ParticipanteUncheckedCreateInput>
    /**
     * In case the Participante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipanteUpdateInput, ParticipanteUncheckedUpdateInput>
  }

  /**
   * Participante delete
   */
  export type ParticipanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
    /**
     * Filter which Participante to delete.
     */
    where: ParticipanteWhereUniqueInput
  }

  /**
   * Participante deleteMany
   */
  export type ParticipanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participantes to delete
     */
    where?: ParticipanteWhereInput
    /**
     * Limit how many Participantes to delete.
     */
    limit?: number
  }

  /**
   * Participante without action
   */
  export type ParticipanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participante
     */
    select?: ParticipanteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participante
     */
    omit?: ParticipanteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipanteInclude<ExtArgs> | null
  }


  /**
   * Model Parcela
   */

  export type AggregateParcela = {
    _count: ParcelaCountAggregateOutputType | null
    _avg: ParcelaAvgAggregateOutputType | null
    _sum: ParcelaSumAggregateOutputType | null
    _min: ParcelaMinAggregateOutputType | null
    _max: ParcelaMaxAggregateOutputType | null
  }

  export type ParcelaAvgAggregateOutputType = {
    numero: number | null
    valor: number | null
    valorPago: number | null
  }

  export type ParcelaSumAggregateOutputType = {
    numero: number | null
    valor: number | null
    valorPago: number | null
  }

  export type ParcelaMinAggregateOutputType = {
    id: string | null
    metaId: string | null
    numero: number | null
    valor: number | null
    dataVencimento: Date | null
    status: string | null
    valorPago: number | null
    responsavelId: string | null
    dataPagamento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelaMaxAggregateOutputType = {
    id: string | null
    metaId: string | null
    numero: number | null
    valor: number | null
    dataVencimento: Date | null
    status: string | null
    valorPago: number | null
    responsavelId: string | null
    dataPagamento: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParcelaCountAggregateOutputType = {
    id: number
    metaId: number
    numero: number
    valor: number
    dataVencimento: number
    status: number
    valorPago: number
    responsavelId: number
    dataPagamento: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParcelaAvgAggregateInputType = {
    numero?: true
    valor?: true
    valorPago?: true
  }

  export type ParcelaSumAggregateInputType = {
    numero?: true
    valor?: true
    valorPago?: true
  }

  export type ParcelaMinAggregateInputType = {
    id?: true
    metaId?: true
    numero?: true
    valor?: true
    dataVencimento?: true
    status?: true
    valorPago?: true
    responsavelId?: true
    dataPagamento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelaMaxAggregateInputType = {
    id?: true
    metaId?: true
    numero?: true
    valor?: true
    dataVencimento?: true
    status?: true
    valorPago?: true
    responsavelId?: true
    dataPagamento?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParcelaCountAggregateInputType = {
    id?: true
    metaId?: true
    numero?: true
    valor?: true
    dataVencimento?: true
    status?: true
    valorPago?: true
    responsavelId?: true
    dataPagamento?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParcelaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcela to aggregate.
     */
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     */
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parcelas
    **/
    _count?: true | ParcelaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParcelaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParcelaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelaMaxAggregateInputType
  }

  export type GetParcelaAggregateType<T extends ParcelaAggregateArgs> = {
        [P in keyof T & keyof AggregateParcela]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcela[P]>
      : GetScalarType<T[P], AggregateParcela[P]>
  }




  export type ParcelaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParcelaWhereInput
    orderBy?: ParcelaOrderByWithAggregationInput | ParcelaOrderByWithAggregationInput[]
    by: ParcelaScalarFieldEnum[] | ParcelaScalarFieldEnum
    having?: ParcelaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelaCountAggregateInputType | true
    _avg?: ParcelaAvgAggregateInputType
    _sum?: ParcelaSumAggregateInputType
    _min?: ParcelaMinAggregateInputType
    _max?: ParcelaMaxAggregateInputType
  }

  export type ParcelaGroupByOutputType = {
    id: string
    metaId: string
    numero: number
    valor: number
    dataVencimento: Date
    status: string
    valorPago: number | null
    responsavelId: string
    dataPagamento: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ParcelaCountAggregateOutputType | null
    _avg: ParcelaAvgAggregateOutputType | null
    _sum: ParcelaSumAggregateOutputType | null
    _min: ParcelaMinAggregateOutputType | null
    _max: ParcelaMaxAggregateOutputType | null
  }

  type GetParcelaGroupByPayload<T extends ParcelaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParcelaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelaGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelaGroupByOutputType[P]>
        }
      >
    >


  export type ParcelaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaId?: boolean
    numero?: boolean
    valor?: boolean
    dataVencimento?: boolean
    status?: boolean
    valorPago?: boolean
    responsavelId?: boolean
    dataPagamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    responsavel?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcela"]>

  export type ParcelaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaId?: boolean
    numero?: boolean
    valor?: boolean
    dataVencimento?: boolean
    status?: boolean
    valorPago?: boolean
    responsavelId?: boolean
    dataPagamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    responsavel?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcela"]>

  export type ParcelaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaId?: boolean
    numero?: boolean
    valor?: boolean
    dataVencimento?: boolean
    status?: boolean
    valorPago?: boolean
    responsavelId?: boolean
    dataPagamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    responsavel?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parcela"]>

  export type ParcelaSelectScalar = {
    id?: boolean
    metaId?: boolean
    numero?: boolean
    valor?: boolean
    dataVencimento?: boolean
    status?: boolean
    valorPago?: boolean
    responsavelId?: boolean
    dataPagamento?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParcelaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metaId" | "numero" | "valor" | "dataVencimento" | "status" | "valorPago" | "responsavelId" | "dataPagamento" | "createdAt" | "updatedAt", ExtArgs["result"]["parcela"]>
  export type ParcelaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    responsavel?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParcelaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    responsavel?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParcelaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | MetaDefaultArgs<ExtArgs>
    responsavel?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParcelaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parcela"
    objects: {
      meta: Prisma.$MetaPayload<ExtArgs>
      responsavel: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metaId: string
      numero: number
      valor: number
      dataVencimento: Date
      status: string
      valorPago: number | null
      responsavelId: string
      dataPagamento: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parcela"]>
    composites: {}
  }

  type ParcelaGetPayload<S extends boolean | null | undefined | ParcelaDefaultArgs> = $Result.GetResult<Prisma.$ParcelaPayload, S>

  type ParcelaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParcelaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParcelaCountAggregateInputType | true
    }

  export interface ParcelaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parcela'], meta: { name: 'Parcela' } }
    /**
     * Find zero or one Parcela that matches the filter.
     * @param {ParcelaFindUniqueArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParcelaFindUniqueArgs>(args: SelectSubset<T, ParcelaFindUniqueArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parcela that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParcelaFindUniqueOrThrowArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParcelaFindUniqueOrThrowArgs>(args: SelectSubset<T, ParcelaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcela that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaFindFirstArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParcelaFindFirstArgs>(args?: SelectSubset<T, ParcelaFindFirstArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parcela that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaFindFirstOrThrowArgs} args - Arguments to find a Parcela
     * @example
     * // Get one Parcela
     * const parcela = await prisma.parcela.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParcelaFindFirstOrThrowArgs>(args?: SelectSubset<T, ParcelaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parcelas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcelas
     * const parcelas = await prisma.parcela.findMany()
     * 
     * // Get first 10 Parcelas
     * const parcelas = await prisma.parcela.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelaWithIdOnly = await prisma.parcela.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParcelaFindManyArgs>(args?: SelectSubset<T, ParcelaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parcela.
     * @param {ParcelaCreateArgs} args - Arguments to create a Parcela.
     * @example
     * // Create one Parcela
     * const Parcela = await prisma.parcela.create({
     *   data: {
     *     // ... data to create a Parcela
     *   }
     * })
     * 
     */
    create<T extends ParcelaCreateArgs>(args: SelectSubset<T, ParcelaCreateArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parcelas.
     * @param {ParcelaCreateManyArgs} args - Arguments to create many Parcelas.
     * @example
     * // Create many Parcelas
     * const parcela = await prisma.parcela.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParcelaCreateManyArgs>(args?: SelectSubset<T, ParcelaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parcelas and returns the data saved in the database.
     * @param {ParcelaCreateManyAndReturnArgs} args - Arguments to create many Parcelas.
     * @example
     * // Create many Parcelas
     * const parcela = await prisma.parcela.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parcelas and only return the `id`
     * const parcelaWithIdOnly = await prisma.parcela.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParcelaCreateManyAndReturnArgs>(args?: SelectSubset<T, ParcelaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parcela.
     * @param {ParcelaDeleteArgs} args - Arguments to delete one Parcela.
     * @example
     * // Delete one Parcela
     * const Parcela = await prisma.parcela.delete({
     *   where: {
     *     // ... filter to delete one Parcela
     *   }
     * })
     * 
     */
    delete<T extends ParcelaDeleteArgs>(args: SelectSubset<T, ParcelaDeleteArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parcela.
     * @param {ParcelaUpdateArgs} args - Arguments to update one Parcela.
     * @example
     * // Update one Parcela
     * const parcela = await prisma.parcela.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParcelaUpdateArgs>(args: SelectSubset<T, ParcelaUpdateArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parcelas.
     * @param {ParcelaDeleteManyArgs} args - Arguments to filter Parcelas to delete.
     * @example
     * // Delete a few Parcelas
     * const { count } = await prisma.parcela.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParcelaDeleteManyArgs>(args?: SelectSubset<T, ParcelaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcelas
     * const parcela = await prisma.parcela.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParcelaUpdateManyArgs>(args: SelectSubset<T, ParcelaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcelas and returns the data updated in the database.
     * @param {ParcelaUpdateManyAndReturnArgs} args - Arguments to update many Parcelas.
     * @example
     * // Update many Parcelas
     * const parcela = await prisma.parcela.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parcelas and only return the `id`
     * const parcelaWithIdOnly = await prisma.parcela.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParcelaUpdateManyAndReturnArgs>(args: SelectSubset<T, ParcelaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parcela.
     * @param {ParcelaUpsertArgs} args - Arguments to update or create a Parcela.
     * @example
     * // Update or create a Parcela
     * const parcela = await prisma.parcela.upsert({
     *   create: {
     *     // ... data to create a Parcela
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parcela we want to update
     *   }
     * })
     */
    upsert<T extends ParcelaUpsertArgs>(args: SelectSubset<T, ParcelaUpsertArgs<ExtArgs>>): Prisma__ParcelaClient<$Result.GetResult<Prisma.$ParcelaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parcelas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaCountArgs} args - Arguments to filter Parcelas to count.
     * @example
     * // Count the number of Parcelas
     * const count = await prisma.parcela.count({
     *   where: {
     *     // ... the filter for the Parcelas we want to count
     *   }
     * })
    **/
    count<T extends ParcelaCountArgs>(
      args?: Subset<T, ParcelaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parcela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParcelaAggregateArgs>(args: Subset<T, ParcelaAggregateArgs>): Prisma.PrismaPromise<GetParcelaAggregateType<T>>

    /**
     * Group by Parcela.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelaGroupByArgs} args - Group by arguments.
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
      T extends ParcelaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelaGroupByArgs['orderBy'] }
        : { orderBy?: ParcelaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParcelaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parcela model
   */
  readonly fields: ParcelaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parcela.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParcelaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meta<T extends MetaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetaDefaultArgs<ExtArgs>>): Prisma__MetaClient<$Result.GetResult<Prisma.$MetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Parcela model
   */
  interface ParcelaFieldRefs {
    readonly id: FieldRef<"Parcela", 'String'>
    readonly metaId: FieldRef<"Parcela", 'String'>
    readonly numero: FieldRef<"Parcela", 'Int'>
    readonly valor: FieldRef<"Parcela", 'Float'>
    readonly dataVencimento: FieldRef<"Parcela", 'DateTime'>
    readonly status: FieldRef<"Parcela", 'String'>
    readonly valorPago: FieldRef<"Parcela", 'Float'>
    readonly responsavelId: FieldRef<"Parcela", 'String'>
    readonly dataPagamento: FieldRef<"Parcela", 'DateTime'>
    readonly createdAt: FieldRef<"Parcela", 'DateTime'>
    readonly updatedAt: FieldRef<"Parcela", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parcela findUnique
   */
  export type ParcelaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcela to fetch.
     */
    where: ParcelaWhereUniqueInput
  }

  /**
   * Parcela findUniqueOrThrow
   */
  export type ParcelaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcela to fetch.
     */
    where: ParcelaWhereUniqueInput
  }

  /**
   * Parcela findFirst
   */
  export type ParcelaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcela to fetch.
     */
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     */
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcelas.
     */
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcelas.
     */
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * Parcela findFirstOrThrow
   */
  export type ParcelaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcela to fetch.
     */
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     */
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parcelas.
     */
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parcelas.
     */
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * Parcela findMany
   */
  export type ParcelaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter, which Parcelas to fetch.
     */
    where?: ParcelaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parcelas to fetch.
     */
    orderBy?: ParcelaOrderByWithRelationInput | ParcelaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parcelas.
     */
    cursor?: ParcelaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parcelas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parcelas.
     */
    skip?: number
    distinct?: ParcelaScalarFieldEnum | ParcelaScalarFieldEnum[]
  }

  /**
   * Parcela create
   */
  export type ParcelaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * The data needed to create a Parcela.
     */
    data: XOR<ParcelaCreateInput, ParcelaUncheckedCreateInput>
  }

  /**
   * Parcela createMany
   */
  export type ParcelaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parcelas.
     */
    data: ParcelaCreateManyInput | ParcelaCreateManyInput[]
  }

  /**
   * Parcela createManyAndReturn
   */
  export type ParcelaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * The data used to create many Parcelas.
     */
    data: ParcelaCreateManyInput | ParcelaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcela update
   */
  export type ParcelaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * The data needed to update a Parcela.
     */
    data: XOR<ParcelaUpdateInput, ParcelaUncheckedUpdateInput>
    /**
     * Choose, which Parcela to update.
     */
    where: ParcelaWhereUniqueInput
  }

  /**
   * Parcela updateMany
   */
  export type ParcelaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parcelas.
     */
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyInput>
    /**
     * Filter which Parcelas to update
     */
    where?: ParcelaWhereInput
    /**
     * Limit how many Parcelas to update.
     */
    limit?: number
  }

  /**
   * Parcela updateManyAndReturn
   */
  export type ParcelaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * The data used to update Parcelas.
     */
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyInput>
    /**
     * Filter which Parcelas to update
     */
    where?: ParcelaWhereInput
    /**
     * Limit how many Parcelas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parcela upsert
   */
  export type ParcelaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * The filter to search for the Parcela to update in case it exists.
     */
    where: ParcelaWhereUniqueInput
    /**
     * In case the Parcela found by the `where` argument doesn't exist, create a new Parcela with this data.
     */
    create: XOR<ParcelaCreateInput, ParcelaUncheckedCreateInput>
    /**
     * In case the Parcela was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParcelaUpdateInput, ParcelaUncheckedUpdateInput>
  }

  /**
   * Parcela delete
   */
  export type ParcelaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
    /**
     * Filter which Parcela to delete.
     */
    where: ParcelaWhereUniqueInput
  }

  /**
   * Parcela deleteMany
   */
  export type ParcelaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parcelas to delete
     */
    where?: ParcelaWhereInput
    /**
     * Limit how many Parcelas to delete.
     */
    limit?: number
  }

  /**
   * Parcela without action
   */
  export type ParcelaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parcela
     */
    select?: ParcelaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parcela
     */
    omit?: ParcelaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParcelaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MetaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    categoria: 'categoria',
    valorTotal: 'valorTotal',
    valorParcela: 'valorParcela',
    numParcelas: 'numParcelas',
    recorrente: 'recorrente',
    frequencia: 'frequencia',
    intervalo: 'intervalo',
    diaVencimento: 'diaVencimento',
    diaSemana: 'diaSemana',
    horario: 'horario',
    dataInicio: 'dataInicio',
    dataFim: 'dataFim',
    numExecucoes: 'numExecucoes',
    distribuicaoTipo: 'distribuicaoTipo',
    valorMinParcela: 'valorMinParcela',
    valorMaxParcela: 'valorMaxParcela',
    usuarioCriadorId: 'usuarioCriadorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetaScalarFieldEnum = (typeof MetaScalarFieldEnum)[keyof typeof MetaScalarFieldEnum]


  export const ParticipanteScalarFieldEnum: {
    id: 'id',
    metaId: 'metaId',
    usuarioId: 'usuarioId',
    percentual: 'percentual',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParticipanteScalarFieldEnum = (typeof ParticipanteScalarFieldEnum)[keyof typeof ParticipanteScalarFieldEnum]


  export const ParcelaScalarFieldEnum: {
    id: 'id',
    metaId: 'metaId',
    numero: 'numero',
    valor: 'valor',
    dataVencimento: 'dataVencimento',
    status: 'status',
    valorPago: 'valorPago',
    responsavelId: 'responsavelId',
    dataPagamento: 'dataPagamento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParcelaScalarFieldEnum = (typeof ParcelaScalarFieldEnum)[keyof typeof ParcelaScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    metasCriadas?: MetaListRelationFilter
    participacoes?: ParticipanteListRelationFilter
    parcelas?: ParcelaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metasCriadas?: MetaOrderByRelationAggregateInput
    participacoes?: ParticipanteOrderByRelationAggregateInput
    parcelas?: ParcelaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    metasCriadas?: MetaListRelationFilter
    participacoes?: ParticipanteListRelationFilter
    parcelas?: ParcelaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MetaWhereInput = {
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    id?: StringFilter<"Meta"> | string
    titulo?: StringFilter<"Meta"> | string
    descricao?: StringNullableFilter<"Meta"> | string | null
    categoria?: StringFilter<"Meta"> | string
    valorTotal?: FloatFilter<"Meta"> | number
    valorParcela?: FloatFilter<"Meta"> | number
    numParcelas?: IntFilter<"Meta"> | number
    recorrente?: BoolFilter<"Meta"> | boolean
    frequencia?: StringNullableFilter<"Meta"> | string | null
    intervalo?: IntNullableFilter<"Meta"> | number | null
    diaVencimento?: IntNullableFilter<"Meta"> | number | null
    diaSemana?: StringNullableFilter<"Meta"> | string | null
    horario?: StringNullableFilter<"Meta"> | string | null
    dataInicio?: DateTimeFilter<"Meta"> | Date | string
    dataFim?: DateTimeNullableFilter<"Meta"> | Date | string | null
    numExecucoes?: IntNullableFilter<"Meta"> | number | null
    distribuicaoTipo?: StringFilter<"Meta"> | string
    valorMinParcela?: FloatNullableFilter<"Meta"> | number | null
    valorMaxParcela?: FloatNullableFilter<"Meta"> | number | null
    usuarioCriadorId?: StringFilter<"Meta"> | string
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
    usuarioCriador?: XOR<UserScalarRelationFilter, UserWhereInput>
    participantes?: ParticipanteListRelationFilter
    parcelas?: ParcelaListRelationFilter
  }

  export type MetaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    categoria?: SortOrder
    valorTotal?: SortOrder
    valorParcela?: SortOrder
    numParcelas?: SortOrder
    recorrente?: SortOrder
    frequencia?: SortOrderInput | SortOrder
    intervalo?: SortOrderInput | SortOrder
    diaVencimento?: SortOrderInput | SortOrder
    diaSemana?: SortOrderInput | SortOrder
    horario?: SortOrderInput | SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    numExecucoes?: SortOrderInput | SortOrder
    distribuicaoTipo?: SortOrder
    valorMinParcela?: SortOrderInput | SortOrder
    valorMaxParcela?: SortOrderInput | SortOrder
    usuarioCriadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioCriador?: UserOrderByWithRelationInput
    participantes?: ParticipanteOrderByRelationAggregateInput
    parcelas?: ParcelaOrderByRelationAggregateInput
  }

  export type MetaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetaWhereInput | MetaWhereInput[]
    OR?: MetaWhereInput[]
    NOT?: MetaWhereInput | MetaWhereInput[]
    titulo?: StringFilter<"Meta"> | string
    descricao?: StringNullableFilter<"Meta"> | string | null
    categoria?: StringFilter<"Meta"> | string
    valorTotal?: FloatFilter<"Meta"> | number
    valorParcela?: FloatFilter<"Meta"> | number
    numParcelas?: IntFilter<"Meta"> | number
    recorrente?: BoolFilter<"Meta"> | boolean
    frequencia?: StringNullableFilter<"Meta"> | string | null
    intervalo?: IntNullableFilter<"Meta"> | number | null
    diaVencimento?: IntNullableFilter<"Meta"> | number | null
    diaSemana?: StringNullableFilter<"Meta"> | string | null
    horario?: StringNullableFilter<"Meta"> | string | null
    dataInicio?: DateTimeFilter<"Meta"> | Date | string
    dataFim?: DateTimeNullableFilter<"Meta"> | Date | string | null
    numExecucoes?: IntNullableFilter<"Meta"> | number | null
    distribuicaoTipo?: StringFilter<"Meta"> | string
    valorMinParcela?: FloatNullableFilter<"Meta"> | number | null
    valorMaxParcela?: FloatNullableFilter<"Meta"> | number | null
    usuarioCriadorId?: StringFilter<"Meta"> | string
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
    usuarioCriador?: XOR<UserScalarRelationFilter, UserWhereInput>
    participantes?: ParticipanteListRelationFilter
    parcelas?: ParcelaListRelationFilter
  }, "id">

  export type MetaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    categoria?: SortOrder
    valorTotal?: SortOrder
    valorParcela?: SortOrder
    numParcelas?: SortOrder
    recorrente?: SortOrder
    frequencia?: SortOrderInput | SortOrder
    intervalo?: SortOrderInput | SortOrder
    diaVencimento?: SortOrderInput | SortOrder
    diaSemana?: SortOrderInput | SortOrder
    horario?: SortOrderInput | SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrderInput | SortOrder
    numExecucoes?: SortOrderInput | SortOrder
    distribuicaoTipo?: SortOrder
    valorMinParcela?: SortOrderInput | SortOrder
    valorMaxParcela?: SortOrderInput | SortOrder
    usuarioCriadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetaCountOrderByAggregateInput
    _avg?: MetaAvgOrderByAggregateInput
    _max?: MetaMaxOrderByAggregateInput
    _min?: MetaMinOrderByAggregateInput
    _sum?: MetaSumOrderByAggregateInput
  }

  export type MetaScalarWhereWithAggregatesInput = {
    AND?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    OR?: MetaScalarWhereWithAggregatesInput[]
    NOT?: MetaScalarWhereWithAggregatesInput | MetaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meta"> | string
    titulo?: StringWithAggregatesFilter<"Meta"> | string
    descricao?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    categoria?: StringWithAggregatesFilter<"Meta"> | string
    valorTotal?: FloatWithAggregatesFilter<"Meta"> | number
    valorParcela?: FloatWithAggregatesFilter<"Meta"> | number
    numParcelas?: IntWithAggregatesFilter<"Meta"> | number
    recorrente?: BoolWithAggregatesFilter<"Meta"> | boolean
    frequencia?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    intervalo?: IntNullableWithAggregatesFilter<"Meta"> | number | null
    diaVencimento?: IntNullableWithAggregatesFilter<"Meta"> | number | null
    diaSemana?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    horario?: StringNullableWithAggregatesFilter<"Meta"> | string | null
    dataInicio?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
    dataFim?: DateTimeNullableWithAggregatesFilter<"Meta"> | Date | string | null
    numExecucoes?: IntNullableWithAggregatesFilter<"Meta"> | number | null
    distribuicaoTipo?: StringWithAggregatesFilter<"Meta"> | string
    valorMinParcela?: FloatNullableWithAggregatesFilter<"Meta"> | number | null
    valorMaxParcela?: FloatNullableWithAggregatesFilter<"Meta"> | number | null
    usuarioCriadorId?: StringWithAggregatesFilter<"Meta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meta"> | Date | string
  }

  export type ParticipanteWhereInput = {
    AND?: ParticipanteWhereInput | ParticipanteWhereInput[]
    OR?: ParticipanteWhereInput[]
    NOT?: ParticipanteWhereInput | ParticipanteWhereInput[]
    id?: StringFilter<"Participante"> | string
    metaId?: StringFilter<"Participante"> | string
    usuarioId?: StringFilter<"Participante"> | string
    percentual?: FloatFilter<"Participante"> | number
    createdAt?: DateTimeFilter<"Participante"> | Date | string
    updatedAt?: DateTimeFilter<"Participante"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ParticipanteOrderByWithRelationInput = {
    id?: SortOrder
    metaId?: SortOrder
    usuarioId?: SortOrder
    percentual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: MetaOrderByWithRelationInput
    usuario?: UserOrderByWithRelationInput
  }

  export type ParticipanteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    metaId_usuarioId?: ParticipanteMetaIdUsuarioIdCompoundUniqueInput
    AND?: ParticipanteWhereInput | ParticipanteWhereInput[]
    OR?: ParticipanteWhereInput[]
    NOT?: ParticipanteWhereInput | ParticipanteWhereInput[]
    metaId?: StringFilter<"Participante"> | string
    usuarioId?: StringFilter<"Participante"> | string
    percentual?: FloatFilter<"Participante"> | number
    createdAt?: DateTimeFilter<"Participante"> | Date | string
    updatedAt?: DateTimeFilter<"Participante"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "metaId_usuarioId">

  export type ParticipanteOrderByWithAggregationInput = {
    id?: SortOrder
    metaId?: SortOrder
    usuarioId?: SortOrder
    percentual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParticipanteCountOrderByAggregateInput
    _avg?: ParticipanteAvgOrderByAggregateInput
    _max?: ParticipanteMaxOrderByAggregateInput
    _min?: ParticipanteMinOrderByAggregateInput
    _sum?: ParticipanteSumOrderByAggregateInput
  }

  export type ParticipanteScalarWhereWithAggregatesInput = {
    AND?: ParticipanteScalarWhereWithAggregatesInput | ParticipanteScalarWhereWithAggregatesInput[]
    OR?: ParticipanteScalarWhereWithAggregatesInput[]
    NOT?: ParticipanteScalarWhereWithAggregatesInput | ParticipanteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participante"> | string
    metaId?: StringWithAggregatesFilter<"Participante"> | string
    usuarioId?: StringWithAggregatesFilter<"Participante"> | string
    percentual?: FloatWithAggregatesFilter<"Participante"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Participante"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Participante"> | Date | string
  }

  export type ParcelaWhereInput = {
    AND?: ParcelaWhereInput | ParcelaWhereInput[]
    OR?: ParcelaWhereInput[]
    NOT?: ParcelaWhereInput | ParcelaWhereInput[]
    id?: StringFilter<"Parcela"> | string
    metaId?: StringFilter<"Parcela"> | string
    numero?: IntFilter<"Parcela"> | number
    valor?: FloatFilter<"Parcela"> | number
    dataVencimento?: DateTimeFilter<"Parcela"> | Date | string
    status?: StringFilter<"Parcela"> | string
    valorPago?: FloatNullableFilter<"Parcela"> | number | null
    responsavelId?: StringFilter<"Parcela"> | string
    dataPagamento?: DateTimeNullableFilter<"Parcela"> | Date | string | null
    createdAt?: DateTimeFilter<"Parcela"> | Date | string
    updatedAt?: DateTimeFilter<"Parcela"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    responsavel?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ParcelaOrderByWithRelationInput = {
    id?: SortOrder
    metaId?: SortOrder
    numero?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    valorPago?: SortOrderInput | SortOrder
    responsavelId?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: MetaOrderByWithRelationInput
    responsavel?: UserOrderByWithRelationInput
  }

  export type ParcelaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    metaId_numero_responsavelId?: ParcelaMetaIdNumeroResponsavelIdCompoundUniqueInput
    AND?: ParcelaWhereInput | ParcelaWhereInput[]
    OR?: ParcelaWhereInput[]
    NOT?: ParcelaWhereInput | ParcelaWhereInput[]
    metaId?: StringFilter<"Parcela"> | string
    numero?: IntFilter<"Parcela"> | number
    valor?: FloatFilter<"Parcela"> | number
    dataVencimento?: DateTimeFilter<"Parcela"> | Date | string
    status?: StringFilter<"Parcela"> | string
    valorPago?: FloatNullableFilter<"Parcela"> | number | null
    responsavelId?: StringFilter<"Parcela"> | string
    dataPagamento?: DateTimeNullableFilter<"Parcela"> | Date | string | null
    createdAt?: DateTimeFilter<"Parcela"> | Date | string
    updatedAt?: DateTimeFilter<"Parcela"> | Date | string
    meta?: XOR<MetaScalarRelationFilter, MetaWhereInput>
    responsavel?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "metaId_numero_responsavelId">

  export type ParcelaOrderByWithAggregationInput = {
    id?: SortOrder
    metaId?: SortOrder
    numero?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    valorPago?: SortOrderInput | SortOrder
    responsavelId?: SortOrder
    dataPagamento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParcelaCountOrderByAggregateInput
    _avg?: ParcelaAvgOrderByAggregateInput
    _max?: ParcelaMaxOrderByAggregateInput
    _min?: ParcelaMinOrderByAggregateInput
    _sum?: ParcelaSumOrderByAggregateInput
  }

  export type ParcelaScalarWhereWithAggregatesInput = {
    AND?: ParcelaScalarWhereWithAggregatesInput | ParcelaScalarWhereWithAggregatesInput[]
    OR?: ParcelaScalarWhereWithAggregatesInput[]
    NOT?: ParcelaScalarWhereWithAggregatesInput | ParcelaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parcela"> | string
    metaId?: StringWithAggregatesFilter<"Parcela"> | string
    numero?: IntWithAggregatesFilter<"Parcela"> | number
    valor?: FloatWithAggregatesFilter<"Parcela"> | number
    dataVencimento?: DateTimeWithAggregatesFilter<"Parcela"> | Date | string
    status?: StringWithAggregatesFilter<"Parcela"> | string
    valorPago?: FloatNullableWithAggregatesFilter<"Parcela"> | number | null
    responsavelId?: StringWithAggregatesFilter<"Parcela"> | string
    dataPagamento?: DateTimeNullableWithAggregatesFilter<"Parcela"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Parcela"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parcela"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metasCriadas?: MetaCreateNestedManyWithoutUsuarioCriadorInput
    participacoes?: ParticipanteCreateNestedManyWithoutUsuarioInput
    parcelas?: ParcelaCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metasCriadas?: MetaUncheckedCreateNestedManyWithoutUsuarioCriadorInput
    participacoes?: ParticipanteUncheckedCreateNestedManyWithoutUsuarioInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metasCriadas?: MetaUpdateManyWithoutUsuarioCriadorNestedInput
    participacoes?: ParticipanteUpdateManyWithoutUsuarioNestedInput
    parcelas?: ParcelaUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metasCriadas?: MetaUncheckedUpdateManyWithoutUsuarioCriadorNestedInput
    participacoes?: ParticipanteUncheckedUpdateManyWithoutUsuarioNestedInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioCriador: UserCreateNestedOneWithoutMetasCriadasInput
    participantes?: ParticipanteCreateNestedManyWithoutMetaInput
    parcelas?: ParcelaCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    usuarioCriadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipanteUncheckedCreateNestedManyWithoutMetaInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioCriador?: UserUpdateOneRequiredWithoutMetasCriadasNestedInput
    participantes?: ParticipanteUpdateManyWithoutMetaNestedInput
    parcelas?: ParcelaUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    usuarioCriadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUncheckedUpdateManyWithoutMetaNestedInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type MetaCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    usuarioCriadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    usuarioCriadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteCreateInput = {
    id?: string
    percentual: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutParticipantesInput
    usuario: UserCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipanteUncheckedCreateInput = {
    id?: string
    metaId: string
    usuarioId: string
    percentual: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutParticipantesNestedInput
    usuario?: UserUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipanteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteCreateManyInput = {
    id?: string
    metaId: string
    usuarioId: string
    percentual: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaCreateInput = {
    id?: string
    numero: number
    valor: number
    dataVencimento: Date | string
    status?: string
    valorPago?: number | null
    dataPagamento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutParcelasInput
    responsavel: UserCreateNestedOneWithoutParcelasInput
  }

  export type ParcelaUncheckedCreateInput = {
    id?: string
    metaId: string
    numero: number
    valor: number
    dataVencimento: Date | string
    status?: string
    valorPago?: number | null
    responsavelId: string
    dataPagamento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutParcelasNestedInput
    responsavel?: UserUpdateOneRequiredWithoutParcelasNestedInput
  }

  export type ParcelaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelId?: StringFieldUpdateOperationsInput | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaCreateManyInput = {
    id?: string
    metaId: string
    numero: number
    valor: number
    dataVencimento: Date | string
    status?: string
    valorPago?: number | null
    responsavelId: string
    dataPagamento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelId?: StringFieldUpdateOperationsInput | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MetaListRelationFilter = {
    every?: MetaWhereInput
    some?: MetaWhereInput
    none?: MetaWhereInput
  }

  export type ParticipanteListRelationFilter = {
    every?: ParticipanteWhereInput
    some?: ParticipanteWhereInput
    none?: ParticipanteWhereInput
  }

  export type ParcelaListRelationFilter = {
    every?: ParcelaWhereInput
    some?: ParcelaWhereInput
    none?: ParcelaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParcelaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MetaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    valorTotal?: SortOrder
    valorParcela?: SortOrder
    numParcelas?: SortOrder
    recorrente?: SortOrder
    frequencia?: SortOrder
    intervalo?: SortOrder
    diaVencimento?: SortOrder
    diaSemana?: SortOrder
    horario?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    numExecucoes?: SortOrder
    distribuicaoTipo?: SortOrder
    valorMinParcela?: SortOrder
    valorMaxParcela?: SortOrder
    usuarioCriadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaAvgOrderByAggregateInput = {
    valorTotal?: SortOrder
    valorParcela?: SortOrder
    numParcelas?: SortOrder
    intervalo?: SortOrder
    diaVencimento?: SortOrder
    numExecucoes?: SortOrder
    valorMinParcela?: SortOrder
    valorMaxParcela?: SortOrder
  }

  export type MetaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    valorTotal?: SortOrder
    valorParcela?: SortOrder
    numParcelas?: SortOrder
    recorrente?: SortOrder
    frequencia?: SortOrder
    intervalo?: SortOrder
    diaVencimento?: SortOrder
    diaSemana?: SortOrder
    horario?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    numExecucoes?: SortOrder
    distribuicaoTipo?: SortOrder
    valorMinParcela?: SortOrder
    valorMaxParcela?: SortOrder
    usuarioCriadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    valorTotal?: SortOrder
    valorParcela?: SortOrder
    numParcelas?: SortOrder
    recorrente?: SortOrder
    frequencia?: SortOrder
    intervalo?: SortOrder
    diaVencimento?: SortOrder
    diaSemana?: SortOrder
    horario?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    numExecucoes?: SortOrder
    distribuicaoTipo?: SortOrder
    valorMinParcela?: SortOrder
    valorMaxParcela?: SortOrder
    usuarioCriadorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetaSumOrderByAggregateInput = {
    valorTotal?: SortOrder
    valorParcela?: SortOrder
    numParcelas?: SortOrder
    intervalo?: SortOrder
    diaVencimento?: SortOrder
    numExecucoes?: SortOrder
    valorMinParcela?: SortOrder
    valorMaxParcela?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MetaScalarRelationFilter = {
    is?: MetaWhereInput
    isNot?: MetaWhereInput
  }

  export type ParticipanteMetaIdUsuarioIdCompoundUniqueInput = {
    metaId: string
    usuarioId: string
  }

  export type ParticipanteCountOrderByAggregateInput = {
    id?: SortOrder
    metaId?: SortOrder
    usuarioId?: SortOrder
    percentual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipanteAvgOrderByAggregateInput = {
    percentual?: SortOrder
  }

  export type ParticipanteMaxOrderByAggregateInput = {
    id?: SortOrder
    metaId?: SortOrder
    usuarioId?: SortOrder
    percentual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipanteMinOrderByAggregateInput = {
    id?: SortOrder
    metaId?: SortOrder
    usuarioId?: SortOrder
    percentual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipanteSumOrderByAggregateInput = {
    percentual?: SortOrder
  }

  export type ParcelaMetaIdNumeroResponsavelIdCompoundUniqueInput = {
    metaId: string
    numero: number
    responsavelId: string
  }

  export type ParcelaCountOrderByAggregateInput = {
    id?: SortOrder
    metaId?: SortOrder
    numero?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    valorPago?: SortOrder
    responsavelId?: SortOrder
    dataPagamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelaAvgOrderByAggregateInput = {
    numero?: SortOrder
    valor?: SortOrder
    valorPago?: SortOrder
  }

  export type ParcelaMaxOrderByAggregateInput = {
    id?: SortOrder
    metaId?: SortOrder
    numero?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    valorPago?: SortOrder
    responsavelId?: SortOrder
    dataPagamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelaMinOrderByAggregateInput = {
    id?: SortOrder
    metaId?: SortOrder
    numero?: SortOrder
    valor?: SortOrder
    dataVencimento?: SortOrder
    status?: SortOrder
    valorPago?: SortOrder
    responsavelId?: SortOrder
    dataPagamento?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParcelaSumOrderByAggregateInput = {
    numero?: SortOrder
    valor?: SortOrder
    valorPago?: SortOrder
  }

  export type MetaCreateNestedManyWithoutUsuarioCriadorInput = {
    create?: XOR<MetaCreateWithoutUsuarioCriadorInput, MetaUncheckedCreateWithoutUsuarioCriadorInput> | MetaCreateWithoutUsuarioCriadorInput[] | MetaUncheckedCreateWithoutUsuarioCriadorInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUsuarioCriadorInput | MetaCreateOrConnectWithoutUsuarioCriadorInput[]
    createMany?: MetaCreateManyUsuarioCriadorInputEnvelope
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
  }

  export type ParticipanteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput> | ParticipanteCreateWithoutUsuarioInput[] | ParticipanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutUsuarioInput | ParticipanteCreateOrConnectWithoutUsuarioInput[]
    createMany?: ParticipanteCreateManyUsuarioInputEnvelope
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
  }

  export type ParcelaCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<ParcelaCreateWithoutResponsavelInput, ParcelaUncheckedCreateWithoutResponsavelInput> | ParcelaCreateWithoutResponsavelInput[] | ParcelaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutResponsavelInput | ParcelaCreateOrConnectWithoutResponsavelInput[]
    createMany?: ParcelaCreateManyResponsavelInputEnvelope
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
  }

  export type MetaUncheckedCreateNestedManyWithoutUsuarioCriadorInput = {
    create?: XOR<MetaCreateWithoutUsuarioCriadorInput, MetaUncheckedCreateWithoutUsuarioCriadorInput> | MetaCreateWithoutUsuarioCriadorInput[] | MetaUncheckedCreateWithoutUsuarioCriadorInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUsuarioCriadorInput | MetaCreateOrConnectWithoutUsuarioCriadorInput[]
    createMany?: MetaCreateManyUsuarioCriadorInputEnvelope
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
  }

  export type ParticipanteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput> | ParticipanteCreateWithoutUsuarioInput[] | ParticipanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutUsuarioInput | ParticipanteCreateOrConnectWithoutUsuarioInput[]
    createMany?: ParticipanteCreateManyUsuarioInputEnvelope
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
  }

  export type ParcelaUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<ParcelaCreateWithoutResponsavelInput, ParcelaUncheckedCreateWithoutResponsavelInput> | ParcelaCreateWithoutResponsavelInput[] | ParcelaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutResponsavelInput | ParcelaCreateOrConnectWithoutResponsavelInput[]
    createMany?: ParcelaCreateManyResponsavelInputEnvelope
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MetaUpdateManyWithoutUsuarioCriadorNestedInput = {
    create?: XOR<MetaCreateWithoutUsuarioCriadorInput, MetaUncheckedCreateWithoutUsuarioCriadorInput> | MetaCreateWithoutUsuarioCriadorInput[] | MetaUncheckedCreateWithoutUsuarioCriadorInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUsuarioCriadorInput | MetaCreateOrConnectWithoutUsuarioCriadorInput[]
    upsert?: MetaUpsertWithWhereUniqueWithoutUsuarioCriadorInput | MetaUpsertWithWhereUniqueWithoutUsuarioCriadorInput[]
    createMany?: MetaCreateManyUsuarioCriadorInputEnvelope
    set?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    disconnect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    delete?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    update?: MetaUpdateWithWhereUniqueWithoutUsuarioCriadorInput | MetaUpdateWithWhereUniqueWithoutUsuarioCriadorInput[]
    updateMany?: MetaUpdateManyWithWhereWithoutUsuarioCriadorInput | MetaUpdateManyWithWhereWithoutUsuarioCriadorInput[]
    deleteMany?: MetaScalarWhereInput | MetaScalarWhereInput[]
  }

  export type ParticipanteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput> | ParticipanteCreateWithoutUsuarioInput[] | ParticipanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutUsuarioInput | ParticipanteCreateOrConnectWithoutUsuarioInput[]
    upsert?: ParticipanteUpsertWithWhereUniqueWithoutUsuarioInput | ParticipanteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ParticipanteCreateManyUsuarioInputEnvelope
    set?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    disconnect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    delete?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    update?: ParticipanteUpdateWithWhereUniqueWithoutUsuarioInput | ParticipanteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ParticipanteUpdateManyWithWhereWithoutUsuarioInput | ParticipanteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
  }

  export type ParcelaUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<ParcelaCreateWithoutResponsavelInput, ParcelaUncheckedCreateWithoutResponsavelInput> | ParcelaCreateWithoutResponsavelInput[] | ParcelaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutResponsavelInput | ParcelaCreateOrConnectWithoutResponsavelInput[]
    upsert?: ParcelaUpsertWithWhereUniqueWithoutResponsavelInput | ParcelaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: ParcelaCreateManyResponsavelInputEnvelope
    set?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    disconnect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    delete?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    update?: ParcelaUpdateWithWhereUniqueWithoutResponsavelInput | ParcelaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: ParcelaUpdateManyWithWhereWithoutResponsavelInput | ParcelaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
  }

  export type MetaUncheckedUpdateManyWithoutUsuarioCriadorNestedInput = {
    create?: XOR<MetaCreateWithoutUsuarioCriadorInput, MetaUncheckedCreateWithoutUsuarioCriadorInput> | MetaCreateWithoutUsuarioCriadorInput[] | MetaUncheckedCreateWithoutUsuarioCriadorInput[]
    connectOrCreate?: MetaCreateOrConnectWithoutUsuarioCriadorInput | MetaCreateOrConnectWithoutUsuarioCriadorInput[]
    upsert?: MetaUpsertWithWhereUniqueWithoutUsuarioCriadorInput | MetaUpsertWithWhereUniqueWithoutUsuarioCriadorInput[]
    createMany?: MetaCreateManyUsuarioCriadorInputEnvelope
    set?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    disconnect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    delete?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    connect?: MetaWhereUniqueInput | MetaWhereUniqueInput[]
    update?: MetaUpdateWithWhereUniqueWithoutUsuarioCriadorInput | MetaUpdateWithWhereUniqueWithoutUsuarioCriadorInput[]
    updateMany?: MetaUpdateManyWithWhereWithoutUsuarioCriadorInput | MetaUpdateManyWithWhereWithoutUsuarioCriadorInput[]
    deleteMany?: MetaScalarWhereInput | MetaScalarWhereInput[]
  }

  export type ParticipanteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput> | ParticipanteCreateWithoutUsuarioInput[] | ParticipanteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutUsuarioInput | ParticipanteCreateOrConnectWithoutUsuarioInput[]
    upsert?: ParticipanteUpsertWithWhereUniqueWithoutUsuarioInput | ParticipanteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ParticipanteCreateManyUsuarioInputEnvelope
    set?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    disconnect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    delete?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    update?: ParticipanteUpdateWithWhereUniqueWithoutUsuarioInput | ParticipanteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ParticipanteUpdateManyWithWhereWithoutUsuarioInput | ParticipanteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
  }

  export type ParcelaUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<ParcelaCreateWithoutResponsavelInput, ParcelaUncheckedCreateWithoutResponsavelInput> | ParcelaCreateWithoutResponsavelInput[] | ParcelaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutResponsavelInput | ParcelaCreateOrConnectWithoutResponsavelInput[]
    upsert?: ParcelaUpsertWithWhereUniqueWithoutResponsavelInput | ParcelaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: ParcelaCreateManyResponsavelInputEnvelope
    set?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    disconnect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    delete?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    update?: ParcelaUpdateWithWhereUniqueWithoutResponsavelInput | ParcelaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: ParcelaUpdateManyWithWhereWithoutResponsavelInput | ParcelaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMetasCriadasInput = {
    create?: XOR<UserCreateWithoutMetasCriadasInput, UserUncheckedCreateWithoutMetasCriadasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetasCriadasInput
    connect?: UserWhereUniqueInput
  }

  export type ParticipanteCreateNestedManyWithoutMetaInput = {
    create?: XOR<ParticipanteCreateWithoutMetaInput, ParticipanteUncheckedCreateWithoutMetaInput> | ParticipanteCreateWithoutMetaInput[] | ParticipanteUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutMetaInput | ParticipanteCreateOrConnectWithoutMetaInput[]
    createMany?: ParticipanteCreateManyMetaInputEnvelope
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
  }

  export type ParcelaCreateNestedManyWithoutMetaInput = {
    create?: XOR<ParcelaCreateWithoutMetaInput, ParcelaUncheckedCreateWithoutMetaInput> | ParcelaCreateWithoutMetaInput[] | ParcelaUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutMetaInput | ParcelaCreateOrConnectWithoutMetaInput[]
    createMany?: ParcelaCreateManyMetaInputEnvelope
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
  }

  export type ParticipanteUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<ParticipanteCreateWithoutMetaInput, ParticipanteUncheckedCreateWithoutMetaInput> | ParticipanteCreateWithoutMetaInput[] | ParticipanteUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutMetaInput | ParticipanteCreateOrConnectWithoutMetaInput[]
    createMany?: ParticipanteCreateManyMetaInputEnvelope
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
  }

  export type ParcelaUncheckedCreateNestedManyWithoutMetaInput = {
    create?: XOR<ParcelaCreateWithoutMetaInput, ParcelaUncheckedCreateWithoutMetaInput> | ParcelaCreateWithoutMetaInput[] | ParcelaUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutMetaInput | ParcelaCreateOrConnectWithoutMetaInput[]
    createMany?: ParcelaCreateManyMetaInputEnvelope
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type UserUpdateOneRequiredWithoutMetasCriadasNestedInput = {
    create?: XOR<UserCreateWithoutMetasCriadasInput, UserUncheckedCreateWithoutMetasCriadasInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetasCriadasInput
    upsert?: UserUpsertWithoutMetasCriadasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMetasCriadasInput, UserUpdateWithoutMetasCriadasInput>, UserUncheckedUpdateWithoutMetasCriadasInput>
  }

  export type ParticipanteUpdateManyWithoutMetaNestedInput = {
    create?: XOR<ParticipanteCreateWithoutMetaInput, ParticipanteUncheckedCreateWithoutMetaInput> | ParticipanteCreateWithoutMetaInput[] | ParticipanteUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutMetaInput | ParticipanteCreateOrConnectWithoutMetaInput[]
    upsert?: ParticipanteUpsertWithWhereUniqueWithoutMetaInput | ParticipanteUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: ParticipanteCreateManyMetaInputEnvelope
    set?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    disconnect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    delete?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    update?: ParticipanteUpdateWithWhereUniqueWithoutMetaInput | ParticipanteUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: ParticipanteUpdateManyWithWhereWithoutMetaInput | ParticipanteUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
  }

  export type ParcelaUpdateManyWithoutMetaNestedInput = {
    create?: XOR<ParcelaCreateWithoutMetaInput, ParcelaUncheckedCreateWithoutMetaInput> | ParcelaCreateWithoutMetaInput[] | ParcelaUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutMetaInput | ParcelaCreateOrConnectWithoutMetaInput[]
    upsert?: ParcelaUpsertWithWhereUniqueWithoutMetaInput | ParcelaUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: ParcelaCreateManyMetaInputEnvelope
    set?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    disconnect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    delete?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    update?: ParcelaUpdateWithWhereUniqueWithoutMetaInput | ParcelaUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: ParcelaUpdateManyWithWhereWithoutMetaInput | ParcelaUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
  }

  export type ParticipanteUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<ParticipanteCreateWithoutMetaInput, ParticipanteUncheckedCreateWithoutMetaInput> | ParticipanteCreateWithoutMetaInput[] | ParticipanteUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ParticipanteCreateOrConnectWithoutMetaInput | ParticipanteCreateOrConnectWithoutMetaInput[]
    upsert?: ParticipanteUpsertWithWhereUniqueWithoutMetaInput | ParticipanteUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: ParticipanteCreateManyMetaInputEnvelope
    set?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    disconnect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    delete?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    connect?: ParticipanteWhereUniqueInput | ParticipanteWhereUniqueInput[]
    update?: ParticipanteUpdateWithWhereUniqueWithoutMetaInput | ParticipanteUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: ParticipanteUpdateManyWithWhereWithoutMetaInput | ParticipanteUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
  }

  export type ParcelaUncheckedUpdateManyWithoutMetaNestedInput = {
    create?: XOR<ParcelaCreateWithoutMetaInput, ParcelaUncheckedCreateWithoutMetaInput> | ParcelaCreateWithoutMetaInput[] | ParcelaUncheckedCreateWithoutMetaInput[]
    connectOrCreate?: ParcelaCreateOrConnectWithoutMetaInput | ParcelaCreateOrConnectWithoutMetaInput[]
    upsert?: ParcelaUpsertWithWhereUniqueWithoutMetaInput | ParcelaUpsertWithWhereUniqueWithoutMetaInput[]
    createMany?: ParcelaCreateManyMetaInputEnvelope
    set?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    disconnect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    delete?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    connect?: ParcelaWhereUniqueInput | ParcelaWhereUniqueInput[]
    update?: ParcelaUpdateWithWhereUniqueWithoutMetaInput | ParcelaUpdateWithWhereUniqueWithoutMetaInput[]
    updateMany?: ParcelaUpdateManyWithWhereWithoutMetaInput | ParcelaUpdateManyWithWhereWithoutMetaInput[]
    deleteMany?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
  }

  export type MetaCreateNestedOneWithoutParticipantesInput = {
    create?: XOR<MetaCreateWithoutParticipantesInput, MetaUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: MetaCreateOrConnectWithoutParticipantesInput
    connect?: MetaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParticipacoesInput = {
    create?: XOR<UserCreateWithoutParticipacoesInput, UserUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipacoesInput
    connect?: UserWhereUniqueInput
  }

  export type MetaUpdateOneRequiredWithoutParticipantesNestedInput = {
    create?: XOR<MetaCreateWithoutParticipantesInput, MetaUncheckedCreateWithoutParticipantesInput>
    connectOrCreate?: MetaCreateOrConnectWithoutParticipantesInput
    upsert?: MetaUpsertWithoutParticipantesInput
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutParticipantesInput, MetaUpdateWithoutParticipantesInput>, MetaUncheckedUpdateWithoutParticipantesInput>
  }

  export type UserUpdateOneRequiredWithoutParticipacoesNestedInput = {
    create?: XOR<UserCreateWithoutParticipacoesInput, UserUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipacoesInput
    upsert?: UserUpsertWithoutParticipacoesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipacoesInput, UserUpdateWithoutParticipacoesInput>, UserUncheckedUpdateWithoutParticipacoesInput>
  }

  export type MetaCreateNestedOneWithoutParcelasInput = {
    create?: XOR<MetaCreateWithoutParcelasInput, MetaUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: MetaCreateOrConnectWithoutParcelasInput
    connect?: MetaWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutParcelasInput = {
    create?: XOR<UserCreateWithoutParcelasInput, UserUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: UserCreateOrConnectWithoutParcelasInput
    connect?: UserWhereUniqueInput
  }

  export type MetaUpdateOneRequiredWithoutParcelasNestedInput = {
    create?: XOR<MetaCreateWithoutParcelasInput, MetaUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: MetaCreateOrConnectWithoutParcelasInput
    upsert?: MetaUpsertWithoutParcelasInput
    connect?: MetaWhereUniqueInput
    update?: XOR<XOR<MetaUpdateToOneWithWhereWithoutParcelasInput, MetaUpdateWithoutParcelasInput>, MetaUncheckedUpdateWithoutParcelasInput>
  }

  export type UserUpdateOneRequiredWithoutParcelasNestedInput = {
    create?: XOR<UserCreateWithoutParcelasInput, UserUncheckedCreateWithoutParcelasInput>
    connectOrCreate?: UserCreateOrConnectWithoutParcelasInput
    upsert?: UserUpsertWithoutParcelasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParcelasInput, UserUpdateWithoutParcelasInput>, UserUncheckedUpdateWithoutParcelasInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MetaCreateWithoutUsuarioCriadorInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipanteCreateNestedManyWithoutMetaInput
    parcelas?: ParcelaCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateWithoutUsuarioCriadorInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipanteUncheckedCreateNestedManyWithoutMetaInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaCreateOrConnectWithoutUsuarioCriadorInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutUsuarioCriadorInput, MetaUncheckedCreateWithoutUsuarioCriadorInput>
  }

  export type MetaCreateManyUsuarioCriadorInputEnvelope = {
    data: MetaCreateManyUsuarioCriadorInput | MetaCreateManyUsuarioCriadorInput[]
  }

  export type ParticipanteCreateWithoutUsuarioInput = {
    id?: string
    percentual: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutParticipantesInput
  }

  export type ParticipanteUncheckedCreateWithoutUsuarioInput = {
    id?: string
    metaId: string
    percentual: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteCreateOrConnectWithoutUsuarioInput = {
    where: ParticipanteWhereUniqueInput
    create: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput>
  }

  export type ParticipanteCreateManyUsuarioInputEnvelope = {
    data: ParticipanteCreateManyUsuarioInput | ParticipanteCreateManyUsuarioInput[]
  }

  export type ParcelaCreateWithoutResponsavelInput = {
    id?: string
    numero: number
    valor: number
    dataVencimento: Date | string
    status?: string
    valorPago?: number | null
    dataPagamento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta: MetaCreateNestedOneWithoutParcelasInput
  }

  export type ParcelaUncheckedCreateWithoutResponsavelInput = {
    id?: string
    metaId: string
    numero: number
    valor: number
    dataVencimento: Date | string
    status?: string
    valorPago?: number | null
    dataPagamento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaCreateOrConnectWithoutResponsavelInput = {
    where: ParcelaWhereUniqueInput
    create: XOR<ParcelaCreateWithoutResponsavelInput, ParcelaUncheckedCreateWithoutResponsavelInput>
  }

  export type ParcelaCreateManyResponsavelInputEnvelope = {
    data: ParcelaCreateManyResponsavelInput | ParcelaCreateManyResponsavelInput[]
  }

  export type MetaUpsertWithWhereUniqueWithoutUsuarioCriadorInput = {
    where: MetaWhereUniqueInput
    update: XOR<MetaUpdateWithoutUsuarioCriadorInput, MetaUncheckedUpdateWithoutUsuarioCriadorInput>
    create: XOR<MetaCreateWithoutUsuarioCriadorInput, MetaUncheckedCreateWithoutUsuarioCriadorInput>
  }

  export type MetaUpdateWithWhereUniqueWithoutUsuarioCriadorInput = {
    where: MetaWhereUniqueInput
    data: XOR<MetaUpdateWithoutUsuarioCriadorInput, MetaUncheckedUpdateWithoutUsuarioCriadorInput>
  }

  export type MetaUpdateManyWithWhereWithoutUsuarioCriadorInput = {
    where: MetaScalarWhereInput
    data: XOR<MetaUpdateManyMutationInput, MetaUncheckedUpdateManyWithoutUsuarioCriadorInput>
  }

  export type MetaScalarWhereInput = {
    AND?: MetaScalarWhereInput | MetaScalarWhereInput[]
    OR?: MetaScalarWhereInput[]
    NOT?: MetaScalarWhereInput | MetaScalarWhereInput[]
    id?: StringFilter<"Meta"> | string
    titulo?: StringFilter<"Meta"> | string
    descricao?: StringNullableFilter<"Meta"> | string | null
    categoria?: StringFilter<"Meta"> | string
    valorTotal?: FloatFilter<"Meta"> | number
    valorParcela?: FloatFilter<"Meta"> | number
    numParcelas?: IntFilter<"Meta"> | number
    recorrente?: BoolFilter<"Meta"> | boolean
    frequencia?: StringNullableFilter<"Meta"> | string | null
    intervalo?: IntNullableFilter<"Meta"> | number | null
    diaVencimento?: IntNullableFilter<"Meta"> | number | null
    diaSemana?: StringNullableFilter<"Meta"> | string | null
    horario?: StringNullableFilter<"Meta"> | string | null
    dataInicio?: DateTimeFilter<"Meta"> | Date | string
    dataFim?: DateTimeNullableFilter<"Meta"> | Date | string | null
    numExecucoes?: IntNullableFilter<"Meta"> | number | null
    distribuicaoTipo?: StringFilter<"Meta"> | string
    valorMinParcela?: FloatNullableFilter<"Meta"> | number | null
    valorMaxParcela?: FloatNullableFilter<"Meta"> | number | null
    usuarioCriadorId?: StringFilter<"Meta"> | string
    createdAt?: DateTimeFilter<"Meta"> | Date | string
    updatedAt?: DateTimeFilter<"Meta"> | Date | string
  }

  export type ParticipanteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ParticipanteWhereUniqueInput
    update: XOR<ParticipanteUpdateWithoutUsuarioInput, ParticipanteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ParticipanteCreateWithoutUsuarioInput, ParticipanteUncheckedCreateWithoutUsuarioInput>
  }

  export type ParticipanteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ParticipanteWhereUniqueInput
    data: XOR<ParticipanteUpdateWithoutUsuarioInput, ParticipanteUncheckedUpdateWithoutUsuarioInput>
  }

  export type ParticipanteUpdateManyWithWhereWithoutUsuarioInput = {
    where: ParticipanteScalarWhereInput
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ParticipanteScalarWhereInput = {
    AND?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
    OR?: ParticipanteScalarWhereInput[]
    NOT?: ParticipanteScalarWhereInput | ParticipanteScalarWhereInput[]
    id?: StringFilter<"Participante"> | string
    metaId?: StringFilter<"Participante"> | string
    usuarioId?: StringFilter<"Participante"> | string
    percentual?: FloatFilter<"Participante"> | number
    createdAt?: DateTimeFilter<"Participante"> | Date | string
    updatedAt?: DateTimeFilter<"Participante"> | Date | string
  }

  export type ParcelaUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: ParcelaWhereUniqueInput
    update: XOR<ParcelaUpdateWithoutResponsavelInput, ParcelaUncheckedUpdateWithoutResponsavelInput>
    create: XOR<ParcelaCreateWithoutResponsavelInput, ParcelaUncheckedCreateWithoutResponsavelInput>
  }

  export type ParcelaUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: ParcelaWhereUniqueInput
    data: XOR<ParcelaUpdateWithoutResponsavelInput, ParcelaUncheckedUpdateWithoutResponsavelInput>
  }

  export type ParcelaUpdateManyWithWhereWithoutResponsavelInput = {
    where: ParcelaScalarWhereInput
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type ParcelaScalarWhereInput = {
    AND?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
    OR?: ParcelaScalarWhereInput[]
    NOT?: ParcelaScalarWhereInput | ParcelaScalarWhereInput[]
    id?: StringFilter<"Parcela"> | string
    metaId?: StringFilter<"Parcela"> | string
    numero?: IntFilter<"Parcela"> | number
    valor?: FloatFilter<"Parcela"> | number
    dataVencimento?: DateTimeFilter<"Parcela"> | Date | string
    status?: StringFilter<"Parcela"> | string
    valorPago?: FloatNullableFilter<"Parcela"> | number | null
    responsavelId?: StringFilter<"Parcela"> | string
    dataPagamento?: DateTimeNullableFilter<"Parcela"> | Date | string | null
    createdAt?: DateTimeFilter<"Parcela"> | Date | string
    updatedAt?: DateTimeFilter<"Parcela"> | Date | string
  }

  export type UserCreateWithoutMetasCriadasInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participacoes?: ParticipanteCreateNestedManyWithoutUsuarioInput
    parcelas?: ParcelaCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateWithoutMetasCriadasInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participacoes?: ParticipanteUncheckedCreateNestedManyWithoutUsuarioInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserCreateOrConnectWithoutMetasCriadasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMetasCriadasInput, UserUncheckedCreateWithoutMetasCriadasInput>
  }

  export type ParticipanteCreateWithoutMetaInput = {
    id?: string
    percentual: number
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UserCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipanteUncheckedCreateWithoutMetaInput = {
    id?: string
    usuarioId: string
    percentual: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteCreateOrConnectWithoutMetaInput = {
    where: ParticipanteWhereUniqueInput
    create: XOR<ParticipanteCreateWithoutMetaInput, ParticipanteUncheckedCreateWithoutMetaInput>
  }

  export type ParticipanteCreateManyMetaInputEnvelope = {
    data: ParticipanteCreateManyMetaInput | ParticipanteCreateManyMetaInput[]
  }

  export type ParcelaCreateWithoutMetaInput = {
    id?: string
    numero: number
    valor: number
    dataVencimento: Date | string
    status?: string
    valorPago?: number | null
    dataPagamento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responsavel: UserCreateNestedOneWithoutParcelasInput
  }

  export type ParcelaUncheckedCreateWithoutMetaInput = {
    id?: string
    numero: number
    valor: number
    dataVencimento: Date | string
    status?: string
    valorPago?: number | null
    responsavelId: string
    dataPagamento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaCreateOrConnectWithoutMetaInput = {
    where: ParcelaWhereUniqueInput
    create: XOR<ParcelaCreateWithoutMetaInput, ParcelaUncheckedCreateWithoutMetaInput>
  }

  export type ParcelaCreateManyMetaInputEnvelope = {
    data: ParcelaCreateManyMetaInput | ParcelaCreateManyMetaInput[]
  }

  export type UserUpsertWithoutMetasCriadasInput = {
    update: XOR<UserUpdateWithoutMetasCriadasInput, UserUncheckedUpdateWithoutMetasCriadasInput>
    create: XOR<UserCreateWithoutMetasCriadasInput, UserUncheckedCreateWithoutMetasCriadasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMetasCriadasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMetasCriadasInput, UserUncheckedUpdateWithoutMetasCriadasInput>
  }

  export type UserUpdateWithoutMetasCriadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacoes?: ParticipanteUpdateManyWithoutUsuarioNestedInput
    parcelas?: ParcelaUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateWithoutMetasCriadasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacoes?: ParticipanteUncheckedUpdateManyWithoutUsuarioNestedInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type ParticipanteUpsertWithWhereUniqueWithoutMetaInput = {
    where: ParticipanteWhereUniqueInput
    update: XOR<ParticipanteUpdateWithoutMetaInput, ParticipanteUncheckedUpdateWithoutMetaInput>
    create: XOR<ParticipanteCreateWithoutMetaInput, ParticipanteUncheckedCreateWithoutMetaInput>
  }

  export type ParticipanteUpdateWithWhereUniqueWithoutMetaInput = {
    where: ParticipanteWhereUniqueInput
    data: XOR<ParticipanteUpdateWithoutMetaInput, ParticipanteUncheckedUpdateWithoutMetaInput>
  }

  export type ParticipanteUpdateManyWithWhereWithoutMetaInput = {
    where: ParticipanteScalarWhereInput
    data: XOR<ParticipanteUpdateManyMutationInput, ParticipanteUncheckedUpdateManyWithoutMetaInput>
  }

  export type ParcelaUpsertWithWhereUniqueWithoutMetaInput = {
    where: ParcelaWhereUniqueInput
    update: XOR<ParcelaUpdateWithoutMetaInput, ParcelaUncheckedUpdateWithoutMetaInput>
    create: XOR<ParcelaCreateWithoutMetaInput, ParcelaUncheckedCreateWithoutMetaInput>
  }

  export type ParcelaUpdateWithWhereUniqueWithoutMetaInput = {
    where: ParcelaWhereUniqueInput
    data: XOR<ParcelaUpdateWithoutMetaInput, ParcelaUncheckedUpdateWithoutMetaInput>
  }

  export type ParcelaUpdateManyWithWhereWithoutMetaInput = {
    where: ParcelaScalarWhereInput
    data: XOR<ParcelaUpdateManyMutationInput, ParcelaUncheckedUpdateManyWithoutMetaInput>
  }

  export type MetaCreateWithoutParticipantesInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioCriador: UserCreateNestedOneWithoutMetasCriadasInput
    parcelas?: ParcelaCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateWithoutParticipantesInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    usuarioCriadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaCreateOrConnectWithoutParticipantesInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutParticipantesInput, MetaUncheckedCreateWithoutParticipantesInput>
  }

  export type UserCreateWithoutParticipacoesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metasCriadas?: MetaCreateNestedManyWithoutUsuarioCriadorInput
    parcelas?: ParcelaCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateWithoutParticipacoesInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metasCriadas?: MetaUncheckedCreateNestedManyWithoutUsuarioCriadorInput
    parcelas?: ParcelaUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserCreateOrConnectWithoutParticipacoesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipacoesInput, UserUncheckedCreateWithoutParticipacoesInput>
  }

  export type MetaUpsertWithoutParticipantesInput = {
    update: XOR<MetaUpdateWithoutParticipantesInput, MetaUncheckedUpdateWithoutParticipantesInput>
    create: XOR<MetaCreateWithoutParticipantesInput, MetaUncheckedCreateWithoutParticipantesInput>
    where?: MetaWhereInput
  }

  export type MetaUpdateToOneWithWhereWithoutParticipantesInput = {
    where?: MetaWhereInput
    data: XOR<MetaUpdateWithoutParticipantesInput, MetaUncheckedUpdateWithoutParticipantesInput>
  }

  export type MetaUpdateWithoutParticipantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioCriador?: UserUpdateOneRequiredWithoutMetasCriadasNestedInput
    parcelas?: ParcelaUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateWithoutParticipantesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    usuarioCriadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parcelas?: ParcelaUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type UserUpsertWithoutParticipacoesInput = {
    update: XOR<UserUpdateWithoutParticipacoesInput, UserUncheckedUpdateWithoutParticipacoesInput>
    create: XOR<UserCreateWithoutParticipacoesInput, UserUncheckedCreateWithoutParticipacoesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipacoesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipacoesInput, UserUncheckedUpdateWithoutParticipacoesInput>
  }

  export type UserUpdateWithoutParticipacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metasCriadas?: MetaUpdateManyWithoutUsuarioCriadorNestedInput
    parcelas?: ParcelaUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metasCriadas?: MetaUncheckedUpdateManyWithoutUsuarioCriadorNestedInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type MetaCreateWithoutParcelasInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioCriador: UserCreateNestedOneWithoutMetasCriadasInput
    participantes?: ParticipanteCreateNestedManyWithoutMetaInput
  }

  export type MetaUncheckedCreateWithoutParcelasInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    usuarioCriadorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participantes?: ParticipanteUncheckedCreateNestedManyWithoutMetaInput
  }

  export type MetaCreateOrConnectWithoutParcelasInput = {
    where: MetaWhereUniqueInput
    create: XOR<MetaCreateWithoutParcelasInput, MetaUncheckedCreateWithoutParcelasInput>
  }

  export type UserCreateWithoutParcelasInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metasCriadas?: MetaCreateNestedManyWithoutUsuarioCriadorInput
    participacoes?: ParticipanteCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutParcelasInput = {
    id?: string
    name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metasCriadas?: MetaUncheckedCreateNestedManyWithoutUsuarioCriadorInput
    participacoes?: ParticipanteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutParcelasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParcelasInput, UserUncheckedCreateWithoutParcelasInput>
  }

  export type MetaUpsertWithoutParcelasInput = {
    update: XOR<MetaUpdateWithoutParcelasInput, MetaUncheckedUpdateWithoutParcelasInput>
    create: XOR<MetaCreateWithoutParcelasInput, MetaUncheckedCreateWithoutParcelasInput>
    where?: MetaWhereInput
  }

  export type MetaUpdateToOneWithWhereWithoutParcelasInput = {
    where?: MetaWhereInput
    data: XOR<MetaUpdateWithoutParcelasInput, MetaUncheckedUpdateWithoutParcelasInput>
  }

  export type MetaUpdateWithoutParcelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioCriador?: UserUpdateOneRequiredWithoutMetasCriadasNestedInput
    participantes?: ParticipanteUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateWithoutParcelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    usuarioCriadorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type UserUpsertWithoutParcelasInput = {
    update: XOR<UserUpdateWithoutParcelasInput, UserUncheckedUpdateWithoutParcelasInput>
    create: XOR<UserCreateWithoutParcelasInput, UserUncheckedCreateWithoutParcelasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParcelasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParcelasInput, UserUncheckedUpdateWithoutParcelasInput>
  }

  export type UserUpdateWithoutParcelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metasCriadas?: MetaUpdateManyWithoutUsuarioCriadorNestedInput
    participacoes?: ParticipanteUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutParcelasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metasCriadas?: MetaUncheckedUpdateManyWithoutUsuarioCriadorNestedInput
    participacoes?: ParticipanteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type MetaCreateManyUsuarioCriadorInput = {
    id?: string
    titulo: string
    descricao?: string | null
    categoria: string
    valorTotal: number
    valorParcela: number
    numParcelas: number
    recorrente?: boolean
    frequencia?: string | null
    intervalo?: number | null
    diaVencimento?: number | null
    diaSemana?: string | null
    horario?: string | null
    dataInicio: Date | string
    dataFim?: Date | string | null
    numExecucoes?: number | null
    distribuicaoTipo?: string
    valorMinParcela?: number | null
    valorMaxParcela?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteCreateManyUsuarioInput = {
    id?: string
    metaId: string
    percentual: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaCreateManyResponsavelInput = {
    id?: string
    metaId: string
    numero: number
    valor: number
    dataVencimento: Date | string
    status?: string
    valorPago?: number | null
    dataPagamento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetaUpdateWithoutUsuarioCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUpdateManyWithoutMetaNestedInput
    parcelas?: ParcelaUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateWithoutUsuarioCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participantes?: ParticipanteUncheckedUpdateManyWithoutMetaNestedInput
    parcelas?: ParcelaUncheckedUpdateManyWithoutMetaNestedInput
  }

  export type MetaUncheckedUpdateManyWithoutUsuarioCriadorInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    valorParcela?: FloatFieldUpdateOperationsInput | number
    numParcelas?: IntFieldUpdateOperationsInput | number
    recorrente?: BoolFieldUpdateOperationsInput | boolean
    frequencia?: NullableStringFieldUpdateOperationsInput | string | null
    intervalo?: NullableIntFieldUpdateOperationsInput | number | null
    diaVencimento?: NullableIntFieldUpdateOperationsInput | number | null
    diaSemana?: NullableStringFieldUpdateOperationsInput | string | null
    horario?: NullableStringFieldUpdateOperationsInput | string | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    numExecucoes?: NullableIntFieldUpdateOperationsInput | number | null
    distribuicaoTipo?: StringFieldUpdateOperationsInput | string
    valorMinParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    valorMaxParcela?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutParticipantesNestedInput
  }

  export type ParticipanteUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MetaUpdateOneRequiredWithoutParcelasNestedInput
  }

  export type ParcelaUncheckedUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaUncheckedUpdateManyWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaId?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteCreateManyMetaInput = {
    id?: string
    usuarioId: string
    percentual: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParcelaCreateManyMetaInput = {
    id?: string
    numero: number
    valor: number
    dataVencimento: Date | string
    status?: string
    valorPago?: number | null
    responsavelId: string
    dataPagamento?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipanteUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipanteUncheckedUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipanteUncheckedUpdateManyWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    percentual?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responsavel?: UserUpdateOneRequiredWithoutParcelasNestedInput
  }

  export type ParcelaUncheckedUpdateWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelId?: StringFieldUpdateOperationsInput | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParcelaUncheckedUpdateManyWithoutMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    dataVencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    valorPago?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelId?: StringFieldUpdateOperationsInput | string
    dataPagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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