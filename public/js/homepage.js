function toggleMnemonicContent() {
	$( "#mnemonic-explanation li" ).click(function(event) {
		$( "li.selected" ).toggleClass( "selected" );
		$(event.target).closest( "li" ).toggleClass( "selected" );
	});
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	// Toggles which section of the mnemonic content is showing
	toggleMnemonicContent();
});