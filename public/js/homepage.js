function toggleMnemonicContent() {
	$( "#mnemonic-explanation li" ).click(function(event) {
		$( "li.selected" ).toggleClass( "selected" );
		$(event.target).closest( "li" ).toggleClass( "selected" );
	});
}

function scrollALittle() {
	// 1. Scroll the carousel a little
	// 2. Set a timer to repeat the event
	setTimeout(scrollALittle, 1000);
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	// Toggles which section of the mnemonic content is showing
	toggleMnemonicContent();
	$('#memory-carousel').scrollALittle();
});