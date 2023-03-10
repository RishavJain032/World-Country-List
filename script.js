const numberOfCountries = document.getElementById("numberOfCountries")
numberOfCountries.innerText = `Total Number of countries are ${countries_data.length}`

const countriesName = []
countries_data.map((ele) => {
    countriesName.push(ele.name.toLowerCase())
})

function startingSearchFunction() {
    const countryCardContainer = document.getElementById("countryCardContainer")
    countryCardContainer.innerHTML = ""
    const inputElement = document.getElementById("countryNameInput")
    inputElement.setAttribute("onkeyup", "startingSearchFunction()")

    const input = document.getElementById("countryNameInput").value

    const matchedCountries = []

    countriesName.map((ele) => {
        const hello = ele.startsWith(input.toLowerCase())
        // console.log(hello);
        if (input == "") {   
            countryCardContainer.innerHTML = `
                <div class="card">
                    <p>please enter a word</p>
                </div>
                `
        } else {

            if (hello) {
                matchedCountries.push(ele)
                countryCardContainer.innerHTML += `
                <div class="card">
                    <p>${ele}</p>
                </div>
                `
                const numberOfSearchResults = document.getElementById("numberOfSearchResults")
                numberOfSearchResults.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
            }
        }
    })
}

function searchAnyWordFunction() {
    const countryCardContainer = document.getElementById("countryCardContainer")
    countryCardContainer.innerHTML = ""
    // console.log(countryCardContainer);
    const inputElement = document.getElementById("countryNameInput")
    inputElement.setAttribute("onkeyup", "searchAnyWordFunction()")

    const input = document.getElementById("countryNameInput").value
    const matchedCountries = []

    countriesName.map((ele) => {
        const hello = ele.includes(input.toLowerCase())
        // console.log(hello);
        if (input == "") {
            countryCardContainer.innerHTML = `
                <div class="card">
                    <p>please enter a word</p>
                </div>
                `
        } else {
            if (hello) {
                matchedCountries.push(ele)
                countryCardContainer.innerHTML += `
            <div class="card">
                <p>${ele}</p>
            </div>
            `
                const numberOfSearchResults = document.getElementById("numberOfSearchResults")
                numberOfSearchResults.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
            }
        }

    })
}