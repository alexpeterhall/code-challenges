'use strict';

function countingValleys(hike) {
  // Tracks current elevation above or below sea level (0).
  let elevation = 0;
  // Tracks if the hiker is in a valley.
  let inValley = false;
  // Tracks how many valleys the hiker as traversed.
  let traversed = 0;
  // Loops through each element of our iterable string input (array-like).
  for (const step of hike) {
    // If the hiker has proceeded down below sea level set `inValley` to `true`.
    if (elevation < 0) inValley = true;
    // If current `step` is up ("U") increment the elevation, else if it is down ("D") deincrement the elevation.
    if (step === 'U') elevation++;
    else if (step === 'D') elevation--;
    // If the hiker is currently in a valley and has returned to sea level on this step then they have traversed a valley. Increment the `traversed` variable and reset the `inValley` variable to `false`.
    if (inValley === true && elevation === 0) {
      traversed++;
      inValley = false;
    }
  }
  // Return the final answer.
  return traversed;
}

module.exports = {
  countingValleys: countingValleys,
};
