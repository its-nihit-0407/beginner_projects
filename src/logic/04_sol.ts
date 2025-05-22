/*
🔹 4. Weather App
API: https://openweathermap.org/api (requires API key)

Task: Take city name as input and display current weather (temp, description).

🔹 5. Currency Converter
API: https://api.exchangerate-api.com/

Task: Convert amount between two selected currencies.

🔹 6. GitHub User Finder
API: https://api.github.com/users/{username}

Task: Enter GitHub username and display their avatar, name, public repos, and followers.

🔹 7. Country Search App
API: https://restcountries.com/v3.1/all

Task: Display a list of countries and allow search by country name.


*/


const weather_status = async (city: string, units: string = "metric") => {
    try {
        const API_KEY: string = "731e20a3b37b8196f410ab6d6346acdf";
        const fetch_url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

        const response = await fetch(fetch_url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();

    } catch (err) {
        console.error("Error fetching weather:", err);
        alert("Failed to fetch weather. Check the console.");
    }
};

const display_weather = async () => {
    const city = (document.getElementById("city") as HTMLInputElement)?.value ?? "";

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const data = await weather_status(city) ?? {};
    console.log(data)

    const city_temperature = data.main?.temp_max ?? "N/A";
    const city_weather = data.weather?.[0]?.description ?? "N/A";

    const container = document.getElementById("root");
    if (container) {
        container.style.display = "flex";
        container.style.flexWrap = "wrap"
    }

    if (container) {
        const postdiv = document.createElement('div');

        postdiv.style.border = "1px solid black"
        postdiv.style.backgroundColor = "white"
        postdiv.style.opacity = "0.5"
        postdiv.style.borderRadius = "10px"
        postdiv.style.width = "20%"
        postdiv.style.padding = "10px"
        postdiv.style.margin = "10px"

        const city_name = document.createElement('h2');
        console.log(city_name)
        city_name.innerHTML = city;

        const temperature = document.createElement('p');
        temperature.innerHTML = `Temperature: ${city_temperature}°C`;

        const weather = document.createElement('p');
        weather.innerHTML = `Condition: ${city_weather}`;

        postdiv.appendChild(city_name);
        postdiv.appendChild(temperature);
        postdiv.appendChild(weather);

        container.appendChild(postdiv);
        console.log(city_temperature);
        console.log(city_weather);
    }

};



