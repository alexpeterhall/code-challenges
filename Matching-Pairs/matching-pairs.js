'use strict';

function matchPairs(widgets) {
  // Tracks total number of matched pairs for our final result.
  let pairs = 0;
  // Use the array.reduce() method to find only the unique values in the widgets array and return a new array with those unique values and assign it to the `uniqueColors` variable.
  const uniqueColors = widgets.reduce((colors, el) => {
    // If the current element IS NOT in our temporary "colors" accumulator, add it.
    if (colors.indexOf(el) === -1) {
      colors.push(el);
    }
    return colors;
  }, []);
  // For each of our unique color identifiers loop through the full argument array `widgets` and determine how many widgets match that color.
  for (const color of uniqueColors) {
    let matches = 0;
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i] === color) {
        matches++;
      }
    }
    // Divide all matches by 2 to see how many pairs there are. Round down to eliminate any odd matches that can't be paired. Add the number of pairs to our `pairs` variable for our final result.
    pairs += Math.floor(matches / 2);
  }
  // Return the final number of pairs.
  return pairs;
}

module.exports = { matchPairs };
