
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Sorteio
 * 
 */
export type Sorteio = $Result.DefaultSelection<Prisma.$SorteioPayload>
/**
 * Model Funcionarios
 * 
 */
export type Funcionarios = $Result.DefaultSelection<Prisma.$FuncionariosPayload>
/**
 * Model Premios
 * 
 */
export type Premios = $Result.DefaultSelection<Prisma.$PremiosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  SORTEIO: 'SORTEIO',
  PRESENCA: 'PRESENCA',
  PREMIOS: 'PREMIOS'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sorteio`: Exposes CRUD operations for the **Sorteio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sorteios
    * const sorteios = await prisma.sorteio.findMany()
    * ```
    */
  get sorteio(): Prisma.SorteioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionarios`: Exposes CRUD operations for the **Funcionarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionarios.findMany()
    * ```
    */
  get funcionarios(): Prisma.FuncionariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premios`: Exposes CRUD operations for the **Premios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Premios
    * const premios = await prisma.premios.findMany()
    * ```
    */
  get premios(): Prisma.PremiosDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Usuario: 'Usuario',
    Sorteio: 'Sorteio',
    Funcionarios: 'Funcionarios',
    Premios: 'Premios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "sorteio" | "funcionarios" | "premios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Sorteio: {
        payload: Prisma.$SorteioPayload<ExtArgs>
        fields: Prisma.SorteioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SorteioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SorteioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          findFirst: {
            args: Prisma.SorteioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SorteioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          findMany: {
            args: Prisma.SorteioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>[]
          }
          create: {
            args: Prisma.SorteioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          createMany: {
            args: Prisma.SorteioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SorteioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>[]
          }
          delete: {
            args: Prisma.SorteioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          update: {
            args: Prisma.SorteioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          deleteMany: {
            args: Prisma.SorteioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SorteioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SorteioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>[]
          }
          upsert: {
            args: Prisma.SorteioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SorteioPayload>
          }
          aggregate: {
            args: Prisma.SorteioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSorteio>
          }
          groupBy: {
            args: Prisma.SorteioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SorteioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SorteioCountArgs<ExtArgs>
            result: $Utils.Optional<SorteioCountAggregateOutputType> | number
          }
        }
      }
      Funcionarios: {
        payload: Prisma.$FuncionariosPayload<ExtArgs>
        fields: Prisma.FuncionariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          findFirst: {
            args: Prisma.FuncionariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          findMany: {
            args: Prisma.FuncionariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>[]
          }
          create: {
            args: Prisma.FuncionariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          createMany: {
            args: Prisma.FuncionariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>[]
          }
          delete: {
            args: Prisma.FuncionariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          update: {
            args: Prisma.FuncionariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          deleteMany: {
            args: Prisma.FuncionariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>[]
          }
          upsert: {
            args: Prisma.FuncionariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          aggregate: {
            args: Prisma.FuncionariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionarios>
          }
          groupBy: {
            args: Prisma.FuncionariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionariosCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosCountAggregateOutputType> | number
          }
        }
      }
      Premios: {
        payload: Prisma.$PremiosPayload<ExtArgs>
        fields: Prisma.PremiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremiosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremiosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload>
          }
          findFirst: {
            args: Prisma.PremiosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremiosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload>
          }
          findMany: {
            args: Prisma.PremiosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload>[]
          }
          create: {
            args: Prisma.PremiosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload>
          }
          createMany: {
            args: Prisma.PremiosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremiosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload>[]
          }
          delete: {
            args: Prisma.PremiosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload>
          }
          update: {
            args: Prisma.PremiosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload>
          }
          deleteMany: {
            args: Prisma.PremiosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremiosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremiosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload>[]
          }
          upsert: {
            args: Prisma.PremiosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremiosPayload>
          }
          aggregate: {
            args: Prisma.PremiosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremios>
          }
          groupBy: {
            args: Prisma.PremiosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremiosGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremiosCountArgs<ExtArgs>
            result: $Utils.Optional<PremiosCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    usuario?: UsuarioOmit
    sorteio?: SorteioOmit
    funcionarios?: FuncionariosOmit
    premios?: PremiosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type FuncionariosCountOutputType
   */

  export type FuncionariosCountOutputType = {
    sorteios: number
  }

  export type FuncionariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sorteios?: boolean | FuncionariosCountOutputTypeCountSorteiosArgs
  }

  // Custom InputTypes
  /**
   * FuncionariosCountOutputType without action
   */
  export type FuncionariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionariosCountOutputType
     */
    select?: FuncionariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionariosCountOutputType without action
   */
  export type FuncionariosCountOutputTypeCountSorteiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteioWhereInput
  }


  /**
   * Count Type PremiosCountOutputType
   */

  export type PremiosCountOutputType = {
    sorteios: number
  }

  export type PremiosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sorteios?: boolean | PremiosCountOutputTypeCountSorteiosArgs
  }

  // Custom InputTypes
  /**
   * PremiosCountOutputType without action
   */
  export type PremiosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremiosCountOutputType
     */
    select?: PremiosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PremiosCountOutputType without action
   */
  export type PremiosCountOutputTypeCountSorteiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    username: string | null
    senha: string | null
    nome: string | null
    role: $Enums.Role | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    username: string | null
    senha: string | null
    nome: string | null
    role: $Enums.Role | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    username: number
    senha: number
    nome: number
    role: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    username?: true
    senha?: true
    nome?: true
    role?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    username?: true
    senha?: true
    nome?: true
    role?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    username?: true
    senha?: true
    nome?: true
    role?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    username: string
    senha: string
    nome: string
    role: $Enums.Role
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    senha?: boolean
    nome?: boolean
    role?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    senha?: boolean
    nome?: boolean
    role?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    senha?: boolean
    nome?: boolean
    role?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    username?: boolean
    senha?: boolean
    nome?: boolean
    role?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "senha" | "nome" | "role", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      senha: string
      nome: string
      role: $Enums.Role
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Sorteio
   */

  export type AggregateSorteio = {
    _count: SorteioCountAggregateOutputType | null
    _avg: SorteioAvgAggregateOutputType | null
    _sum: SorteioSumAggregateOutputType | null
    _min: SorteioMinAggregateOutputType | null
    _max: SorteioMaxAggregateOutputType | null
  }

  export type SorteioAvgAggregateOutputType = {
    id: number | null
    premioId: number | null
    funcionarioId: number | null
  }

  export type SorteioSumAggregateOutputType = {
    id: number | null
    premioId: number | null
    funcionarioId: number | null
  }

  export type SorteioMinAggregateOutputType = {
    id: number | null
    premioId: number | null
    funcionarioId: number | null
    entregue: boolean | null
  }

  export type SorteioMaxAggregateOutputType = {
    id: number | null
    premioId: number | null
    funcionarioId: number | null
    entregue: boolean | null
  }

  export type SorteioCountAggregateOutputType = {
    id: number
    premioId: number
    funcionarioId: number
    entregue: number
    _all: number
  }


  export type SorteioAvgAggregateInputType = {
    id?: true
    premioId?: true
    funcionarioId?: true
  }

  export type SorteioSumAggregateInputType = {
    id?: true
    premioId?: true
    funcionarioId?: true
  }

  export type SorteioMinAggregateInputType = {
    id?: true
    premioId?: true
    funcionarioId?: true
    entregue?: true
  }

  export type SorteioMaxAggregateInputType = {
    id?: true
    premioId?: true
    funcionarioId?: true
    entregue?: true
  }

  export type SorteioCountAggregateInputType = {
    id?: true
    premioId?: true
    funcionarioId?: true
    entregue?: true
    _all?: true
  }

  export type SorteioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sorteio to aggregate.
     */
    where?: SorteioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteios to fetch.
     */
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SorteioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sorteios
    **/
    _count?: true | SorteioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SorteioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SorteioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SorteioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SorteioMaxAggregateInputType
  }

  export type GetSorteioAggregateType<T extends SorteioAggregateArgs> = {
        [P in keyof T & keyof AggregateSorteio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSorteio[P]>
      : GetScalarType<T[P], AggregateSorteio[P]>
  }




  export type SorteioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SorteioWhereInput
    orderBy?: SorteioOrderByWithAggregationInput | SorteioOrderByWithAggregationInput[]
    by: SorteioScalarFieldEnum[] | SorteioScalarFieldEnum
    having?: SorteioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SorteioCountAggregateInputType | true
    _avg?: SorteioAvgAggregateInputType
    _sum?: SorteioSumAggregateInputType
    _min?: SorteioMinAggregateInputType
    _max?: SorteioMaxAggregateInputType
  }

  export type SorteioGroupByOutputType = {
    id: number
    premioId: number
    funcionarioId: number
    entregue: boolean
    _count: SorteioCountAggregateOutputType | null
    _avg: SorteioAvgAggregateOutputType | null
    _sum: SorteioSumAggregateOutputType | null
    _min: SorteioMinAggregateOutputType | null
    _max: SorteioMaxAggregateOutputType | null
  }

  type GetSorteioGroupByPayload<T extends SorteioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SorteioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SorteioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SorteioGroupByOutputType[P]>
            : GetScalarType<T[P], SorteioGroupByOutputType[P]>
        }
      >
    >


  export type SorteioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    premioId?: boolean
    funcionarioId?: boolean
    entregue?: boolean
    ganhador?: boolean | FuncionariosDefaultArgs<ExtArgs>
    premio?: boolean | PremiosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sorteio"]>

  export type SorteioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    premioId?: boolean
    funcionarioId?: boolean
    entregue?: boolean
    ganhador?: boolean | FuncionariosDefaultArgs<ExtArgs>
    premio?: boolean | PremiosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sorteio"]>

  export type SorteioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    premioId?: boolean
    funcionarioId?: boolean
    entregue?: boolean
    ganhador?: boolean | FuncionariosDefaultArgs<ExtArgs>
    premio?: boolean | PremiosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sorteio"]>

  export type SorteioSelectScalar = {
    id?: boolean
    premioId?: boolean
    funcionarioId?: boolean
    entregue?: boolean
  }

  export type SorteioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "premioId" | "funcionarioId" | "entregue", ExtArgs["result"]["sorteio"]>
  export type SorteioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ganhador?: boolean | FuncionariosDefaultArgs<ExtArgs>
    premio?: boolean | PremiosDefaultArgs<ExtArgs>
  }
  export type SorteioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ganhador?: boolean | FuncionariosDefaultArgs<ExtArgs>
    premio?: boolean | PremiosDefaultArgs<ExtArgs>
  }
  export type SorteioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ganhador?: boolean | FuncionariosDefaultArgs<ExtArgs>
    premio?: boolean | PremiosDefaultArgs<ExtArgs>
  }

  export type $SorteioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sorteio"
    objects: {
      ganhador: Prisma.$FuncionariosPayload<ExtArgs>
      premio: Prisma.$PremiosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      premioId: number
      funcionarioId: number
      entregue: boolean
    }, ExtArgs["result"]["sorteio"]>
    composites: {}
  }

  type SorteioGetPayload<S extends boolean | null | undefined | SorteioDefaultArgs> = $Result.GetResult<Prisma.$SorteioPayload, S>

  type SorteioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SorteioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SorteioCountAggregateInputType | true
    }

  export interface SorteioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sorteio'], meta: { name: 'Sorteio' } }
    /**
     * Find zero or one Sorteio that matches the filter.
     * @param {SorteioFindUniqueArgs} args - Arguments to find a Sorteio
     * @example
     * // Get one Sorteio
     * const sorteio = await prisma.sorteio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SorteioFindUniqueArgs>(args: SelectSubset<T, SorteioFindUniqueArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sorteio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SorteioFindUniqueOrThrowArgs} args - Arguments to find a Sorteio
     * @example
     * // Get one Sorteio
     * const sorteio = await prisma.sorteio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SorteioFindUniqueOrThrowArgs>(args: SelectSubset<T, SorteioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sorteio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioFindFirstArgs} args - Arguments to find a Sorteio
     * @example
     * // Get one Sorteio
     * const sorteio = await prisma.sorteio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SorteioFindFirstArgs>(args?: SelectSubset<T, SorteioFindFirstArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sorteio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioFindFirstOrThrowArgs} args - Arguments to find a Sorteio
     * @example
     * // Get one Sorteio
     * const sorteio = await prisma.sorteio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SorteioFindFirstOrThrowArgs>(args?: SelectSubset<T, SorteioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sorteios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sorteios
     * const sorteios = await prisma.sorteio.findMany()
     * 
     * // Get first 10 Sorteios
     * const sorteios = await prisma.sorteio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sorteioWithIdOnly = await prisma.sorteio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SorteioFindManyArgs>(args?: SelectSubset<T, SorteioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sorteio.
     * @param {SorteioCreateArgs} args - Arguments to create a Sorteio.
     * @example
     * // Create one Sorteio
     * const Sorteio = await prisma.sorteio.create({
     *   data: {
     *     // ... data to create a Sorteio
     *   }
     * })
     * 
     */
    create<T extends SorteioCreateArgs>(args: SelectSubset<T, SorteioCreateArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sorteios.
     * @param {SorteioCreateManyArgs} args - Arguments to create many Sorteios.
     * @example
     * // Create many Sorteios
     * const sorteio = await prisma.sorteio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SorteioCreateManyArgs>(args?: SelectSubset<T, SorteioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sorteios and returns the data saved in the database.
     * @param {SorteioCreateManyAndReturnArgs} args - Arguments to create many Sorteios.
     * @example
     * // Create many Sorteios
     * const sorteio = await prisma.sorteio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sorteios and only return the `id`
     * const sorteioWithIdOnly = await prisma.sorteio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SorteioCreateManyAndReturnArgs>(args?: SelectSubset<T, SorteioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sorteio.
     * @param {SorteioDeleteArgs} args - Arguments to delete one Sorteio.
     * @example
     * // Delete one Sorteio
     * const Sorteio = await prisma.sorteio.delete({
     *   where: {
     *     // ... filter to delete one Sorteio
     *   }
     * })
     * 
     */
    delete<T extends SorteioDeleteArgs>(args: SelectSubset<T, SorteioDeleteArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sorteio.
     * @param {SorteioUpdateArgs} args - Arguments to update one Sorteio.
     * @example
     * // Update one Sorteio
     * const sorteio = await prisma.sorteio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SorteioUpdateArgs>(args: SelectSubset<T, SorteioUpdateArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sorteios.
     * @param {SorteioDeleteManyArgs} args - Arguments to filter Sorteios to delete.
     * @example
     * // Delete a few Sorteios
     * const { count } = await prisma.sorteio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SorteioDeleteManyArgs>(args?: SelectSubset<T, SorteioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorteios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sorteios
     * const sorteio = await prisma.sorteio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SorteioUpdateManyArgs>(args: SelectSubset<T, SorteioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorteios and returns the data updated in the database.
     * @param {SorteioUpdateManyAndReturnArgs} args - Arguments to update many Sorteios.
     * @example
     * // Update many Sorteios
     * const sorteio = await prisma.sorteio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sorteios and only return the `id`
     * const sorteioWithIdOnly = await prisma.sorteio.updateManyAndReturn({
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
    updateManyAndReturn<T extends SorteioUpdateManyAndReturnArgs>(args: SelectSubset<T, SorteioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sorteio.
     * @param {SorteioUpsertArgs} args - Arguments to update or create a Sorteio.
     * @example
     * // Update or create a Sorteio
     * const sorteio = await prisma.sorteio.upsert({
     *   create: {
     *     // ... data to create a Sorteio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sorteio we want to update
     *   }
     * })
     */
    upsert<T extends SorteioUpsertArgs>(args: SelectSubset<T, SorteioUpsertArgs<ExtArgs>>): Prisma__SorteioClient<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sorteios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioCountArgs} args - Arguments to filter Sorteios to count.
     * @example
     * // Count the number of Sorteios
     * const count = await prisma.sorteio.count({
     *   where: {
     *     // ... the filter for the Sorteios we want to count
     *   }
     * })
    **/
    count<T extends SorteioCountArgs>(
      args?: Subset<T, SorteioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SorteioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sorteio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SorteioAggregateArgs>(args: Subset<T, SorteioAggregateArgs>): Prisma.PrismaPromise<GetSorteioAggregateType<T>>

    /**
     * Group by Sorteio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorteioGroupByArgs} args - Group by arguments.
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
      T extends SorteioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SorteioGroupByArgs['orderBy'] }
        : { orderBy?: SorteioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SorteioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSorteioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sorteio model
   */
  readonly fields: SorteioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sorteio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SorteioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ganhador<T extends FuncionariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuncionariosDefaultArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    premio<T extends PremiosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PremiosDefaultArgs<ExtArgs>>): Prisma__PremiosClient<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sorteio model
   */
  interface SorteioFieldRefs {
    readonly id: FieldRef<"Sorteio", 'Int'>
    readonly premioId: FieldRef<"Sorteio", 'Int'>
    readonly funcionarioId: FieldRef<"Sorteio", 'Int'>
    readonly entregue: FieldRef<"Sorteio", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Sorteio findUnique
   */
  export type SorteioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteio to fetch.
     */
    where: SorteioWhereUniqueInput
  }

  /**
   * Sorteio findUniqueOrThrow
   */
  export type SorteioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteio to fetch.
     */
    where: SorteioWhereUniqueInput
  }

  /**
   * Sorteio findFirst
   */
  export type SorteioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteio to fetch.
     */
    where?: SorteioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteios to fetch.
     */
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sorteios.
     */
    cursor?: SorteioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sorteios.
     */
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Sorteio findFirstOrThrow
   */
  export type SorteioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteio to fetch.
     */
    where?: SorteioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteios to fetch.
     */
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sorteios.
     */
    cursor?: SorteioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sorteios.
     */
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Sorteio findMany
   */
  export type SorteioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter, which Sorteios to fetch.
     */
    where?: SorteioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorteios to fetch.
     */
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sorteios.
     */
    cursor?: SorteioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorteios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorteios.
     */
    skip?: number
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Sorteio create
   */
  export type SorteioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * The data needed to create a Sorteio.
     */
    data: XOR<SorteioCreateInput, SorteioUncheckedCreateInput>
  }

  /**
   * Sorteio createMany
   */
  export type SorteioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sorteios.
     */
    data: SorteioCreateManyInput | SorteioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sorteio createManyAndReturn
   */
  export type SorteioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * The data used to create many Sorteios.
     */
    data: SorteioCreateManyInput | SorteioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sorteio update
   */
  export type SorteioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * The data needed to update a Sorteio.
     */
    data: XOR<SorteioUpdateInput, SorteioUncheckedUpdateInput>
    /**
     * Choose, which Sorteio to update.
     */
    where: SorteioWhereUniqueInput
  }

  /**
   * Sorteio updateMany
   */
  export type SorteioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sorteios.
     */
    data: XOR<SorteioUpdateManyMutationInput, SorteioUncheckedUpdateManyInput>
    /**
     * Filter which Sorteios to update
     */
    where?: SorteioWhereInput
    /**
     * Limit how many Sorteios to update.
     */
    limit?: number
  }

  /**
   * Sorteio updateManyAndReturn
   */
  export type SorteioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * The data used to update Sorteios.
     */
    data: XOR<SorteioUpdateManyMutationInput, SorteioUncheckedUpdateManyInput>
    /**
     * Filter which Sorteios to update
     */
    where?: SorteioWhereInput
    /**
     * Limit how many Sorteios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sorteio upsert
   */
  export type SorteioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * The filter to search for the Sorteio to update in case it exists.
     */
    where: SorteioWhereUniqueInput
    /**
     * In case the Sorteio found by the `where` argument doesn't exist, create a new Sorteio with this data.
     */
    create: XOR<SorteioCreateInput, SorteioUncheckedCreateInput>
    /**
     * In case the Sorteio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SorteioUpdateInput, SorteioUncheckedUpdateInput>
  }

  /**
   * Sorteio delete
   */
  export type SorteioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    /**
     * Filter which Sorteio to delete.
     */
    where: SorteioWhereUniqueInput
  }

  /**
   * Sorteio deleteMany
   */
  export type SorteioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sorteios to delete
     */
    where?: SorteioWhereInput
    /**
     * Limit how many Sorteios to delete.
     */
    limit?: number
  }

  /**
   * Sorteio without action
   */
  export type SorteioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
  }


  /**
   * Model Funcionarios
   */

  export type AggregateFuncionarios = {
    _count: FuncionariosCountAggregateOutputType | null
    _avg: FuncionariosAvgAggregateOutputType | null
    _sum: FuncionariosSumAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  export type FuncionariosAvgAggregateOutputType = {
    id: number | null
  }

  export type FuncionariosSumAggregateOutputType = {
    id: number | null
  }

  export type FuncionariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    presente: boolean | null
    sorteado: boolean | null
    convidado: boolean | null
  }

  export type FuncionariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    presente: boolean | null
    sorteado: boolean | null
    convidado: boolean | null
  }

  export type FuncionariosCountAggregateOutputType = {
    id: number
    nome: number
    presente: number
    sorteado: number
    convidado: number
    _all: number
  }


  export type FuncionariosAvgAggregateInputType = {
    id?: true
  }

  export type FuncionariosSumAggregateInputType = {
    id?: true
  }

  export type FuncionariosMinAggregateInputType = {
    id?: true
    nome?: true
    presente?: true
    sorteado?: true
    convidado?: true
  }

  export type FuncionariosMaxAggregateInputType = {
    id?: true
    nome?: true
    presente?: true
    sorteado?: true
    convidado?: true
  }

  export type FuncionariosCountAggregateInputType = {
    id?: true
    nome?: true
    presente?: true
    sorteado?: true
    convidado?: true
    _all?: true
  }

  export type FuncionariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to aggregate.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionariosMaxAggregateInputType
  }

  export type GetFuncionariosAggregateType<T extends FuncionariosAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionarios[P]>
      : GetScalarType<T[P], AggregateFuncionarios[P]>
  }




  export type FuncionariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionariosWhereInput
    orderBy?: FuncionariosOrderByWithAggregationInput | FuncionariosOrderByWithAggregationInput[]
    by: FuncionariosScalarFieldEnum[] | FuncionariosScalarFieldEnum
    having?: FuncionariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionariosCountAggregateInputType | true
    _avg?: FuncionariosAvgAggregateInputType
    _sum?: FuncionariosSumAggregateInputType
    _min?: FuncionariosMinAggregateInputType
    _max?: FuncionariosMaxAggregateInputType
  }

  export type FuncionariosGroupByOutputType = {
    id: number
    nome: string
    presente: boolean
    sorteado: boolean
    convidado: boolean
    _count: FuncionariosCountAggregateOutputType | null
    _avg: FuncionariosAvgAggregateOutputType | null
    _sum: FuncionariosSumAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  type GetFuncionariosGroupByPayload<T extends FuncionariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
        }
      >
    >


  export type FuncionariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    presente?: boolean
    sorteado?: boolean
    convidado?: boolean
    sorteios?: boolean | Funcionarios$sorteiosArgs<ExtArgs>
    _count?: boolean | FuncionariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionarios"]>

  export type FuncionariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    presente?: boolean
    sorteado?: boolean
    convidado?: boolean
  }, ExtArgs["result"]["funcionarios"]>

  export type FuncionariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    presente?: boolean
    sorteado?: boolean
    convidado?: boolean
  }, ExtArgs["result"]["funcionarios"]>

  export type FuncionariosSelectScalar = {
    id?: boolean
    nome?: boolean
    presente?: boolean
    sorteado?: boolean
    convidado?: boolean
  }

  export type FuncionariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "presente" | "sorteado" | "convidado", ExtArgs["result"]["funcionarios"]>
  export type FuncionariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sorteios?: boolean | Funcionarios$sorteiosArgs<ExtArgs>
    _count?: boolean | FuncionariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FuncionariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FuncionariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FuncionariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionarios"
    objects: {
      sorteios: Prisma.$SorteioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      presente: boolean
      sorteado: boolean
      convidado: boolean
    }, ExtArgs["result"]["funcionarios"]>
    composites: {}
  }

  type FuncionariosGetPayload<S extends boolean | null | undefined | FuncionariosDefaultArgs> = $Result.GetResult<Prisma.$FuncionariosPayload, S>

  type FuncionariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionariosCountAggregateInputType | true
    }

  export interface FuncionariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionarios'], meta: { name: 'Funcionarios' } }
    /**
     * Find zero or one Funcionarios that matches the filter.
     * @param {FuncionariosFindUniqueArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionariosFindUniqueArgs>(args: SelectSubset<T, FuncionariosFindUniqueArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionariosFindUniqueOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionariosFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosFindFirstArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionariosFindFirstArgs>(args?: SelectSubset<T, FuncionariosFindFirstArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosFindFirstOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionariosFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionariosFindManyArgs>(args?: SelectSubset<T, FuncionariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionarios.
     * @param {FuncionariosCreateArgs} args - Arguments to create a Funcionarios.
     * @example
     * // Create one Funcionarios
     * const Funcionarios = await prisma.funcionarios.create({
     *   data: {
     *     // ... data to create a Funcionarios
     *   }
     * })
     * 
     */
    create<T extends FuncionariosCreateArgs>(args: SelectSubset<T, FuncionariosCreateArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionariosCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionarios = await prisma.funcionarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionariosCreateManyArgs>(args?: SelectSubset<T, FuncionariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionariosCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionarios = await prisma.funcionarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionariosCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionarios.
     * @param {FuncionariosDeleteArgs} args - Arguments to delete one Funcionarios.
     * @example
     * // Delete one Funcionarios
     * const Funcionarios = await prisma.funcionarios.delete({
     *   where: {
     *     // ... filter to delete one Funcionarios
     *   }
     * })
     * 
     */
    delete<T extends FuncionariosDeleteArgs>(args: SelectSubset<T, FuncionariosDeleteArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionarios.
     * @param {FuncionariosUpdateArgs} args - Arguments to update one Funcionarios.
     * @example
     * // Update one Funcionarios
     * const funcionarios = await prisma.funcionarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionariosUpdateArgs>(args: SelectSubset<T, FuncionariosUpdateArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionariosDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionariosDeleteManyArgs>(args?: SelectSubset<T, FuncionariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionarios = await prisma.funcionarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionariosUpdateManyArgs>(args: SelectSubset<T, FuncionariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionariosUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionarios = await prisma.funcionarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.updateManyAndReturn({
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
    updateManyAndReturn<T extends FuncionariosUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionarios.
     * @param {FuncionariosUpsertArgs} args - Arguments to update or create a Funcionarios.
     * @example
     * // Update or create a Funcionarios
     * const funcionarios = await prisma.funcionarios.upsert({
     *   create: {
     *     // ... data to create a Funcionarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionarios we want to update
     *   }
     * })
     */
    upsert<T extends FuncionariosUpsertArgs>(args: SelectSubset<T, FuncionariosUpsertArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionarios.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionariosCountArgs>(
      args?: Subset<T, FuncionariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionariosAggregateArgs>(args: Subset<T, FuncionariosAggregateArgs>): Prisma.PrismaPromise<GetFuncionariosAggregateType<T>>

    /**
     * Group by Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosGroupByArgs} args - Group by arguments.
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
      T extends FuncionariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionariosGroupByArgs['orderBy'] }
        : { orderBy?: FuncionariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionarios model
   */
  readonly fields: FuncionariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sorteios<T extends Funcionarios$sorteiosArgs<ExtArgs> = {}>(args?: Subset<T, Funcionarios$sorteiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Funcionarios model
   */
  interface FuncionariosFieldRefs {
    readonly id: FieldRef<"Funcionarios", 'Int'>
    readonly nome: FieldRef<"Funcionarios", 'String'>
    readonly presente: FieldRef<"Funcionarios", 'Boolean'>
    readonly sorteado: FieldRef<"Funcionarios", 'Boolean'>
    readonly convidado: FieldRef<"Funcionarios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Funcionarios findUnique
   */
  export type FuncionariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios findUniqueOrThrow
   */
  export type FuncionariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios findFirst
   */
  export type FuncionariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * Funcionarios findFirstOrThrow
   */
  export type FuncionariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * Funcionarios findMany
   */
  export type FuncionariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * Funcionarios create
   */
  export type FuncionariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionarios.
     */
    data: XOR<FuncionariosCreateInput, FuncionariosUncheckedCreateInput>
  }

  /**
   * Funcionarios createMany
   */
  export type FuncionariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionariosCreateManyInput | FuncionariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionarios createManyAndReturn
   */
  export type FuncionariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionariosCreateManyInput | FuncionariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionarios update
   */
  export type FuncionariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionarios.
     */
    data: XOR<FuncionariosUpdateInput, FuncionariosUncheckedUpdateInput>
    /**
     * Choose, which Funcionarios to update.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios updateMany
   */
  export type FuncionariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionariosUpdateManyMutationInput, FuncionariosUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionariosWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionarios updateManyAndReturn
   */
  export type FuncionariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionariosUpdateManyMutationInput, FuncionariosUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionariosWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionarios upsert
   */
  export type FuncionariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionarios to update in case it exists.
     */
    where: FuncionariosWhereUniqueInput
    /**
     * In case the Funcionarios found by the `where` argument doesn't exist, create a new Funcionarios with this data.
     */
    create: XOR<FuncionariosCreateInput, FuncionariosUncheckedCreateInput>
    /**
     * In case the Funcionarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionariosUpdateInput, FuncionariosUncheckedUpdateInput>
  }

  /**
   * Funcionarios delete
   */
  export type FuncionariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter which Funcionarios to delete.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios deleteMany
   */
  export type FuncionariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionariosWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionarios.sorteios
   */
  export type Funcionarios$sorteiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    where?: SorteioWhereInput
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    cursor?: SorteioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Funcionarios without action
   */
  export type FuncionariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
  }


  /**
   * Model Premios
   */

  export type AggregatePremios = {
    _count: PremiosCountAggregateOutputType | null
    _avg: PremiosAvgAggregateOutputType | null
    _sum: PremiosSumAggregateOutputType | null
    _min: PremiosMinAggregateOutputType | null
    _max: PremiosMaxAggregateOutputType | null
  }

  export type PremiosAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    quantidadeSorteada: number | null
    ordem: number | null
  }

  export type PremiosSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    quantidadeSorteada: number | null
    ordem: number | null
  }

  export type PremiosMinAggregateOutputType = {
    id: number | null
    premio: string | null
    quantidade: number | null
    quantidadeSorteada: number | null
    ordem: number | null
    sorteado: boolean | null
  }

  export type PremiosMaxAggregateOutputType = {
    id: number | null
    premio: string | null
    quantidade: number | null
    quantidadeSorteada: number | null
    ordem: number | null
    sorteado: boolean | null
  }

  export type PremiosCountAggregateOutputType = {
    id: number
    premio: number
    quantidade: number
    quantidadeSorteada: number
    ordem: number
    sorteado: number
    _all: number
  }


  export type PremiosAvgAggregateInputType = {
    id?: true
    quantidade?: true
    quantidadeSorteada?: true
    ordem?: true
  }

  export type PremiosSumAggregateInputType = {
    id?: true
    quantidade?: true
    quantidadeSorteada?: true
    ordem?: true
  }

  export type PremiosMinAggregateInputType = {
    id?: true
    premio?: true
    quantidade?: true
    quantidadeSorteada?: true
    ordem?: true
    sorteado?: true
  }

  export type PremiosMaxAggregateInputType = {
    id?: true
    premio?: true
    quantidade?: true
    quantidadeSorteada?: true
    ordem?: true
    sorteado?: true
  }

  export type PremiosCountAggregateInputType = {
    id?: true
    premio?: true
    quantidade?: true
    quantidadeSorteada?: true
    ordem?: true
    sorteado?: true
    _all?: true
  }

  export type PremiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Premios to aggregate.
     */
    where?: PremiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premios to fetch.
     */
    orderBy?: PremiosOrderByWithRelationInput | PremiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Premios
    **/
    _count?: true | PremiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PremiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PremiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremiosMaxAggregateInputType
  }

  export type GetPremiosAggregateType<T extends PremiosAggregateArgs> = {
        [P in keyof T & keyof AggregatePremios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremios[P]>
      : GetScalarType<T[P], AggregatePremios[P]>
  }




  export type PremiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremiosWhereInput
    orderBy?: PremiosOrderByWithAggregationInput | PremiosOrderByWithAggregationInput[]
    by: PremiosScalarFieldEnum[] | PremiosScalarFieldEnum
    having?: PremiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremiosCountAggregateInputType | true
    _avg?: PremiosAvgAggregateInputType
    _sum?: PremiosSumAggregateInputType
    _min?: PremiosMinAggregateInputType
    _max?: PremiosMaxAggregateInputType
  }

  export type PremiosGroupByOutputType = {
    id: number
    premio: string
    quantidade: number
    quantidadeSorteada: number
    ordem: number
    sorteado: boolean
    _count: PremiosCountAggregateOutputType | null
    _avg: PremiosAvgAggregateOutputType | null
    _sum: PremiosSumAggregateOutputType | null
    _min: PremiosMinAggregateOutputType | null
    _max: PremiosMaxAggregateOutputType | null
  }

  type GetPremiosGroupByPayload<T extends PremiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremiosGroupByOutputType[P]>
            : GetScalarType<T[P], PremiosGroupByOutputType[P]>
        }
      >
    >


  export type PremiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    premio?: boolean
    quantidade?: boolean
    quantidadeSorteada?: boolean
    ordem?: boolean
    sorteado?: boolean
    sorteios?: boolean | Premios$sorteiosArgs<ExtArgs>
    _count?: boolean | PremiosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premios"]>

  export type PremiosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    premio?: boolean
    quantidade?: boolean
    quantidadeSorteada?: boolean
    ordem?: boolean
    sorteado?: boolean
  }, ExtArgs["result"]["premios"]>

  export type PremiosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    premio?: boolean
    quantidade?: boolean
    quantidadeSorteada?: boolean
    ordem?: boolean
    sorteado?: boolean
  }, ExtArgs["result"]["premios"]>

  export type PremiosSelectScalar = {
    id?: boolean
    premio?: boolean
    quantidade?: boolean
    quantidadeSorteada?: boolean
    ordem?: boolean
    sorteado?: boolean
  }

  export type PremiosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "premio" | "quantidade" | "quantidadeSorteada" | "ordem" | "sorteado", ExtArgs["result"]["premios"]>
  export type PremiosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sorteios?: boolean | Premios$sorteiosArgs<ExtArgs>
    _count?: boolean | PremiosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PremiosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PremiosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PremiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Premios"
    objects: {
      sorteios: Prisma.$SorteioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      premio: string
      quantidade: number
      quantidadeSorteada: number
      ordem: number
      sorteado: boolean
    }, ExtArgs["result"]["premios"]>
    composites: {}
  }

  type PremiosGetPayload<S extends boolean | null | undefined | PremiosDefaultArgs> = $Result.GetResult<Prisma.$PremiosPayload, S>

  type PremiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremiosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremiosCountAggregateInputType | true
    }

  export interface PremiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Premios'], meta: { name: 'Premios' } }
    /**
     * Find zero or one Premios that matches the filter.
     * @param {PremiosFindUniqueArgs} args - Arguments to find a Premios
     * @example
     * // Get one Premios
     * const premios = await prisma.premios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremiosFindUniqueArgs>(args: SelectSubset<T, PremiosFindUniqueArgs<ExtArgs>>): Prisma__PremiosClient<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Premios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremiosFindUniqueOrThrowArgs} args - Arguments to find a Premios
     * @example
     * // Get one Premios
     * const premios = await prisma.premios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremiosFindUniqueOrThrowArgs>(args: SelectSubset<T, PremiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremiosClient<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Premios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiosFindFirstArgs} args - Arguments to find a Premios
     * @example
     * // Get one Premios
     * const premios = await prisma.premios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremiosFindFirstArgs>(args?: SelectSubset<T, PremiosFindFirstArgs<ExtArgs>>): Prisma__PremiosClient<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Premios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiosFindFirstOrThrowArgs} args - Arguments to find a Premios
     * @example
     * // Get one Premios
     * const premios = await prisma.premios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremiosFindFirstOrThrowArgs>(args?: SelectSubset<T, PremiosFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremiosClient<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Premios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Premios
     * const premios = await prisma.premios.findMany()
     * 
     * // Get first 10 Premios
     * const premios = await prisma.premios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const premiosWithIdOnly = await prisma.premios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PremiosFindManyArgs>(args?: SelectSubset<T, PremiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Premios.
     * @param {PremiosCreateArgs} args - Arguments to create a Premios.
     * @example
     * // Create one Premios
     * const Premios = await prisma.premios.create({
     *   data: {
     *     // ... data to create a Premios
     *   }
     * })
     * 
     */
    create<T extends PremiosCreateArgs>(args: SelectSubset<T, PremiosCreateArgs<ExtArgs>>): Prisma__PremiosClient<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Premios.
     * @param {PremiosCreateManyArgs} args - Arguments to create many Premios.
     * @example
     * // Create many Premios
     * const premios = await prisma.premios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremiosCreateManyArgs>(args?: SelectSubset<T, PremiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Premios and returns the data saved in the database.
     * @param {PremiosCreateManyAndReturnArgs} args - Arguments to create many Premios.
     * @example
     * // Create many Premios
     * const premios = await prisma.premios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Premios and only return the `id`
     * const premiosWithIdOnly = await prisma.premios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremiosCreateManyAndReturnArgs>(args?: SelectSubset<T, PremiosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Premios.
     * @param {PremiosDeleteArgs} args - Arguments to delete one Premios.
     * @example
     * // Delete one Premios
     * const Premios = await prisma.premios.delete({
     *   where: {
     *     // ... filter to delete one Premios
     *   }
     * })
     * 
     */
    delete<T extends PremiosDeleteArgs>(args: SelectSubset<T, PremiosDeleteArgs<ExtArgs>>): Prisma__PremiosClient<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Premios.
     * @param {PremiosUpdateArgs} args - Arguments to update one Premios.
     * @example
     * // Update one Premios
     * const premios = await prisma.premios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremiosUpdateArgs>(args: SelectSubset<T, PremiosUpdateArgs<ExtArgs>>): Prisma__PremiosClient<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Premios.
     * @param {PremiosDeleteManyArgs} args - Arguments to filter Premios to delete.
     * @example
     * // Delete a few Premios
     * const { count } = await prisma.premios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremiosDeleteManyArgs>(args?: SelectSubset<T, PremiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Premios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Premios
     * const premios = await prisma.premios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremiosUpdateManyArgs>(args: SelectSubset<T, PremiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Premios and returns the data updated in the database.
     * @param {PremiosUpdateManyAndReturnArgs} args - Arguments to update many Premios.
     * @example
     * // Update many Premios
     * const premios = await prisma.premios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Premios and only return the `id`
     * const premiosWithIdOnly = await prisma.premios.updateManyAndReturn({
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
    updateManyAndReturn<T extends PremiosUpdateManyAndReturnArgs>(args: SelectSubset<T, PremiosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Premios.
     * @param {PremiosUpsertArgs} args - Arguments to update or create a Premios.
     * @example
     * // Update or create a Premios
     * const premios = await prisma.premios.upsert({
     *   create: {
     *     // ... data to create a Premios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Premios we want to update
     *   }
     * })
     */
    upsert<T extends PremiosUpsertArgs>(args: SelectSubset<T, PremiosUpsertArgs<ExtArgs>>): Prisma__PremiosClient<$Result.GetResult<Prisma.$PremiosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Premios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiosCountArgs} args - Arguments to filter Premios to count.
     * @example
     * // Count the number of Premios
     * const count = await prisma.premios.count({
     *   where: {
     *     // ... the filter for the Premios we want to count
     *   }
     * })
    **/
    count<T extends PremiosCountArgs>(
      args?: Subset<T, PremiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Premios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PremiosAggregateArgs>(args: Subset<T, PremiosAggregateArgs>): Prisma.PrismaPromise<GetPremiosAggregateType<T>>

    /**
     * Group by Premios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremiosGroupByArgs} args - Group by arguments.
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
      T extends PremiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremiosGroupByArgs['orderBy'] }
        : { orderBy?: PremiosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PremiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Premios model
   */
  readonly fields: PremiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Premios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sorteios<T extends Premios$sorteiosArgs<ExtArgs> = {}>(args?: Subset<T, Premios$sorteiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SorteioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Premios model
   */
  interface PremiosFieldRefs {
    readonly id: FieldRef<"Premios", 'Int'>
    readonly premio: FieldRef<"Premios", 'String'>
    readonly quantidade: FieldRef<"Premios", 'Int'>
    readonly quantidadeSorteada: FieldRef<"Premios", 'Int'>
    readonly ordem: FieldRef<"Premios", 'Int'>
    readonly sorteado: FieldRef<"Premios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Premios findUnique
   */
  export type PremiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
    /**
     * Filter, which Premios to fetch.
     */
    where: PremiosWhereUniqueInput
  }

  /**
   * Premios findUniqueOrThrow
   */
  export type PremiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
    /**
     * Filter, which Premios to fetch.
     */
    where: PremiosWhereUniqueInput
  }

  /**
   * Premios findFirst
   */
  export type PremiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
    /**
     * Filter, which Premios to fetch.
     */
    where?: PremiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premios to fetch.
     */
    orderBy?: PremiosOrderByWithRelationInput | PremiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Premios.
     */
    cursor?: PremiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Premios.
     */
    distinct?: PremiosScalarFieldEnum | PremiosScalarFieldEnum[]
  }

  /**
   * Premios findFirstOrThrow
   */
  export type PremiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
    /**
     * Filter, which Premios to fetch.
     */
    where?: PremiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premios to fetch.
     */
    orderBy?: PremiosOrderByWithRelationInput | PremiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Premios.
     */
    cursor?: PremiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Premios.
     */
    distinct?: PremiosScalarFieldEnum | PremiosScalarFieldEnum[]
  }

  /**
   * Premios findMany
   */
  export type PremiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
    /**
     * Filter, which Premios to fetch.
     */
    where?: PremiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Premios to fetch.
     */
    orderBy?: PremiosOrderByWithRelationInput | PremiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Premios.
     */
    cursor?: PremiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Premios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Premios.
     */
    skip?: number
    distinct?: PremiosScalarFieldEnum | PremiosScalarFieldEnum[]
  }

  /**
   * Premios create
   */
  export type PremiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
    /**
     * The data needed to create a Premios.
     */
    data: XOR<PremiosCreateInput, PremiosUncheckedCreateInput>
  }

  /**
   * Premios createMany
   */
  export type PremiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Premios.
     */
    data: PremiosCreateManyInput | PremiosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Premios createManyAndReturn
   */
  export type PremiosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * The data used to create many Premios.
     */
    data: PremiosCreateManyInput | PremiosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Premios update
   */
  export type PremiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
    /**
     * The data needed to update a Premios.
     */
    data: XOR<PremiosUpdateInput, PremiosUncheckedUpdateInput>
    /**
     * Choose, which Premios to update.
     */
    where: PremiosWhereUniqueInput
  }

  /**
   * Premios updateMany
   */
  export type PremiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Premios.
     */
    data: XOR<PremiosUpdateManyMutationInput, PremiosUncheckedUpdateManyInput>
    /**
     * Filter which Premios to update
     */
    where?: PremiosWhereInput
    /**
     * Limit how many Premios to update.
     */
    limit?: number
  }

  /**
   * Premios updateManyAndReturn
   */
  export type PremiosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * The data used to update Premios.
     */
    data: XOR<PremiosUpdateManyMutationInput, PremiosUncheckedUpdateManyInput>
    /**
     * Filter which Premios to update
     */
    where?: PremiosWhereInput
    /**
     * Limit how many Premios to update.
     */
    limit?: number
  }

  /**
   * Premios upsert
   */
  export type PremiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
    /**
     * The filter to search for the Premios to update in case it exists.
     */
    where: PremiosWhereUniqueInput
    /**
     * In case the Premios found by the `where` argument doesn't exist, create a new Premios with this data.
     */
    create: XOR<PremiosCreateInput, PremiosUncheckedCreateInput>
    /**
     * In case the Premios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremiosUpdateInput, PremiosUncheckedUpdateInput>
  }

  /**
   * Premios delete
   */
  export type PremiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
    /**
     * Filter which Premios to delete.
     */
    where: PremiosWhereUniqueInput
  }

  /**
   * Premios deleteMany
   */
  export type PremiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Premios to delete
     */
    where?: PremiosWhereInput
    /**
     * Limit how many Premios to delete.
     */
    limit?: number
  }

  /**
   * Premios.sorteios
   */
  export type Premios$sorteiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sorteio
     */
    select?: SorteioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sorteio
     */
    omit?: SorteioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SorteioInclude<ExtArgs> | null
    where?: SorteioWhereInput
    orderBy?: SorteioOrderByWithRelationInput | SorteioOrderByWithRelationInput[]
    cursor?: SorteioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SorteioScalarFieldEnum | SorteioScalarFieldEnum[]
  }

  /**
   * Premios without action
   */
  export type PremiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Premios
     */
    select?: PremiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Premios
     */
    omit?: PremiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremiosInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    username: 'username',
    senha: 'senha',
    nome: 'nome',
    role: 'role'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SorteioScalarFieldEnum: {
    id: 'id',
    premioId: 'premioId',
    funcionarioId: 'funcionarioId',
    entregue: 'entregue'
  };

  export type SorteioScalarFieldEnum = (typeof SorteioScalarFieldEnum)[keyof typeof SorteioScalarFieldEnum]


  export const FuncionariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    presente: 'presente',
    sorteado: 'sorteado',
    convidado: 'convidado'
  };

  export type FuncionariosScalarFieldEnum = (typeof FuncionariosScalarFieldEnum)[keyof typeof FuncionariosScalarFieldEnum]


  export const PremiosScalarFieldEnum: {
    id: 'id',
    premio: 'premio',
    quantidade: 'quantidade',
    quantidadeSorteada: 'quantidadeSorteada',
    ordem: 'ordem',
    sorteado: 'sorteado'
  };

  export type PremiosScalarFieldEnum = (typeof PremiosScalarFieldEnum)[keyof typeof PremiosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    username?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    role?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    senha?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
  }, "id" | "username">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    role?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    username?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
  }

  export type SorteioWhereInput = {
    AND?: SorteioWhereInput | SorteioWhereInput[]
    OR?: SorteioWhereInput[]
    NOT?: SorteioWhereInput | SorteioWhereInput[]
    id?: IntFilter<"Sorteio"> | number
    premioId?: IntFilter<"Sorteio"> | number
    funcionarioId?: IntFilter<"Sorteio"> | number
    entregue?: BoolFilter<"Sorteio"> | boolean
    ganhador?: XOR<FuncionariosScalarRelationFilter, FuncionariosWhereInput>
    premio?: XOR<PremiosScalarRelationFilter, PremiosWhereInput>
  }

  export type SorteioOrderByWithRelationInput = {
    id?: SortOrder
    premioId?: SortOrder
    funcionarioId?: SortOrder
    entregue?: SortOrder
    ganhador?: FuncionariosOrderByWithRelationInput
    premio?: PremiosOrderByWithRelationInput
  }

  export type SorteioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SorteioWhereInput | SorteioWhereInput[]
    OR?: SorteioWhereInput[]
    NOT?: SorteioWhereInput | SorteioWhereInput[]
    premioId?: IntFilter<"Sorteio"> | number
    funcionarioId?: IntFilter<"Sorteio"> | number
    entregue?: BoolFilter<"Sorteio"> | boolean
    ganhador?: XOR<FuncionariosScalarRelationFilter, FuncionariosWhereInput>
    premio?: XOR<PremiosScalarRelationFilter, PremiosWhereInput>
  }, "id">

  export type SorteioOrderByWithAggregationInput = {
    id?: SortOrder
    premioId?: SortOrder
    funcionarioId?: SortOrder
    entregue?: SortOrder
    _count?: SorteioCountOrderByAggregateInput
    _avg?: SorteioAvgOrderByAggregateInput
    _max?: SorteioMaxOrderByAggregateInput
    _min?: SorteioMinOrderByAggregateInput
    _sum?: SorteioSumOrderByAggregateInput
  }

  export type SorteioScalarWhereWithAggregatesInput = {
    AND?: SorteioScalarWhereWithAggregatesInput | SorteioScalarWhereWithAggregatesInput[]
    OR?: SorteioScalarWhereWithAggregatesInput[]
    NOT?: SorteioScalarWhereWithAggregatesInput | SorteioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sorteio"> | number
    premioId?: IntWithAggregatesFilter<"Sorteio"> | number
    funcionarioId?: IntWithAggregatesFilter<"Sorteio"> | number
    entregue?: BoolWithAggregatesFilter<"Sorteio"> | boolean
  }

  export type FuncionariosWhereInput = {
    AND?: FuncionariosWhereInput | FuncionariosWhereInput[]
    OR?: FuncionariosWhereInput[]
    NOT?: FuncionariosWhereInput | FuncionariosWhereInput[]
    id?: IntFilter<"Funcionarios"> | number
    nome?: StringFilter<"Funcionarios"> | string
    presente?: BoolFilter<"Funcionarios"> | boolean
    sorteado?: BoolFilter<"Funcionarios"> | boolean
    convidado?: BoolFilter<"Funcionarios"> | boolean
    sorteios?: SorteioListRelationFilter
  }

  export type FuncionariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    presente?: SortOrder
    sorteado?: SortOrder
    convidado?: SortOrder
    sorteios?: SorteioOrderByRelationAggregateInput
  }

  export type FuncionariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FuncionariosWhereInput | FuncionariosWhereInput[]
    OR?: FuncionariosWhereInput[]
    NOT?: FuncionariosWhereInput | FuncionariosWhereInput[]
    nome?: StringFilter<"Funcionarios"> | string
    presente?: BoolFilter<"Funcionarios"> | boolean
    sorteado?: BoolFilter<"Funcionarios"> | boolean
    convidado?: BoolFilter<"Funcionarios"> | boolean
    sorteios?: SorteioListRelationFilter
  }, "id">

  export type FuncionariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    presente?: SortOrder
    sorteado?: SortOrder
    convidado?: SortOrder
    _count?: FuncionariosCountOrderByAggregateInput
    _avg?: FuncionariosAvgOrderByAggregateInput
    _max?: FuncionariosMaxOrderByAggregateInput
    _min?: FuncionariosMinOrderByAggregateInput
    _sum?: FuncionariosSumOrderByAggregateInput
  }

  export type FuncionariosScalarWhereWithAggregatesInput = {
    AND?: FuncionariosScalarWhereWithAggregatesInput | FuncionariosScalarWhereWithAggregatesInput[]
    OR?: FuncionariosScalarWhereWithAggregatesInput[]
    NOT?: FuncionariosScalarWhereWithAggregatesInput | FuncionariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcionarios"> | number
    nome?: StringWithAggregatesFilter<"Funcionarios"> | string
    presente?: BoolWithAggregatesFilter<"Funcionarios"> | boolean
    sorteado?: BoolWithAggregatesFilter<"Funcionarios"> | boolean
    convidado?: BoolWithAggregatesFilter<"Funcionarios"> | boolean
  }

  export type PremiosWhereInput = {
    AND?: PremiosWhereInput | PremiosWhereInput[]
    OR?: PremiosWhereInput[]
    NOT?: PremiosWhereInput | PremiosWhereInput[]
    id?: IntFilter<"Premios"> | number
    premio?: StringFilter<"Premios"> | string
    quantidade?: IntFilter<"Premios"> | number
    quantidadeSorteada?: IntFilter<"Premios"> | number
    ordem?: IntFilter<"Premios"> | number
    sorteado?: BoolFilter<"Premios"> | boolean
    sorteios?: SorteioListRelationFilter
  }

  export type PremiosOrderByWithRelationInput = {
    id?: SortOrder
    premio?: SortOrder
    quantidade?: SortOrder
    quantidadeSorteada?: SortOrder
    ordem?: SortOrder
    sorteado?: SortOrder
    sorteios?: SorteioOrderByRelationAggregateInput
  }

  export type PremiosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PremiosWhereInput | PremiosWhereInput[]
    OR?: PremiosWhereInput[]
    NOT?: PremiosWhereInput | PremiosWhereInput[]
    premio?: StringFilter<"Premios"> | string
    quantidade?: IntFilter<"Premios"> | number
    quantidadeSorteada?: IntFilter<"Premios"> | number
    ordem?: IntFilter<"Premios"> | number
    sorteado?: BoolFilter<"Premios"> | boolean
    sorteios?: SorteioListRelationFilter
  }, "id">

  export type PremiosOrderByWithAggregationInput = {
    id?: SortOrder
    premio?: SortOrder
    quantidade?: SortOrder
    quantidadeSorteada?: SortOrder
    ordem?: SortOrder
    sorteado?: SortOrder
    _count?: PremiosCountOrderByAggregateInput
    _avg?: PremiosAvgOrderByAggregateInput
    _max?: PremiosMaxOrderByAggregateInput
    _min?: PremiosMinOrderByAggregateInput
    _sum?: PremiosSumOrderByAggregateInput
  }

  export type PremiosScalarWhereWithAggregatesInput = {
    AND?: PremiosScalarWhereWithAggregatesInput | PremiosScalarWhereWithAggregatesInput[]
    OR?: PremiosScalarWhereWithAggregatesInput[]
    NOT?: PremiosScalarWhereWithAggregatesInput | PremiosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Premios"> | number
    premio?: StringWithAggregatesFilter<"Premios"> | string
    quantidade?: IntWithAggregatesFilter<"Premios"> | number
    quantidadeSorteada?: IntWithAggregatesFilter<"Premios"> | number
    ordem?: IntWithAggregatesFilter<"Premios"> | number
    sorteado?: BoolWithAggregatesFilter<"Premios"> | boolean
  }

  export type UsuarioCreateInput = {
    username: string
    senha: string
    nome: string
    role?: $Enums.Role
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    username: string
    senha: string
    nome: string
    role?: $Enums.Role
  }

  export type UsuarioUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UsuarioCreateManyInput = {
    id?: number
    username: string
    senha: string
    nome: string
    role?: $Enums.Role
  }

  export type UsuarioUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type SorteioCreateInput = {
    entregue?: boolean
    ganhador: FuncionariosCreateNestedOneWithoutSorteiosInput
    premio: PremiosCreateNestedOneWithoutSorteiosInput
  }

  export type SorteioUncheckedCreateInput = {
    id?: number
    premioId: number
    funcionarioId: number
    entregue?: boolean
  }

  export type SorteioUpdateInput = {
    entregue?: BoolFieldUpdateOperationsInput | boolean
    ganhador?: FuncionariosUpdateOneRequiredWithoutSorteiosNestedInput
    premio?: PremiosUpdateOneRequiredWithoutSorteiosNestedInput
  }

  export type SorteioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    premioId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: IntFieldUpdateOperationsInput | number
    entregue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SorteioCreateManyInput = {
    id?: number
    premioId: number
    funcionarioId: number
    entregue?: boolean
  }

  export type SorteioUpdateManyMutationInput = {
    entregue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SorteioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    premioId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: IntFieldUpdateOperationsInput | number
    entregue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FuncionariosCreateInput = {
    nome: string
    presente?: boolean
    sorteado?: boolean
    convidado?: boolean
    sorteios?: SorteioCreateNestedManyWithoutGanhadorInput
  }

  export type FuncionariosUncheckedCreateInput = {
    id?: number
    nome: string
    presente?: boolean
    sorteado?: boolean
    convidado?: boolean
    sorteios?: SorteioUncheckedCreateNestedManyWithoutGanhadorInput
  }

  export type FuncionariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    sorteado?: BoolFieldUpdateOperationsInput | boolean
    convidado?: BoolFieldUpdateOperationsInput | boolean
    sorteios?: SorteioUpdateManyWithoutGanhadorNestedInput
  }

  export type FuncionariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    sorteado?: BoolFieldUpdateOperationsInput | boolean
    convidado?: BoolFieldUpdateOperationsInput | boolean
    sorteios?: SorteioUncheckedUpdateManyWithoutGanhadorNestedInput
  }

  export type FuncionariosCreateManyInput = {
    id?: number
    nome: string
    presente?: boolean
    sorteado?: boolean
    convidado?: boolean
  }

  export type FuncionariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    sorteado?: BoolFieldUpdateOperationsInput | boolean
    convidado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FuncionariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    sorteado?: BoolFieldUpdateOperationsInput | boolean
    convidado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiosCreateInput = {
    premio: string
    quantidade?: number
    quantidadeSorteada?: number
    ordem?: number
    sorteado?: boolean
    sorteios?: SorteioCreateNestedManyWithoutPremioInput
  }

  export type PremiosUncheckedCreateInput = {
    id?: number
    premio: string
    quantidade?: number
    quantidadeSorteada?: number
    ordem?: number
    sorteado?: boolean
    sorteios?: SorteioUncheckedCreateNestedManyWithoutPremioInput
  }

  export type PremiosUpdateInput = {
    premio?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    quantidadeSorteada?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    sorteado?: BoolFieldUpdateOperationsInput | boolean
    sorteios?: SorteioUpdateManyWithoutPremioNestedInput
  }

  export type PremiosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    premio?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    quantidadeSorteada?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    sorteado?: BoolFieldUpdateOperationsInput | boolean
    sorteios?: SorteioUncheckedUpdateManyWithoutPremioNestedInput
  }

  export type PremiosCreateManyInput = {
    id?: number
    premio: string
    quantidade?: number
    quantidadeSorteada?: number
    ordem?: number
    sorteado?: boolean
  }

  export type PremiosUpdateManyMutationInput = {
    premio?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    quantidadeSorteada?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    sorteado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    premio?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    quantidadeSorteada?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    sorteado?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    role?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    role?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    role?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FuncionariosScalarRelationFilter = {
    is?: FuncionariosWhereInput
    isNot?: FuncionariosWhereInput
  }

  export type PremiosScalarRelationFilter = {
    is?: PremiosWhereInput
    isNot?: PremiosWhereInput
  }

  export type SorteioCountOrderByAggregateInput = {
    id?: SortOrder
    premioId?: SortOrder
    funcionarioId?: SortOrder
    entregue?: SortOrder
  }

  export type SorteioAvgOrderByAggregateInput = {
    id?: SortOrder
    premioId?: SortOrder
    funcionarioId?: SortOrder
  }

  export type SorteioMaxOrderByAggregateInput = {
    id?: SortOrder
    premioId?: SortOrder
    funcionarioId?: SortOrder
    entregue?: SortOrder
  }

  export type SorteioMinOrderByAggregateInput = {
    id?: SortOrder
    premioId?: SortOrder
    funcionarioId?: SortOrder
    entregue?: SortOrder
  }

  export type SorteioSumOrderByAggregateInput = {
    id?: SortOrder
    premioId?: SortOrder
    funcionarioId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SorteioListRelationFilter = {
    every?: SorteioWhereInput
    some?: SorteioWhereInput
    none?: SorteioWhereInput
  }

  export type SorteioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuncionariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    presente?: SortOrder
    sorteado?: SortOrder
    convidado?: SortOrder
  }

  export type FuncionariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    presente?: SortOrder
    sorteado?: SortOrder
    convidado?: SortOrder
  }

  export type FuncionariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    presente?: SortOrder
    sorteado?: SortOrder
    convidado?: SortOrder
  }

  export type FuncionariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PremiosCountOrderByAggregateInput = {
    id?: SortOrder
    premio?: SortOrder
    quantidade?: SortOrder
    quantidadeSorteada?: SortOrder
    ordem?: SortOrder
    sorteado?: SortOrder
  }

  export type PremiosAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    quantidadeSorteada?: SortOrder
    ordem?: SortOrder
  }

  export type PremiosMaxOrderByAggregateInput = {
    id?: SortOrder
    premio?: SortOrder
    quantidade?: SortOrder
    quantidadeSorteada?: SortOrder
    ordem?: SortOrder
    sorteado?: SortOrder
  }

  export type PremiosMinOrderByAggregateInput = {
    id?: SortOrder
    premio?: SortOrder
    quantidade?: SortOrder
    quantidadeSorteada?: SortOrder
    ordem?: SortOrder
    sorteado?: SortOrder
  }

  export type PremiosSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    quantidadeSorteada?: SortOrder
    ordem?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FuncionariosCreateNestedOneWithoutSorteiosInput = {
    create?: XOR<FuncionariosCreateWithoutSorteiosInput, FuncionariosUncheckedCreateWithoutSorteiosInput>
    connectOrCreate?: FuncionariosCreateOrConnectWithoutSorteiosInput
    connect?: FuncionariosWhereUniqueInput
  }

  export type PremiosCreateNestedOneWithoutSorteiosInput = {
    create?: XOR<PremiosCreateWithoutSorteiosInput, PremiosUncheckedCreateWithoutSorteiosInput>
    connectOrCreate?: PremiosCreateOrConnectWithoutSorteiosInput
    connect?: PremiosWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FuncionariosUpdateOneRequiredWithoutSorteiosNestedInput = {
    create?: XOR<FuncionariosCreateWithoutSorteiosInput, FuncionariosUncheckedCreateWithoutSorteiosInput>
    connectOrCreate?: FuncionariosCreateOrConnectWithoutSorteiosInput
    upsert?: FuncionariosUpsertWithoutSorteiosInput
    connect?: FuncionariosWhereUniqueInput
    update?: XOR<XOR<FuncionariosUpdateToOneWithWhereWithoutSorteiosInput, FuncionariosUpdateWithoutSorteiosInput>, FuncionariosUncheckedUpdateWithoutSorteiosInput>
  }

  export type PremiosUpdateOneRequiredWithoutSorteiosNestedInput = {
    create?: XOR<PremiosCreateWithoutSorteiosInput, PremiosUncheckedCreateWithoutSorteiosInput>
    connectOrCreate?: PremiosCreateOrConnectWithoutSorteiosInput
    upsert?: PremiosUpsertWithoutSorteiosInput
    connect?: PremiosWhereUniqueInput
    update?: XOR<XOR<PremiosUpdateToOneWithWhereWithoutSorteiosInput, PremiosUpdateWithoutSorteiosInput>, PremiosUncheckedUpdateWithoutSorteiosInput>
  }

  export type SorteioCreateNestedManyWithoutGanhadorInput = {
    create?: XOR<SorteioCreateWithoutGanhadorInput, SorteioUncheckedCreateWithoutGanhadorInput> | SorteioCreateWithoutGanhadorInput[] | SorteioUncheckedCreateWithoutGanhadorInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutGanhadorInput | SorteioCreateOrConnectWithoutGanhadorInput[]
    createMany?: SorteioCreateManyGanhadorInputEnvelope
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
  }

  export type SorteioUncheckedCreateNestedManyWithoutGanhadorInput = {
    create?: XOR<SorteioCreateWithoutGanhadorInput, SorteioUncheckedCreateWithoutGanhadorInput> | SorteioCreateWithoutGanhadorInput[] | SorteioUncheckedCreateWithoutGanhadorInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutGanhadorInput | SorteioCreateOrConnectWithoutGanhadorInput[]
    createMany?: SorteioCreateManyGanhadorInputEnvelope
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
  }

  export type SorteioUpdateManyWithoutGanhadorNestedInput = {
    create?: XOR<SorteioCreateWithoutGanhadorInput, SorteioUncheckedCreateWithoutGanhadorInput> | SorteioCreateWithoutGanhadorInput[] | SorteioUncheckedCreateWithoutGanhadorInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutGanhadorInput | SorteioCreateOrConnectWithoutGanhadorInput[]
    upsert?: SorteioUpsertWithWhereUniqueWithoutGanhadorInput | SorteioUpsertWithWhereUniqueWithoutGanhadorInput[]
    createMany?: SorteioCreateManyGanhadorInputEnvelope
    set?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    disconnect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    delete?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    update?: SorteioUpdateWithWhereUniqueWithoutGanhadorInput | SorteioUpdateWithWhereUniqueWithoutGanhadorInput[]
    updateMany?: SorteioUpdateManyWithWhereWithoutGanhadorInput | SorteioUpdateManyWithWhereWithoutGanhadorInput[]
    deleteMany?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
  }

  export type SorteioUncheckedUpdateManyWithoutGanhadorNestedInput = {
    create?: XOR<SorteioCreateWithoutGanhadorInput, SorteioUncheckedCreateWithoutGanhadorInput> | SorteioCreateWithoutGanhadorInput[] | SorteioUncheckedCreateWithoutGanhadorInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutGanhadorInput | SorteioCreateOrConnectWithoutGanhadorInput[]
    upsert?: SorteioUpsertWithWhereUniqueWithoutGanhadorInput | SorteioUpsertWithWhereUniqueWithoutGanhadorInput[]
    createMany?: SorteioCreateManyGanhadorInputEnvelope
    set?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    disconnect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    delete?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    update?: SorteioUpdateWithWhereUniqueWithoutGanhadorInput | SorteioUpdateWithWhereUniqueWithoutGanhadorInput[]
    updateMany?: SorteioUpdateManyWithWhereWithoutGanhadorInput | SorteioUpdateManyWithWhereWithoutGanhadorInput[]
    deleteMany?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
  }

  export type SorteioCreateNestedManyWithoutPremioInput = {
    create?: XOR<SorteioCreateWithoutPremioInput, SorteioUncheckedCreateWithoutPremioInput> | SorteioCreateWithoutPremioInput[] | SorteioUncheckedCreateWithoutPremioInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutPremioInput | SorteioCreateOrConnectWithoutPremioInput[]
    createMany?: SorteioCreateManyPremioInputEnvelope
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
  }

  export type SorteioUncheckedCreateNestedManyWithoutPremioInput = {
    create?: XOR<SorteioCreateWithoutPremioInput, SorteioUncheckedCreateWithoutPremioInput> | SorteioCreateWithoutPremioInput[] | SorteioUncheckedCreateWithoutPremioInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutPremioInput | SorteioCreateOrConnectWithoutPremioInput[]
    createMany?: SorteioCreateManyPremioInputEnvelope
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
  }

  export type SorteioUpdateManyWithoutPremioNestedInput = {
    create?: XOR<SorteioCreateWithoutPremioInput, SorteioUncheckedCreateWithoutPremioInput> | SorteioCreateWithoutPremioInput[] | SorteioUncheckedCreateWithoutPremioInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutPremioInput | SorteioCreateOrConnectWithoutPremioInput[]
    upsert?: SorteioUpsertWithWhereUniqueWithoutPremioInput | SorteioUpsertWithWhereUniqueWithoutPremioInput[]
    createMany?: SorteioCreateManyPremioInputEnvelope
    set?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    disconnect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    delete?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    update?: SorteioUpdateWithWhereUniqueWithoutPremioInput | SorteioUpdateWithWhereUniqueWithoutPremioInput[]
    updateMany?: SorteioUpdateManyWithWhereWithoutPremioInput | SorteioUpdateManyWithWhereWithoutPremioInput[]
    deleteMany?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
  }

  export type SorteioUncheckedUpdateManyWithoutPremioNestedInput = {
    create?: XOR<SorteioCreateWithoutPremioInput, SorteioUncheckedCreateWithoutPremioInput> | SorteioCreateWithoutPremioInput[] | SorteioUncheckedCreateWithoutPremioInput[]
    connectOrCreate?: SorteioCreateOrConnectWithoutPremioInput | SorteioCreateOrConnectWithoutPremioInput[]
    upsert?: SorteioUpsertWithWhereUniqueWithoutPremioInput | SorteioUpsertWithWhereUniqueWithoutPremioInput[]
    createMany?: SorteioCreateManyPremioInputEnvelope
    set?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    disconnect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    delete?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    connect?: SorteioWhereUniqueInput | SorteioWhereUniqueInput[]
    update?: SorteioUpdateWithWhereUniqueWithoutPremioInput | SorteioUpdateWithWhereUniqueWithoutPremioInput[]
    updateMany?: SorteioUpdateManyWithWhereWithoutPremioInput | SorteioUpdateManyWithWhereWithoutPremioInput[]
    deleteMany?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FuncionariosCreateWithoutSorteiosInput = {
    nome: string
    presente?: boolean
    sorteado?: boolean
    convidado?: boolean
  }

  export type FuncionariosUncheckedCreateWithoutSorteiosInput = {
    id?: number
    nome: string
    presente?: boolean
    sorteado?: boolean
    convidado?: boolean
  }

  export type FuncionariosCreateOrConnectWithoutSorteiosInput = {
    where: FuncionariosWhereUniqueInput
    create: XOR<FuncionariosCreateWithoutSorteiosInput, FuncionariosUncheckedCreateWithoutSorteiosInput>
  }

  export type PremiosCreateWithoutSorteiosInput = {
    premio: string
    quantidade?: number
    quantidadeSorteada?: number
    ordem?: number
    sorteado?: boolean
  }

  export type PremiosUncheckedCreateWithoutSorteiosInput = {
    id?: number
    premio: string
    quantidade?: number
    quantidadeSorteada?: number
    ordem?: number
    sorteado?: boolean
  }

  export type PremiosCreateOrConnectWithoutSorteiosInput = {
    where: PremiosWhereUniqueInput
    create: XOR<PremiosCreateWithoutSorteiosInput, PremiosUncheckedCreateWithoutSorteiosInput>
  }

  export type FuncionariosUpsertWithoutSorteiosInput = {
    update: XOR<FuncionariosUpdateWithoutSorteiosInput, FuncionariosUncheckedUpdateWithoutSorteiosInput>
    create: XOR<FuncionariosCreateWithoutSorteiosInput, FuncionariosUncheckedCreateWithoutSorteiosInput>
    where?: FuncionariosWhereInput
  }

  export type FuncionariosUpdateToOneWithWhereWithoutSorteiosInput = {
    where?: FuncionariosWhereInput
    data: XOR<FuncionariosUpdateWithoutSorteiosInput, FuncionariosUncheckedUpdateWithoutSorteiosInput>
  }

  export type FuncionariosUpdateWithoutSorteiosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    sorteado?: BoolFieldUpdateOperationsInput | boolean
    convidado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FuncionariosUncheckedUpdateWithoutSorteiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    presente?: BoolFieldUpdateOperationsInput | boolean
    sorteado?: BoolFieldUpdateOperationsInput | boolean
    convidado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiosUpsertWithoutSorteiosInput = {
    update: XOR<PremiosUpdateWithoutSorteiosInput, PremiosUncheckedUpdateWithoutSorteiosInput>
    create: XOR<PremiosCreateWithoutSorteiosInput, PremiosUncheckedCreateWithoutSorteiosInput>
    where?: PremiosWhereInput
  }

  export type PremiosUpdateToOneWithWhereWithoutSorteiosInput = {
    where?: PremiosWhereInput
    data: XOR<PremiosUpdateWithoutSorteiosInput, PremiosUncheckedUpdateWithoutSorteiosInput>
  }

  export type PremiosUpdateWithoutSorteiosInput = {
    premio?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    quantidadeSorteada?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    sorteado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PremiosUncheckedUpdateWithoutSorteiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    premio?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    quantidadeSorteada?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    sorteado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SorteioCreateWithoutGanhadorInput = {
    entregue?: boolean
    premio: PremiosCreateNestedOneWithoutSorteiosInput
  }

  export type SorteioUncheckedCreateWithoutGanhadorInput = {
    id?: number
    premioId: number
    entregue?: boolean
  }

  export type SorteioCreateOrConnectWithoutGanhadorInput = {
    where: SorteioWhereUniqueInput
    create: XOR<SorteioCreateWithoutGanhadorInput, SorteioUncheckedCreateWithoutGanhadorInput>
  }

  export type SorteioCreateManyGanhadorInputEnvelope = {
    data: SorteioCreateManyGanhadorInput | SorteioCreateManyGanhadorInput[]
    skipDuplicates?: boolean
  }

  export type SorteioUpsertWithWhereUniqueWithoutGanhadorInput = {
    where: SorteioWhereUniqueInput
    update: XOR<SorteioUpdateWithoutGanhadorInput, SorteioUncheckedUpdateWithoutGanhadorInput>
    create: XOR<SorteioCreateWithoutGanhadorInput, SorteioUncheckedCreateWithoutGanhadorInput>
  }

  export type SorteioUpdateWithWhereUniqueWithoutGanhadorInput = {
    where: SorteioWhereUniqueInput
    data: XOR<SorteioUpdateWithoutGanhadorInput, SorteioUncheckedUpdateWithoutGanhadorInput>
  }

  export type SorteioUpdateManyWithWhereWithoutGanhadorInput = {
    where: SorteioScalarWhereInput
    data: XOR<SorteioUpdateManyMutationInput, SorteioUncheckedUpdateManyWithoutGanhadorInput>
  }

  export type SorteioScalarWhereInput = {
    AND?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
    OR?: SorteioScalarWhereInput[]
    NOT?: SorteioScalarWhereInput | SorteioScalarWhereInput[]
    id?: IntFilter<"Sorteio"> | number
    premioId?: IntFilter<"Sorteio"> | number
    funcionarioId?: IntFilter<"Sorteio"> | number
    entregue?: BoolFilter<"Sorteio"> | boolean
  }

  export type SorteioCreateWithoutPremioInput = {
    entregue?: boolean
    ganhador: FuncionariosCreateNestedOneWithoutSorteiosInput
  }

  export type SorteioUncheckedCreateWithoutPremioInput = {
    id?: number
    funcionarioId: number
    entregue?: boolean
  }

  export type SorteioCreateOrConnectWithoutPremioInput = {
    where: SorteioWhereUniqueInput
    create: XOR<SorteioCreateWithoutPremioInput, SorteioUncheckedCreateWithoutPremioInput>
  }

  export type SorteioCreateManyPremioInputEnvelope = {
    data: SorteioCreateManyPremioInput | SorteioCreateManyPremioInput[]
    skipDuplicates?: boolean
  }

  export type SorteioUpsertWithWhereUniqueWithoutPremioInput = {
    where: SorteioWhereUniqueInput
    update: XOR<SorteioUpdateWithoutPremioInput, SorteioUncheckedUpdateWithoutPremioInput>
    create: XOR<SorteioCreateWithoutPremioInput, SorteioUncheckedCreateWithoutPremioInput>
  }

  export type SorteioUpdateWithWhereUniqueWithoutPremioInput = {
    where: SorteioWhereUniqueInput
    data: XOR<SorteioUpdateWithoutPremioInput, SorteioUncheckedUpdateWithoutPremioInput>
  }

  export type SorteioUpdateManyWithWhereWithoutPremioInput = {
    where: SorteioScalarWhereInput
    data: XOR<SorteioUpdateManyMutationInput, SorteioUncheckedUpdateManyWithoutPremioInput>
  }

  export type SorteioCreateManyGanhadorInput = {
    id?: number
    premioId: number
    entregue?: boolean
  }

  export type SorteioUpdateWithoutGanhadorInput = {
    entregue?: BoolFieldUpdateOperationsInput | boolean
    premio?: PremiosUpdateOneRequiredWithoutSorteiosNestedInput
  }

  export type SorteioUncheckedUpdateWithoutGanhadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    premioId?: IntFieldUpdateOperationsInput | number
    entregue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SorteioUncheckedUpdateManyWithoutGanhadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    premioId?: IntFieldUpdateOperationsInput | number
    entregue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SorteioCreateManyPremioInput = {
    id?: number
    funcionarioId: number
    entregue?: boolean
  }

  export type SorteioUpdateWithoutPremioInput = {
    entregue?: BoolFieldUpdateOperationsInput | boolean
    ganhador?: FuncionariosUpdateOneRequiredWithoutSorteiosNestedInput
  }

  export type SorteioUncheckedUpdateWithoutPremioInput = {
    id?: IntFieldUpdateOperationsInput | number
    funcionarioId?: IntFieldUpdateOperationsInput | number
    entregue?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SorteioUncheckedUpdateManyWithoutPremioInput = {
    id?: IntFieldUpdateOperationsInput | number
    funcionarioId?: IntFieldUpdateOperationsInput | number
    entregue?: BoolFieldUpdateOperationsInput | boolean
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