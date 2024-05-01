const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.querySelector(".currency-select-from");
const currencySelectTo = document.querySelector(".currency-select-to");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor ven reais
    const currencyValueConverted = document.querySelector(".currency-value"); //outras moedas


    const dolarToday = 5.2;
    const euroToday = 6.2;
    const bolivarToday = 0.1387;
    const solToday = 0.73;
    const copToday = 0.747;
    const mxntoday = 0.3253;
    const arsToday = 0.00602;
    const clpToday = 0.00533;
    const bobToday = 0.73387;
    const dolarEToday = 5.2;
    const pygToday = 0.00069;


    if (currencySelectTo.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelectTo.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelectTo.value === "bolivar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-VE", {
            style: "currency",
            currency: "VES"
        }).format(inputCurrencyValue / bolivarToday);
    }

    if (currencySelectTo.value === "sol") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-PE", {
            style: "currency",
            currency: "PEN"
        }).format(inputCurrencyValue / solToday);
    }

    if (currencySelectTo.value === "peso-colombiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-co", {
            style: "currency",
            currency: "COP"
        }).format(inputCurrencyValue / copToday);
    }

    if (currencySelectTo.value === "peso-mexicano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-mx", {
            style: "currency",
            currency: "MXN"
        }).format(inputCurrencyValue / mxntoday);
    }

    if (currencySelectTo.value === "peso-argentino") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / arsToday);
    }

    if (currencySelectTo.value === "peso-chileno") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-cl", {
            style: "currency",
            currency: "CLP"
        }).format(inputCurrencyValue / clpToday);
    }

    if (currencySelectTo.value === "boliviano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-bo", {
            style: "currency",
            currency: "BOB"
        }).format(inputCurrencyValue / bobToday);
    }

    if (currencySelectTo.value === "dolar ecuador") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-ec", {
            style: "currency",
            currency: "US$"
        }).format(inputCurrencyValue / dolarEToday);
    }

    if (currencySelectTo.value === "guarany") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-py", {
            style: "currency",
            currency: "PYG"
        }).format(inputCurrencyValue / pygToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(inputCurrencyValue)

        


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelectTo.value === "dolar") {
        currencyName.innerHTML = "Dolar americano";
        currencyImage.src = "./assets/USA.png";
    }

    if (currencySelectTo.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    if (currencySelectTo.value === "bolivar") {
        currencyName.innerHTML = "Bolivar Venezuelano";
        currencyImage.src = "./assets/bolivar.png";
    }

    if (currencySelectTo.value === "sol") {
        currencyName.innerHTML = "Sol Peruano";
        currencyImage.src = "./assets/sol.png";
    }

    if (currencySelectTo.value === "peso-colombiano") {
        currencyName.innerHTML = "Peso Colombiano";
        currencyImage.src = "./assets/cop.png";
    }

    if (currencySelectTo.value === "peso-mexicano") {
        currencyName.innerHTML = "Peso Mexicano";
        currencyImage.src = "./assets/mxn.png";
    }

    if (currencySelectTo.value === "peso-argentino") {
        currencyName.innerHTML = "Peso Argentino";
        currencyImage.src = "./assets/ars.png";
    }

    if (currencySelectTo.value === "peso-chileno") {
        currencyName.innerHTML = "Peso Chileno";
        currencyImage.src = "./assets/clp.png";
    }

    if (currencySelectTo.value === "boliviano") {
        currencyName.innerHTML = "Boliviano";
        currencyImage.src = "./assets/bob.png";
    }

    if (currencySelectTo.value === "dolar-ecuador") {
        currencyName.innerHTML = "dolar-ecuador";
        currencyImage.src = "./assets/us$e.png";
    }

    if (currencySelectTo.value === "guarany") {
        currencyName.innerHTML = "guarany";
        currencyImage.src = "./assets/us$e.png";
    }

    convertValues();
}

currencySelectTo.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);