var counter = 0;
var tiles = [[]];
var player = 1;
const to_win = 5;

//funkce vezme danou buňku a vrátí index řádku
function get_index_row(element_str){
    var row = element_str.charAt(5);
    return row;
}
//funkce vezme danou buňku a vrátí index sloupce
function get_index_collum(element_str){
    var collum = element_str.charAt(7);
    return collum;
}
//funkce vrátí šířku/výšku hrací plochy
function get_total_tiles(){
    return Math.sqrt(document.getElementsByName('tiles').length);
}
//funkce vytvoří 2D pole a naplní ho 0
function create_struct(){
    var total_tiles = get_total_tiles();
    var test_arr = [];
    for(let i = 0; i < total_tiles; i++){
        test_arr.push(0);
    }
    for(let j = 0; j < total_tiles; j++){
        tiles[j] = [test_arr];
    }
}
//funkce vrací ID protihráče - využito ke změně aktuálního hráče
function switch_player(p){
    if(p == 1){
        return 2;
    }
    else{
        return 1;
    }
}
//funkce uloží uskutečněný tah aktuálního hráče po kliknutí na buňku
function save_tile(element){
    var el = element.id;
    tiles[get_index_row(el)][get_index_collum(el)] = player;
    change_tile(element);      
    player = switch_player(player);
}
//funkce změní obsah v buňce na O nebo X podle aktuálního hráče
function change_tile(element){
    if(player == 1){
        element.value = "O";
    }
    else{
        element.value = "X";
    }
}
//kontrola výhry vertikálně
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
//kontrola výhry horyzontálně
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

//kontrola výhry diagonálně z leva dole do prava nahoře
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
//kontrola výhry diagonálně z leva nahoře do prava dole
function diagonal_check_r(w_tiles){
    var total_tiles = get_total_tiles();
    var win_cnt = 0;
    var win2_cnt = 0;

    for(let t = 2 * (total_tiles - 1); t >= 0; t--){
        win_cnt = 0;
        for(let x = 0; x <= total_tiles; x++){
            var y = x - t;
            if(y < 0 || y >= total_tiles || x < 0 || x >= total_tiles){
                //skip
            }
            else {
                if(tiles[x][y] == 1){
                    win_cnt++;
                    //alert(win_cnt);
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
//reset hrací plochy
function reset(){
    location.reload();
}
//funkce spustí jednotlivé testy na vyhru, tato funkce se spustí po každém tahu
function check_winner(){
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
//funkce, která se aktivuje vždy po kliknutí na buňku, spouští celý algoritmus programu, finálně rozhoduje o vítězi
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

