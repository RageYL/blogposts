// {{{

"use strict";

// }}}
////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

(() =>
{
	let canvas = insertCanvas();

	canvas.attr("id", "gradient-descent");
	canvas.css("display", "none")

	_.range(1.5, -1, -0.4).forEach(i =>
		 renderInvsignDescent(i, $("<div />").appendTo(canvas))
	)

	createCarousel($("#gradient-descent"));

})();
