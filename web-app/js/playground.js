/**
 * Created with JetBrains PhpStorm.
 * User: duylinhludde
 * Date: 08.08.13
 * Time: 08:30
 * To change this template use File | Settings | File Templates.
 */

$(function (){
	var canvas = $('#myCanvas').get(0);
	var context = canvas.getContext('2d');
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var world = new worldObject();
	var radius = canvas.width *10/100;
	world.x = centerX;
	world.y = centerY;
	var draw = function() {
		context.clearRect(0,0,canvas.width,canvas.height);

		drawGrids(10, "#eee", 50);
		drawObjects(10, "#eee", 50);

		context.beginPath();
		context.globalAlpha = 0.5;
		context.arc(world.x,world.y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = '#dd0033';
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = '#ee0011';
		context.stroke();
	}
	var drawGrids = function (gridPixelSize, color, gap)
	{
		context.lineWidth = 0.5;
		context.strokeStyle = color;


// horizontal grid lines
		for(var i = 0; i <= canvas.height; i = i + gridPixelSize)
		{
			context.beginPath();
			context.moveTo(0, i);
			context.lineTo(canvas.width, i);
			if(i % parseInt(gap) == 0) {
				context.lineWidth = 2;
			} else {
				context.lineWidth = 0.5;
			}
			context.closePath();
			context.stroke();
		}

// vertical grid lines
		for(var j = 0; j <= canvas.width; j = j + gridPixelSize)
		{
			context.beginPath();
			context.moveTo(j, 0);
			context.lineTo(j, canvas.height);
			if(j % parseInt(gap) == 0) {
				context.lineWidth = 2;
			} else {
				context.lineWidth = 0.5;
			}
			context.closePath();
			context.stroke();
		}

	}
	var drawObjects = function (gridPixelSize, color, gap) {
		var maxX = 100;
		var maxY = 100;

		function draw2d(value) {
			context.beginPath();
			context.rect(canvas.width * value.latitude / maxX - 5, canvas.height * value.longitude / maxY - 5, 10, 10);
			context.fillStyle = 'green';
			context.fill();
			context.stroke();
		}

		function append3d(value) {
			var t = $('<transform>');
			var x = (value.latitude - 50) / 50 * 20;
			var y = (value.longitude -50) / 50 * 20;
			t.attr("translation", x + " " + 0 + " " + y);
			t.attr("scale", 0.3 + " " + 0.3 + " " + 0.3 );

			var s = $('<shape>');
			var app = $('<appearance>');
			var mat = $('<material>');

			app.append(mat);
			s.append(app);
			t.append(s);

			var b = $('<box>');

			s.append(b);
			t.attr("id", value.id);
			t.attr("data-role", "thing-object");

			$('#root').append(t);

			return false;
		}


//		$.each(world.drawedList, function (index, value) {
//			var inArray = false;
//
//			$.each(world.objectList, function (indexOfDrawed, drawedObject) {
//				if(drawedObject.id == value.id){
//					inArray = true;
//					console.log("in array");
//				}
//			});
//			if (!inArray) {
//				$("#" + value.id).remove();
//			}
//		});
		var idList = world.objectListIds();
		$('[data-role="thing-object"]').each(function( index ) {
			if (jQuery.inArray(parseInt($(this).attr("id")), idList) == -1) {
				$(this).remove();
			}
		});

		$.each(world.objectList, function (index, value) {
			draw2d(value);
			if (jQuery.inArray(parseInt($(this).attr("id")), idList) != -1) {
				append3d(value);
			}
		});
		world.drawedList = world.objectList;
		console.log(world.drawedList);
	}

		draw();
	$('canvas').keydown(function(e){
		$('#yAxe').val(world.y);
		$('#xAxe').val(world.x);
		switch(e.keyCode) {
			case 65:
				world.move('left');
				break;
			case 83:
				world.move('top');
				break;
			case 68:
				world.move('right');
				break;
			case 87:
				world.move('down');
				break;
			default:
				;
		}
		ajaxCall(world);
	});
	var ajaxCall = function(world) {
		var fbUrl= ajaxAction;
		$.ajax({
			dataType: "json",
			url: fbUrl ,
			data: { x: world.x/canvas.width*100, y: world.y/canvas.height*100, radius: "10" },
			type: 'POST',
			success: function (resp) {
				world.objectList = resp.thingList;
				$('#ajaxData').text(JSON.stringify(resp));
				draw();
			},
			error: function(e){
				alert('shit happes');
				$('#ajaxData').text(e);
			}
		});
	}
});

var worldObject = function() {
	var me = this;
	me.x = 0;
	me.y = 0;
	me.objectList = new Array();
	me.drawedList = new Array();
	me.objectListIds = function() {
		var idList = [];
		$.each(me.objectList, function (index, value) {
			idList.push(value.id);
		});
		return idList;
	};
	me.move = function(direction) {
		switch(direction) {
			case 'left':
				if(me.x == 0) {
					break;
				}
				me.x -= 2;
				break;
			case 'top':
				me.y += 2;
				break;
			case 'right':
				me.x += 2;
				break;
			case 'down':
				if(me.y == 0) {
					break;
				}
				me.y -= 2;
				break;
			default:
				alert('crap');
		}
	};
}
