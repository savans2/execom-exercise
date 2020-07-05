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

/**
 * Returns relative time (example: 2 days ago, 1 hour ago, 33minutes ago...);
 * @param {Unix timestamp} createdAt time in miliseconds
 * @returns {string}
 */
export function getRelativeTime(createdAt) {
  const msCurrentTime = Date.now();
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const elapsed = msCurrentTime - createdAt;
  let relativeTime;

  if (elapsed < msPerMinute) {
    let time = Math.floor(elapsed / 1000);
    relativeTime = time === 1 ? `${time} second ago` : `${time} seconds ago`;
  } else if (elapsed < msPerHour) {
    let time = Math.floor(elapsed / msPerMinute);
    relativeTime = time === 1 ? `${time} minute ago` : `${time} minutes ago`;
  } else if (elapsed < msPerDay) {
    let time = Math.floor(elapsed / msPerHour);
    relativeTime = time === 1 ? `${time} hour ago` : `${time} hours ago`;
  } else if (elapsed < msPerMonth) {
    let time = Math.floor(elapsed / msPerDay);
    relativeTime = time === 1 ? `${time} day ago` : `${time} days ago`;
  } else if (elapsed < msPerYear) {
    let time = Math.floor(elapsed / msPerMonth);
    relativeTime = time === 1 ? `${time} year ago` : `${time} years ago`;
  }

  return relativeTime;
}

/**
 * Returns bool depending if element is in viewport.
 * @param {HTMLnode} element 
 * @returns {boolean}
 */
export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.top + rect.height >= 0
  );
}