

const obtenerPais = (callback, cb2) => {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      callback(data.country_name);
    })
    .catch(error => {
      console.error('Error al obtener la información de geolocalización:', error);
      callback(null);
    });
}

obtenerPais(pais => {
  if (pais==='Argentina'||pais==='Colombia'||pais==='Uruguay'|| pais==='Paraguay' || pais==='Brasil'||pais==='Ecuador' ) {
    let countDate = new Date("Sep 15, 2023 18:45:00");/**17'30 */
    countdown(countDate)
  }else if(pais==='Australia'){
        let countDate = new Date("Sep 16, 2023 7:15:00"); /*6 */
    countdown(countDate)
  }
  else if(pais==='United States'){
    let countDate = new Date("Sep 15, 2023 12:45:00"); /*11.30*/
countdown(countDate)
}
  else if(pais==='Mexico'){
    let countDate = new Date("Sep 15, 2023 16:45:00"); /*19.30*/
countdown(countDate)
}
  else {
    let countDate = new Date("Sep 15, 2023 23:45:00"); /*22.30 */
    countdown(countDate)
  }
});





const cero = 0;
let countDate = new Date("Aug 30, 2023 21:30:00");


const countdown = (countDate) => {
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
      document.querySelector(".day").innerHTML = 'B';
      document.querySelector(".hour").innerHTML = 'O';
      document.querySelector(".minute").innerHTML = 'C';
      document.querySelector(".second").innerHTML = 'A';

    }
  },1000);

 
};
