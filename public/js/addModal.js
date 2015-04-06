// Show or hide the "additional information" form inputs
function showAdditionalInput(event) {
	$( event.target ).toggleClass( "show" );
	if ($( event.target ).hasClass( "show" )) {
		$( event.target ).children( "span" ).text("-");
	} else {
		$( event.target ).children( "span" ).text("+");
	}
}

function showOptionalInput(event) {
	var optionalInputId = ".optional-input.row#" + event.target.id;
	$( optionalInputId ).toggleClass( "show" );
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	$( "#add-info" ).click(showAdditionalInput);
	$( "#add-memory-modal ul li" ).click(showOptionalInput);
});
