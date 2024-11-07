<?php
require '../db.php';
if(isset($_POST['newsletter_email'])){
    $email = $_POST['newsletter_email'];
    if(trim($email) == ''){
        echo json_encode(['message'=>'Email is required', 'success'=>false]);
        exit();
    }
    
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo json_encode(['message'=>'Invalid email format', 'success'=>false]);
        exit();
    }

    $email_check = "SELECT email FROM newsletter where email = '$email'";
    $validation = mysqli_query($conn, $email_check);
    if(mysqli_num_rows($validation) > 0){
        $response = [
            'message'=>'You are already a subscriber',
            'success' => false
            ];
    }else{
        $query = "
            INSERT INTO newsletter (email) VALUES ('$email')
        ";
        if(mysqli_query($conn, $query)){
            $response = [
                'message'=>"You've succesfully subscribed",
                'success' => true
            ];
        }
    }
    echo json_encode($response);
}
?>