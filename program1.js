const getTotalIsles = function (grid) {

const rows =grid.length;
const clos =grid[0].length;
let numberofislands =0;

function distinct_islands(r,c){
    if(r < 0 || r >= rows || c < 0 || c >=cols || grid[r][c]==='w' ) return;

    distinct_islands(r+1,c);
    distinct_islands(r-1,c);
    distinct_islands(r,c+1);
    distinct_islands(r,c-1);
}



};

module.exports = getTotalIsles;