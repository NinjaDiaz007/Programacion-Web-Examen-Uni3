let reloj = document.getElementById('tiempo');

function TiempoActual() {
    let tiempos = new Date();
    var ampm;

    let Horas = tiempos.getHours(),
        Minutos = tiempos.getMinutes(),
        Segundos = tiempos.getSeconds();
        
    //Evitar los 0 o numeros invalidos
    if(Horas<10){
        Horas = "0"+Horas;
    }
    if(Minutos<10){
        Minutos = "0"+Minutos;
    }
    if(Segundos<10){
        Segundos = "0"+Segundos;
    }

    //Condicion para que la horas sean de 12 horas
    if(Horas >= 12){
        Horas = Horas -12;
        ampm = "PM";
    }

    //Convertir las cero horas en 12
    if(Horas == 0){
        Horas = 12;
        ampm = "AM";
    }

    reloj.textContent = Horas+":"+Minutos+":"+Segundos+" "+ampm;
}

setInterval(() => {
    TiempoActual();
},  1000);