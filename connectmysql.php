 <?php
 
	$servername = "localhost";
	$username = "japeaco";
	$password = "root1176";
	$dbname = "fingerprints";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$cookie2 = $_POST["cookie1"];
	$headers2 = $_POST["headers1"];
	$online2 = $_POST["online1"];
	$display2 = $_POST["display1"];
        $depth2 = $_POST["depth1"];
        $aspectRatio2 = $_POST["aspectRatio1"];
        $orientation2 = $_POST["orientation1"];
	$browser2 = $_POST["browser1"];
        $userAgent2 = $_POST["userAgent1"];
        $appVersion2 = $_POST["appVersion1"];
	$os2 = $_POST["os1"];
	$language2 = $_POST["language1"];
	$java2 = $_POST["java1"];
	$cookies2 = $_POST["cookies1"];
	$timezone2 = $_POST["timezone1"];
	$plugins2 = $_POST["plugins1"];
	$track2 = $_POST["track1"];
	$history2 = $_POST["history1"];
	$geolocation2 = $_POST["geolocation1"];
	$processors2 = $_POST["processors1"];
	$antiAliasing2 = $_POST["antiAliasing1"];
	$font2 = $_POST["font1"];
	
	$sql = "INSERT INTO userdata (id, headers, online, display, depth, aspectRatio, orientation, browser, userAgent, appVersion, os, language, java,
				cookies, timezone, plugins, track, history, geolocation, processors,
				antiAliasing, font) 
			VALUES ('$cookie2', '$headers2', '$online2', '$display2', '$depth2', '$aspectRatio2', '$orientation2', '$browser2', '$userAgent2', '$appVersion2', '$os2',
				'$language2', '$java2', '$cookies2', '$timezone2', '$plugins2', '$track2',
				'$history2', '$geolocation2', '$processors2', '$antiAliasing2', '$font2')";

	if ($conn->query($sql) === TRUE) {
		echo "New record created successfully";
	} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
	
?> 
