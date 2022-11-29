<?php 
    
    $tiles = [];

    function generate_field($size){
        if($size < 3){
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

<html>    
    <head>
        <style>
            <?php include 'style.css';?>
        </style>
    </head>
    <body onload="create_struct()">
        <div id="main">
            <center>
                <form id='play_size_form' action = 'index.php' method = 'post'>
                    Rozměr hracího pole: <input type = 'text' name = 'param'>
                    <input type = 'submit' value = 'Submit'>
                </form>
                <?php 
                    $play_size = $_POST['param'];
                    generate_field($play_size);
                    ?>
                <p id="test"> </p>
            </center>
        </div>

    </body>

    <script>
        <?php include 'scripts.js';?>
    </script>

</html>