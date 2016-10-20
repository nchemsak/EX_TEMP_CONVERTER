function toCelsius (enter) {
	var cel = (enter - 32) * 5 / 9;
	return cel.toFixed(2) + " Celsius";
}
function toFahrenheit (enter) {
	var far = (enter * 9/5) + 32;
	return far.toFixed(2) + " Fahrenheit";
}
// Get a reference to the button element in the DOM
var convert = document.getElementById("startingTemp");
var output = document.getElementById("output");

//temp function
function temp(click) {
	// Fahrenheit
	if (document.getElementById("f").checked) {
		var temper = toCelsius(startingTemp.value);
		var temper2 = parseInt(temper);
	//Fahrenheit colors
		if (temper2 > 32) {output.className = "red";}
		else if (temper2 < 0) {output.className = "blue";}
		else {output.className = "green";}
			output.innerHTML = temper;}
	//celsius
	else if (document.getElementById("c").checked) {
		var temper = toFahrenheit(startingTemp.value);
		var temper2 = parseInt(temper);
		output.innerHTML = temper;
	// celsius colors
		if (temper2 > 90) {output.className = "red";}
		else if (temper2 < 32) {output.className = "blue";}
		else {output.className = "green";}
	}
}

// SUBMIT BUTTON
var button = document.getElementById("converter");
converter.addEventListener("click", temp);

// RESET BUTTON
resetButton.addEventListener("click", clear);
	function clear() {
		document.getElementById("myForm").reset();
	}
resetButton.addEventListener("click", clear2);
	var outputEl = document.getElementById("output")
	function clear2(clicker) {
		var del = clicker.target.innerHTML;
		outputEl.innerHTML = " ";
	}