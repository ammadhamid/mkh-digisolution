<?php

$conn = mysqli_connect("localhost", "root", "", "mkh");
if($conn->connect_error){
    echo "DataBase Connection Problem occured";
}

?>