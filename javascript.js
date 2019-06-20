//delimiter variables
var SEP = ' | ';

document.getElementById("fontCanvas").style.visibility = "hidden";
document.getElementById("antiCanvas").style.visibility = "hidden";

function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } 
	else {
        return Math.abs(a);
    }
}

//creates cookie
function setCookie(cname, cvalue, exdays) 
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//returns cookie
function getCookie(cname) 
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
	
    return "";
}

//checks if new visitor or has visited before
function checkCookie() 
{
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your surname:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
} 

function printHeaders() 
{
	h = "";
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', document.location, false);
	xmlhttp.send(null);
	var headers = xmlhttp.getAllResponseHeaders().toLowerCase();
	
	h += headers;
	
	document.getElementById("headers").innerHTML = h;
	
	return h;
}

//returns if browser online
function printOnline() 
{
	b = "";
	
	b += navigator.onLine;
	
	document.getElementById("online").innerHTML = b;
	
	return b;
}

//returns display information
function printResolution() 
{
	d = "";
	
	if(self.screen)
	{
		
		d += screen.width + "x" + screen.height + SEP + screen.availWidth + SEP + screen.availHeight
			+ SEP + screen.availLeft + SEP + screen.availTop;
	}
	
	document.getElementById("display").innerHTML = d;
	
	return d;
}

function printDepth() 
{
	d = "";
	
	if(self.screen)
	{
		
		d += screen.colorDepth + SEP + screen.pixelDepth;
	}
	
	document.getElementById("depth").innerHTML = d;
	
	return d;
}

function printOrientation() 
{
	d = "";
	
	if(self.screen)
	{		
		d += window.screen.orientation.type;
	}
	
	document.getElementById("orientation").innerHTML = d;
	
	return d;
}

function printAspectRatio()
{
        d = "";
	
	if(self.screen)
	{
		var g = gcd_rec(screen.width, screen.height);
		var ratio = screen.width/g + ":" + screen.height/g;
		
		d += ratio;
	}
	
	document.getElementById("ratio").innerHTML = d;
	
	return d;
}

//returns browser information
function printBrowser() 
{
	b = "";
	
	b += navigator.appName + SEP + navigator.appCodeName + SEP + navigator.product + SEP + navigator.platform + SEP + navigator.cpuCLass;
	
	document.getElementById("browser").innerHTML = b;
	
	return b;
}

//returns browser information
function printUserAgent() 
{
	b = "";
	
	b += navigator.userAgent;
	
	document.getElementById("userAgent").innerHTML = b;
	
	return b;
}

//returns browser information
function printappVersion() 
{
	b = "";
	
	b += navigator.appVersion;
	
	document.getElementById("appVersion").innerHTML = b;
	
	return b;
}

//returns operating system
function printOS() 
{
	o = "";
	
	o += window.navigator.oscpu;
	
	document.getElementById("os").innerHTML = o;

	return o;
}

//returns language of the browser
function printLanguage() 
{
	l = "";
	
	if(typeof(navigator.language) != "undefined")
	{
		l += navigator.language + SEP + navigator.browserLanguage + SEP + navigator.systemLanguage + SEP + navigator.userLanguage;
	}
	
	document.getElementById("language").innerHTML = l;
	
	return l;
}

//returns if java enabled
function printJava() 
{
	j = "";
	
	j += navigator.javaEnabled();
	
	document.getElementById("java").innerHTML = j;

	return j;
}

//returns if cookies enabled
function printCookies() 
{
	c = "";
	
	c += navigator.cookieEnabled;

	document.getElementById("cookies").innerHTML = c;
	
	return c;
}

//returns current time
function printTimezone() 
{
	t = new Date();
	
	document.getElementById("timezone").innerHTML = t;
	
	return t;
}

//list installed plugins
function printPlugins()
{
	var x = navigator.plugins.length; // store the total no of plugins
	var p = "Total plugin installed: "+ x;
	
	if(x == 0)
	{
		p += SEP + "No plugins installed";
	}
	else
	{
		for(var i = 0; i < x; i++)
		{
			p += SEP + navigator.plugins[i].name; 
		}
	}
	
	document.getElementById("plugins").innerHTML = p;
	
	return p;
}

//returns if java enabled
function printDoNotTrack() 
{
	t = "";
	
	var x = navigator.doNotTrack;
	
	if(x == 1)
	{
		t += "DoNotTrack header enabled";
	}
	else
	{
		t += "DoNotTrack header not enabled";
	}
	
	document.getElementById("track").innerHTML = t;

	return t;
}

//returns length of history entries
function printHistory() 
{
	h = "";
	
	h += window.history.length;
	
	document.getElementById("history").innerHTML = h;
	
	return h;
}

var g = "";

function printGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("geolocation").innerHTML = "Geolocation is not supported by this browser.";
		g += "Geolocation is not supported by this browser.";
    }
	
	return g;
}

function showPosition(position) {
    document.getElementById("geolocation").innerHTML = "Latitude: " + position.coords.latitude + SEP + "Longitude: " + position.coords.longitude;
	g += "Latitude: " + position.coords.latitude + SEP + "Longitude: " + position.coords.longitude;
} 

//returns number of logical processor cores
function printProcessors() 
{
	p = "";
	
	p += window.navigator.hardwareConcurrency;
	
	document.getElementById("processors").innerHTML = p;

	return p;
}

