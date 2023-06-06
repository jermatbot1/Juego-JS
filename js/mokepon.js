function iniciarJuego(){
    let botonMascotasJugador = document.getElementById("boton-mascota")
    botonMascotasJugador.addEventListener("click", seleccionarMascotaJugador)
    }

    function seleccionarMascotaJugador(){
        let inputHipodoge = (document.getElementById("hipodoge"))
        let inputCapipepo = (document.getElementById("capipepo"))
        let inputRatigueya = (document.getElementById("ratigueya"))
        let spanMascotaJugador = (document.getElementById("mascota-jugador"))


        if (inputHipodoge.checked){
            spanMascotaJugador.innerHTML = "Hipodoge"
            alert("seleccionaste a Hipodoge")
        }   else if (inputCapipepo.checked){
            spanMascotaJugador.innerHTML = "Capipepo"
            alert("seleccionaste a Capipepo")
        }   else if (inputRatigueya.checked){
            spanMascotaJugador.innerHTML = "Ratigueya"
            alert("seleccionaste a Ratigueya")
        }
            else{
                alert("NO seleccionaste mascota")
        } 

        seleccionarMascotaEnemigo()
    }
function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        // Hipodoge
        else if (ataqueAleatorio == 2){
            //Capipepo
        else {
            //ratigueya
        }
        }
    }
}
    
functioncaleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

window.addEventListener("load", iniciarJuego)
