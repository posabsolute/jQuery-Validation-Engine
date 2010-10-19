<?php

/*  RECEIVE POST   */
$email=$_POST['email'];
$age=$_POST['age'];

/* VALIDATE HOW YOU NEED TO VALIDATE */




/* RETURN ERROR */

$arrayError[0][0] = "#email";			// FIELDID 
$arrayError[0][1] = "Your email do not match.. whatever it need to match"; 	// TEXT ERROR	
$arrayError[0][2] = "error";			// BOX COLOR

$arrayError[1][0] = "#age";		// FIELD
$arrayError[1][1] = "Your email do not match.. whatever it need to match"; 	// TEXT ERROR	
$arrayError[1][2] = "error";			// BOX COLOR



$isValidate = true;  // RETURN TRUE FROM VALIDATING, NO ERROR DETECTED
/* RETTURN ARRAY FROM YOUR VALIDATION  */


/* THIS NEED TO BE IN YOUR FILE NO MATTERS WHAT */
if($isValidate == true){
	echo "true";
}else{
	echo '{"jsonValidateReturn":'.json_encode($arrayError).'}';		// RETURN ARRAY WITH ERROR
}
?>