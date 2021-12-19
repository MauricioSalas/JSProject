//Cambiar Color de Fondo
function cambiarColor(color){
    document.body.style.backgroundColor = color;
}

//Definir el lenguaje de Inicio a Español
window.langActual = 'ES';

//Cambia Texto a Ingles
function cambiarLenguaje(lang){
    if(lang == 'ES'){
        //console.log('LENGUAJE ESPAÑOL');
        document.getElementById('flagLeng').className = 'flag-icon flag-icon-es';
        document.getElementById('inicioLeng').textContent = 'Inicio';
        document.getElementById('kdeQuestion').textContent = '¿Qué es KDE Plasma?';
        document.getElementById('kdeInfo').textContent = 'Es un entorno de escritorio desarrollado por KDE, destacado por ser uno de los más personalizables, ligero, completo y funcional.';
        document.getElementById('buttonDistros').textContent = 'Distribuciones que utilizan KDE Plasma';
        window.langActual = lang;
    }else if(lang == 'EN'){
        //console.log('LENGUAJE INGLÉS');
        document.getElementById('flagLeng').className = 'flag-icon flag-icon-us';
        document.getElementById('inicioLeng').textContent = 'Home';
        document.getElementById('kdeQuestion').textContent = 'What is KDE Plasma?';
        document.getElementById('kdeInfo').textContent = 'Is a desktop environment developed by KDE, well-known for being one of the most customizable, lightweight, complete and functional. ';
        document.getElementById('buttonDistros').textContent = 'Distributions that use KDE Plasma';
        window.langActual = lang;
    }
}

//Muestra el Reloj Digital
function mostrarReloj(){
    var date = new Date();
    
    //HH:MM:SS
    var hora = date.getHours();
    var min = date.getMinutes();
    var seg = date.getSeconds();

    //DD:MM:AA
    var diaSemana = date.getDay();
    var dia = date.getDate();
    var mes = date.getMonth();
    var ano = date.getFullYear();

    //Conversión a Nombres
    if(window.langActual == 'ES'){
        var nombreDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        var nombreMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        //Visualización de Ceros
        hora = (hora < 10) ? "0" + hora : hora;
        min = (min < 10) ? "0" + min : min;
        seg = (seg < 10) ? "0" + seg : seg;

        var time = hora + ":" + min + ":" + seg;
        var day = nombreDias[diaSemana] + ", " + dia + " de " + nombreMeses[mes] + ", " + ano;
    }

    if(window.langActual == 'EN'){
        var nombreDias = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        var nombreMeses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        //Visualización de Ceros
        hora = (hora < 10) ? "0" + hora : hora;
        min = (min < 10) ? "0" + min : min;
        seg = (seg < 10) ? "0" + seg : seg;
        
        var time = hora + ":" + min + ":" + seg;
        var day = nombreDias[diaSemana] + ", " + nombreMeses[mes] + " " + dia +", " + ano;
    }

    document.getElementById('hora').innerText = time;
    document.getElementById('hora').textContent = time;
    document.getElementById('fecha').innerText = day;
    document.getElementById('fecha').textContent = day;
    setInterval(mostrarReloj, 1000);
}

//Camabia Texto por otro
function cambiarTexto(){
    if(document.getElementById('buttonDistros').textContent == 'Distribuciones que utilizan KDE Plasma' || document.getElementById('buttonDistros').textContent == 'Distributions that use KDE Plasma'){
        if(window.langActual == 'ES'){
            document.getElementById('kdeQuestion').textContent = 'Distribuciones que utilizan KDE Plasma';
            document.getElementById('kdeInfo').textContent = 'Manjaro KDE, KUbuntu, KDE Neon (desarrollada por KDE), Debian KDE, Fedora KDE Spin';
            document.getElementById('buttonDistros').textContent = '¿Qué es KDE Plasma?';
        }else if(window.langActual == 'EN'){
            document.getElementById('kdeQuestion').textContent = 'Distributions that use KDE Plasma';
            document.getElementById('kdeInfo').textContent = 'Manjaro KDE, KUbuntu, KDE Neon (developed by KDE), Debian KDE, Fedora KDE Spin';
            document.getElementById('buttonDistros').textContent = 'What is KDE Plasma?';
        }
    }else{
        if(window.langActual == 'ES'){
            document.getElementById('kdeQuestion').textContent = '¿Qué es KDE Plasma?';
            document.getElementById('kdeInfo').textContent = 'Es un entorno de escritorio desarrollado por KDE, destacado por ser uno de los más personalizables, ligero, completo y funcional.';
            document.getElementById('buttonDistros').textContent = 'Distribuciones que utilizan KDE Plasma';
        }else if(window.langActual == 'EN'){
            document.getElementById('kdeQuestion').textContent = 'What is KDE Plasma?';
            document.getElementById('kdeInfo').textContent = 'Is a desktop environment developed by KDE, well-known for being one of the most customizable, lightweight, complete and functional. ';
            document.getElementById('buttonDistros').textContent = 'Distributions that use KDE Plasma';
        }
    }
}