//check if there are any non-black pixels
function antiAliasingTest()
{	
	var c = document.getElementById("antiCanvas");
	var ctx = c.getContext("2d");
	ctx.textBaseline = "top";
    ctx.font = "32px Arial";
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";

    ctx.fillText("O", 0, 0);
	
	for (var j = 0; j <= 32; j++) 
	{
        for (var i = 0; i <= 32; i++) 
		{
            var imageData = ctx.getImageData(i, j, 1, 1).data;
            var alpha = imageData[3];

            if (alpha != 255 && alpha != 0) 
			{
				// font-smoothing must be on.
				document.getElementById("antiAliasing").innerHTML = 'Anti-aliasing enabled';
				return true;
			}
		}
	}
    // didn't find any non-black pixels - return false.
	document.getElementById("antiAliasing").innerHTML = 'Anti-aliasing disabled';
	return false;
}

//find fallback font
function fontTest()
{
	f = "";
	
	var c = document.getElementById("fontCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "20px Arial"; //intentionally incorrect font to produce browsers fallback font
	var txt = "Hello World";
	ctx.fillText(txt, 10, 40);
	ctx.fillText("width:" + ctx.measureText(txt).width, 10, 70);
	
	if(ctx.measureText(txt).width == 103)
	{
		document.getElementById("font").innerHTML = 'Arial';
		f+= "Arial";
	}
	else if(ctx.measureText(txt).width == 98.93333435058594)
	{
		document.getElementById("font").innerHTML = 'Times New Roman';
		f += "Times New Roman";
	}
	else if(ctx.measureText(txt).width == 132)
	{
		document.getElementById("font").innerHTML = 'Courier';
		f += "Courier";
	}
	else if(ctx.measureText(txt).width == 114.5)
	{
		document.getElementById("font").innerHTML = 'Verdana';
		f += "Verdana";
	}
	else if(ctx.measureText(txt).width == 108.69999694824219)
	{
		document.getElementById("font").innerHTML = 'Georgia';
		f += "Georgia";
	}
	else if(ctx.measureText(txt).width == 95.41666412353516)
	{
		document.getElementById("font").innerHTML = 'Garamond';
		f += "Garamond";
	}
	else if(ctx.measureText(txt).width == 111.93333435058594)
	{
		document.getElementById("font").innerHTML = 'Comic Sans MS';
		f += "Comic Sans MS";
	}
	else if(ctx.measureText(txt).width == 104.21666717529297)
	{
		document.getElementById("font").innerHTML = 'Trebuchet MS';
		f += "Trebuchet MS";
	}
	else if(ctx.measureText(txt).width == 125.68333435058594)
	{
		document.getElementById("font").innerHTML = 'Arial Black';
		f += "Arial Black";
	}
	else if(ctx.measureText(txt).width == 95.55000305175781)
	{
		document.getElementById("font").innerHTML = 'Impact';
		f += "Impact";
	}
	else if(ctx.measureText(txt).width == 110.61666870117188)
	{
		document.getElementById("font").innerHTML = 'Palatino Linotype';
		f += "Palatino Linotype";
	}
	else if(ctx.measureText(txt).width == 111.98332977294922)
	{
		document.getElementById("font").innerHTML = 'Lucida Sans Unicode';
		f += "Lucida Sans Unicode";
	}
	else if(ctx.measureText(txt).width == 132.5500030517578)
	{
		document.getElementById("font").innerHTML = 'Lucida Console';
		f += "Lucida Console";
	}
	else if(ctx.measureText(txt).width == 102)
	{
		document.getElementById("font").innerHTML = 'Tahoma';
		f += "Tahoma";
	}
	else
	{
		document.getElementById("font").innerHTML = 'Undefined';
		f += "Undefined";
	}

	return f;
}

function sendData() {
	
	var cookie = document.cookie;
	var headers = printHeaders();
	var online = printOnline();
	var display = printResolution();
        var depth = printDepth();
        var aspectRatio = printAspectRatio();
        var orientation = printOrientation();
	var browser = printBrowser();
        var userAgent = printUserAgent();
        var appVersion = printappVersion();
	var os = printOS();
	var language = printLanguage();
	var java = printJava();
	var cookies = printCookies();
	var timezone = printTimezone();
	var plugins = printPlugins();
	var track = printDoNotTrack();
	var history = printHistory();
	var geoloaction = printGeolocation();
	var processors = printProcessors();
	var antiAliasing = antiAliasingTest();
	var font = fontTest();

	var dataString = 'cookie1=' + cookie + '&headers1=' + headers + '&online1=' + online + '&display1=' + display + '&depth1=' + depth + '&aspectRatio1=' + aspectRatio + '&orientation1=' + orientation
		+ '&browser1=' + browser + '&userAgent1=' + userAgent + '&appVersion1=' + appVersion + '&os1=' + os + '&language1=' + language + '&java1=' + java
		+ '&cookies1=' + cookies + '&timezone1=' + timezone + '&plugins1=' + plugins + '&track1=' + track
		+ '&history1=' + history + '&geolocation1=' + geolocation + '&processors1=' + processors + '&antiAliasing1=' + antiAliasing
		+ '&font1=' + font;

	var xhttp = new XMLHttpRequest();
	
	xhttp.open("POST", "connectmysql.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("response").innerHTML = this.responseText;
		}
	};
	
	xhttp.send(dataString);
}





          