function showPulloutMenu() {
	$( "#pullout-menu-tab" ).click(function() {
		$( '#pullout-menu' ).toggleClass( "show" );
		$( '#pullout-menu-tab' ).toggleClass( "show" );
		$( 'header' ).toggleClass( "shift" );
	});
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	// Toggles the pullout menu
	showPulloutMenu();
});