<?php
// the message
$msg = $_GET['msg'];


// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("stnclaudiu@yahoo.com","Geolocatie",urldecode($msg));
echo 'dddd';
?>