// 2. Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

const fillMatrix=(matrix)=>{
    let stRow=0;
    let stCol=0;
    let endRow=matrix.length-1;
    let endCol=matrix[0].length-1;

    let cnt=1;
    while(stRow <= endRow && stCol <= endCol){
        for(let i=0;i<=endCol;i++){
            matrix[stRow][i]=cnt;
            cnt++;
        }
        stRow++;
        for(let i=stRow;i<endCol;i++){
            matrix[i][endCol]=cnt;
            cnt++;
        }
        endCol--;
        for(let i=endCol;i>=stCol;i--){
            matrix[endRow][i]=cnt;
            cnt++;
        }
        endRow--;
        for(let i=endRow;i>=stRow;i--){
            matrix[i][stCol]=cnt;
            cnt++;
        }
        stCol++;
    }
   return matrix;
}

let m = 3, n = 4;  
let matrix = [];

for (let i = 0; i < m; i++) {
    matrix[i] = [];  
    for (let j = 0; j < n; j++) {
        matrix[i][j] = 0; 
    }
}
 matrix=fillMatrix(matrix);
console.log(matrix);

