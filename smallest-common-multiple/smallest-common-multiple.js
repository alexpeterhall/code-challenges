function smallestCommon(arr) {
  const [smallMultiple, largeMultiple] = [...arr.sort((a, b) => a - b)];
  let resultFound = false;
  let result = largeMultiple;
  function isCommon(x) {
    if (x === smallMultiple) {
      resultFound = true;
      return;
    } else if (result % x !== 0) {
      result += largeMultiple;
      return;
    } else {
      return isCommon(x - 1);
    }
  }
  while (resultFound === false) {
    if (result % smallMultiple === 0) {
      isCommon(largeMultiple - 1);
    } else {
      result += largeMultiple;
    }
  }
  return result;
}

module.exports = { smallestCommon };
