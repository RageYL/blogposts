// {{{

"use strict";

// }}}
////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

(() =>
{
	let canvas = insertCanvas();

	canvas.attr("id", "error-descent");
	canvas.css("display", "none");

	([-2, -3, -4]).forEach(i =>
		 renderInvsignModel(i, $("<div />").appendTo(canvas))
	)

	createCarousel($("#error-descent"));

})();
