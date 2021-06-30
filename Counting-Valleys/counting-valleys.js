'use strict';

function countingValleys(hike) {
  let elevation = 0;
  let inValley = false;
  let valleysTraversed = 0;
  for (const step of hike) {
    if (elevation < 0) inValley = true;
    if (step === 'U') elevation++;
    else if (step === 'D') elevation--;
    // If the hiker is currently in a valley and has returned to sea level then they have traversed a valley and are no longer in a valley.
    if (inValley === true && elevation === 0) {
      valleysTraversed++;
      inValley = false;
    }
  }
  return valleysTraversed;
}

module.exports = { countingValleys };
