// {{{

"use strict";

// }}}
////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

const Config =
{
	zIndex:
	{
		aboveGrid: 2,
	},
};

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

Highcharts.setOptions(
{
	chart:
	{
		animation: false,
	},

	title:
	{
		text: null,
	},

	legend:
	{
		enabled: false,
	},

	plotOptions:
	{
		series:
		{
			animation: false,
		},
	},

	xAxis:
	{
		plotLines: [
		{
			value : 0,
			color : "#333333",
			width : 2,
			zIndex: Config.zIndex.aboveGrid,
		}],

		tickLength   : 0,
		gridLineWidth: 1,
		allowDecimals: false,
	},

	yAxis:
	{
		title:
		{
			text: null,
		},

		plotLines: [
		{
			value : 0,
			color : "#333333",
			width : 2,
			zIndex: Config.zIndex.aboveGrid,
		}],

		allowDecimals: false,
	},
});
