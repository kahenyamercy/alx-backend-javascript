// Function that returns a new ArrayBuffer with an Int8 value at a specific position.

export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}
