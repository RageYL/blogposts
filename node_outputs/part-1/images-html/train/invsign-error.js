// {{{

"use strict";

// }}}
////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

(() =>
{
	let canvas  = insertCanvas();
	let options =
	{
		chart:
		{
			width : 600,
			height: 300,
		},

		series: [
		{
			name: "Error",
		}],

		yAxis: { min: -2, max: 40 },
		xAxis: { min: -4, max: +4 },
	};

	////////////////////////////////////////////////////////////////////////////////
	///
	////////////////////////////////////////////////////////////////////////////////

	let min   = options.xAxis.min;
	let max   = options.xAxis.max;
	let width = invsignConfig.width;

	options.series[0].data = dataForFunction(
		invsignError, min, max, width
	);

	Highcharts.chart(canvas[0],
	{
		...options,
	});

})();
