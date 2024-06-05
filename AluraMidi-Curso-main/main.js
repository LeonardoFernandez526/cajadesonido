function playSonido(idElementoAudio){
document.querySelector(idElementoAudio).play();
    
}

const listadeTeclas = document.querySelectorAll(`.tecla`);



for(let contador = 0; contador < listadeTeclas.length; contador++){
    const tecla = listadeTeclas[contador]
    const instrumento =tecla.classList[1]

    const idAudio = `#sonido_${instrumento}`;

   tecla.onclick = function (){
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        if(evento.code === `Space` || evento.code === `Enter`){
            tecla.classList.add(`activa`);
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
}


}




//document.querySelector(`.tecla_pom`).onclick = playSonido
