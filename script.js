// insert live clock in taskbar

function clock() {
  const time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

  document.querySelectorAll(".clock")[0].innerHTML =
    harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = "0" + standIn;
    }
    return standIn;
  }
}
setInterval(clock, 1000);

// const documentHighlight = document.querySelector(".documents-files__input");

// documentHighlight.addEventListener("click",  function () {
//   body.classList.toggle("document-files__input--text--onclick");
// });

/* event listeners */

// syntax: element.addEventListener(event, function, useCapture)

// const docFiles = document.querySelector("#docFiles");

// const docInput = document.querySelector("#docInput");

// docImg.addEventListener("click", () => {
//   const docText = document.querySelector("#docText");

//   docText.style.backgroundColour = "blue";
// });

// also working function

// const docText = document.querySelector(".documents-files__input--text");

// const docImg = document.querySelector(".documents-files__input--img");

// docImg.addEventListener("click", () => {
//   docText.classList.toggle("documents-files__input--text--onclick");
// });

// docText.addEventListener("click", () => {
//   docText.classList.toggle("documents-files__input--text--onclick");
// });

// working function

// const docText = document.querySelector("#docText");

// const docImg = document
//   .querySelector("#docImg")
//   .addEventListener("click", changeColor);

// function changeColor() {
//   docText.classList.toggle("documents-files__input--text--onclick");
//   return false;
// }

// testing

// const docText = document.querySelectorAll(".documents-files__input--text");
// console.dir(docText);

// const docImg = document.querySelectorAll(".documents-files__input--img");
// console.dir(docImg);

const docInput = document.querySelectorAll(".documents-files__input");
console.dir(docInput);

console.log("hello");

docInput.forEach((item) => {
  //   console.log(item.querySelector(".documents-files__input--text").textContent)
  console.log(item.querySelector(".documents-files__input--img").src);
  item.addEventListener("click", () => {
    docInput.forEach((eachFile) => {
      eachFile
        .querySelector(".documents-files__input--text")
        .classList.remove("documents-files__input--text--onclick");
    });
    item
      .querySelector(".documents-files__input--text")
      .classList.toggle("documents-files__input--text--onclick");
  });
});

// docImg.forEach(() => {
//   .addEventListener("click", () => {
//     docText.classList.toggle("documents-files__input--text--onclick");
//   });
// });
