export function assert(
  condition: boolean,
  error: (() => any) | string
): asserts condition {
  if (!condition) {
    throw typeof error === "function" ? error() : new Error(error);
  }
}
