function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerText = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
  }

  function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById('celsius').value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('result').innerText = fahrenheit + "°F is " + celsius.toFixed(2) + "°C";
  }