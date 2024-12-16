
const obtenerPais2 = (callback) => {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      callback(data.utc_offset);
    })
    .catch(error => {
      console.error('Error al obtener la información de geolocalización:', error);
      callback(null);
    });
}

/*Variables para las horas
let counter = 0;
let counter2 = 0;
const cuantoescounter = (utc2) => {
  let counter = Math.floor(Math.abs(utc2) / 100);
  let counter2 = (Math.abs(utc2) % 100) / 60;
  if (utc2 < 0) {
    counter = -counter;
    counter2 = -counter2;
  }
  else {
    for (let i = -300; i <= utc2; i += 100) {
      counter++;
    }
 }
  return  counter, counter2 ;
};*/

/*Variables para las horas*/
let state = ''
let utc3 = -300;
let result =  0;
const cuantoescounter = (utc2, utc3) => {
  if(utc2===utc3){
    state = 'igual'
    return result, state
  }
    if(utc2>utc3){
    let num = utc2-utc3;
    result = num/100
    state = 'mayor'
    return result, state
    }
     else if(utc2<utc3){
    let num = utc3-utc2;
    result = num/100
    state = 'menor'
    return result,state
  }
};




obtenerPais2(utc => {
    let utc2 = Number(utc)  
    cuantoescounter(utc2,utc3)
    let countDate = new Date("Jun 16 2025 19:00:00").getTime()/*+utc2*/;/**17'30 */
    countdown(countDate,result,state)
});


const cero = 0;


const countdown = (countDate,result,state) => {
  let interval = setInterval(() => {
    let now = new Date();

    if(state==='igual' || state === 'mayor'){
      now.setHours(now.getHours() - result)
    
    }else if(state==='menor'){
      now.setHours(now.getHours() + result)
    
    }
    let gap = countDate - now;

    const second = 1000 ;
    const minute = second * 60;
    const hour = minute * 60 ;
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
      document.querySelector(".day").innerHTML = 'B';
      document.querySelector(".hour").innerHTML = 'O';
      document.querySelector(".minute").innerHTML = 'C';
      document.querySelector(".second").innerHTML = 'A';

    }
  },1000);

 
};


