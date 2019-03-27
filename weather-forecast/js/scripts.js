// Verify whether your javascript is connected
console.log("hello");

var temperatureValue = 1;

// Get the temperature element
// document.getElementById('temp');
// document.getElementById('details');

var temp = document.getElementById("temp");

// Update the temperature element's text to the value in `temp`
// temp.innerText = temperatureValue;
// temp.innerHTML = temperatureValue + "&deg;C";
temp.innerHTML = `${temperatureValue}&deg;C`;

//temp.innerText = "700&deg;C"
//temp.innerHTML = "700&deg;C"
// Get the body element

// Get the paragraph element
var body = document.getElementById('weather-app');
body.style.backgroundColor = "tomato";

var paragraph = document.getElementById('details');
details.innerText = "it's way too hot🔥🔥🔥";
details.style.color = "black";

if (temperatureValue > 50) {
  details.innerText = "it's way too hot🔥🔥🔥";
  body.style.backgroundColor = "tomato";
}
else {
  details.innerText = "it's so cold❄️❄️❄️";
  body.style.backgroundColor = "PALETURQUOISE";
}

// homework:
// Add an If/else condition
// If the temp is 50 deg or higher,
// 1) change the background color to a red backgroundColor
// 2) update the details text to say "it's too hot"
// Otherwise (aka else):
// 1) Change the background color to a blue backgroundColor
// 2) Update the details text to say "it's too cold"
