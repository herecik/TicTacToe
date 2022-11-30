var total = 4;
var cnt = 0;
var cnt2 = 0;
var arr = [[1, 2, 3, 4]
          ,[5, 6, 7, 8]
          ,[9, 10, 11, 12]
          ,[13, 14, 15, 16]];
var test_arr = [];

for(let t = 0; t <= 2 * (total - 1); t++){
    for(let x = 0; x <= total; x++){
            var y = t - x;
            if(x < 0 || x >= total){
                test_arr.push("ok");
            }
            else{
                test_arr.push(arr[x][y]);
            }
            
            /*if(x == t){
                win_cnt = 0;
            }
            if(tiles[x][y] == 1){
                win_cnt++;
                document.getElementById("test2").innerHTML = x;
                if(win_cnt == w_tiles){
                    return 1;
                }
            }
            
            /*else if(tiles[x][y] == 2){
                win_cnt = 0;
            }
            /*else if(tiles[x][y] == 2 || tiles[x][y] == null){
                win_cnt = 0;
            }  /*
            
            if(tiles[x][y] == 2){
                win2_cnt++;
                if(win2_cnt == w_tiles){
                    return 2;
                }
            }
            else if(tiles[x][y] == 1 || tiles[x][y] == null){
                win2_cnt = 0;
            }  */
        


        test_arr.push('|');
    }
    
}

document.getElementById("test2").innerHTML = test_arr;
/* proc nulujme pojistku, jaký význam z bussines hledska 
čistě promočních položek mazat face i mimo*/