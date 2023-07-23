<?php
 $name= $_POST['name'];
 $mail= $_POST['mail'];
 $message= $_POST['message'];

 $conn= new mysqli('localhost','root','','portfolio');
 if($conn->connect_error){
 die("failed to send!");
 }
 $sql= "INSERT INTO `contact` (`message`, `name`, `mail`) VALUES ('$message', '$name', '$mail')";
 if($conn->query($sql)==true)
 {
    echo "Sent!!";
 }else{
    echo "error";
 }
 $conn->close();
?>