function calc(operacao) {
  var num2 = parseFloat(document.getElementById("num2").value);
  var num1 = parseFloat(document.getElementById("num1").value);

  switch (operacao) {
    case "+":
      var saida = num1 + num2;
      break;
    case "-":
      var saida = num1 - num2;
      break;
    case "*":
      var saida = num1 * num2;
      break;
    case "/":
      var saida = num1 / num2;
      break;
  }

  document.getElementById("output").value = saida;
}
