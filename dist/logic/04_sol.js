"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const weather_status = (city_1, ...args_1) => __awaiter(void 0, [city_1, ...args_1], void 0, function* (city, units = "metric") {
    try {
        const API_KEY = "731e20a3b37b8196f410ab6d6346acdf";
        const fetch_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
        const response = yield fetch(fetch_url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return yield response.json();
    }
    catch (err) {
        console.error("Error fetching weather:", err);
        alert("Failed to fetch weather. Check the console.");
    }
});
const display_weather = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const city = (_b = (_a = document.getElementById("city")) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    const data = (_c = yield weather_status(city)) !== null && _c !== void 0 ? _c : {};
    console.log(data);
    const city_temperature = (_e = (_d = data.main) === null || _d === void 0 ? void 0 : _d.temp_max) !== null && _e !== void 0 ? _e : "N/A";
    const city_weather = (_h = (_g = (_f = data.weather) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.description) !== null && _h !== void 0 ? _h : "N/A";
    const container = document.getElementById("root");
    if (container) {
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
    }
    if (container) {
        const postdiv = document.createElement('div');
        postdiv.style.border = "1px solid black";
        postdiv.style.backgroundColor = "white";
        postdiv.style.opacity = "0.5";
        postdiv.style.borderRadius = "10px";
        postdiv.style.width = "20%";
        postdiv.style.padding = "10px";
        postdiv.style.margin = "10px";
        const city_name = document.createElement('h2');
        console.log(city_name);
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
});
