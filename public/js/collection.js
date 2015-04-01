function showComments() {
	$( ".comment-section" ).click(function(event) {
		// Move comments HTML to sit just below the lower section of the memory
		var bottom;
		var memoryMediaHeight = $( event.target ).closest( ".memory-media" ).outerHeight(true);
		if (!$( event.target ).hasClass( "expanded" )) {
			var lowerSectionHeight = $( event.target ).closest( ".upper-section" ).next().outerHeight(true);
			bottom = -1 * (lowerSectionHeight + $( event.target ).outerHeight(true));
		} else {
			bottom = memoryMediaHeight
						- $( event.target ).outerHeight()
						- ($( event.target ).prev().outerHeight(true) 
							* ($( event.target ).closest( ".memory-media" ).children().length - 1));
		}
		$( event.target ).css( "bottom", bottom );
		$( event.target ).toggleClass( "expanded" );
	});
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	showComments();
});
