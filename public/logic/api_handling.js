"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = "https://api.freeapi.app/api/v1/public/randomusers";
let fetch_data = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        method: "GET",
        header: {
            "Content-Type": "application/json",
        }
    };
    try {
        const response = yield fetch(url, options);
        const data = yield response.json();
        return yield data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch_data(url);
    if (data.success && data.data) {
        console.log([...data.data.data]);
        for (const user of data.data.data) {
            console.log(user.login.username + " : " + user.id);
        }
        console.log("Data fetched successfully");
    }
    // console.log(data.data.data);
}))();
// const url: string = "https://api.freeapi.app/api/v1/public/randomusers";
