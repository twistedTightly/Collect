var titledPath = "../images/titled-icons/";
var titledIcons = {
	"write": 	{	"black": titledPath + "1_write_icon_black.svg",
					"color": titledPath + "1_write_icon_blue.svg" },
	"location": {	"black": titledPath + "2_visit_icon_black.svg",
					"color": titledPath + "2_visit_icon_blue.svg" },
	"picture": 	{	"black": titledPath + "3_picture_icon_black.svg",
					"color": titledPath + "3_picture_icon_blue.svg" },
	"listen": 	{	"black": titledPath + "4_listen_icon_black.svg",
					"color": titledPath + "4_listen_icon_blue.svg" },
	"connect": 	{	"black": titledPath + "5_connect_icon_black.svg",
					"color": titledPath + "5_connect_icon_blue.svg" }
};
var untitledPath = "../images/icons/";
var regularIcons = {
	"write": 	untitledPath + "narrative_icon_black.svg",
	"location": untitledPath + "location_icon_black.svg",
	"picture": 	untitledPath + "picture_icon_black.svg",
	"listen": 	untitledPath + "sound_icon_black.svg",
	"connect": 	untitledPath + "connections_icon_black.svg"
};

// Replace the header with the "write" section
function showWriteInput(event) {
	$( "#write.row" ).addClass( "show" );
	$( "#add-memory-modal > p" ).removeClass( "show" );

	// Change media icons to have titles and animate
	if ($( "#write.row" ).hasClass( "show" )) {
		$( "li#write" ).children( "img" ).attr( "src", titledIcons["write"]["color"] );
		$( "li#location" ).children( "img" ).attr( "src", titledIcons["location"]["color"] );
		$( "li#picture" ).children( "img" ).attr( "src", titledIcons["picture"]["color"] );
		$( "li#listen" ).children( "img" ).attr( "src", titledIcons["listen"]["color"] );
		$( "li#connect" ).children( "img" ).attr( "src", titledIcons["connect"]["color"] );

		$( "#add-memory-modal > ul li" ).css({
				"height": "42px",
				"width": "71px" 
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
	if (event.target.id !== "write") {
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

function showTitledIcon(event) {
	// The hover effect only occurs if the top inputs haven't been clicked on yet
	if (!$( "#write.row" ).hasClass( "show" )) {
		$( event.target ).children( "img" ).attr( "src", titledIcons[event.target.id]["color"] );
		$( event.target ).css({
				"height": "42px",
				"width": "71px" 
		});
		// Because the titled icons are wider, the margins have to be adjusted in order to
		// keep the icons in place
		if ( event.target.id === "write" ) {
			$( event.target ).next().css( "margin-left", "-30px" );
		} else {
			$( event.target ).css( "margin-left", "-30px" );
			$( event.target ).toggleClass( "bw" );
		}
		$( "p#remember-header" ).css( "padding-top", "10px" );
	}
}

function hideTitledIcon(event) {
	// The hover effect only occurs if the top inputs haven't been clicked on yet
	if (!$( "#write.row" ).hasClass( "show" )) {
		$( event.target ).children( "img" ).attr( "src", regularIcons[event.target.id] );
		$( event.target ).css({
				"height": "27px",
				"width": "auto" 
		});
		// Because the titled icons are wider, the margins have to be adjusted in order to
		// keep the icons in place
		if ( event.target.id === "write" ) {
			$( event.target ).next().css( "margin-left", "0" );
		} else {
			$( event.target ).css( "margin-left", "0" );
			$( event.target ).toggleClass( "bw" );
		}
		$( "p#remember-header" ).css( "padding-top", "25px" );
	}
}

// Attaches listeners to the DOM once it has loaded
$( document ).ready(function() {
	$( "#add-memory-modal > p" ).click(showWriteInput);
	$( "#add-info" ).click(showAdditionalInput);
	$( "#add-memory-modal ul li" ).click(showOptionalInput);
	//$( "#add-memory-modal ul li" ).hover(showTitledIcon, hideTitledIcon);
});
