<?php
/*

TODO:

If your system has PHP installed, you can easily test this script by using PHP's
built-in web server:

$ php -S localhost:8000 -t src/php/

You can then fetch() this script in JavaScript with the following URL:
http://localhost:8000/webservice.php

*/

$file = '../data/testdata.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // TODO: Update
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    if (file_exists($file)) {
        $data = file_get_contents($file);
        $json = json_encode($data);
        if ($json === false) {
            $json = json_encode(["jsonError" => json_last_error_msg()]);
            if ($json === false) {
                $json = '{"jsonError":"unknown"}';
            }
            http_response_code(500);
        }
    echo $data;
}
}
?>
