<html>
	<head>
		<link type='text/css' rel='stylesheet' href='zBooba.css'/>
	
		<script type='text/javascript' src='zBoobaObj.js'></script>
		<script type='text/javascript'>
			function loadZBooba(){
				var textarea = new zBooba({
					idTextArea: "textarea"
				});
				document.getElementById("testbutton").onclick = function() { textarea.listElement(); };
			}
		</script>
	</head>
	
	<body onload='loadZBooba();'>
		<textarea id='textarea'><h1>Header</h1><h2>Header</h2><p>This is a test.</p></textarea>
		<button id="testbutton">Test</button>
	</body>
</html>