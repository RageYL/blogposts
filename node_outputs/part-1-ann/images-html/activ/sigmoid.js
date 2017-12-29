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
			min: 0,
			max: 1,
		},

		xAxis:
		{
			min: -6,
			max: +6,
		},
	};

	////////////////////////////////////////////////////////////////////////////////
	///
	////////////////////////////////////////////////////////////////////////////////

	let min   = options.xAxis.min;
	let max   = options.xAxis.max;
	let width = options.chart.width;

	data.splice(0, data.length, ...dataForFunction(
		(x) => 1 / (1 + Math.exp(-x)), min, max, width
	));

	Highcharts.chart(insertCanvas()[0],
	{
		...options,
	});

})();
