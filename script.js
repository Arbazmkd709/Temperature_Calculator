const convertButton = document.getElementById("convertButton");
const tempInput = document.getElementById("tempInput");
const unitInput = document.getElementById("unitInput");
const resultInput = document.getElementById("resultInput");
const resultUnit = document.getElementById("resultUnit");

convertButton.addEventListener("click", function() {
  const temp = parseFloat(tempInput.value);
  const unit = unitInput.value;
  let result;
  let resultUnitValue;
  
  if (unit === "celsius") {
    result = (temp * 9 / 5) + 32;
    resultUnitValue = "fahrenheit";
  } else if (unit === "fahrenheit") {
    result = (temp - 32) * 5 / 9;
    resultUnitValue = "celsius";
  } else if (unit === "kelvin") {
    result = temp - 273.15;
    resultUnitValue = "celsius";
  }
  
  resultInput.value = result.toFixed(2);
  resultUnit.value = result
