//1  4 12
//2 -5 10
//9  3 8

function returnDiagonal(arr) {
    let n = arr.length - 1
    let rightDiagonal = 0
    let leftDiagonal = 0
    for (let i=0, j = n; i <= n; i++, j--) {
      rightDiagonal = rightDiagonal + arr[i][i]
      leftDiagonal = leftDiagonal+ arr[i][j]
    }
   
    return Math.abs(rightDiagonal-leftDiagonal)
  }
  
  console.log(returnDiagonal([[1,2,3], [1,3,4], [1, 5, 6]]))