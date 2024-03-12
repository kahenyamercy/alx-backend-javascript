// Function that returns a string of all the set values that start with a specific string

export default function cleanSet(set, startString) {
  return Array.from(set).filter((value) => value.startsWith(startString)).join('-');
}
