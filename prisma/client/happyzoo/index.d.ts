/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

export type TestPayload<
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> = {
  name: 'Test';
  objects: {};
  scalars: $Extensions.GetResult<
    {
      id: string;
    },
    ExtArgs['result']['test']
  >;
  composites: {};
};

/**
 * Model Test
 *
 */
export type Test = runtime.Types.DefaultSelection<TestPayload>;
export type UserPayload<
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> = {
  name: 'User';
  objects: {
    Profile: ProfilePayload<ExtArgs> | null;
    Tokens: OtpPayload<ExtArgs>[];
  };
  scalars: $Extensions.GetResult<
    {
      id: string;
      email: string;
      password: string;
      status: boolean;
      createdAt: Date;
      updatedAt: Date | null;
    },
    ExtArgs['result']['user']
  >;
  composites: {};
};

/**
 * Model User
 *
 */
export type User = runtime.Types.DefaultSelection<UserPayload>;
export type ProfilePayload<
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> = {
  name: 'Profile';
  objects: {
    User: UserPayload<ExtArgs>;
  };
  scalars: $Extensions.GetResult<
    {
      id: string;
      first_name: string;
      last_name: string;
      gender: GENDERS | null;
      age: number | null;
      bio: string | null;
      user_id: string;
    },
    ExtArgs['result']['profile']
  >;
  composites: {};
};

/**
 * Model Profile
 *
 */
export type Profile = runtime.Types.DefaultSelection<ProfilePayload>;
export type OtpPayload<
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> = {
  name: 'Otp';
  objects: {
    User: UserPayload<ExtArgs>;
  };
  scalars: $Extensions.GetResult<
    {
      id: string;
      otp: string;
      createdAt: Date;
      expiredAt: Date;
      user_id: string;
    },
    ExtArgs['result']['otp']
  >;
  composites: {};
};

/**
 * Model Otp
 *
 */
export type Otp = runtime.Types.DefaultSelection<OtpPayload>;

/**
 * Enums
 */

export const GENDERS: {
  Male: 'Male';
  Female: 'Female';
  Other: 'Other';
};

