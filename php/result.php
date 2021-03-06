<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");

$total = $_POST['total'];
$sum1 = $_POST['sum1'];
$sum2 = $_POST['sum2'];
$sum3 = $_POST['sum3'];
$sum4 = $_POST['sum4'];
$sum5 = $_POST['sum5'];
$sum6 = $_POST['sum6'];
$sum7 = $_POST['sum7'];
$sum8 = $_POST['sum8'];
$sum9 = $_POST['sum9'];
$answer1 = $_POST['answer1'];
$answer2 = $_POST['answer2'];
$answer3 = $_POST['answer3'];
$answer4 = $_POST['answer4'];
$answer5 = $_POST['answer5'];
$answer6 = $_POST['answer6'];
$answer7 = $_POST['answer7'];
$answer8 = $_POST['answer8'];
$answer9 = $_POST['answer9'];
$text1 = $_POST['text1'];
$text2 = $_POST['text2'];
$text3 = $_POST['text3'];
$text4 = $_POST['text4'];
$text5 = $_POST['text5'];
$text6 = $_POST['text6'];
$text7 = $_POST['text7'];
$text8 = $_POST['text8'];
$text9 = $_POST['text9'];
$lat = $_POST['lat'];
$lng = $_POST['lng'];
$requestURL = $_POST['requestURL'];
// $formattedAddress = $_POST['formattedAddress'];

$to = "contact@gonmura.info";
$title = "【見積もりされました】";
$content = "\r\n新規見積もりが入りました。
\r\n\r\n============================================================\r\n
緯度 : " . $lat . "\r\n
経度 : " . $lng . "\r\n
GoogleMap :https://maps.google.com/maps?q=" . $lat . "," . $lng . "\r\n
合計金額 : " . $total . "万円\r\n\r\n
" . $text1 . ": " . $answer1 . "(" . $sum1 . "万円)\r\n
" . $text2 . ": " . $answer2 . "(" . $sum2 . "万円)\r\n
" . $text3 . ": " . $answer3 . "(" . $sum3 . "万円)\r\n
" . $text4 . ": " . $answer4 . "(" . $sum4 . "万円)\r\n
" . $text5 . ": " . $answer5 . "(" . $sum5 . "万円)\r\n
" . $text6 . ": " . $answer6 . "(" . $sum6 . "万円)\r\n
" . $text7 . ": " . $answer7 . "(" . $sum7 . "万円)\r\n
" . $text8 . ": " . $answer8 . "(" . $sum8 . "万円)\r\n
" . $text9 . ": " . $answer9 . "(" . $sum9 . "万円)\r\n
\r\n\r\n===========================================================\r\n\r\n───────────────────────────────────\r\n\r\nby 見積もりシミュレーション\r\n\r\n───────────────────────────────────\r\n";
$headers = "";

mb_send_mail($to, $title, $content, $headers);
echo "success";
return;