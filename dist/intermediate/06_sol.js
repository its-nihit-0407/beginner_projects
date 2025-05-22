"use strict";
// 🔹 6. GitHub User Finder
// API: https://api.github.com/users/{username}
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Task: Enter GitHub username and display their avatar, name, public repos, and followers.
const fetch_github_user = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const url = `https://api.github.com/users/${username !== null && username !== void 0 ? username : ""}`;
    const response = yield fetch(url, options);
    const data = response.json();
    return data;
});
const checkUsername = () => __awaiter(void 0, void 0, void 0, function* () {
});
