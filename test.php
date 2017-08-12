<?php

header('Content-Type', 'application/json');

$data = json_decode(file_get_contents("php://input"));
/*$name =  $data -> {'name'};
$age = $data -> {'age'};
$address = $data -> {'address'};
$phoneNumber = $data -> {'phoneNumber'};*/

$name = "kennet";
$age = "23";
$address = "testssdds";
$phoneNumber = "09951725477";

$list = array();

array_push($list, $name);
array_push($list, $age);
array_push($list, $address);
array_push($list, $phoneNumber);
//print_r($list);

$fp = fopen('test2.csv', 'w');

for($i = 0; $i < 300000; $i++){
  	fputcsv($fp,$list);
}

fclose($fp);

echo '{"record": "nice"}';

?>