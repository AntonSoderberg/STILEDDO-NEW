<?php

require('db.php');

$sql = "SELECT DISTINCT `mood` FROM `music` WHERE 1";

$data = [];

$result = mysqli_query($con,$sql);

while($r = $result->fetch_assoc()) {
  
    $data[] = $r['mood'];

};

echo json_encode($data);

mysqli_close($con);

?>