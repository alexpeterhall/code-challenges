'use strict';

function matchPairs(widgets) {
  if (!Array.isArray(widgets)) return 'Invalid input. Expected an array.';

  let matchedPairs = 0;

  const uniqueWidgetColors = widgets.reduce((uniqueColors, element) => {
    const cleanedElement = cleaned(element);
    if (uniqueColors.indexOf(cleanedElement) === -1) {
      uniqueColors.push(cleanedElement);
    }
    return uniqueColors;
  }, []);

  uniqueWidgetColors.forEach((color) => {
    let matches = 0;
    for (const widget of widgets) {
      if (cleaned(widget) === color) {
        matches++;
      }
    }
    matchedPairs += Math.floor(matches / 2);
  });
  return matchedPairs;
}

function cleaned(element) {
  return typeof element === 'string' ? element.toLowerCase() : Math.floor(element);
}

module.exports = { matchPairs };
