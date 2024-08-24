<?php

include './db.php';
if(isset($_POST['email'])){
    $email = $_POST['email'];

    $email_check = "SELECT email FROM newsletter where email = '$email'";
    $validation = mysqli_query($conn, $email_check);
    if(mysqli_num_rows($validation) > 0){
        $response = ['error'=>'You are already a subscriber'];
    }else{
        $query = "
            INSERT INTO newsletter (email) VALUES ('$email')
        ";
        if(mysqli_query($conn, $query)){
            $response = ['message'=>"You've succesfully subscribed"];
        }
    }
    echo json_encode($response);
}
?>