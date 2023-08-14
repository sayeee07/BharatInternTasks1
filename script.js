document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button button").addEventListener("click", clearForm);
    document.querySelector("#celcius input").addEventListener("input", convertFromCelsius);
    document.querySelector("#fahrenheit input").addEventListener("input", convertFromFahrenheit);
    document.querySelector("#kelvin input").addEventListener("input", convertFromKelvin);
});

function convertFromCelsius() {
    var celcius = parseFloat(document.querySelector("#celcius input").value);

    var fahrenheit = (celcius * 9 / 5) + 32;
    var kelvin = celcius + 273.15;

    updateResults(fahrenheit, kelvin);
}

function convertFromFahrenheit() {
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit input").value);

    var celcius = (fahrenheit - 32) * 5 / 9;
    var kelvin = (fahrenheit + 459.67) * 5 / 9;

    updateResults(celcius, kelvin);
}

function convertFromKelvin() {
    var kelvin = parseFloat(document.querySelector("#kelvin input").value);

    var celcius = kelvin - 273.15;
    var fahrenheit = (kelvin * 9 / 5) - 459.67;

    updateResults(celcius, fahrenheit);
}

function updateResults(value1, value2) {
    document.querySelector("#fahrenheit input").value = value1.toFixed(1);
    document.querySelector("#kelvin input").value = value2.toFixed(1);
}

function clearForm() {
    document.querySelector("#celcius input").value = '';
    document.querySelector("#fahrenheit input").value = '';
    document.querySelector("#kelvin input").value = '';
}
