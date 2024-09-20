<?php 
    $tiles = [];
    //funkce vezme zadanou velikost hracího pole a následně jej vygeneruje
    //vygenerované hrací pole se skládá z buněk (input boxů), funkce přiřazuje buňkám index pro x a y souřadnice v hrací ploše
    function generate_field($size){
        //kontrolujeme, zda si hráči založili dostatečně velkou hrací plochu
        if($size < 3 && isset($_POST['param'])){
            die("Mala hraci plocha!!");
        }
        echo '<table>';
        for($i = 0; $i < $size; $i++){
            echo '<tr>';
                for($j = 0; $j < $size; $j++){
                    echo '<td> <input onclick="change(this)" type="text" class="tile" id="tile_'.$i.'_'.$j.'" name="tiles"> </td>';
                }
            echo '</tr>';
        }
        echo '</table>';
    }
?>