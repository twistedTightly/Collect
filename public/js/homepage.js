function toggleMnemonicContent() {
	$( "#mnemonic-explanation li" ).click(function(event) {
		$( "li.selected" ).toggleClass( "selected" );
		$(event.target).closest( "li" ).toggleClass( "selected" );
	});
}

function toggleButtonDropdown() {
	$( "#banner .button" ).click(function(event) {
		$( event.target ).next( "form" ).toggleClass( "show" );
		$( "ul#memory-carousel" ).toggleClass( "shifted" );
	});
}

function scrollALittle() {
	// 1. Scroll the carousel a little
	// 2. Set a timer to repeat the event
	setTimeout(scrollALittle, 1000);
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	toggleButtonDropdown();
	// Toggles which section of the mnemonic content is showing
	toggleMnemonicContent();
	$('#memory-carousel').scrollALittle();});