function showComments() {
	$( ".comment-section" ).click(function(event) {
		// Move comments HTML to sit just below the lower section of the memory
		$( event.target ).toggleClass( "expanded" );

		/*var bottom;
		if ($( event.target ).hasClass( "expanded" )) {
			var lowerSectionHeight = $( event.target ).closest( ".upper-section" ).next().outerHeight(true);
			var commentsHeight = $( event.target ).outerHeight(true);
			bottom = -1 * (lowerSectionHeight + commentsHeight);
		} else {
			bottom = $( ".memory-media img" ).outerHeight * ($( ".memory-media > *" ).length - 1);
		}
		$( event.target ).css( "bottom", bottom );*/
	});
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	showComments();
});