export type GENDERS = (typeof GENDERS)[keyof typeof GENDERS];

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tests
 * const tests = await prisma.test.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): Promise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): Promise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
   * ```
   */
  get test(): Prisma.TestDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   */
  get profile(): Prisma.ProfileDelegate<ExtArgs>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Otps
   * const otps = await prisma.otp.findMany()
   * ```
   */
  get otp(): Prisma.OtpDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export type Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>;
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>;
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<
    T,
    A,
    F
  >;
  export type Exact<T, W> = $Public.Exact<T, W>;

  /**
   * Prisma Client JS version: 5.0.0
   * Query Engine version: 6b0aef69b7cdfc787f822ecd7cdc76d5f1991584
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

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
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };
  type HasSelect = {
    select: any;
  };
  type HasInclude = {
    include: any;
  };
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S;

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
    PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Test: 'Test';
    User: 'User';
    Profile: 'Profile';
    Otp: 'Otp';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.Args },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    meta: {
      modelProps: 'test' | 'user' | 'profile' | 'otp';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Test: {
        payload: TestPayload<ExtArgs>;
        fields: Prisma.TestFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<TestPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<TestPayload>;
          };
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<TestPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<TestPayload>;
          };
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<TestPayload>[];
          };
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<TestPayload>;
          };
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<TestPayload>;
          };
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<TestPayload>;
          };
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<TestPayload>;
          };
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTest>;
          };
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TestGroupByOutputType>[];
          };
          count: {
            args: Prisma.TestCountArgs<ExtArgs>;
            result: $Utils.Optional<TestCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Profile: {
        payload: ProfilePayload<ExtArgs>;
        fields: Prisma.ProfileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<ProfilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<ProfilePayload>;
          };
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<ProfilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<ProfilePayload>;
          };
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<ProfilePayload>[];
          };
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<ProfilePayload>;
          };
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<ProfilePayload>;
          };
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<ProfilePayload>;
          };
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<ProfilePayload>;
          };
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProfile>;
          };
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>;
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number;
          };
        };
      };
      Otp: {
        payload: OtpPayload<ExtArgs>;
        fields: Prisma.OtpFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<OtpPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<OtpPayload>;
          };
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<OtpPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<OtpPayload>;
          };
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<OtpPayload>[];
          };
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<OtpPayload>;
          };
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<OtpPayload>;
          };
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<OtpPayload>;
          };
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<OtpPayload>;
          };
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOtp>;
          };
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OtpGroupByOutputType>[];
          };
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>;
            result: $Utils.Optional<OtpCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;

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
    log?: Array<LogLevel | LogDefinition>;
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'runCommandRaw'
    | 'findRaw';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Tokens: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    Tokens?: boolean | UserCountOutputTypeCountTokensArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: OtpWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null;
    _min: TestMinAggregateOutputType | null;
    _max: TestMaxAggregateOutputType | null;
  };

  export type TestMinAggregateOutputType = {
    id: string | null;
  };

  export type TestMaxAggregateOutputType = {
    id: string | null;
  };

  export type TestCountAggregateOutputType = {
    id: number;
    _all: number;
  };

  export type TestMinAggregateInputType = {
    id?: true;
  };

  export type TestMaxAggregateInputType = {
    id?: true;
  };

  export type TestCountAggregateInputType = {
    id?: true;
    _all?: true;
  };

  export type TestAggregateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tests
     **/
    _count?: true | TestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TestMaxAggregateInputType;
  };

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
    [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>;
  };

  export type TestGroupByArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: TestWhereInput;
    orderBy?:
      | TestOrderByWithAggregationInput
      | TestOrderByWithAggregationInput[];
    by: TestScalarFieldEnum[] | TestScalarFieldEnum;
    having?: TestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestCountAggregateInputType | true;
    _min?: TestMinAggregateInputType;
    _max?: TestMaxAggregateInputType;
  };

  export type TestGroupByOutputType = {
    id: string;
    _count: TestCountAggregateOutputType | null;
    _min: TestMinAggregateOutputType | null;
    _max: TestMaxAggregateOutputType | null;
  };

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TestGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TestGroupByOutputType[P]>
          : GetScalarType<T[P], TestGroupByOutputType[P]>;
      }
    >
  >;

  export type TestSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
    },
    ExtArgs['result']['test']
  >;

  export type TestSelectScalar = {
    id?: boolean;
  };

  type TestGetPayload<S extends boolean | null | undefined | TestArgs> =
    $Types.GetResult<TestPayload, S>;

  type TestCountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = Omit<TestFindManyArgs, 'select' | 'include'> & {
    select?: TestCountAggregateInputType | true;
  };

  export interface TestDelegate<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Test'];
      meta: { name: 'Test' };
    };
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends TestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>,
    ): Prisma__TestClient<
      $Types.GetResult<TestPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Test that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TestClient<
      $Types.GetResult<TestPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends TestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>,
    ): Prisma__TestClient<
      $Types.GetResult<TestPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TestClient<
      $Types.GetResult<TestPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     *
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends TestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<TestPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     *
     **/
    create<T extends TestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TestCreateArgs<ExtArgs>>,
    ): Prisma__TestClient<
      $Types.GetResult<TestPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Tests.
     *     @param {TestCreateManyArgs} args - Arguments to create many Tests.
     *     @example
     *     // Create many Tests
     *     const test = await prisma.test.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends TestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     *
     **/
    delete<T extends TestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TestDeleteArgs<ExtArgs>>,
    ): Prisma__TestClient<
      $Types.GetResult<TestPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends TestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpdateArgs<ExtArgs>>,
    ): Prisma__TestClient<
      $Types.GetResult<TestPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends TestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends TestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     **/
    upsert<T extends TestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpsertArgs<ExtArgs>>,
    ): Prisma__TestClient<
      $Types.GetResult<TestPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
     **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(
      args: Subset<T, TestAggregateArgs>,
    ): Prisma.PrismaPromise<GetTestAggregateType<T>>;

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTestGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Test model
     */
    readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  /**
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<'Test', 'String'>;
  }

  // Custom InputTypes

  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput;
  };

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput;
  };

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[];
  };

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[];
  };

  /**
   * Test findMany
   */
  export type TestFindManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tests.
     */
    skip?: number;
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[];
  };

  /**
   * Test create
   */
  export type TestCreateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
    /**
     * The data needed to create a Test.
     */
    data?: XOR<TestCreateInput, TestUncheckedCreateInput>;
  };

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Test update
   */
  export type TestUpdateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>;
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput;
  };

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>;
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput;
  };

  /**
   * Test upsert
   */
  export type TestUpsertArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput;
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>;
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>;
  };

  /**
   * Test delete
   */
  export type TestDeleteArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput;
  };

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput;
  };

  /**
   * Test without action
   */
  export type TestArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      Profile?: boolean | User$ProfileArgs<ExtArgs>;
      Tokens?: boolean | User$TokensArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserInclude<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    Profile?: boolean | User$ProfileArgs<ExtArgs>;
    Tokens?: boolean | User$TokensArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>;
  };

  type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    $Types.GetResult<UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
     **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

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
     **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

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
     **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'findMany'>
    >;

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
     **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

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
     **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

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
     **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

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
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export class Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    Profile<T extends User$ProfileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$ProfileArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'findUnique'> | Null,
      never,
      ExtArgs
    >;

    Tokens<T extends User$TokensArgs<ExtArgs> = {}>(
      args?: Subset<T, User$TokensArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'findMany'> | Null
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly status: FieldRef<'User', 'Boolean'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
  };

  /**
   * User.Profile
   */
  export type User$ProfileArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    where?: ProfileWhereInput;
  };

  /**
   * User.Tokens
   */
  export type User$TokensArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    where?: OtpWhereInput;
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[];
    cursor?: OtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _avg: ProfileAvgAggregateOutputType | null;
    _sum: ProfileSumAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  export type ProfileAvgAggregateOutputType = {
    age: number | null;
  };

  export type ProfileSumAggregateOutputType = {
    age: number | null;
  };

  export type ProfileMinAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    gender: GENDERS | null;
    age: number | null;
    bio: string | null;
    user_id: string | null;
  };

  export type ProfileMaxAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    gender: GENDERS | null;
    age: number | null;
    bio: string | null;
    user_id: string | null;
  };

  export type ProfileCountAggregateOutputType = {
    id: number;
    first_name: number;
    last_name: number;
    gender: number;
    age: number;
    bio: number;
    user_id: number;
    _all: number;
  };

  export type ProfileAvgAggregateInputType = {
    age?: true;
  };

  export type ProfileSumAggregateInputType = {
    age?: true;
  };

  export type ProfileMinAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    gender?: true;
    age?: true;
    bio?: true;
    user_id?: true;
  };

  export type ProfileMaxAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    gender?: true;
    age?: true;
    bio?: true;
    user_id?: true;
  };

  export type ProfileCountAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    gender?: true;
    age?: true;
    bio?: true;
    user_id?: true;
    _all?: true;
  };

  export type ProfileAggregateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Profiles
     **/
    _count?: true | ProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProfileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProfileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProfileMaxAggregateInputType;
  };

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>;
  };

  export type ProfileGroupByArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: ProfileWhereInput;
    orderBy?:
      | ProfileOrderByWithAggregationInput
      | ProfileOrderByWithAggregationInput[];
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum;
    having?: ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _avg?: ProfileAvgAggregateInputType;
    _sum?: ProfileSumAggregateInputType;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
  };

  export type ProfileGroupByOutputType = {
    id: string;
    first_name: string;
    last_name: string;
    gender: GENDERS | null;
    age: number | null;
    bio: string | null;
    user_id: string;
    _count: ProfileCountAggregateOutputType | null;
    _avg: ProfileAvgAggregateOutputType | null;
    _sum: ProfileSumAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProfileGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProfileGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type ProfileSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      gender?: boolean;
      age?: boolean;
      bio?: boolean;
      user_id?: boolean;
      User?: boolean | UserArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectScalar = {
    id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    gender?: boolean;
    age?: boolean;
    bio?: boolean;
    user_id?: boolean;
  };

  export type ProfileInclude<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserArgs<ExtArgs>;
  };

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileArgs> =
    $Types.GetResult<ProfilePayload, S>;

  type ProfileCountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = Omit<ProfileFindManyArgs, 'select' | 'include'> & {
    select?: ProfileCountAggregateInputType | true;
  };

  export interface ProfileDelegate<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
      meta: { name: 'Profile' };
    };
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ProfileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Profile that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ProfileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     *
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     *
     **/
    create<T extends ProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Profiles.
     *     @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     *
     **/
    delete<T extends ProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     **/
    upsert<T extends ProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Types.GetResult<ProfilePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
     **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(
      args: Subset<T, ProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetProfileAggregateType<T>>;

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Profile model
     */
    readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProfileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    User<T extends UserArgs<ExtArgs> = {}>(
      args?: Subset<T, UserArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null,
      never,
      ExtArgs
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<'Profile', 'String'>;
    readonly first_name: FieldRef<'Profile', 'String'>;
    readonly last_name: FieldRef<'Profile', 'String'>;
    readonly gender: FieldRef<'Profile', 'GENDERS'>;
    readonly age: FieldRef<'Profile', 'Int'>;
    readonly bio: FieldRef<'Profile', 'String'>;
    readonly user_id: FieldRef<'Profile', 'String'>;
  }

  // Custom InputTypes

  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * Profile create
   */
  export type ProfileCreateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
  };

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput;
  };

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput;
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
  };

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput;
  };

  /**
   * Profile without action
   */
  export type ProfileArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProfileInclude<ExtArgs> | null;
  };

  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null;
    _min: OtpMinAggregateOutputType | null;
    _max: OtpMaxAggregateOutputType | null;
  };

  export type OtpMinAggregateOutputType = {
    id: string | null;
    otp: string | null;
    createdAt: Date | null;
    expiredAt: Date | null;
    user_id: string | null;
  };

  export type OtpMaxAggregateOutputType = {
    id: string | null;
    otp: string | null;
    createdAt: Date | null;
    expiredAt: Date | null;
    user_id: string | null;
  };

  export type OtpCountAggregateOutputType = {
    id: number;
    otp: number;
    createdAt: number;
    expiredAt: number;
    user_id: number;
    _all: number;
  };

  export type OtpMinAggregateInputType = {
    id?: true;
    otp?: true;
    createdAt?: true;
    expiredAt?: true;
    user_id?: true;
  };

  export type OtpMaxAggregateInputType = {
    id?: true;
    otp?: true;
    createdAt?: true;
    expiredAt?: true;
    user_id?: true;
  };

  export type OtpCountAggregateInputType = {
    id?: true;
    otp?: true;
    createdAt?: true;
    expiredAt?: true;
    user_id?: true;
    _all?: true;
  };

  export type OtpAggregateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Otps
     **/
    _count?: true | OtpCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OtpMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OtpMaxAggregateInputType;
  };

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
    [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>;
  };

  export type OtpGroupByArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    where?: OtpWhereInput;
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[];
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum;
    having?: OtpScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpCountAggregateInputType | true;
    _min?: OtpMinAggregateInputType;
    _max?: OtpMaxAggregateInputType;
  };

  export type OtpGroupByOutputType = {
    id: string;
    otp: string;
    createdAt: Date;
    expiredAt: Date;
    user_id: string;
    _count: OtpCountAggregateOutputType | null;
    _min: OtpMinAggregateOutputType | null;
    _max: OtpMaxAggregateOutputType | null;
  };

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OtpGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
          : GetScalarType<T[P], OtpGroupByOutputType[P]>;
      }
    >
  >;

  export type OtpSelect<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      otp?: boolean;
      createdAt?: boolean;
      expiredAt?: boolean;
      user_id?: boolean;
      User?: boolean | UserArgs<ExtArgs>;
    },
    ExtArgs['result']['otp']
  >;

  export type OtpSelectScalar = {
    id?: boolean;
    otp?: boolean;
    createdAt?: boolean;
    expiredAt?: boolean;
    user_id?: boolean;
  };

  export type OtpInclude<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    User?: boolean | UserArgs<ExtArgs>;
  };

  type OtpGetPayload<S extends boolean | null | undefined | OtpArgs> =
    $Types.GetResult<OtpPayload, S>;

  type OtpCountArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = Omit<OtpFindManyArgs, 'select' | 'include'> & {
    select?: OtpCountAggregateInputType | true;
  };

  export interface OtpDelegate<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Otp'];
      meta: { name: 'Otp' };
    };
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends OtpFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Otp that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends OtpFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     *
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends OtpFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'findMany'>
    >;

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     *
     **/
    create<T extends OtpCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OtpCreateArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Otps.
     *     @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     *     @example
     *     // Create many Otps
     *     const otp = await prisma.otp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends OtpCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     *
     **/
    delete<T extends OtpDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends OtpUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends OtpDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends OtpUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     **/
    upsert<T extends OtpUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>,
    ): Prisma__OtpClient<
      $Types.GetResult<OtpPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
     **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(
      args: Subset<T, OtpAggregateArgs>,
    ): Prisma.PrismaPromise<GetOtpAggregateType<T>>;

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetOtpGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Otp model
     */
    readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OtpClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > implements Prisma.PrismaPromise<T>
  {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    User<T extends UserArgs<ExtArgs> = {}>(
      args?: Subset<T, UserArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null,
      never,
      ExtArgs
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<'Otp', 'String'>;
    readonly otp: FieldRef<'Otp', 'String'>;
    readonly createdAt: FieldRef<'Otp', 'DateTime'>;
    readonly expiredAt: FieldRef<'Otp', 'DateTime'>;
    readonly user_id: FieldRef<'Otp', 'String'>;
  }

  // Custom InputTypes

  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput;
  };

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput;
  };

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[];
  };

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[];
  };

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Otps.
     */
    skip?: number;
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[];
  };

  /**
   * Otp create
   */
  export type OtpCreateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>;
  };

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Otp update
   */
  export type OtpUpdateArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>;
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput;
  };

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>;
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput;
  };

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput;
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>;
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>;
  };

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput;
  };

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput;
  };

  /**
   * Otp without action
   */
  export type OtpArgs<
    ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const TestScalarFieldEnum: {
    id: 'id';
  };

  export type TestScalarFieldEnum =
    (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password: 'password';
    status: 'status';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ProfileScalarFieldEnum: {
    id: 'id';
    first_name: 'first_name';
    last_name: 'last_name';
    gender: 'gender';
    age: 'age';
    bio: 'bio';
    user_id: 'user_id';
  };

  export type ProfileScalarFieldEnum =
    (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];

  export const OtpScalarFieldEnum: {
    id: 'id';
    otp: 'otp';
    createdAt: 'createdAt';
    expiredAt: 'expiredAt';
    user_id: 'user_id';
  };

  export type OtpScalarFieldEnum =
    (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'GENDERS'
   */
  export type EnumGENDERSFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'GENDERS'
  >;

  /**
   * Reference to a field of type 'GENDERS[]'
   */
  export type ListEnumGENDERSFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'GENDERS[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[];
    OR?: TestWhereInput[];
    NOT?: TestWhereInput | TestWhereInput[];
    id?: StringFilter<'Test'> | string;
  };

  export type TestOrderByWithRelationInput = {
    id?: SortOrder;
  };

  export type TestWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TestWhereInput | TestWhereInput[];
      OR?: TestWhereInput[];
      NOT?: TestWhereInput | TestWhereInput[];
    },
    'id'
  >;

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder;
    _count?: TestCountOrderByAggregateInput;
    _max?: TestMaxOrderByAggregateInput;
    _min?: TestMinOrderByAggregateInput;
  };

  export type TestScalarWhereWithAggregatesInput = {
    AND?:
      | TestScalarWhereWithAggregatesInput
      | TestScalarWhereWithAggregatesInput[];
    OR?: TestScalarWhereWithAggregatesInput[];
    NOT?:
      | TestScalarWhereWithAggregatesInput
      | TestScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Test'> | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    status?: BoolFilter<'User'> | boolean;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeNullableFilter<'User'> | Date | string | null;
    Profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null;
    Tokens?: OtpListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    Profile?: ProfileOrderByWithRelationInput;
    Tokens?: OtpOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<'User'> | string;
      status?: BoolFilter<'User'> | boolean;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeNullableFilter<'User'> | Date | string | null;
      Profile?: XOR<ProfileNullableRelationFilter, ProfileWhereInput> | null;
      Tokens?: OtpListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrderInput | SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    status?: BoolWithAggregatesFilter<'User'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?:
      | DateTimeNullableWithAggregatesFilter<'User'>
      | Date
      | string
      | null;
  };

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[];
    OR?: ProfileWhereInput[];
    NOT?: ProfileWhereInput | ProfileWhereInput[];
    id?: StringFilter<'Profile'> | string;
    first_name?: StringFilter<'Profile'> | string;
    last_name?: StringFilter<'Profile'> | string;
    gender?: EnumGENDERSNullableFilter<'Profile'> | GENDERS | null;
    age?: IntNullableFilter<'Profile'> | number | null;
    bio?: StringNullableFilter<'Profile'> | string | null;
    user_id?: StringFilter<'Profile'> | string;
    User?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    gender?: SortOrderInput | SortOrder;
    age?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    User?: UserOrderByWithRelationInput;
  };

  export type ProfileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      user_id?: string;
      AND?: ProfileWhereInput | ProfileWhereInput[];
      OR?: ProfileWhereInput[];
      NOT?: ProfileWhereInput | ProfileWhereInput[];
      first_name?: StringFilter<'Profile'> | string;
      last_name?: StringFilter<'Profile'> | string;
      gender?: EnumGENDERSNullableFilter<'Profile'> | GENDERS | null;
      age?: IntNullableFilter<'Profile'> | number | null;
      bio?: StringNullableFilter<'Profile'> | string | null;
      User?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'user_id'
  >;

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    gender?: SortOrderInput | SortOrder;
    age?: SortOrderInput | SortOrder;
    bio?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    _count?: ProfileCountOrderByAggregateInput;
    _avg?: ProfileAvgOrderByAggregateInput;
    _max?: ProfileMaxOrderByAggregateInput;
    _min?: ProfileMinOrderByAggregateInput;
    _sum?: ProfileSumOrderByAggregateInput;
  };

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    OR?: ProfileScalarWhereWithAggregatesInput[];
    NOT?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Profile'> | string;
    first_name?: StringWithAggregatesFilter<'Profile'> | string;
    last_name?: StringWithAggregatesFilter<'Profile'> | string;
    gender?:
      | EnumGENDERSNullableWithAggregatesFilter<'Profile'>
      | GENDERS
      | null;
    age?: IntNullableWithAggregatesFilter<'Profile'> | number | null;
    bio?: StringNullableWithAggregatesFilter<'Profile'> | string | null;
    user_id?: StringWithAggregatesFilter<'Profile'> | string;
  };

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[];
    OR?: OtpWhereInput[];
    NOT?: OtpWhereInput | OtpWhereInput[];
    id?: StringFilter<'Otp'> | string;
    otp?: StringFilter<'Otp'> | string;
    createdAt?: DateTimeFilter<'Otp'> | Date | string;
    expiredAt?: DateTimeFilter<'Otp'> | Date | string;
    user_id?: StringFilter<'Otp'> | string;
    User?: XOR<UserRelationFilter, UserWhereInput>;
  };

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder;
    otp?: SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
    user_id?: SortOrder;
    User?: UserOrderByWithRelationInput;
  };

  export type OtpWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      user_id?: string;
      AND?: OtpWhereInput | OtpWhereInput[];
      OR?: OtpWhereInput[];
      NOT?: OtpWhereInput | OtpWhereInput[];
      otp?: StringFilter<'Otp'> | string;
      createdAt?: DateTimeFilter<'Otp'> | Date | string;
      expiredAt?: DateTimeFilter<'Otp'> | Date | string;
      User?: XOR<UserRelationFilter, UserWhereInput>;
    },
    'id' | 'user_id'
  >;

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder;
    otp?: SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
    user_id?: SortOrder;
    _count?: OtpCountOrderByAggregateInput;
    _max?: OtpMaxOrderByAggregateInput;
    _min?: OtpMinOrderByAggregateInput;
  };

  export type OtpScalarWhereWithAggregatesInput = {
    AND?:
      | OtpScalarWhereWithAggregatesInput
      | OtpScalarWhereWithAggregatesInput[];
    OR?: OtpScalarWhereWithAggregatesInput[];
    NOT?:
      | OtpScalarWhereWithAggregatesInput
      | OtpScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Otp'> | string;
    otp?: StringWithAggregatesFilter<'Otp'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Otp'> | Date | string;
    expiredAt?: DateTimeWithAggregatesFilter<'Otp'> | Date | string;
    user_id?: StringWithAggregatesFilter<'Otp'> | string;
  };

  export type TestCreateInput = {
    id?: string;
  };

  export type TestUncheckedCreateInput = {
    id?: string;
  };

  export type TestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type TestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type TestCreateManyInput = {
    id?: string;
  };

  export type TestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type TestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
  };

  export type UserCreateInput = {
    id?: string;
    email?: string;
    password?: string;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    Profile?: ProfileCreateNestedOneWithoutUserInput;
    Tokens?: OtpCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email?: string;
    password?: string;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    Tokens?: OtpUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Profile?: ProfileUpdateOneWithoutUserNestedInput;
    Tokens?: OtpUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    Tokens?: OtpUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email?: string;
    password?: string;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
  };

  export type ProfileCreateInput = {
    id?: string;
    first_name?: string;
    last_name?: string;
    gender?: GENDERS | null;
    age?: number | null;
    bio?: string | null;
    User: UserCreateNestedOneWithoutProfileInput;
  };

  export type ProfileUncheckedCreateInput = {
    id?: string;
    first_name?: string;
    last_name?: string;
    gender?: GENDERS | null;
    age?: number | null;
    bio?: string | null;
    user_id: string;
  };

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableEnumGENDERSFieldUpdateOperationsInput | GENDERS | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    User?: UserUpdateOneRequiredWithoutProfileNestedInput;
  };

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableEnumGENDERSFieldUpdateOperationsInput | GENDERS | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
  };

  export type ProfileCreateManyInput = {
    id?: string;
    first_name?: string;
    last_name?: string;
    gender?: GENDERS | null;
    age?: number | null;
    bio?: string | null;
    user_id: string;
  };

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableEnumGENDERSFieldUpdateOperationsInput | GENDERS | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableEnumGENDERSFieldUpdateOperationsInput | GENDERS | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
  };

  export type OtpCreateInput = {
    id?: string;
    otp?: string;
    createdAt?: Date | string;
    expiredAt?: Date | string;
    User: UserCreateNestedOneWithoutTokensInput;
  };

  export type OtpUncheckedCreateInput = {
    id?: string;
    otp?: string;
    createdAt?: Date | string;
    expiredAt?: Date | string;
    user_id: string;
  };

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    otp?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    User?: UserUpdateOneRequiredWithoutTokensNestedInput;
  };

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    otp?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
  };

  export type OtpCreateManyInput = {
    id?: string;
    otp?: string;
    createdAt?: Date | string;
    expiredAt?: Date | string;
    user_id: string;
  };

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    otp?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    otp?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type ProfileNullableRelationFilter = {
    is?: ProfileWhereInput | null;
    isNot?: ProfileWhereInput | null;
  };

  export type OtpListRelationFilter = {
    every?: OtpWhereInput;
    some?: OtpWhereInput;
    none?: OtpWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type OtpOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type EnumGENDERSNullableFilter<$PrismaModel = never> = {
    equals?: GENDERS | EnumGENDERSFieldRefInput<$PrismaModel> | null;
    in?: GENDERS[] | ListEnumGENDERSFieldRefInput<$PrismaModel> | null;
    notIn?: GENDERS[] | ListEnumGENDERSFieldRefInput<$PrismaModel> | null;
    not?: NestedEnumGENDERSNullableFilter<$PrismaModel> | GENDERS | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    gender?: SortOrder;
    age?: SortOrder;
    bio?: SortOrder;
    user_id?: SortOrder;
  };

  export type ProfileAvgOrderByAggregateInput = {
    age?: SortOrder;
  };

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    gender?: SortOrder;
    age?: SortOrder;
    bio?: SortOrder;
    user_id?: SortOrder;
  };

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    gender?: SortOrder;
    age?: SortOrder;
    bio?: SortOrder;
    user_id?: SortOrder;
  };

  export type ProfileSumOrderByAggregateInput = {
    age?: SortOrder;
  };

  export type EnumGENDERSNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: GENDERS | EnumGENDERSFieldRefInput<$PrismaModel> | null;
    in?: GENDERS[] | ListEnumGENDERSFieldRefInput<$PrismaModel> | null;
    notIn?: GENDERS[] | ListEnumGENDERSFieldRefInput<$PrismaModel> | null;
    not?:
      | NestedEnumGENDERSNullableWithAggregatesFilter<$PrismaModel>
      | GENDERS
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumGENDERSNullableFilter<$PrismaModel>;
    _max?: NestedEnumGENDERSNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder;
    otp?: SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
    user_id?: SortOrder;
  };

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder;
    otp?: SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
    user_id?: SortOrder;
  };

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder;
    otp?: SortOrder;
    createdAt?: SortOrder;
    expiredAt?: SortOrder;
    user_id?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type OtpCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
      | OtpCreateWithoutUserInput[]
      | OtpUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OtpCreateOrConnectWithoutUserInput
      | OtpCreateOrConnectWithoutUserInput[];
    createMany?: OtpCreateManyUserInputEnvelope;
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
  };

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type OtpUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
      | OtpCreateWithoutUserInput[]
      | OtpUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OtpCreateOrConnectWithoutUserInput
      | OtpCreateOrConnectWithoutUserInput[];
    createMany?: OtpCreateManyUserInputEnvelope;
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    upsert?: ProfileUpsertWithoutUserInput;
    disconnect?: ProfileWhereInput | boolean;
    delete?: ProfileWhereInput | boolean;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutUserInput,
        ProfileUpdateWithoutUserInput
      >,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type OtpUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
      | OtpCreateWithoutUserInput[]
      | OtpUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OtpCreateOrConnectWithoutUserInput
      | OtpCreateOrConnectWithoutUserInput[];
    upsert?:
      | OtpUpsertWithWhereUniqueWithoutUserInput
      | OtpUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OtpCreateManyUserInputEnvelope;
    set?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
    disconnect?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
    delete?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
    update?:
      | OtpUpdateWithWhereUniqueWithoutUserInput
      | OtpUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OtpUpdateManyWithWhereWithoutUserInput
      | OtpUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: OtpScalarWhereInput | OtpScalarWhereInput[];
  };

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    upsert?: ProfileUpsertWithoutUserInput;
    disconnect?: ProfileWhereInput | boolean;
    delete?: ProfileWhereInput | boolean;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutUserInput,
        ProfileUpdateWithoutUserInput
      >,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type OtpUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
      | OtpCreateWithoutUserInput[]
      | OtpUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OtpCreateOrConnectWithoutUserInput
      | OtpCreateOrConnectWithoutUserInput[];
    upsert?:
      | OtpUpsertWithWhereUniqueWithoutUserInput
      | OtpUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OtpCreateManyUserInputEnvelope;
    set?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
    disconnect?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
    delete?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[];
    update?:
      | OtpUpdateWithWhereUniqueWithoutUserInput
      | OtpUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OtpUpdateManyWithWhereWithoutUserInput
      | OtpUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: OtpScalarWhereInput | OtpScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    connect?: UserWhereUniqueInput;
  };

  export type NullableEnumGENDERSFieldUpdateOperationsInput = {
    set?: GENDERS | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    upsert?: UserUpsertWithoutProfileInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProfileInput,
        UserUpdateWithoutProfileInput
      >,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<
      UserCreateWithoutTokensInput,
      UserUncheckedCreateWithoutTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<
      UserCreateWithoutTokensInput,
      UserUncheckedCreateWithoutTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput;
    upsert?: UserUpsertWithoutTokensInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutTokensInput,
        UserUpdateWithoutTokensInput
      >,
      UserUncheckedUpdateWithoutTokensInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedEnumGENDERSNullableFilter<$PrismaModel = never> = {
    equals?: GENDERS | EnumGENDERSFieldRefInput<$PrismaModel> | null;
    in?: GENDERS[] | ListEnumGENDERSFieldRefInput<$PrismaModel> | null;
    notIn?: GENDERS[] | ListEnumGENDERSFieldRefInput<$PrismaModel> | null;
    not?: NestedEnumGENDERSNullableFilter<$PrismaModel> | GENDERS | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedEnumGENDERSNullableWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?: GENDERS | EnumGENDERSFieldRefInput<$PrismaModel> | null;
    in?: GENDERS[] | ListEnumGENDERSFieldRefInput<$PrismaModel> | null;
    notIn?: GENDERS[] | ListEnumGENDERSFieldRefInput<$PrismaModel> | null;
    not?:
      | NestedEnumGENDERSNullableWithAggregatesFilter<$PrismaModel>
      | GENDERS
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedEnumGENDERSNullableFilter<$PrismaModel>;
    _max?: NestedEnumGENDERSNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type ProfileCreateWithoutUserInput = {
    id?: string;
    first_name?: string;
    last_name?: string;
    gender?: GENDERS | null;
    age?: number | null;
    bio?: string | null;
  };

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    first_name?: string;
    last_name?: string;
    gender?: GENDERS | null;
    age?: number | null;
    bio?: string | null;
  };

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput;
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
  };

  export type OtpCreateWithoutUserInput = {
    id?: string;
    otp?: string;
    createdAt?: Date | string;
    expiredAt?: Date | string;
  };

  export type OtpUncheckedCreateWithoutUserInput = {
    id?: string;
    otp?: string;
    createdAt?: Date | string;
    expiredAt?: Date | string;
  };

  export type OtpCreateOrConnectWithoutUserInput = {
    where: OtpWhereUniqueInput;
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>;
  };

  export type OtpCreateManyUserInputEnvelope = {
    data: OtpCreateManyUserInput | OtpCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    where?: ProfileWhereInput;
  };

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput;
    data: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableEnumGENDERSFieldUpdateOperationsInput | GENDERS | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    gender?: NullableEnumGENDERSFieldUpdateOperationsInput | GENDERS | null;
    age?: NullableIntFieldUpdateOperationsInput | number | null;
    bio?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type OtpUpsertWithWhereUniqueWithoutUserInput = {
    where: OtpWhereUniqueInput;
    update: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>;
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>;
  };

  export type OtpUpdateWithWhereUniqueWithoutUserInput = {
    where: OtpWhereUniqueInput;
    data: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>;
  };

  export type OtpUpdateManyWithWhereWithoutUserInput = {
    where: OtpScalarWhereInput;
    data: XOR<
      OtpUpdateManyMutationInput,
      OtpUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type OtpScalarWhereInput = {
    AND?: OtpScalarWhereInput | OtpScalarWhereInput[];
    OR?: OtpScalarWhereInput[];
    NOT?: OtpScalarWhereInput | OtpScalarWhereInput[];
    id?: StringFilter<'Otp'> | string;
    otp?: StringFilter<'Otp'> | string;
    createdAt?: DateTimeFilter<'Otp'> | Date | string;
    expiredAt?: DateTimeFilter<'Otp'> | Date | string;
    user_id?: StringFilter<'Otp'> | string;
  };

  export type UserCreateWithoutProfileInput = {
    id?: string;
    email?: string;
    password?: string;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    Tokens?: OtpCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string;
    email?: string;
    password?: string;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    Tokens?: OtpUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
  };

  export type UserUpsertWithoutProfileInput = {
    update: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Tokens?: OtpUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Tokens?: OtpUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutTokensInput = {
    id?: string;
    email?: string;
    password?: string;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    Profile?: ProfileCreateNestedOneWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string;
    email?: string;
    password?: string;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string | null;
    Profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTokensInput,
      UserUncheckedCreateWithoutTokensInput
    >;
  };

  export type UserUpsertWithoutTokensInput = {
    update: XOR<
      UserUpdateWithoutTokensInput,
      UserUncheckedUpdateWithoutTokensInput
    >;
    create: XOR<
      UserCreateWithoutTokensInput,
      UserUncheckedCreateWithoutTokensInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutTokensInput,
      UserUncheckedUpdateWithoutTokensInput
    >;
  };

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Profile?: ProfileUpdateOneWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    status?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?:
      | NullableDateTimeFieldUpdateOperationsInput
      | Date
      | string
      | null;
    Profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
  };

  export type OtpCreateManyUserInput = {
    id?: string;
    otp?: string;
    createdAt?: Date | string;
    expiredAt?: Date | string;
  };

  export type OtpUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    otp?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    otp?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OtpUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    otp?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
