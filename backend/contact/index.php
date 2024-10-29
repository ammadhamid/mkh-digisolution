<?php
    require('../db.php');

    $first_name = $_POST['fname'];
    $last_name = $_POST['lname'];
    $email  = $_POST['email'];
    $phone = $_POST['phone-contact-us'];
    $business_field = $_POST['b-field'];
    $marketing_field = $_POST['marketing-field'];
    $website_name = $_POST['website-field'];

    if(trim($first_name) == "" || trim($last_name) == "" || trim($email) == "" || trim($phone) == "" || trim($business_field) == "" || trim($marketing_field) == "" || trim($website_name) == ""){
        echo "Please fill All fields";
        exit();
    }
    $query = "
        INSERT INTO `contact` (first_name, last_name, email, phone, business, marketing, website) VALUES ('$first_name', '$last_name', '$email', '$phone', '$business_field', '$marketing_field', '$website_name')
    ";
    if(mysqli_query($conn, $query)){
        echo "Thank you for contacting us";
    }else{
        echo "Error collecting info";
    }
?>