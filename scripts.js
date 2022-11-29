

var counter = 0;
var tiles = [[]];
var player = 1;


function get_index_row(element_str){
    var row = element_str.charAt(5);
    return row;
}

function get_index_collum(element_str){
    var collum = element_str.charAt(7);
    return collum;
}

function get_total_tiles(){
    return document.getElementsByName('tiles').length;
}

function create_struct(){
    
    var total_tiles = Math.sqrt(get_total_tiles());
    //total_tiles = Math.sqrt(total_tiles);
    var test_arr = [];

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

function horyzontal_check(w_tiles){
    var total_tiles = Math.sqrt(get_total_tiles());
    win_cnt = 0;
    win2_cnt = 0;
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

function vertical_check(w_tiles){
    var total_tiles = Math.sqrt(get_total_tiles());
    win_cnt = 0;
    win2_cnt = 0;
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

function diagonal_check_l(){

    return 0;
}

function diagonal_check_r(){

    return 0;
}

function reset(){
    location.reload();
}

function check_winner(){
    
    var tile_scope;
    
    if(vertical_check(5) == 1){
        return 1;
    }
    else if(vertical_check(5) == 2){
        return 2;
    }
    else if(horyzontal_check(5) == 1){
        return 1;
    }
    else if(horyzontal_check(5) == 2){
        return 2;
    }
    else if(diagonal_check_l(5) == 1){
        return 1;
    }
    else if(diagonal_check_l(5) == 2){
        return 2;
    }
    else if(diagonal_check_r(5) == 1){
        return 1;
    }
    else if(diagonal_check_r(5) == 2){
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
