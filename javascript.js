function calc() {
  var num2 = parseFloat(document.getElementById("num2").value);
  var num1 = parseFloat(document.getElementById("num1").value);

  var saida = num1 + num2;

  document.getElementById("output").value = saida;
}
