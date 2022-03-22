<?php

require('db.php');

$sql = "SELECT DISTINCT `genre` FROM `music` WHERE 1";

$data = [];

$result = mysqli_query($con,$sql);

while($r = $result->fetch_assoc()) {
  
    $data[] = $r['genre'];

};

echo json_encode($data);

mysqli_close($con);

?>