"use strict";
/*
✅ Beginner Level
🔹 1. Fetch and Display JSON Data
API: https://jsonplaceholder.typicode.com/posts

Task: Fetch posts and display them in the DOM (title + body).

🔹 2. Show Random User Info
API: https://randomuser.me/api/

Task: Show random user's name, email, and profile picture on button click.

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
// Fetch and Display JSON Data
let fetching = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };
    const response = yield fetch(url, options);
    const data = yield response.json();
    return yield data;
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield fetching('https://jsonplaceholder.typicode.com/posts');
    // console.log(data)
    let container = document.getElementById('todisplay');
    if (container) {
        for (const post of data) {
            let postDiv = document.createElement('div');
            postDiv.className = 'post';
            let posttitle = document.createElement('h2');
            posttitle.innerHTML = post.title;
            let postbody = document.createElement('p');
            postbody.innerHTML = post.body;
            postDiv.appendChild(posttitle);
            postDiv.appendChild(postbody);
            container.appendChild(postDiv);
        }
    }
}))();
