// {{{

"use strict";

// }}}
////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

function renderInvsignDescent(w, canvas = insertCanvas())
{
	dataAdd(invsignDescentData, [w, invsignError(w)]);

	Highcharts.chart(canvas[0],
	{
		...invsignDescentOptions,
	});
}

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

let invsignDescentData    = [];
let invsignDescentOptions =
{
	chart:
	{
		width : 600,
		height: 300,
	},

	series: [
	{
		name: "Error",
		marker:
		{
			enabled: false,
		},

		states:
		{
			hover:
			{
				lineWidth: 0,
			}
		},

		enableMouseTracking: false,
	},
	{
		type: "scatter",
		name: "Error",
		data: invsignDescentData,
	}],

	yAxis: { min: -2, max: 40 },
	xAxis: { min: -4, max: +4 },
};

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

(() =>
{
	let min   = invsignDescentOptions.xAxis.min;
	let max   = invsignDescentOptions.xAxis.max;
	let width = invsignDescentOptions.chart.width;

	invsignDescentOptions.series[0].data = dataForFunction(
		invsignError, min, max, width
	);

})();
