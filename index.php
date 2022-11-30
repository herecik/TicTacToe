

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
                    Rozměr hracího pole: <input name = 'param' type = 'text' >
                    <input type = 'submit' value = 'Submit'>
                </form>
                <?php 
                    generate_field($_POST['param']);
                ?>
                <p id="test"> </p>
             <!--- <p id="test2"> </p>---->
            </center>
        </div>

    </body>

    <script>
        <?php include 'scripts.js';?>
        <?php include 'test.js';?>
    </script>

</html>
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