<form id='play_size_form' action = 'index.php' method = 'post'>
    Rozměr hracího pole: <input name = 'param' type = 'text' >
    <input type = 'submit' value = 'Submit'>
</form>
           
<?php 
                    //generujeme samotné hrací pole
                    $parameter_from_form = 0;
                    if(isset($_POST['param'])){
                        $parameter_from_form = $_POST['param'];
                    }
                    generate_field($parameter_from_form);
                ?>