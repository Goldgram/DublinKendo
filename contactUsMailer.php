<?php
	header('Content-Type: application/json');
  if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['topic']) && isset($_POST['message'])) {
    $name = strip_tags(mysql_escape_string($_POST['name']));
    $email = strip_tags(mysql_escape_string($_POST['email']));
    $topic = strip_tags(mysql_escape_string($_POST['topic']));
    $message = strip_tags(mysql_escape_string($_POST['message']));
    $body = "Name: ".$name."<br>Email: ".$email."<br>Topic: ".$topic."<br>Message: ".$message;

    require './phpmailer/PHPMailerAutoload.php';
    $mail = new PHPMailer;
    $mail->setFrom('dublinkendo@gmail.com', 'Dublin Kendo Site');
    $mail->addAddress('dublinkendo@gmail.com', 'Dublin Kendo Email');
    $mail->IsHTML(true);
    $mail->Subject = "Website Contact";
    $mail->MsgHTML($body);
    $mail->CharSet="UTF-8";
    if(!$mail->Send()) {
      $return["success"] = false;
      $return["message"] = "Mailer Error: ".$mail->ErrorInfo;
    } else {
      $return["success"] = true;
      $return["message"] = "sent!";
    }
    echo json_encode($return);
  } else {
  	echo "Access is denied.";
  }
?>