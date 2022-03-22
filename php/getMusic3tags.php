<?php

require('db.php');

$data = ($_GET['data']);

$dataArray = (explode(",",$data));

$sql = "SELECT * FROM `music` WHERE `genre` = '$dataArray[0]' AND `mood` = '$dataArray[1]' AND `instrument` = '$dataArray[2]'";

$i = 0;

$result = mysqli_query($con, $sql);

while($r = mysqli_fetch_array($result)) {

    $ii = '"'.$r['name'].'"';

    echo 
    
    "<div class='" . $r['collection'] . "' id='beat'>
    
        <div class='beatTitle' id='" . $r['collection'] . "'>" . $r['name'] . "</div>
    
        <img src='images/" . $r['collection'] . ".png' onclick='playPause(" . $i . "," . $ii . ")'>
    
        <div class='beatCollection'>The " . $r['collection'] . " collection | " . $r['genre'] . " beat</div>

        <div class='beatTagContainer'>

            <div class='beatTag'>" . $r['mood'] . "</div>

            <div class='beatTag'>" . $r['instrument'] . "</div>

            <div class='beatTag'>" . $r['bpm'] . " BPM</div>

        </div>

        <div class='playBar'>
        
            <div class='playLine' id='playLine" . $i . "'></div>
        
        </div>
    
    </div><br>";

    $i++;

};

mysqli_close($con);

?>