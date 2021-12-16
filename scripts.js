
var counter = 0;

var tiles = [[]];
var player = 1;
const row = [];



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
    var total_tiles = get_total_tiles();
    total_tiles = Math.sqrt(total_tiles);

    for(let j = 0; j < total_tiles; j++){
        tiles[j] = [0,0,0,0,0];
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
            if(tiles[i][j] == 1){
               
                win_cnt++;
                if(win_cnt == w_tiles){
                    return 1;
                }
            }
            else if(tiles[i][j] == 2 || tiles[i][j] == 0){
                win_cnt = 0;
            }

            if(tiles[i][j] == 2){
               
                win2_cnt++;
                if(win2_cnt == w_tiles){
                    return 2;
                }
            }
            else if(tiles[i][j] == 1 || tiles[i][j] == 0){
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
            if(tiles[j][i] == 1){
                win_cnt++;
                if(win_cnt == w_tiles){
                    return 1;
                }
            }  
            else if(tiles[j][i] == 2 || tiles[j][i] == 0){
                win_cnt = 0;
            }

            if(tiles[j][i] == 2){
               
                win2_cnt++;
                if(win2_cnt == w_tiles){
                    return 2;
                }
            }
            else if(tiles[j][i] == 1 || tiles[j][i] == 0){
                win2_cnt = 0;
            }
        }
        
    }


    return 0;
}

function check_winner(){
    
    var tile_scope;
    
    /*for(let i = 0; i < total_tiles; i++){
        for(let j = 0; j < total_tiles; j++){
            if(tiles[i][j] != 0){
                tile_scope = tiles[i][j];
                break;
            }
        }
    }*/
   // vertical_check(5);
    /*var horyzontal_lines =*/ ;
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
    /*var vertical_lines = vertical_check(5);
    if(vertical_lines == 1){
        window.alert("winner1");
        return 1;
    }
    else if(vertical_lines == 2){
        window.alert('winner2');
        return 2;
    }*/

    

   /* if(vertical_lines == 1){
        window.alert("winner1");
    }
    else if(vertical_lines == 2){
        window.alert('winner2');
    }*/
}

function change(element){
    save_tile(element);
    var winner = check_winner();
    if(winner == 1){
        window.alert("winner1");
    }
    else if (winner == 2){
        window.alert('winner2');
    }
    
    

}

     //test output 
    /*  var x = document.getElementById('test');

    x.innerHTML =  tiles[0][0];   */