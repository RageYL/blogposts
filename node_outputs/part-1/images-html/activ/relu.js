// {{{

"use strict";

// }}}
////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

(() =>
{
	let data    = []
	let options =
	{
		chart:
		{
			width : 300,
			height: 200,
		},

		series: [
		{
			data: data,
		}],

		yAxis:
		{
			min: -2,
			max: 10,
		},

		xAxis:
		{
			min: - 8,
			max: +10,
		},
	};

	////////////////////////////////////////////////////////////////////////////////
	///
	////////////////////////////////////////////////////////////////////////////////

	let min   = options.xAxis.min;
	let max   = options.xAxis.max;
	let width = options.chart.width;

	data.splice(0, data.length, ...dataForFunction(
		(x) => Math.max(x, 0), min, max, width
	));

	Highcharts.chart(insertCanvas()[0],
	{
		...options,
	});

})();
