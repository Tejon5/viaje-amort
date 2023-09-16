
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

/*Variables para las horas*/
let counter = 0;
let counter2 = 0;
const cuantoescounter=(utc2)=>{
  if(utc2===-300){
    return counter, counter2;
  }
  else if(utc2<-300){
    for(let i=utc2; i<=-300 ; i++){
      i+=i+100;
      counter2=counter2+1;
    }
    return counter, counter2;
  }

  else{
    for(let i=-300; i<=utc2; i++){
      i=i+100;
      counter = counter+1
    }
    return counter, counter2;
  }
}


obtenerPais2(utc => {
    let utc2 = Number(utc)  
    cuantoescounter(utc2)
    let countDate = new Date("Sep 19, 2023 18:45:00").getTime()/*+utc2*/;/**17'30 */
    countdown(countDate,counter,counter2)
});


const cero = 0;
/*let countDate = new Date("Aug 30, 2023 21:30:00").getTime();*/


const countdown = (countDate,counter, counter2) => {
  let interval = setInterval(() => {
    const now = new Date();
    now.setHours(now.getHours() - counter + counter2)
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


