/*
🔹 7. Country Search App
API: https://restcountries.com/v3.1/all

Task: Display a list of countries and allow search by country name.
*/

const searchInput = document.getElementById("search") as HTMLInputElement | null;
const resultsContainer = document.getElementById("results") as HTMLDivElement | null;

let countries: any[] = [];


const fetch_country = async () => {
    try {
        const url: string = 'https://restcountries.com/v3.1/all'
        const options: object = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(url, options)
        const data = await response.json()

        countries = data;
        display_countries(countries)

    } catch (err) {
        if (resultsContainer) {
            resultsContainer.innerHTML = "Unable to fetch countries";
        }
        console.log("Unable to fetch the countries: ",err)
    }

}

async function display_countries(list: any[]): Promise<void> {
    if (resultsContainer) {
        resultsContainer.innerHTML = ""
    } 

    list.forEach(country => {
        const div = document.createElement('div')
        div.classList.add("Country")
        div.style.display = "flex"
        div.style.alignItems = "center"
        div.style.margin = "`10px"

        div.innerHTML = `<img src='${country.flags.svg}' style='height: 35px; width: 40px; margin:10px;'></img><span>${country.name.common}</span>`
        resultsContainer?.appendChild(div);
    });

}


searchInput?.addEventListener("input", () => {
    const query = searchInput?.value
    const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    display_countries(filtered);
})

fetch_country()