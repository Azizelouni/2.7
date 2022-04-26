<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>testjavascript</title>
<script>
var x = false;
function changecolors(){
var color=(x)?"black":"white"; //If X == true, then set to green, if false then blue
document.body.style.background = color; //Set color
x=!x; //Invert X
}
</script>
</head>



<body onload="setInterval(changecolors,1000)">
<h1>JOUR ET NUIT</h1>
</body>
</html>