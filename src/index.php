<?php
    $file = '';

    if (isset($_GET['f']))
    {
        $file = $_GET['f'];
    }
?>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Lazer Test Runner</title>
    <style>
        body {
            font-family: sans-serif;
            font-size: 12px;
            margin: 16px;
        }

        a {
            text-decoration: none;
        }

        a:Hover {
            text-decoration: underline;
            color: red;
        }
    </style>
    <script src="lib/browser.js"></script>
    <script src="lib/system.js"></script>
</head>
<body>

    <div id="game"></div>

    <?php
        if ($file !== '')
        {
    ?>
    <script type="text/babel">

    System.baseURL = '../../lazer/src/';
    System.transpiler = 'babel';

    System.import('../src/<?php echo $file ?>').then(some_module => {

        //  party time

    })
    .catch(error => {
        console.log(error);
    });

    </script>
    <?php
        }
    ?>

    <ul>
    <?php
        $projects = scandir('.');

        $ignore = array('.', '..', '.git', 'node_modules', 'assets', 'dist');

        foreach ($projects as $key => $value) {

            if (!in_array($value, $ignore) && substr($value, -2) === 'js')
            {
                echo "<li><a href=\"index.php?f=$value\">$value</a></li>";
            }
        }
    ?>
    </ul>

</body>
</html>