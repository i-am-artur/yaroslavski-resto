<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');

function YourTelegramMessageFunction($chatID, $message, $token) {
    $url = "https://api.telegram.org/bot" . $token . "/sendMessage";
    $data = ['chat_id' => $chatID, 'text' => $message, 'parse_mode' => 'HTML'];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);


    // here you can Handle cURL error
    if (curl_errno($ch)) {
        $error_msg = curl_error($ch);
        curl_close($ch);
        return json_encode(array('error' => $error_msg));
    }

    $http_code_message = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($http_code_message >= 200 && $http_code_message < 300) {
        $result = json_decode($response, true);
        if ($result['ok']) {
            $result = json_encode(array('success' => $result['ok']));
        } else {
            $result = json_encode(array('error' => $result));
        }
    } else {
        // And here you can Handle HTTP error
        $result = json_encode(array('error' => 'HTTP error ' . $http_code_message));
    }

    curl_close($ch);
    return $result;
}

// $tables = array(
//     (object) array('id' => 1, 'name' => 'VIP'),
//     (object) array('id' => 2, 'name' => '1'),
//     (object) array('id' => 3, 'name' => '2'),
//     (object) array('id' => 4, 'name' => '3'),
//     (object) array('id' => 5, 'name' => '4'),
//     (object) array('id' => 6, 'name' => '5'),
//     (object) array('id' => 7, 'name' => '6'),
//     (object) array('id' => 8, 'name' => '7'),
//     (object) array('id' => 9, 'name' => '8'),
//     (object) array('id' => 10, 'name' => 'Гриль-Терраса 1'),
//     (object) array('id' => 11, 'name' => 'Гриль-Терраса 2'),
//     (object) array('id' => 12, 'name' => 'Гриль-Терраса 3'),
//     (object) array('id' => 13, 'name' => 'Гриль-Терраса 4'),
//     (object) array('id' => 14, 'name' => 'Летняя-Терраса 1'),
//     (object) array('id' => 15, 'name' => 'Летняя-Терраса 2'),
//     (object) array('id' => 16, 'name' => 'Летняя-Терраса 3'),
//     (object) array('id' => 17, 'name' => 'Летняя-Терраса 4'),
// );

$chatID = '-823066098'; // change for a correct ID
$token  = '6158866636:AAH0a4THJqI3r20s1UMm9PcD7ERsawA6OUo'; // change for a correct Token

$post_json = file_get_contents('php://input');
$sessionJSON = json_decode($post_json, true);

echo $sessionJSON["message"];

// $message = 'Вызов: Стол '.$_GET['table'];

// echo YourTelegramMessageFunction($chatID, $message, $token);
?>