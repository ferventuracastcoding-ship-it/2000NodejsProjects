function generateBoard() {

    return [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],

        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],

        [0,6,0,5,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
    ];

}


function isValid(board,row,col,num){

    for(let i=0;i<9;i++){

        if(board[row][i] === num)
            return false;

        if(board[i][col] === num)
            return false;
    }


    let boxRow =
        Math.floor(row/3)*3;

    let boxCol =
        Math.floor(col/3)*3;


    for(let r=0;r<3;r++){

        for(let c=0;c<3;c++){

            if(board[boxRow+r][boxCol+c]===num)
                return false;
        }
    }

    return true;

}


function checkSolution(board){

    for(let r=0;r<9;r++){

        for(let c=0;c<9;c++){

            let value=board[r][c];

            board[r][c]=0;

            if(!isValid(board,r,c,value)){
                board[r][c]=value;
                return false;
            }

            board[r][c]=value;
        }
    }

    return true;
}


module.exports={
    generateBoard,
    isValid,
    checkSolution
};
