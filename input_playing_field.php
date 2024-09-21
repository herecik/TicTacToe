<div class = "container">
<form calss = "form" id='play_size_form' action = 'tictactoe.php' method = 'post'>
    Rozměr hracího pole: <input class = "form__input" name = 'param' type = 'text' >
    <input class = "form__input" type = 'submit' value = 'Potvrď'>
</form>
           
<?php 
                    //generujeme samotné hrací pole
                    $parameter_from_form = 0;
                    if(isset($_POST['param'])){
                        $parameter_from_form = $_POST['param'];
                    }
                    generate_field($parameter_from_form);
?>

</div>