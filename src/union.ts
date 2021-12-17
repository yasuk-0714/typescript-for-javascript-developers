export {};

// 型推論のためnumber型であると推定される
// let value = 1;
// そのためエラーが発生する
// value = 'foo';

// union型とは、 | を使用することによって、複数の型を許容する型指定のやり方
let value: string | number = 1;
value = 'foo';
