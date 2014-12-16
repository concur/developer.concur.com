<?php

/*

EMAIL SUBMISSION SCRIPT

*/

if($_POST)
{
    
    
    // CONFIGURATION
    
    $to_Email       = "email@host.com"; //Put the email here where the message will be sent. It will also appear as the sender but not the reply-to. It should better be an email hosted in the same host as the Site because some hosts don't allow php to send emails from unknown senders due to antispam policies.

    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    
        //exit script outputting json data
        $output = json_encode(
        array(
            'type'=>'error', 
            'text' => 'Request must come from Ajax'
        ));
        
        die($output);
    } 

    
    //check $_POST vars are set, exit if any missing
    if(!isset($_POST["userEmail"]) || !isset($_POST["userName"]) || !isset($_POST["userSubject"]) || !isset($_POST["userMessage"]))
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
        die($output);
    }
    
    // DETECT & PREVENT FROM HEADER INJECTIONS
       $malicious = "/(content-type|bcc:|cc:|to:|href)/i";
     foreach ( $_POST as $key => $val ) {

         if ( preg_match( $malicious, $val ) ) {

         exit( 'FAILURE' );

       }

       }

    //Sanitize input data using PHP filter_var().
    $user_Name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
    $user_Email       = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
    $user_Subject     = filter_var($_POST["userSubject"], FILTER_SANITIZE_STRING);
    $user_Message     = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);
    
    
    
    //additional php validation
    if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) //email validation
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
        die($output);
    }
    if(strlen($user_Message)<5) //check emtpy message
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
        die($output);
    }
   
    // SEND EMAIL
         $sentMail = mail( 

           // RECIPIENT
           $to_Email,   

           // SUBJECT
           $user_Subject,

           // MESSAGE
           $user_Message,

           // HEADERS
           "From: =?UTF-8?B?" . base64_encode( $user_Name ) . "?= <" . $to_Email . ">\nReply-To: " . $user_Email . "\nMIME-Version: 1.0\nContent-Type:text/html;charset=utf-8\n"

           );
    
    if(!$sentMail)
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => 'Thank you '.$user_Name .'! Your message was successfully sent.'));
        die($output);
    }
}
?>
