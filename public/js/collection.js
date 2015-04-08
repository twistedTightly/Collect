// Move comments HTML to sit just below the lower section of the memory
function showComments(event) {

		var commentSection = $( event.target ).closest( ".comment-section" );

		var bottom, memoryShift; // Standard spacing between memories
		var commentsHeight = commentSection.outerHeight();
		var lowerSectionHeight = commentSection.closest( ".upper-section" ).next().outerHeight(true);
		var memoryMediaHeight = commentSection.closest( ".memory-media" ).outerHeight(true);

		if (commentSection.hasClass( "expanded" )) {
			memoryShift = 100;
			bottom = memoryMediaHeight
						- commentsHeight - 8 // Bottom margin that is added to the hr element
						// The height of the media icons for this memory
						- (commentSection.prev().outerHeight(true) 
							* (commentSection.closest( ".memory-media" ).children().length - 1));
		} else {
			bottom = -1 * (lowerSectionHeight + commentsHeight);
			memoryShift = 60 + commentsHeight; // Shift following memories down the same height as the comments that will appear
		}
		// Reposition the comments section, from the side bar to below the relevant memory
		commentSection.css( "bottom", bottom );
		commentSection.toggleClass( "expanded" );

		// Shift the following memories down
		commentSection.closest( ".memory" ).next( ".memory" ).children( ":first-child" ).css( "margin-top", memoryShift );
}

function showMedia(event) {
	var mediaId = ".upper-section .center-col #" + event.target.id;
	var allOtherMedia = ".upper-section .center-col > *:not(#" + event.target.id;
	
	// Make sure only the selected media is "popped up"
	$( allOtherMedia ).removeClass( "show" );
	$( mediaId ).toggleClass( "show" );

	// If any media is showing, the fade layer needs to be on
	if ( $( ".upper-section .center-col > *" ).hasClass( "show" ) ) {
		$( ".upper-section .center-col #fade" ).addClass( "show" );
	}
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	$( ".comment-section > a" ).click(showComments);
	$( ".submit a:last-child" ).click(showComments);
	$( ".memory-media > img" ).click(showMedia);

	// Handles youtube videos
	// From http://www.labnol.org/internet/light-youtube-embeds/27941/
	(function() {
	    var v = document.getElementsByClassName("youtube-player");
	    for (var n = 0; n < v.length; n++) {
	        var p = document.createElement("div");
	        p.innerHTML = labnolThumb(v[n].dataset.id);
	        p.onclick = labnolIframe;
	        v[n].appendChild(p);
	    }
	})();
});
