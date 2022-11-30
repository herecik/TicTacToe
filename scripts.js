

var counter = 0;
var tiles = [[]];
var player = 1;
const to_win = 5;
var to_win_got = 0;


function get_index_row(element_str){
    var row = element_str.charAt(5);
    return row;
}

function get_index_collum(element_str){
    var collum = element_str.charAt(7);
    return collum;
}

function get_total_tiles(){
    return Math.sqrt(document.getElementsByName('tiles').length);
}

function create_struct(){
    //to_win_got = size;
    
    var total_tiles = get_total_tiles();
    //total_tiles = Math.sqrt(total_tiles);
    var test_arr = [];
   // to_win_got = document.getElementsById()

    for(let i = 0; i < total_tiles; i++){
        test_arr.push(0);
    }
    //alert(test_arr[2]);
    for(let j = 0; j < total_tiles; j++){
        tiles[j] = [test_arr];
    }
    
}

function switch_player(p){
    if(p == 1){
        return 2;
    }
    else{
        return 1;
    }
}

function save_tile(element){
    
    var el = element.id;
   // alert(to_win_got);
    tiles[get_index_row(el)][get_index_collum(el)] = player;
    change_tile(element);
        
    player = switch_player(player);
    
    
}

function change_tile(element){
    //DEBUG
    //alert(tiles);
    if(player == 1){
        element.value = "O";
    }
    else{
        element.value = "X";
    }
}

function vertical_check(w_tiles){
    var total_tiles = get_total_tiles();
    var win_cnt = 0;
    var win2_cnt = 0;
    for(let i = 0; i < total_tiles; i++){
        for(let j = 0; j < total_tiles; j++){
            if(j == 0){
                win_cnt = 0;
                win2_cnt = 0;
            }
            if(tiles[j][i] == 1){
                win_cnt++;
                if(win_cnt == w_tiles){
                    return 1;
                }
            }  
            else if(tiles[j][i] == 2 || tiles[j][i] == null){
                win_cnt = 0;
            }
            if(tiles[j][i] == 2){
                win2_cnt++;
                //alert(win2_cnt);
                if(win2_cnt == w_tiles){
                    return 2;
                }
            }
            else if(tiles[j][i] == 1 || tiles[j][i] == null){
                win2_cnt = 0;
            }
        }      
    }
    return 0;
}

function horyzontal_check(w_tiles){
    var total_tiles = get_total_tiles();
    var win_cnt = 0;
    var win2_cnt = 0;
    for(let i = 0; i < total_tiles; i++){       
        for(let j = 0; j < total_tiles; j++){
            if(j == 0){
                win_cnt = 0;
                win2_cnt = 0;
            }
            if(tiles[i][j] == 1){
                win_cnt++;
                if(win_cnt == w_tiles){
                    return 1;
                }
            }
            else if(tiles[i][j] == 2 || tiles[i][j] == null){
                win_cnt = 0;
            }

            if(tiles[i][j] == 2){               
                win2_cnt++;
                if(win2_cnt == w_tiles){
                    return 2;
                }
            }
            else if(tiles[i][j] == 1 || tiles[i][j] == null){
                win2_cnt = 0;
            }
        }
    }
    return 0;
}

//diagonal left to right
function diagonal_check_l(w_tiles){
    var total_tiles = get_total_tiles();
    var win_cnt = 0;
    var win2_cnt = 0;

    for(let t = 0; t <= 2 * (total_tiles - 1); t++){
        win_cnt = 0;
        for(let x = 0; x <= total_tiles; x++){
            var y = t - x;
            if(y < 0 || y >= total_tiles || x < 0 || x >= total_tiles){
                //skip
            }
            else {
                if(tiles[x][y] == 1){
                    win_cnt++;
                    if(win_cnt == w_tiles){
                        return 1;
                    }
                }
                else if(tiles[x][y] == 2 || tiles[x][y] == null){
                    win_cnt = 0;
                }
                if(tiles[x][y] == 2){
                    win2_cnt++;
                    if(win2_cnt == w_tiles){
                        return 2;
                    }
                }
                else if(tiles[x][y] == 1 || tiles[x][y] == null){
                    win2_cnt = 0;
                }
            }
        }
    }
    return 0;
}
//diagonal rigth ro left 
function diagonal_check_r(){
    return 0;
}

function reset(){
    location.reload();
}

function check_winner(){
    
    var tile_scope;
    
    if(vertical_check(to_win) == 1){
        return 1;
    }
    if(vertical_check(to_win) == 2){
        return 2;
    }
     if(horyzontal_check(to_win) == 1){
        return 1;
    }
    if(horyzontal_check(to_win) == 2){
        return 2;
    }
    if(diagonal_check_l(to_win) == 1){
        return 1;
    }
    if(diagonal_check_l(to_win) == 2){
        return 2;
    }
    if(diagonal_check_r(to_win) == 1){
        return 1;
    }
    if(diagonal_check_r(to_win) == 2){
        return 2;
    }
}

function change(element){
    save_tile(element);
    var winner = check_winner();
    if(winner == 1){
        window.alert("winner1");
        reset();

    }
    else if (winner == 2){
        window.alert('winner2');
        reset();
    }

}

//alert(get_total_tiles());
