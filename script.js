var box = document.getElementById("color-box");
var buttoN = document.getElementById("change-color-btn");
console.log(box);
console.log(buttoN);

document.addEventListener("DOMContentLoaded", () => {
  var colorBox = document.getElementById("color-box");
  var changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changeColorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
