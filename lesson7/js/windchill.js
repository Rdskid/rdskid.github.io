function windChill() {
var s = parseInt(document.getElementById("wind").value);
var t = parseInt(document.getElementById("temp").value);
var chill = (35.74 + (.6215 * t) - (35.75 * Math.pow(s, .16)) + (.4274 * Math.pow(s, .16)));
document.getElementById("windchill").innerHTML = "Wind Chill: " + Math.round(chill) + "&#8457";
}