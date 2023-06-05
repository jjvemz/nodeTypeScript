"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Storm"] = "stormy";
})(Weather || (exports.Weather = Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["poor"] = "poor";
})(Visibility || (exports.Visibility = Visibility = {}));
