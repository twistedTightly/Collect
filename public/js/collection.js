// Move comments HTML to sit just below the lower section of the memory
function showComments(event) {

		var commentSection = $( event.target ).closest( ".comment-section" );

		var bottom, memoryShift = 40; // Standard spacing between memories
		var commentsHeight = commentSection.outerHeight();
		var lowerSectionHeight = commentSection.closest( ".upper-section" ).next().outerHeight(true);
		var memoryMediaHeight = commentSection.closest( ".memory-media" ).outerHeight(true);

		if (commentSection.hasClass( "expanded" )) {
			bottom = memoryMediaHeight
						- commentsHeight
						// The height of the media icons for this memory
						- (commentSection.prev().outerHeight(true) 
							* (commentSection.closest( ".memory-media" ).children().length - 1));
		} else {
			bottom = -1 * (lowerSectionHeight + commentsHeight);
			memoryShift += commentsHeight; // Shift following memories down the same height as the comments that will appear
		}
		// Reposition the comments section, from the side bar to below the relevant memory
		commentSection.css( "bottom", bottom );
		commentSection.toggleClass( "expanded" );

		// Shift the following memories down
		commentSection.closest( ".memory" ).next( ".memory" ).children(0).css( "margin-top", memoryShift );
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	$( ".comment-section > a" ).click(showComments);
	$( ".submit a:last-child" ).click(showComments);
});
