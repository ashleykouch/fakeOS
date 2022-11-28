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

// event listener for document files

const docInput = document.querySelectorAll(".documents-files__input");
console.dir(docInput);

docInput.forEach((item) => {
  //   console.log(item.querySelector(".documents-files__input--img").src)
  console.log(item.querySelector(".documents-files__input--text").textContent);
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

// event listener for desktop apps

// const desktopApp = document.querySelectorAll(".desktop__logo");
// console.dir(desktopApp);

// desktopApp.forEach((app) => {
//   console.log(app.querySelector(".desktop__text").textContent);
//   app.addEventListener("click", () => {
//     desktopApp.forEach((eachApp) => {
//       eachApp
//         .querySelector(".desktop__text")
//         .classList.remove("desktop__text--onclick");
//     });
//     app
//       .querySelector(".desktop__text")
//       .classList.toggle("desktop__text--onclick");
//   });
// });

// open documents from start menu
// - identify the issue of it opening multiple items

const openStartDocument = document.getElementById("openDocuments");
console.dir(openStartDocument);

const documentsWindow = document.getElementById("documents");
console.dir(documentsWindow);

openStartDocument.addEventListener("click", () => {
  documentsWindow.classList.toggle("documents-position--display");
});

// open documents from desktop

const openDesktopDocument = document.getElementById("desktopDocuments");

openDesktopDocument.addEventListener("click", () => {
  documentsWindow.classList.toggle("documents-position--display");
});

// open notepad from start menu

const openStartNotepad = document.getElementById("openNotepad");
console.dir(openStartNotepad);

const notepadWindow = document.getElementById("notepad");

openStartNotepad.addEventListener("click", () => {
  notepadWindow.classList.toggle("notepad-position--display");
});

// open notepad from desktop

const openDesktopNotepad = document.getElementById("desktopNotepad");

openDesktopNotepad.addEventListener("click", () => {
  notepadWindow.classList.toggle("notepad-position--display");
});

// open internet explorer from start

const openIE = document.getElementById("internet");

const IEWindow = document.getElementById("internetExplorer");

openIE.addEventListener("click", () => {
  IEWindow.classList.toggle("ie-position--display");
});

// open internet explorer from desktop

const openDesktopIE = document.getElementById("desktopIE");

openDesktopIE.addEventListener("click", () => {
  IEWindow.classList.toggle("ie-position--display");
});

// open and close start menu

const startButton = document.getElementById("startButton");

const openMenu = document.getElementById("startMenu");

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  openMenu.classList.toggle("start-menu__container--display");
});
