const getTotalIsles = function (grid) {
 if (!grid || grid.length ===0) 
    return 0;
const rows =grid.length;
const clos =grid[0].length;
let numberofislands =0;

const distinct_islands = function (r,c){
    if (r < 0 || r >= rows || c < 0 || c >= clos || grid[r][c]==='w' ) 
        return ;
     grid[r][c]='w';
    distinct_islands(r+1,c);
    distinct_islands(r-1,c);
    distinct_islands(r,c+1);
    distinct_islands(r,c-1);
}
 for (let r=0; r < rows; r++ ){
    for(let c=0; c < clos;c++){
        if (grid[r][c]==='L'){
            numberofislands++;
            distinct_islands(r,c);
        }
    }
 }


return numberofislands;
};

const grid1=[
    ["L","L","L","L","W"],
    ["L","L","W","L","W"],
    ["L","L","W","W","W"],
    ["W","W","W","W","W"],
];
console.log(getTotalIsles(grid1));

const grid2= [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"],
];
console.log(getTotalIsles(grid2));


module.exports = getTotalIsles;

