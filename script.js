function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  //計算処理
  const result = num1 - num2;

  document.getElementById("result").textContent = `計算結果: ${result}`;
}