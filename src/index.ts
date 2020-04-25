export type Await<T> = T extends {
  then(resolve?: (value: infer V) => unknown): unknown;
}
  ? V
  : T;
