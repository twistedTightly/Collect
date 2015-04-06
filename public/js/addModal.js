// Replace the header with the "write" section
function showWriteInput(event) {
	$( "#write.row" ).addClass( "show" );
	$( "#add-memory-modal > p" ).removeClass( "show" );

	// Animate media icons
	if ($( "#write.row" ).hasClass( "show" )) {
		$( "#add-memory-modal li:not(:last-child)" ).css( "margin-right", "188px" );
	} else {
		$( "#add-memory-modal li:not(:last-child)" ).css( "margin-right", "100px" );
	}
}

// Show or hide the "additional information" form inputs
function showAdditionalInput(event) {
	$( event.target ).toggleClass( "show" );
	if ($( event.target ).hasClass( "show" )) {
		$( event.target ).children( "span" ).text("-");
		$( "#submit " ).css( "margin-top", "auto" );
	} else {
		$( event.target ).children( "span" ).text("+");
		$( "#submit " ).css( "margin-top", "-150px" );
	}
}

// Expand/collapse the media section corresponding to the icon that was clicked
function showOptionalInput(event) {
	var optionalInputId = ".row#" + event.target.id;
	$( optionalInputId ).toggleClass( "show" );
	if ($( optionalInputId ).hasClass( "show" )) {
		$( "#optional" ).css( "margin-bottom", "104px" );
	} else {
		$( "#optional" ).css( "margin-bottom", "0px" );
	}

	// If any media is added, the "write" section will show up in place of the header
	if (!$( "#write" ).hasClass( "show" )) {
		showWriteInput();
	}
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	$( "#add-memory-modal > p" ).click(showWriteInput);
	$( "#add-info" ).click(showAdditionalInput);
	$( "#add-memory-modal ul li" ).click(showOptionalInput);
});
