
exports.min = function min (array) {
  if (!arguments.length) return 0;
  if (Array.isArray(array) && !array.length) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
  if (!arguments.length) return 0;
  if (Array.isArray(array) && !array.length) return 0;
  return Math.max(...array);
}
exports.avg = function avg (array) {
  if (!arguments.length) return 0;
  if (Array.isArray(array) && !array.length) return 0;
    return array.reduce((acc, c) => acc + c, 0)/array.length;
}
