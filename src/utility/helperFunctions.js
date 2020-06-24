/**
 * Chops array in chunks
 * @param {array} array 
 * @param {integer} size
 * @returns {array} 
 */
export function chunkArray(array, size) {
  let tempArray = [];

  for (let i = 0; i < array.length; i += size) {
    tempArray.push(array.slice(i, i + size));
  }

  return tempArray;
}