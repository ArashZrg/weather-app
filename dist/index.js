"use strict";
// Selecting Elements
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cloudIconEl = document.querySelector('.weather-status');
class Weather {
    constructor() {
        this.updateDom('بهبهان');
    }
    fetchData(cityName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = yield fetch(`https://api.weatherapi.com/v1/current.json?q=${cityName}&key=123e5e3204114b2d8a9110320241908`);
                const response = yield request.json();
                return response;
            }
            catch (error) {
                console.log('something went wrong:', error);
            }
        });
    }
    updateDom(cityName) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.fetchData(cityName);
            console.log(data);
            // create elements and put data
            const img = document.createElement('img');
            img === null || img === void 0 ? void 0 : img.setAttribute('src', "//cdn.weatherapi.com/weather/64x64/day/113.png");
        });
    }
}
const app = new Weather();
// fetch('https://api.weatherapi.com/v1/current.json?q=tehran&key=123e5e3204114b2d8a9110320241908')
//     .then(res => res.json()).then(data => console.log(data))
