<!DOCTYPE html>
<html>
<head>
	<title>LASDASDLASDMASLDMALSD</title>
	<script src="${resource(dir: 'js', file: 'jquery-1.10.2.js')}"></script>
	<script src="${resource(dir: 'js', file: 'playground.js')}"></script>

	<script type="text/javascript" src="http://www.x3dom.org/download/x3dom.js"></script>
	%{--dirt shit remove later --}%
	<style>
	p.case { clear: both; border-top: 1px solid #888; }
	</style>
	<link rel="stylesheet" type="text/css" href="http://www.x3dom.org/download/x3dom.css" />
	%{--TILL HERE--}%

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

		<x3d id="boxes" showStat="true" x="0px" y="0px" width="600px" height="300px">
			<scene>
				<viewpoint position='4.88104 4.59865 7.4181' orientation='-0.69017 0.723467 -0.0161809 0.735134' ></viewpoint>
				<background DEF='bgnd' transparency='0' skyColor='1 1 1' ></background>
				<transform id="root" translation="0 0 0">
					<shape>
						<appearance><material></material></appearance>
						<sphere ></sphere>
					</shape>
				</transform>
			</scene>
		</x3d>
	</div>

</body>
<script type="text/javascript">
	var ajaxAction = "${createLink(controller:'json',action:'mockData')}"
</script>

</html>