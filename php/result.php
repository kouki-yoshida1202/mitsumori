<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");

$total = $_POST['total'];

$to = "contact@gonmura.info";
$title = "【見積もりされました】";
$content = "\r\n新規見積もりが入りました。
\r\n\r\n============================================================\r\n
金額 : " . $total . "万円\r\n\r\n============================================================\r\n\r\n───────────────────────────────────\r\n\r\nby 見積もりシミュレーション\r\n\r\n───────────────────────────────────\r\n";
$headers = "";

mb_send_mail($to, $title, $content, $headers);
echo "success";
return;