// const Btn1 = document.querySelector(".btn1");
// const Btn2 = document.querySelector(".btn2");
// const h2 = document.querySelector(".h2");

// Btn1.addEventListener("click", function () {
//   const Password = "^^%#jjhuun^^7bnnn&&_yh%#^#ysysunn233";
//   let empty = "";
//   let PasswordLength = 12;
//   for (let i = 0; i < PasswordLength; i++) {
//     const random = Math.floor(Math.random() * PasswordLength);
//     empty = Password.substring(random, random + 13);
//   }
//   h2.textContent = empty;
// });
// Btn2.addEventListener("click", function () {
//   navigator.clipboard.writeText(h2.textContent);
// });

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2628430868msha458838465f332fp14cf7djsn7696ae8601c9",
    "X-RapidAPI-Host": "phonenumbervalidatefree.p.rapidapi.com",
  },
};

fetch(
  "https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp?number=%2B+2348088362315&country=UY",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
