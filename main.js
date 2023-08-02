let hours = document.querySelector("#hours");
let minutes = document.querySelector("#Min");
let seconds = document.querySelector("#sec");

setInterval(() => {
  let now = new Date();
  let hour = now.getHours().toString();
  let min = now.getMinutes().toString();
  let sec = now.getSeconds().toString();
  hours.innerHTML = `${hour} :`;
  minutes.innerHTML = `${min} :`;
  seconds.innerHTML = `${sec}`;
}, 1000);
