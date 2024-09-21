
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            <?php include 'style.css'?>
        </style>
    </head>
    <body onload="create_struct()">
        <?php include('menu.php') ?>
        <div id="main">
            <!--- Input form na zadání velikosti hrací plochy   ---->
            <?php include 'generate_playing_field.php' ?>
            <?php include 'input_playing_field.php' ?>
        </div>
        
    </body>
    <script>
        <?php include 'scripts.js'?>
        <?php include 'test.js'?>
    </script>
</html>
