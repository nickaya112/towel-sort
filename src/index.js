
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (arguments.length === 0) {
    return arr;
  }
  matrix.forEach((element, index) => {
    if (index % 2 === 0) {
      arr.push(...element);
    } else {
      arr.push(...element.reverse());
    }
  });
  return arr;
}
