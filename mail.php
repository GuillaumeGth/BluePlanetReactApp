<?php
try{
  $data=json_decode(file_get_contents('php://input'),1);
  $to      = 'contact@blueplanetdiveresort.com';
  $subject = 'New message from ' . $data['name'];
  $message = 'From ' . $data['name'] . '

  '. $data['message'];

  $headers = 'From: ' . $data['email'] . "\r\n" .
      'Reply-To: ' .$data['email'];

  mail($to, $subject, $message, $headers);

  $myObj->success = true;
  
  
}
catch(Exception $e) {
  $myObj->exceptionMessage = 'Exception : ' .  $e->getMessage();
}
echo json_encode($myObj);

?>
