function calc(operacao) {
  var num2 = parseFloat(document.getElementById("num2").value);
  var num1 = parseFloat(document.getElementById("num1").value);
  var saida = 0;
  switch (operacao) {
    case "+":
      saida = num1 + num2;
      break;
    case "-":
      saida = num1 - num2;
      break;
    case "*":
      saida = num1 * num2;
      break;
    case "/":
      saida = num1 / num2;
      break;
  }

  document.getElementById("output").value = saida;
  var newOperation =
    "<p>" + num1 + " " + operacao + " " + num2 + " = " + saida + "</p>";
  var history = document.getElementById("history");

  history.innerHTML = newOperation + history.innerHTML;
  if (history.children.length > 10) {
    history.removeChild(history.childNodes[10]);
  }
}
