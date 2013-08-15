<!DOCTYPE html>
<html>
<head>
	<title>LASDASDLASDMASLDMALSD</title>
	<script src="${resource(dir: 'js', file: 'jquery-1.10.2.js')}"></script>
	<script src="${resource(dir: 'js', file: 'playground.js')}"></script>
</head>
<body >
	<label for="xAxe">xAxe</label>
	<input id=xAxe type="text" name="xAxe">

	<label for="yAxe">yAxe</label>
	<input id=yAxe type="text" name="yAxe">
	<div style="margin: 0 auto; width: 800px">
		<canvas id="myCanvas" tabindex="1" width="600" height="600" style="border:1px solid #EEE">
			Browser does not support canvas
		</canvas>
	</div>
</body>
<script type="text/javascript">
	var ajaxAction = "${createLink(controller:'json',action:'mockData')}"
</script>

</html>