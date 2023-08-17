const countdown = () =>{
    //con esta funcion determinamos la fecha de referancia sobre la cual se va a determinar el countdown
    const countDate = new Date('Aug 23, 2023 21:30:00').getTime()

    //con esta funcion determinamos la fecha de ahora
    const now = new Date().getTime()

    //El gap es la diferencia entre los valores arriba preestablecidos para que se ejecute el countdown
    const gap = countDate-now
   


    // se definen las variables propias para manejar el tiempo
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    //Calculamos lo que va a mostrar
    const textDay = Math.floor(gap/day);
    document.querySelector('.day').innerHTML = textDay;

    //esta es la manera en que se debe contemplar como se debe dividir para tener una fecha determinada
    //se toma el valor restante y luego se lo divide por las horas
    const textHour = Math.floor((gap%day)/hour);
    document.querySelector('.hour').innerHTML = textHour;

    const textMinutes = Math.floor((gap%hour)/minute);
    document.querySelector('.minute').innerHTML = textMinutes;

    const textSeconds = Math.floor((gap%minute)/second);
    document.querySelector('.second').innerHTML =  textSeconds;

}

setInterval(() => {
    countdown();
}, 1000);


