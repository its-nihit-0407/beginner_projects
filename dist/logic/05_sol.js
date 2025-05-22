"use strict";
// 🔹 5. Currency Converter
// API: https://api.exchangerate-api.com/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Task: Convert amount between two selected currencies.
const Currency_fetch = (current_currency, price) => __awaiter(void 0, void 0, void 0, function* () {
    const API_KEY = "58cf88fd7e87835817842dad";
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${current_currency}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    const response = yield fetch(url, options);
    const data = yield response.json();
    return data;
});
const display_cur = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    const input = (_b = (_a = (document.getElementById('amount') || null)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 1;
    const casted_input = (_c = Number(input)) !== null && _c !== void 0 ? _c : 1;
    const currency1 = (_e = (_d = document.getElementById('currency_1')) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : "";
    const currency2 = (_g = (_f = document.getElementById('currency_2')) === null || _f === void 0 ? void 0 : _f.value) !== null && _g !== void 0 ? _g : "";
    const output = document.getElementById('output');
    if (output) {
        const data = yield Currency_fetch(currency1, casted_input);
        console.log(data);
        const conversion_rates = data.conversion_rates;
        const conversion = Number(conversion_rates[currency2]) * Number(input);
        output.innerHTML = conversion.toString() + " " + currency2;
    }
});
// display_cur();
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const curr = (_b = (_a = (yield Currency_fetch("INR", 1))) === null || _a === void 0 ? void 0 : _a.conversion_rates) !== null && _b !== void 0 ? _b : {};
    const all_curr = Object.keys(curr);
    const selector = document.getElementsByClassName('currency');
    if (selector.length > 0) {
        all_curr.forEach((currency) => {
            const optionTag = document.createElement('option');
            optionTag.value = currency;
            optionTag.textContent = currency;
            Array.from(selector).forEach((el) => {
                el.appendChild(optionTag.cloneNode(true));
            });
        });
    }
}))();
