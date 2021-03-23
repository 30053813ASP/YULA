function validateContact(){
	var formField = document.forms["ContactForm"]["fname"].value;
	if ( formField == null || formField == "") {
		alert ("You may have missed some entry fields. Please check and enter if they are empty.");
		return false;
	}
}

function validateCard(){
	var formField = document.forms["CardForm"]["card-numb"].value;
	if ( formField == null|| formField == "") {
		alert ("You may have missed some fields. Please check and enter if they are empty.");
		return false;
	}
}