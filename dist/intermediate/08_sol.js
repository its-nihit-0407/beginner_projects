"use strict";
/*
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
const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("results");
let countries = [];
const fetch_country = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = 'https://restcountries.com/v3.1/all';
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        const response = yield fetch(url, options);
        const data = yield response.json();
        countries = data;
        display_countries(countries);
    }
    catch (err) {
        if (resultsContainer) {
            resultsContainer.innerHTML = "Unable to fetch countries";
        }
        console.log("Unable to fetch the countries: ", err);
    }
});
function display_countries(list) {
    return __awaiter(this, void 0, void 0, function* () {
        if (resultsContainer) {
            resultsContainer.innerHTML = "";
        }
        list.forEach(country => {
            const div = document.createElement('div');
            div.classList.add("Country");
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.margin = "`10px";
            div.innerHTML = `<img src='${country.flags.svg}' style='height: 35px; width: 40px; margin:10px;'></img><span>${country.name.common}</span>`;
            resultsContainer === null || resultsContainer === void 0 ? void 0 : resultsContainer.appendChild(div);
        });
    });
}
searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("input", () => {
    const query = searchInput === null || searchInput === void 0 ? void 0 : searchInput.value;
    const filtered = countries.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()));
    display_countries(filtered);
});
fetch_country();
