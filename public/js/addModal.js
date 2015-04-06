// Move comments HTML to sit just below the lower section of the memory
function showAdditionalInput(event) {
	$( event.target ).toggleClass( "show" );
	if ($( event.target ).hasClass( "show" )) {
		$( event.target ).children( "span" ).text("-");
	} else {
		$( event.target ).children( "span" ).text("+");
	}
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	$( "#add-info" ).click(showAdditionalInput);
});
