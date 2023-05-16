const convert = document.querySelector("button")
const valor = document.querySelector("input")
const opcao = document.querySelector(".option")

const dolar = 0.20
const euro = 0.19
const libra = 0.16
const bitcoin = 0.0000075

const imprimirTela = () => {
    if (opcao.value === "US$ Dólar americano") {
        if (valor.value) {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor.value * dolar)
        } else {
            alert("Coloque um valor em Reais")
        }
    }

    if (opcao.value === "€ Euro") {
        if (valor.value) {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(valor.value * euro);
        } else {
            alert("Coloque um valor em Reais")
        }
    }

    if (opcao.value === "£ Libra") {
        if (valor.value) {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valor.value * libra);
        } else {
            alert("Coloque um valor em Reais")
        }
    }

    if (opcao.value === "Bitcoin") {
        if (valor.value) {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
            document.querySelector(".dolar").innerHTML = valor.value * bitcoin + " BTC"
        } else {
            alert("Coloque um valor em Reais")
        }

    }

}

const converterMoeda = () => {
    if (opcao.value === "€ Euro") {
        document.querySelector(".bandeira").src = "./assets/Design sem nome 3.png"
        document.querySelector(".moeda").innerHTML = "Euro"
    }

    if (opcao.value === "US$ Dólar americano") {
        document.querySelector(".bandeira").src = "./assets/estados-unidos (1) 1.png"
        document.querySelector(".moeda").innerHTML = "Dólar Americano"
    }

    if (opcao.value === "£ Libra") {
        document.querySelector(".bandeira").src = "./assets/libra 1.png"
        document.querySelector(".moeda").innerHTML = "Libra"
    }

    if (opcao.value === "Bitcoin") {
        document.querySelector(".bandeira").src ="./assets/bitcoin 1.png" 
        document.querySelector(".moeda").innerHTML = "Bitcoin"
    }

    imprimirTela()
}

convert.addEventListener("click", imprimirTela)
opcao.addEventListener("change", converterMoeda)

