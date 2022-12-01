const Btn1 = document.querySelector(".btn1");
const Btn2 = document.querySelector(".btn2");
const h2 = document.querySelector(".h2");

Btn1.addEventListener("click", function () {
  const Password = "^^%#jjhuun^^7bnnn&&_yh%#^#ysysunn233";
  let empty = "";
  let PasswordLength = 12;
  for (let i = 0; i < PasswordLength; i++) {
    const random = Math.floor(Math.random() * PasswordLength);
    empty = Password.substring(random, random + 13);
  }
  h2.textContent = empty;
});
Btn2.addEventListener("click", function () {
  navigator.clipboard.writeText(h2.textContent);
});
