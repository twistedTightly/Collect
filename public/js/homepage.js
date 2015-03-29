function toggleMnemonicContent() {
	$( "#mnemonic-explanation li" ).click(function(event) {
		$( "li.selected" ).toggleClass( "selected" );
		$(event.target).closest( "li" ).toggleClass( "selected" );
	});
}

function toggleButtonDropdown() {
	$( "#banner .button" ).hover(
		// Applied when mouse enters
		function(event) {
			$( event.target ).toggleClass( "show-form" );
			$( "ul#memory-carousel" ).toggleClass( "shifted" );
		}, function(event) { // Applied when mouse leaves
			$( event.target ).toggleClass( "show-form" );
			$( "ul#memory-carousel" ).toggleClass( "shifted" );
		}
	);
}

function scrollALittle() {
	// Scroll the carousel a little
	$('#memory-carousel')
	var images = $('#memory-carousel .memory').get();
	for (var index = 0; index < images.length; index++) {
		// 1. Check to see if the image is out of the page's bounds
		if (images[index].getBoundingClientRect.left+images[index].getBoundingClientRect.width < 0) {
			// 2. If it is, put it at the end of the queue
			$('#memory-carousel').append(images[index].clone());
		}
	};
	// 2. Set a timer to repeat the event
	setTimeout(scrollALittle, 1000);
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	toggleButtonDropdown();
	// Toggles which section of the mnemonic content is showing
	toggleMnemonicContent();
	// Turn on scrolling for the carousel
	scrollALittle();
});
