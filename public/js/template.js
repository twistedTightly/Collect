var IDLE_TIMEOUT = 60; //seconds
var idleSecondsCounter = 0;

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	// Toggles the pullout menu
	showPulloutMenu();
	// build the redirect listener that will reset the page after a certain amount of time
	document.onclick = function() {
	    idleSecondsCounter = 0;
	};
	document.onmousemove = function() {
	    idleSecondsCounter = 0;
	};
	document.onkeypress = function() {
	    idleSecondsCounter = 0;
	};
	window.setInterval(checkIdleTime, 1000);
});

function showPulloutMenu() {
	$( "#pullout-menu-tab" ).click(function() {
		$( '#pullout-menu' ).toggleClass( "show" );
		$( '#pullout-menu-tab' ).toggleClass( "show" );
		$( 'header' ).toggleClass( "shift" );

		if ( $( '#pullout-menu-tab' ).hasClass( "show" ) ) {
			$( "#pullout-menu-icon-holder img" ).attr( "src", "/images/icons/close.svg" );
		} else {
			$( "#pullout-menu-icon-holder img" ).attr( "src", "/images/icons/pullmenu_icon.svg" );
		}
	});
}

function checkIdleTime() {
    idleSecondsCounter++;
    if (idleSecondsCounter >= IDLE_TIMEOUT) {
        document.location.href = "http://collect.parseapp.com";
    }
}