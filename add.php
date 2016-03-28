<?php
sleep(3);
require 'config.php';

$user     = $_POST['user'];
$pass     = sha1($_POST['pass']);
$email    = $_POST['email'];
$sex      = $_POST['sex'];
$birthday = strtotime($_POST['birthday']);
$date     = time();

$query = "INSERT INTO user (user,pass,email,sex,birthday,date) VALUES
        ('$user','$pass','$email','$sex','$birthday','$date')";

mysql_query($query) or die ('新增失败！信息：'.mysql_error());
echo mysql_affected_rows();
mysql_close();
?>
