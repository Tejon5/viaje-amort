
const cero = 0;
const countDate = new Date("Aug 30, 2023 21:30:00");


const countdown = () => {
  let interval = setInterval(() => {
    const now = new Date();
    let gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

 
    const textDay = Math.floor(gap / day);
    document.querySelector(".day").innerHTML = textDay;
    const textHour = Math.floor((gap % day) / hour);
    document.querySelector(".hour").innerHTML = textHour;

    const textMinutes = Math.floor((gap % hour) / minute);
    document.querySelector(".minute").innerHTML = textMinutes;

    const textSeconds = Math.floor((gap % minute) / second);
    document.querySelector(".second").innerHTML = textSeconds;
    if (gap <= 0) {
      clearInterval(interval);
      gap = 0;
      document.querySelector(".day").innerHTML = cero;
      document.querySelector(".hour").innerHTML = cero;
      document.querySelector(".minute").innerHTML = cero;
      document.querySelector(".second").innerHTML = cero;
    }
  },1000);

 
};

countdown();