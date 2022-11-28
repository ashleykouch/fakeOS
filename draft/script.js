// function clockTime() {
//   const today = new Date();
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();

//   //   m = clockTime(m);
//   //   s = clockTime(s);
//   document.querySelector("#clock").innerHTML = h + ":" + m + ":" + s;
// }
// setTimeout(clockTime, 1000);

// /* live clock */

function clock() {
  // We create a new Date object and assign it to a variable called "time".
  var time = new Date(),
    // Access the "getHours" method on the Date object with the dot accessor.
    hours = time.getHours(),
    // Access the "getMinutes" method with the dot accessor.
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
