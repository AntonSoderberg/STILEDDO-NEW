<?php

$servername = "10.209.1.138";
$username = "198526_tx78759";
$password = "MoonCowdb0302240887";
$dbname = "198526-antondb2";

$con = mysqli_connect($servername,$username,$password,$dbname);

if (!$con) {

    die('Could not connect: ' . mysqli_error($con));

}

mysqli_select_db($con,$dbname);

?>