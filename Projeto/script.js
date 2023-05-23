const convert = document.querySelector("button")
const valor = document.querySelector("input")
const opcao = document.querySelector(".option")
const conversorDe = document.querySelector(".conversor-de")

const dolar = 0.20
const euro = 0.19
const libra = 0.16
const bitcoin = 0.0000075

const imprimirTela = () => {
    if (opcao.value === "US$ Dólar americano") {

        if (conversorDe.value === "real") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor.value * dolar)
        }

        if (conversorDe.value === "dolar") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor.value)
        }

        if (conversorDe.value === "euro") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(valor.value);
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor.value * 1.08)
        }
    }

    if (opcao.value === "€ Euro") {

        if (conversorDe.value === "real") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(valor.value * euro);
        }
        if (conversorDe.value === "dolar") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(valor.value * 0.92)
        }

        if (conversorDe.value === "euro") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(valor.value)
        }
    }

    if (opcao.value === "£ Libra") {

        if (conversorDe.value === "real") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valor.value * libra);
        }

        if (conversorDe.value === "dolar") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valor.value * 0.80)
        }

        if (conversorDe.value === "euro") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valor.value * 0.87)
        }
    }

    if (opcao.value === "Bitcoin") {

        if (conversorDe.value === "real") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
            document.querySelector(".dolar").innerHTML = valor.value * bitcoin + " BTC"
        }
        if (conversorDe.value === "dolar") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor.value)
            document.querySelector(".dolar").innerHTML = valor.value * 0.000037 + " BTC"
        }

        if (conversorDe.value === "euro") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(valor.value)
            document.querySelector(".dolar").innerHTML = valor.value * 0.000040 + " BTC"
        }

    }

    if (opcao.value === "real") {

        if (conversorDe.value === "real") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value)
        }
        if (conversorDe.value === "dolar") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value * 4.97)

        }

        if (conversorDe.value === "euro") {
            document.querySelector(".real").innerHTML = new Intl.NumberFormat('de-De', { style: 'currency', currency: 'EUR' }).format(valor.value)
            document.querySelector(".dolar").innerHTML = new Intl.NumberFormat('pt-BR',
                { style: 'currency', currency: 'BRL' }
            ).format(valor.value * 5.37)
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
            document.querySelector(".bandeira").src = "./assets/bitcoin 1.png"
            document.querySelector(".moeda").innerHTML = "Bitcoin"
        }

        if (opcao.value === "real") {
            document.querySelector(".bandeira").src = "./assets/brasil 2.png"
            document.querySelector(".moeda").innerHTML = "Real"
        }

        imprimirTela()
    }

    function converterDe() {
        console.log(conversorDe.value)
        if (conversorDe.value === "real") {
            document.querySelector(".currency").innerHTML = "Real"
            document.querySelector(".flag").src = "./assets/brasil 2.png"
            valor.placeholder = "Valor em Reais"
        }

        if (conversorDe.value === "dolar") {
            document.querySelector(".currency").innerHTML = "Dólar Americano"
            document.querySelector(".flag").src = "./assets/estados-unidos (1) 1.png"
            valor.placeholder = "Valor em Dólares"
        }

        if (conversorDe.value === "euro") {
            document.querySelector(".currency").innerHTML = "Euro"
            document.querySelector(".flag").src = "./assets/Design sem nome 3.png"
            valor.placeholder = "Valor em Euros"
        }

        imprimirTela()
    }

    convert.addEventListener("click", imprimirTela)
    opcao.addEventListener("change", converterMoeda)
    conversorDe.addEventListener("change", converterDe)

