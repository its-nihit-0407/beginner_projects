"use strict";
/*
🔹 6. GitHub User Finder
API: https://api.github.com/users/{username}

Task: Enter GitHub username and display their avatar, name, public repos, and followers.
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
const git_finder = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.github.com/users/${username}`;
    console.log(url);
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };
    const response = yield fetch(url, options);
    const data = response.json();
    return data;
});
// (async () => {
//     console.log(await git_finder("its-nihit-0407"))
// })()
const handle_request = (userinput) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const data = yield git_finder(userinput);
    const para = document.createElement('p');
    if (data.status === '404') {
        const container = document.querySelector('.container');
        para.innerHTML = "Not Found";
        para.style.color = "red";
        container === null || container === void 0 ? void 0 : container.appendChild(para);
        setTimeout(() => para.style.visibility = "hidden", 2000);
        return;
    }
    const git_username = (_a = data.login) !== null && _a !== void 0 ? _a : "";
    const git_avatar = (_b = data.avatar_url) !== null && _b !== void 0 ? _b : "";
    const git_name = (_c = data.name) !== null && _c !== void 0 ? _c : "";
    const public_repo = (_d = data.public_repos) !== null && _d !== void 0 ? _d : 0;
    const followers = (_e = data.followers) !== null && _e !== void 0 ? _e : 0;
    const container = document.querySelector('.container');
    if (container) {
        const postdiv = document.createElement('div');
        const details_div = document.createElement('div');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const name = document.createElement('p');
        const repo = document.createElement('h3');
        const git_follow = document.createElement('h3');
        img.id = "git_image";
        h2.innerHTML = git_username;
        name.innerHTML = git_name;
        repo.innerHTML = "Public Repos: " + public_repo;
        git_follow.innerHTML = "followers: " + followers;
        name.style.color = 'white';
        name.style.left = '5px';
        repo.style.color = 'white';
        git_follow.style.color = 'white';
        img.setAttribute('src', git_avatar);
        img.setAttribute('alt', 'git_profile_img');
        img.style.borderRadius = "30%";
        img.style.height = "200px";
        img.style.width = "200px";
        postdiv.appendChild(img);
        details_div.appendChild(h2);
        details_div.appendChild(name);
        details_div.appendChild(repo);
        details_div.appendChild(git_follow);
        postdiv.style.margin = '20px';
        postdiv.style.padding = '20px';
        postdiv.style.borderRadius = '20px';
        postdiv.style.display = 'flex';
        postdiv.style.flexWrap = 'wrap';
        postdiv.style.boxShadow = '0 0 12px 0';
        postdiv.style.width = '400px';
        details_div.style.margin = '20px';
        details_div.style.color = 'green';
        postdiv.appendChild(details_div);
        container.appendChild(postdiv);
        img.addEventListener('click', () => {
            postdiv.remove();
        });
    }
});
const check_btn = document.querySelector("#check_userinput");
check_btn === null || check_btn === void 0 ? void 0 : check_btn.addEventListener('click', (event) => {
    var _a;
    event.preventDefault();
    const userinput = document.querySelector("#userinput");
    const user_val = (_a = userinput === null || userinput === void 0 ? void 0 : userinput.value) !== null && _a !== void 0 ? _a : "";
    handle_request(user_val);
    userinput.value = "";
});
