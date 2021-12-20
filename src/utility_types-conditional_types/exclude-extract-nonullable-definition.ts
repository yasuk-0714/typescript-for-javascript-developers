export {};

type MyExclude =
  // | (string extends string | number ? never : string)
  // | (string extends string | number ? never : string)
  // | (string extends string | number ? never : string)
  // | never
  // | never
  | DebugType

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>
