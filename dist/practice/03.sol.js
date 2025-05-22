"use strict";
/*
🔹 3. Joke Generator
API: https://official-joke-api.appspot.com/random_joke

Task: Show a random joke each time a button is clicked.

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
const fetch_joke = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return yield response.json();
    }
    catch (err) {
        console.error("Error fetching joke:", err);
        alert("Failed to fetch joke. Check the console.");
    }
});
let when_clk = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch_joke('https://official-joke-api.appspot.com/random_joke');
    const container = document.getElementById("show");
    if (container) {
        const joke = data.setup;
        const puchline = data.punchline;
        const postdiv = document.createElement('div');
        postdiv.style.display = 'flex';
        postdiv.style.backgroundColor = '#212121';
        postdiv.style.color = 'white';
        postdiv.style.borderRadius = '5px';
        postdiv.style.padding = "10px";
        postdiv.style.justifyContent = 'center';
        postdiv.style.width = 'auto';
        postdiv.style.height = 'fit-content';
        postdiv.style.margin = '5px';
        const the_joke = document.createElement('h3');
        const the_punchline = document.createElement('h4');
        the_joke.innerHTML = joke;
        the_punchline.innerHTML = puchline;
        postdiv.appendChild(the_joke);
        postdiv.appendChild(the_punchline);
        container.appendChild(postdiv);
    }
});
