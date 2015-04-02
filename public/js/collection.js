// Move comments HTML to sit just below the lower section of the memory
function showComments() {
	$( ".comment-section" ).click(function(event) {
		var bottom, memoryShift;
		var commentsHeight = $( event.target ).outerHeight();
		var lowerSectionHeight = $( event.target ).closest( ".upper-section" ).next().outerHeight(true);
		var memoryMediaHeight = $( event.target ).closest( ".memory-media" ).outerHeight(true);

		if ($( event.target ).hasClass( "expanded" )) {
			bottom = memoryMediaHeight
						- commentsHeight
						// The height of the media icons for this memory
						- ($( event.target ).prev().outerHeight(true) 
							* ($( event.target ).closest( ".memory-media" ).children().length - 1));
			memoryShift = "40px"; // Standard spacing between memories
		} else {
			bottom = -1 * (lowerSectionHeight + commentsHeight);
			memoryShift = commentsHeight; // Shift following memories down the same height as the comments that will appear
		}
		// Reposition the comments section, from the side bar to below the relevant memory
		$( event.target ).css( "bottom", bottom );
		$( event.target ).toggleClass( "expanded" );

		// Shift the following memories down
		$( event.target ).closest( ".memory" ).next( ".memory" ).children(0).css( "margin-top", memoryShift );
	});
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	showComments();
});
