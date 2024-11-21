<?php
    //recipient
    $to = "hugo.ramillon32@gmail.com";

    //subject
    $subject = "this is a test";

    //message
    $message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quibusdam autem, veniam animi quos fuga soluta velit illo ullam eaque totam omnis dolor necessitatibus voluptates hic incidunt distinctio ex! Nihil."

    //header
    $header = "" ;


    mail($to,$subject,$message, $header);
?>