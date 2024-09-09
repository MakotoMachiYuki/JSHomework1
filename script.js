const nilai = document.getElementById("nilai");
const convert = document.getElementById("convert");
const resultConverter = document.getElementById("resultConverter");
const inputConvert = document.getElementById("beforeConverted");
const buttons = document.querySelectorAll(".math");
const bil1 = document.getElementById("bil1");
const bil2 = document.getElementById("bil2");
const minus = document.getElementById("-");
const times = document.getElementById("x");
const divide = document.getElementById("/");

inputConvert.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("convert").click();
  }
});

convert.addEventListener("click", () => {
  const beforeConverted = document.getElementById("beforeConverted").value;

  converter(beforeConverted);
});

buttons.forEach((operators) => {
  operators.addEventListener("click", () => {
    const value1 = Number(document.getElementById("bil1").value);
    const value2 = Number(document.getElementById("bil2").value);

    calculator(value1, value2, operators);
  });
});

bil1.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    bil2.focus();
  }
});

bil2.addEventListener("keypress", function (event) {
  if (event.key === "+") {
    event.preventDefault();
    document.getElementById("+").click();
  } else if (event.key === "-") {
    event.preventDefault();
    document.getElementById("-").click();
  } else if (event.key === "*" || event.key === "x" || event.key === "X") {
    event.preventDefault();
    document.getElementById("x").click();
  } else if (event.key === "/" || event.key === "÷") {
    event.preventDefault();
    document.getElementById("/").click();
  }
});

function calculator(value1, value2, operators) {
  let operator = operators.innerText;
  let resultMath = 0;
  if (operator == "+") {
    resultMath = value1 + value2;
  } else if (operator == "-") {
    resultMath = value1 - value2;
  } else if (operator == "X") {
    resultMath = value1 * value2;
  } else if (operator == "÷") {
    resultMath = value1 / value2;
  }

  document.getElementById("hasil").value = resultMath;
}

function converter(value) {
  var checkNumber = betweenHundred(value);
  var check = errorMessage(checkNumber);

  if (check === false) {
    return;
  }
  var resultNumber = "";

  if (value >= 0 && value <= 40) {
    resultNumber = "E";
  } else if (value >= 41 && value <= 55) {
    resultNumber = "D";
  } else if (value >= 56 && value <= 70) {
    resultNumber = "C";
  } else if (value >= 71 && value <= 80) {
    resultNumber = "B";
  } else if (value >= 81 && value <= 100) {
    resultNumber = "A";
  }
  resultConverter.textContent = `Result is ${resultNumber}`;
}

function errorMessage(checkNumber) {
  if (checkNumber === "over100") {
    resultConverter.textContent = "Number is over 100!";
    return false;
  } else if (checkNumber === "below0") {
    resultConverter.textContent = "Number is below 0";
    return false;
  } else if (checkNumber === "empty") {
    resultConverter.textContent = "No Value!";
    return false;
  } else {
    return true;
  }
}

function betweenHundred(value) {
  if (value > 100) {
    return "over100";
  } else if (value < 0) {
    return "below0";
  } else if (value == "") {
    return "empty";
  } else {
    return true;
  }
}
