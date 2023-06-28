/**
 * Implements day function (has to be called with await)
 * @param number in ms
 */
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
