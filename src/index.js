
// You should implement your task here.

module.exports = function towelSort (matrix) {
  rez = []
  k = 0
  for(m in matrix) {
      if (k == 0) {
          rez = rez.concat(matrix[m])
          k = 1
      }
      else {
          rez = rez.concat(matrix[m].reverse())
          k = 0
      }        
  }
  return rez
}
