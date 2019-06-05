<?php

try {
    $rejected = 0;
    $confirmed = 0;
    
    // the message
    if (strlen($_COOKIE['nrPers']) != 0)
        $nrPers = "Nr persoane: " . urldecode($_COOKIE['nrPers']) . "\n";
    
    
    $msg = $_POST['msg'];
    if (strlen($msg) == 0)
        if(strlen($_GET['msg']) != 0) $msg = "Mesaj: " . urldecode($_GET['msg']);
    else{
        $msg = "Mesaj: " . $_POST['msg'];
    }
    
    $confArr = array(1,0);
    if (in_array($_POST["confirm"], $confArr)) {
        $confirmed = $_POST['confirm'];
    } else
        die('Valori incorecte pentru CONFIRMAT/RESPINS');
        
        
     $link   = mysqli_connect("localhost", "scmsoftw_scm", "ParolaMea1982", "scmsoftw_ev24082019");
        
        if (!$link) {
            $msgerr = "Eroare: Nu a fost posibilă conectarea la MySQL." . PHP_EOL;
            $msgerr .= "Valoarea errno: " . mysqli_connect_errno() . PHP_EOL;
            $msgerr .= "Valoarea error: " . mysqli_connect_error() . PHP_EOL;
            die($msgerr);
        }
    
    //check if refid is populated
     $userid = $_COOKIE['refid'];
    if (strlen($userid) == 0) { 
        if (strlen($_COOKIE['nume']) != 0)
            $name = "Nume: " . urldecode($_COOKIE['nume']);
        
        if (strlen($_COOKIE['email']) != 0)
            $email = "Email: " . urldecode($_COOKIE['email']);
    }
    //ref id is not null
    else {
        $query = "select nume, email from invites where id = " . $userid;
        if(($result = $link->query($query))){
            $row   = $result->fetch_array(MYSQLI_ASSOC);
            
            if(strlen($row['nume'])==0){mysqli_close($link); die("ID sesiune incorect!");}
            
            $name  = "Nume: " .$row['nume'];
            $email = "Email: " .$row['email'];
            
            $result->free();
        } else { echo "Eroare SQL\nQuery: ".$query."\n".$link->error;
        mail("stnclaudiu@yahoo.com", "Eroare SQL\nQuery: ".$query."\n".$link->error, $headers, "-f " . $from);mysqli_close($link); exit();}
        
        
        if($confirmed==0) $rejected =1;
		
		//update in DB status
    $query = "update invites set confirmed = " . $confirmed .", rejected = " . $rejected . ",invitee_message='".$msg."', action_timestamp = current_timestamp where id = " . $userid;
    if ($link->query($query) == false) {
        mail("stnclaudiu@yahoo.com", "Eroare update SQL ", "Query: ".$query."\n".$link->error, $headers, "-f " . $from);
        
        echo "Eroare SQL\nQuery: ".$query."\n".$link->error;mysqli_close($link); exit();
    } 
    
    if ($link->affected_rows == 0 || $link->affected_rows === NULL) {
        mail("stnclaudiu@yahoo.com", "Eroare update SQL ", "id-ul " . $userid . " nu exista!", $headers, "-f " . $from);
        mysqli_close($link);
        die("id-ul " . $userid . " nu exista!");
    } else {
        if (!$link->commit()) {
            mail("stnclaudiu@yahoo.com", "Transaction commit failed\n", $headers, "-f " . $from);
            echo "Eroare SQL: ".$link->error;mysqli_close($link); exit();;
        }
        
        
    }
        
    }
    
    
    
    if($link) mysqli_close($link);
    //end update in DB status
	
	
    if(strlen($name)!=0) $EmailBody .= $name."\n";
    if(strlen($email)!=0) $EmailBody .= $email."\n";
    if(strlen($nrPers)!=0) $EmailBody .= $nrPers."\n";
    if(strlen($msg)!=0) $EmailBody .= $msg."\n";
    
    // use wordwrap() if lines are longer than 70 characters
    //$msg = wordwrap($msg,70);
    if ($confirmed == 1)
        $msgSubject = "Confirmare";
    else
        $msgSubject = "Refuz participare";
    
    if (strlen($name) > 0) {
        // send email
        $from    = "mail@eveniment24082019.ro";
        $headers = "From: $from";
        mail("stnclaudiu@yahoo.com", $msgSubject, $EmailBody, $headers, "-f " . $from);
    } else die( "nu ati completat numele de utilizator in URL");
    
    
}
catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage(), "\n";
}
?> 