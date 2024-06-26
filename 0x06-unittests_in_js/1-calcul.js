// eslint-disable-next-line consistent-return
function calculateNumber(type, a, b) {
  // eslint-disable-next-line valid-typeof
  if (typeof (type) === String || type === 'SUM' || type === 'SUBTRACT' || type === 'DIVIDE') {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    } if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    } if (type === 'DIVIDE') {
      if (Math.round(b) !== 0) {
        return Math.round(a) / Math.round(b);
      }
      return 'Error';
    }
  } else {
    return 'Error';
  }
}

module.exports = calculateNumber;
