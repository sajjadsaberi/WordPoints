let dotCounts = 0;
const oneDot = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
const twoDot = ["ت", "ق", "ی"];
const threeDot = ["پ", "ث", "چ", "ش", "ژ"];
const midLetterDot = [];

function Dots() {
  let text = document.getElementById("name").value;
  let splited = text.split("");
  for (let i = 0; i < splited.length; i++) {
    const letter = splited[i];
    if (oneDot.includes(letter)) {
      dotCounts++;
    }
    if (twoDot.includes(letter)) {
      dotCounts += 2;
    }
    if (threeDot.includes(letter)) {
      dotCounts += 3;
    }
    if (midLetterDot.includes(letter) && i !== splited.length - 1) {
      if (splited[i + 1] !== " ") {
        dotCounts += 2;
      }
    }
  }
  alert("تعداد نقطه های کلمات وارد شده : " + dotCounts + " " + "عدد");
  dotCounts = 0 ;
}
const btn = document.getElementById("btn");
btn.addEventListener("click", Dots);

