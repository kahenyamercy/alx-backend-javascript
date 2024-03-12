// Function that returns a string of all the set values that start with a specific string

export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const parts = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .filter((value) => value); // Remove empty strings

  return parts.join('-');
}
