const result = document.querySelector(".result")
const numeroUsuario=document.querySelector(".your-score span")
const numeroMaquina=document.querySelector(".machine-score span")

let usuario=0
let maquina=0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const array = ["pedra", "papel", "tesoura"]
    const sorteio = Math.floor(Math.random() * ((2 - 0) + 1) + 0)

    return array[sorteio]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "DEU EMPATE"
    } else if ((human === "pedra" && machine === "tesoura") ||
        (human === "papel" && machine === "pedra") ||
        (human === "tesoura" && machine === "papel")) {
            usuario++
            numeroUsuario.innerHTML=usuario
            result.innerHTML="VOCÊ GANHOU &#128512"
    } else {
        maquina++
        numeroMaquina.innerHTML=maquina
        result.innerHTML="VOCÊ PERDEU &#128542"
    }
    console.log(human,machine)
}


