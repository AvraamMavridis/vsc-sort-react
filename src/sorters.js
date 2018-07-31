/**
 * Sort the properties by name
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {Boolean}
 */
function sortAlphabetically(a, b){
  return a.key.name > b.key.name;
}

/**
 * Sort by name length
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {Boolean}
 */
function sortByNameLength(a, b){
  return a.key.name.length > b.key.name.length;
}

/**
 * Sort by line length
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {Boolean}
 */
function sortByLineLength(a, b){
  const alength = a.end - a.start;
  const blength = b.end - b.start;
  return alength > blength;
}


module.exports = {
  sortAlphabetically: sortAlphabetically,
  sortByNameLength: sortByNameLength,
  sortByLineLength: sortByLineLength,
}