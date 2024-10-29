<?php
require('../db.php');

$name = $_POST['name'];
$company_name = $_POST['company_name'];
$website = $_POST['website'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$service = $_POST['service'];

if(trim($name) == "" || trim($company_name) == "" || trim($email) == "" || trim($phone_number) == "" || trim($service) == "" || trim($website) == ""){
    echo "Please fill all fields";
    exit();
}

$query = "INSERT INTO `get_a_quote` (name, company_name, website, email, phone, service) VALUES ('$name', '$company_name', '$website', '$email', '$phone_number', '$service')";

if(mysqli_query($conn, $query)){
    echo "Thank you for getting in touch. We will get back to you soon.";
}else{
    echo "Error collecting info";
    exit();
}

?>