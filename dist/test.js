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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
const range = (start, stop, step) => {
    return Array.from({
        length: Math.ceil((stop - start) / step),
    }, (v, i) => start + i * step);
};
const range_col = (start, stop, step) => {
    const array = [];
    do {
        array.push(start);
        start += step;
    } while (start < stop);
    return array;
};
// console.log(range(1, 5, 1))
// console.log(range_col(1, 5, 1))
// Array.fromAsync() static method
// Array.fromAsync([1, 2, 3]).then(result => console.log(result));
const fx = (function () {
    return __asyncGenerator(this, arguments, function* () {
        for (let i = 0; i < 5; i++) {
            yield __await(new Promise((resolve) => setTimeout(resolve, 10 * i)));
            yield yield __await(i);
        }
    });
})();
(() => __awaiter(void 0, void 0, void 0, function* () {
    // await console.log(fx)
}))();
// Array.fromAsync(fx).then((array) => console.log(array));
// Check if one array is a subset of another array
const issubset = (arr1, arr2) => {
    return arr1.every((element) => arr2.includes(element));
};
console.log(issubset([1, 2, 3], [1, 2, 3, 4, 5]));
const tempGirls = Array(5).fill("girl", 0);
console.log(tempGirls);
