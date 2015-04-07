var path = "../images/titled-icons/";
var titledIcons = {
	"write": 	path + "1_write_icon_blue.svg",
	"location": path + "2_visit_icon_blue.svg",
	"picture": 	path + "3_picture_icon_blue.svg",
	"listen": 	path + "4_listen_icon_blue.svg",
	"connect": 	path + "5_connect_icon_blue.svg"
};

// Replace the header with the "write" section
function showWriteInput(event) {
	$( "#write.row" ).addClass( "show" );
	$( "#add-memory-modal > p" ).removeClass( "show" );

	// Change media icons to have titles and animate
	if ($( "#write.row" ).hasClass( "show" )) {
		$( "li#write" ).children( "img" ).attr( "src", titledIcons["write"] );
		$( "li#location" ).children( "img" ).attr( "src", titledIcons["location"] );
		$( "li#picture" ).children( "img" ).attr( "src", titledIcons["picture"] );
		$( "li#listen" ).children( "img" ).attr( "src", titledIcons["listen"] );
		$( "li#connect" ).children( "img" ).attr( "src", titledIcons["connect"] );
		$( "#add-memory-modal > ul li" ).css({
				"height": "39px",
				"width": "47px" 
		});

		$( "#add-memory-modal li:not(:last-child)" ).css( "margin-right", "154px" );
	} else {
		$( "#add-memory-modal li:not(:last-child)" ).css( "margin-right", "100px" );
	}
}

// Show or hide the "additional information" form inputs
function showAdditionalInput(event) {
	$( event.target ).toggleClass( "show" );
	if ($( event.target ).hasClass( "show" )) {
		$( event.target ).children( "span" ).text("-");
		$( "#submit " ).css( "margin-top", "auto" );
	} else {
		$( event.target ).children( "span" ).text("+");
		$( "#submit " ).css( "margin-top", "-150px" );
	}
}

// Expand/collapse the media section corresponding to the icon that was clicked
function showOptionalInput(event) {
	var optionalInputId = ".row#" + event.target.id;
	$( optionalInputId ).toggleClass( "show" );
	if (event.target.id != "write") {
		$( event.target ).toggleClass( "bw" );
	}

	if ($( ".optional-input" ).hasClass( "show" )) {
		$( "#optional" ).css( "margin-bottom", "104px" );
	} else {
		$( "#optional" ).css( "margin-bottom", "0px" );
	}

	// If any media is added, the "write" section will show up in place of the header
	if (!$( "#write" ).hasClass( "show" )) {
		showWriteInput();
	}
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	$( "#add-memory-modal > p" ).click(showWriteInput);
	$( "#add-info" ).click(showAdditionalInput);
	$( "#add-memory-modal ul li" ).click(showOptionalInput);
});
