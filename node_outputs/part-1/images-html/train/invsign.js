////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////
// {{{

function invsignModel(w)
{
	return (x) => x * w;
}

function invsignError(w)
{
	let error = 0;

	error += Math.pow(invsignModel(w)(-1) - (+1), 2);
	error += Math.pow(invsignModel(w)(+1) - (-1), 2);

	return error;
}

function invsignErrorPoint(w)
{
	return [w, invsignError(w)]
}

// }}}
////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

function renderInvsign(w, canvas = insertCanvas(), something = true)
{
	let min   = invsignOptions.xAxis.min;
	let max   = invsignOptions.xAxis.max;
	let width = invsignConfig.width;

	invsignOptions.series[0].data = dataForFunction(
		invsignModel(w), min, max, width
	);

	return Highcharts.chart(canvas[0],
	{
		..._.merge(invsignOptions,
		{
			chart:
			{
				events:
				{
					load: function()
					{
						if (!something)
							return

						([-1, 1]).forEach((x) =>
						{
							let x1 = this.xAxis[0].toPixels(x);
							let x2 = this.xAxis[0].toPixels(x);
							let y1 = this.yAxis[0].toPixels(invsignModel(-1)(x));
							let y2 = this.yAxis[0].toPixels(invsignModel( w)(x));

							this.renderer
								.path([
									"M", x1, y1,
									"L", x2, y2,
								])
								.attr("zIndex",       Config.zIndex.aboveGrid)
								.attr("stroke-width", 2)
								.attr("stroke",       "red")
								.attr("dashstyle",    "dash")
								.add();
						})
					}
				}
			}
		}),
	});
}

function renderInvsignError(w, canvas = insertCanvas())
{
	dataAdd(invsignErrorData, invsignErrorPoint(w));

	return Highcharts.chart(canvas[0],
	{
		...invsignErrorOptions,
	});
}

function renderInvsignModel(w, canvas = insertCanvas())
{
	canvas.css({
		"display"              : "grid",
		"grid-template-columns": "auto auto",
	});

	renderInvsign     (w, $("<div />").appendTo(canvas));
	renderInvsignError(w, $("<div />").appendTo(canvas));
}

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

const invsignConfig = {
	width : 300,
	height: 200,
};

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

let invsignOptions =
{
	chart:
	{
		width : invsignConfig.width,
		height: invsignConfig.height,
	},

	legend:
	{
		enabled: true,
	},

	series: [
	{
		name               : "prediction",
		enableMouseTracking: false,
	},
	{
		name: "dataset",
		data: [
			[-1, +1],
			[+1, -1],
		],

		marker:
		{
			symbol: "circle",
		},

		lineWidth: 0,
		states   :
		{
			hover:
			{
				lineWidthPlus: 0,
			},
		},
	}],

	yAxis:
	{
		min: -4,
		max: +4,
	},

	xAxis:
	{
		min: -2,
		max: +2,
	},
};

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

let invsignErrorData    = []
let invsignErrorOptions =
{
	chart:
	{
		width : invsignConfig.width,
		height: invsignConfig.height,
	},

	series: [
	{
		data     : invsignErrorData,
		name     : "Error",
		lineWidth: 0,
		states   :
		{
			hover:
			{
				lineWidthPlus: 0,
			},
		},
	}],

	yAxis:
	{
		min  : -2,
		max  : 40,
		title:
		{
			text: "error",
		},
	},

	xAxis:
	{
		min  : -4,
		max  : +4,
		title:
		{
			text: "weight",
		},

		tickInterval: 1,
	},
};
