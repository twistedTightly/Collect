function toggleMnemonicContent() {
	$( "#mnemonic-explanation li" ).click(function(event) {
		$( "li.selected" ).toggleClass( "selected" );
		$(event.target).closest( "li" ).toggleClass( "selected" );
	});
}

function toggleButtonDropdown() {
	$( "#banner a.button" ).click(function(event) {
		// If one button is selected but it isn't the one that was clicked...
		if ( $( "#banner a.button" ).hasClass( "permahover" ) && !$( event.target ).hasClass( "permahover" )) {
			$( '#banner a.button' ).next( "form" ).toggleClass( "show" );
			$( '#banner a.button' ).toggleClass( "permahover" );
		// Either neither is selected and now the clicked one will be
		// or only the one clicked was selected and now it won't be
		} else {
			$( event.target ).next( "form" ).toggleClass( "show" );
			$( event.target ).toggleClass( "permahover" );
		}

		// The scroll wrapper will only shift up if both the
		// log in and sign up forms are unselected
		if (!$( "#scrollwrapper" ).hasClass( "shifted" )) {
			$( "#scrollwrapper" ).toggleClass( "shifted" );
		} else if (!$( "#banner a.button" ).hasClass( "permahover" )) {
			$( "#scrollwrapper" ).toggleClass( "shifted" );
		}
	});
}

function scrollALittle() {
	// Scroll the carousel a little
	$('#memory-carousel').css("right", "-=1");
	var images = $('#memory-carousel .memory').get();
	for (var index = 0; index < images.length; index++) {
		// 1. Check to see if the image is out of the page's bounds
		if (images[index].getBoundingClientRect().left == $('body').width()) {
			// 2. If it is, put it at the end of the queue
			$('#memory-carousel').append($(images[index]).clone());
		}
	};
	// 2. Set a timer to repeat the event
	setTimeout(scrollALittle, 50);
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	toggleButtonDropdown();
	// Toggles which section of the mnemonic content is showing
	toggleMnemonicContent();
	// Turn on scrolling for the carousel
	scrollALittle();
});
