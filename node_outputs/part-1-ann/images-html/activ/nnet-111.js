// {{{

"use strict";

// }}}
////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

(() =>
{
	let data    = [];
	let canvas  = insertCanvas();
	let options =
	{
		chart:
		{
			width : 400,
			height: 200,
		},

		series: [
		{
			data: data,
		}],

		yAxis:
		{
			min: -1,
			max: +2,
		},

		xAxis:
		{
			min: -10,
			max: +10,
		},
	};

	////////////////////////////////////////////////////////////////////////////////
	///
	////////////////////////////////////////////////////////////////////////////////

	let w1 = 2;
	let w2 = 2;

	$("<div />").appendTo(canvas).slider(
	{
		max  : +20,
		min  : -20,
		slide: (e, ui) =>
		{
			w1 = ui.value;

			chart.series[0].setData(dataForFunction(
				fn, min, max, width
			));
		},
	});

	$("<div />").appendTo(canvas).slider(
	{
		max  : +20,
		min  : -20,
		slide: (e, ui) =>
		{
			w2 = ui.value;

			chart.series[0].setData(dataForFunction(
				fn, min, max, width
			));
		},
	});

	function fn(x)
	{
		let z1 = sigmoid(x  * w1);
		let z2 =        (z1 * w2);

		return z2;
	}

	////////////////////////////////////////////////////////////////////////////////
	///
	////////////////////////////////////////////////////////////////////////////////

	let min   = options.xAxis.min;
	let max   = options.xAxis.max;
	let width = options.chart.width;

	data.splice(0, data.length, ...dataForFunction(
		fn, min, max, width
	));

	let chart = Highcharts.chart($("<div />").appendTo(canvas)[0],
	{
		...options,
	});

})();
