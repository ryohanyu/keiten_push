function calculate() {
  const num = parseFloat(document.getElementById("num").value);
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);
  const per1 = parseFloat(document.getElementById("per1").value);
  const per2 = parseFloat(document.getElementById("per2").value);
  const per3 = parseFloat(document.getElementById("per3").value);

  //計算処理
  // const result1 = 1 - (1-per1)*(1-per2)*(1-per3);


  // function roundTo(num, digit){
  // const multiplier = Math.pow(10,digits);
  // return Math.round(num * multiplier) / multiplier;
  // }

  const result1 = Math.round((1 - (1 - per1) * (1 - per2) * (1 - per3)) * 1000) / 10;

  let osi = 0;
  let hiki = 0;

  if (num == 1) {
    osi = 1500;
    hiki = -1000;
  }
  else if (num == 2) {
    osi = 1000;
    hiki = -1500;
  }
  else if (num == 3) {
    osi = 0;
    hiki = -3000;
  }


  const result2 = osi * (1 - result1 / 100) - Math.round(per1 * num1 + (1 - per1) * per2 * num2 + (1 - (1 - per1) * (1 - per2)) * per3 * num3) - hiki;

  let result3 = "";
  if (result2 >= 0) {
    result3 = "押し！";
  }
  else {
    result3 = "オリ！";
  }

  document.getElementById("result1").textContent = `合計放銃率: ${result1}%`;
  document.getElementById("result2").textContent = `押し期待値: ${result2}`;
  document.getElementById("result3").textContent = `結論: ${result3}`;
}