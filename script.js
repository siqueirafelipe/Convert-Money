const button = document.getElementById("button-convert")
const selectConvertTo = document.getElementById("select-convert-to")
const selectConvertFrom = document.getElementById("select-convert-from")

const dolar = 5.25
const euro = 5.64

hideOptions = () => {
    if (selectConvertFrom.value === "R$ Real Brasileiro") {

        document.getElementById("option-real").style.display = "none";

        document.getElementById("option-euro").style.display = "block";

        document.getElementById("option-dolar").style.display = "block";

        document.getElementsByName("input-currency")[0].placeholder = 'R$ 10.000,00'

        function k(i) {
            var v = i.value.replace(/\D/g,'');
            v = (v/100).toFixed(2) + '';
            v = v.replace(".", ",");
            v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            i.value = v;
        }

        
    } else if (selectConvertFrom.value === "US$ Dólar Americano") {

        document.getElementById("option-dolar").style.display = "none";

        document.getElementById("option-real").style.display = "block";

        document.getElementById("option-euro").style.display = "block";

        document.getElementsByName("input-currency")[0].placeholder = 'US$ 10.000,00'

    } else if (selectConvertFrom.value === "€ Euro") {

        document.getElementById("option-euro").style.display = "none";

        document.getElementById("option-dolar").style.display = "block";

        document.getElementById("option-real").style.display = "block";

        document.getElementsByName("input-currency")[0].placeholder = '10.000,00 €'
    }

    if (selectConvertTo.value === "R$ Real Brasileiro") {

        document.getElementById("option-real-convert-from").style.display = "none";

        document.getElementById("option-euro-convert-from").style.display = "block";

        document.getElementById("option-dolar-convert-from").style.display = "block";

    } else if (selectConvertTo.value === "US$ Dólar Americano") {

        document.getElementById("option-dolar-convert-from").style.display = "none";

        document.getElementById("option-real-convert-from").style.display = "block";

        document.getElementById("option-euro-convert-from").style.display = "block";

    } else if (selectConvertTo.value === "€ Euro") {

        document.getElementById("option-euro-convert-from").style.display = "none";

        document.getElementById("option-dolar-convert-from").style.display = "block";

        document.getElementById("option-real-convert-from").style.display = "block";
    }
}

convertValues = () => {
    const inputCurrency = document.getElementById("input-currency").value
    const valueToConvert = document.getElementById("value-to-convert")
    const convertedCurrency = document.getElementById("converted-value")

    if (selectConvertFrom.value === "R$ Real Brasileiro" && selectConvertTo.value === "US$ Dólar Americano") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency / dolar)

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency)
    }

    if (selectConvertFrom.value === "R$ Real Brasileiro" && selectConvertTo.value === "€ Euro") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency / euro)

        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency)
    }

    if (selectConvertFrom.value === "US$ Dólar Americano" && selectConvertTo.value === "R$ Real Brasileiro") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format((dolar * inputCurrency))

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency)
    }

    if (selectConvertFrom.value === "US$ Dólar Americano" && selectConvertTo.value === "€ Euro") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format((inputCurrency * dolar) / euro)

        valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency)
    }

    if (selectConvertFrom.value === "€ Euro" && selectConvertTo.value === "R$ Real Brasileiro") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(euro * inputCurrency)

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency)
    }

    if (selectConvertFrom.value === "€ Euro" && selectConvertTo.value === "US$ Dólar Americano") {
        convertedCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format((inputCurrency * euro) / dolar)

        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency)
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById("converted-currency")
    const currencyImage = document.getElementById("usa-flag")


    if (selectConvertTo.value === "€ Euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImage.src = "./assets/euro.svg"
    }

    if (selectConvertTo.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "US$ Dólar Americnao"
        currencyImage.src = "./assets/dolar.svg"
    }

    if (selectConvertTo.value === "R$ Real Brasileiro") {
        currencyName.innerHTML = "R$ Real"
        currencyImage.src = "./assets/real.svg"
    }

    convertValues()

}

changeCurrencyToConvert = () => {

    const currencyToConvert = document.getElementById("currency-to-convert")
    const currencyImageToConvert = document.getElementById("img-to-convert")

    if (selectConvertFrom.value === "R$ Real Brasileiro") {
        currencyToConvert.innerHTML = "R$ Real"
        currencyImageToConvert.src = "./assets/real.svg"
    }

    if (selectConvertFrom.value === "€ Euro") {
        currencyToConvert.innerHTML = "€ Euro"
        currencyImageToConvert.src = "./assets/euro.svg"
    }

    if (selectConvertFrom.value === "US$ Dólar Americano") {
        currencyToConvert.innerHTML = "US$ Dólar Americano"
        currencyImageToConvert.src = "./assets/dolar.svg"
    }

    convertValues()
}

document.getElementById("option-dolar-convert-from").style.display = "none"
document.getElementById("option-real").style.display = "none"

button.addEventListener("click", convertValues)
selectConvertTo.addEventListener("change", changeCurrency)
selectConvertFrom.addEventListener("change", hideOptions)
selectConvertFrom.addEventListener("change", changeCurrencyToConvert)