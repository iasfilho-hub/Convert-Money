const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".valor-convertido")
const currencySelectConvert = document.querySelector(".valor-a-converter")
const inputCurrencyValue = document.querySelector(".input-currency").value


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const currencySelect = document.querySelector(".valor-convertido")
    const currencySelectConvert = document.querySelector(".valor-a-converter")


    /* var real */
    const dolar = 5.2
    const euro = 6.2
    const libra = 7.17

    /* var dolar */
    const deuro = 1.17
    const dlibra = 1.34
    const dreal = 0.18

    /* var euro */
    const edolar = 0.85
    const elibra = 1.15
    const ereal = 0.16

    /* var libra */
    const ldolar = 0.74
    const leuro = 0.87
    const lreal = 0.14

    
    /* Alerta de Erro */
    if (currencySelectConvert.value == currencySelect.value) {
        alert("Não é possível converter para a mesma moeda. Altere o valor!")
        currencyValueToConvert.innerHTML = "Erro"
        currencyValueConverted.innerHTML = "Erro"
        return
    }

    /* Valor Real */
    if (currencySelectConvert.value == "real") {
        if (currencySelect.value == "dolar")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolar);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "euro")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euro);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "libra")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libra);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    /* Valor Dolar */
    if (currencySelectConvert.value == "dolar") {
        if (currencySelect.value == "real")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / dreal);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "euro")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / deuro);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "libra")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / dlibra);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }

    /* Valor Euro */
    if (currencySelectConvert.value == "euro") {
        if (currencySelect.value == "real")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / ereal);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "dolar")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / edolar);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "libra")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / elibra);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }        

    /* Valor Libra */
    if (currencySelectConvert.value == "libra") {
        if (currencySelect.value == "real")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / lreal);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "dolar")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / ldolar);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        if (currencySelect.value == "euro")
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / leuro);
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyNameFirst = document.getElementById("currency-first")
    const currencyImg = document.querySelector(".currency-img")
    const currencyImag = document.querySelector(".currency-imag")



    /*Alterar converter de */

    if (currencySelectConvert.value == "real") {
        currencyNameFirst.innerHTML = "Real"
        currencyImag.src = "./assets/real.png"
    }

    if (currencySelectConvert.value == "dolar") {
        currencyNameFirst.innerHTML = "Dólar"
        currencyImag.src = "./assets/dolar.png"
    }

    if (currencySelectConvert.value == "euro") {
        currencyNameFirst.innerHTML = "Euro"
        currencyImag.src = "./assets/euro.png"
    }

    if (currencySelectConvert.value == "libra") {
        currencyNameFirst.innerHTML = "Libra"
        currencyImag.src = "./assets/libra.png"
    }


    /*Alterar converter para */

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }
    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
currencySelectConvert.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)