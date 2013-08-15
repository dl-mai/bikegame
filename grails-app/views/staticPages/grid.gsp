<!DOCTYPE html>
<html>
<head>
	<title>LASDASDLASDMASLDMALSD</title>
	<script src="${resource(dir: 'js', file: 'jquery-1.10.2.js')}"></script>
	<script type="text/javascript">
		$(document).ready(function () {

			function buildGrids(gridPixelSize, color, gap, div)
			{
				var canvas = $('#'+div+'').get(0);
				var ctx = canvas.getContext("2d");

				ctx.lineWidth = 0.5;
				ctx.strokeStyle = color;


// horizontal grid lines
				for(var i = 0; i <= canvas.height; i = i + gridPixelSize)
				{
					ctx.beginPath();
					ctx.moveTo(0, i);
					ctx.lineTo(canvas.width, i);
					if(i % parseInt(gap) == 0) {
						ctx.lineWidth = 2;
					} else {
						ctx.lineWidth = 0.5;
					}
					ctx.closePath();
					ctx.stroke();
				}

// vertical grid lines
				for(var j = 0; j <= canvas.width; j = j + gridPixelSize)
				{
					ctx.beginPath();
					ctx.moveTo(j, 0);
					ctx.lineTo(j, canvas.height);
					if(j % parseInt(gap) == 0) {
						ctx.lineWidth = 2;
					} else {
						ctx.lineWidth = 0.5;
					}
					ctx.closePath();
					ctx.stroke();
				}

			}

			buildGrids(10, "#EEEEEE", 50, "myCanvas");

		});
	</script>
</head>

<body>
<p>Canvas Experiment</p>
<canvas id="myCanvas" width="600" height="600" style="border:1px solid #EEE">
	Browser does not support canvas
</canvas>
</body>
</html>