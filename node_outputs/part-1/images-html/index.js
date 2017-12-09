
////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

function irange(start, stop, step = 1)
{
	return [..._.range(start, stop, step), stop];
}

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

function argmax(array)
{
	return _.maxBy(_.range(array.length), i => array[i])
}

function argmin(array)
{
	return _.minBy(_.range(array.length), i => array[i])
}

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

function dataAdd(array, data)
{
	if (!array[0] || array[0][0] < data[0])
		return array.push(data);
	return array.unshift(data);
}

function dataForFunction(fn, min, max, width)
{
	return irange(min, max, (max - min) / width).map((x) =>
	{
		return {
			x     : x,
			y     : fn(x),
			marker:
			{
				enabled: false,
			},
		};
	});
}

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////

function createCarousel(root)
{
	root.slick({
		 dots          : true,
		 speed         : 0,
		 autoplay      : true,
		 centerMode    : true,
		 variableWidth : true,
		 variableHeight: true,
		 autoplaySpeed : 1500,
	})

	root.show()
}

////////////////////////////////////////////////////////////////////////////////
///
////////////////////////////////////////////////////////////////////////////////
// TODO: current script for IE T_T

function insertCanvas()
{
	let canvas = $("<div />");
	let script = $(document.currentScript).before(canvas);

	return canvas;
}
