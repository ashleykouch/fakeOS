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

// DOCUMENTS

// open documents from start menu

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

// close documents window with "x"
const closeDocuments = document.getElementById("closeDocuments");

closeDocuments.addEventListener("click", (event) => {
  event.preventDefault();
  documentsWindow.classList.remove("documents-position--display");
});

// NOTEPAD

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

// close notepad window with "x"
const closeNotepad = document.getElementById("closeNotepad");

closeNotepad.addEventListener("click", (event) => {
  event.preventDefault();
  notepadWindow.classList.remove("notepad-position--display");
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

// close internet explorer window with "x"
const closeIE = document.getElementById("closeIE");

closeIE.addEventListener("click", (event) => {
  event.preventDefault();
  IEWindow.classList.remove("ie-position--display");
});

// open and close start menu

const startButton = document.getElementById("startButton");

const openMenu = document.getElementById("startMenu");

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  openMenu.classList.toggle("start-menu__container--display");
});

// // make windows draggable

// dragElement(document.getElementById("internetExplorer"));

// function dragElement(elmnt) {
//   const pos1 = 0,
//     pos2 = 0,
//     pos3 = 0,
//     pos4 = 0;
//   if (document.getElementById(elmnt.id + "Header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = elmnt.offsetTop - pos2 + "px";
//     elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
