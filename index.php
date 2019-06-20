<!DOCTYPE html>
<html>

<head>
    <title>Fingerprinting test</title>
    <link rel="stylesheet" type="text/css" href="style.css">
	<meta charset="utf-8"> 
</head>

<body onload="checkCookie()">

<ul>
  <li><a class="active" href="#home">Home</a></li>
</ul>

<div class="intro">

<p>This terrible looking website was developed by me, James Peacock. I am currently in my third year studying Computer Science at Newcastle University, and am in the midst of writing my dissertation
	on the effectiveness of browser fingerprinting techniques. This is where you come in. I need you to click that shiny orange button below to send me some simple information on your 
	systems configuration. </p>
<p>The process is completely painless; my website will run several JavaScript functions and collect information on that which is outlined below. The results will be sent to me
	and I will use them in the dataset for my dissertation, on which I can make my evaluations. The information will not be used outside of my dissertation project, and I will personally 
	make sure it is destroyed afterwards.</p>
<p>Once the button is clicked you too will be able to see the results below, so you're not missing out.</p>

</div>

<div class="sendDataButton">

<button onclick="sendData()">Send data</button> 

<p id="response"></p>

</div>

<div class="results">

<p>Header information: </p><p id="headers"></p>
 
<p>Are you online?: </p><p id="online"></p>
 
<p>Display resolution: </p><p id="display"></p>

<p>Pixel and color depth: </p><p id="depth"></p>

<p>Aspect ratio: </p><p id="ratio"></p>

<p>Display orientation: </p><p id="orientation"></p>
 
<p>Browser information: </p><p id="browser"></p>

<p>Browser user-agent: </p><p id="userAgent"></p>

<p>App version: </p><p id="appVersion"></p>
 
<p>Operating system: </p><p id="os"></p>
 
<p>Browser language: </p><p id="language"></p>
 
<p>Is Java enabled?: </p><p id="java"></p>
 
<p>Are cookies enabled?: </p><p id="cookies"></p>
 
<p>Time zone: </p><p id="timezone"></p>
 
<p>List of plugins: </p><p id="plugins"></p>
 
<p>DoNotTrack header?: </p><p id="track"></p>
 
<p>Number of pages in history stack: </p><p id="history"></p>
 
<p>Geolocation: </p><p id="geolocation"></p>
 
<p>Number of logical processor: </p><p id="processors"></p>

<p>Anti-aliasing enabled?: </p><p id="antiAliasing"></p>

<p>Fallback font: </p><p id="font"></p>

<canvas id="antiCanvas" width="35" height="35" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<canvas id="fontCanvas" width="250" height="100" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="javascript.js"></script> 

</body>
</html>