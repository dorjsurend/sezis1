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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var instance = axios_1["default"].create({
    baseURL: "https://infosys.ufe.edu.mn:9999",
    headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NzQ0NDk2NDEsImV4cCI6MTcxMDQ0OTY0MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiRkExNkI0ODYifQ.PjcAWFdQmVP9ug24qBA7UHwWPZA2zZbqm9Te8AMDoKmF6cR800vQN0ScUZDjz95OTfKtuhOoZnJpnmijht4__iai66_aYUaKdTdffjHJ6coGGYMdIJYFFSy6s35EmZ0j5rTE7AO-F5eYaF19FfObBp18MXK_4cu5muZy7IjSPZxNGeK-lE6M8o7Z_wWNhPf_SuhB1mk0CmF8m_Z1gMPQQiJ6W08AHYRfy3r-7UtQQTJ9eGZRP0_-2rUyPY2u-vQOZnsciSGiiTJX3VAzC3tgDSihefQzPmcm1T76tSYFmYH4GkHo41KYBKff4bUXeTKnJGrsrp21d3C-x6tPHFpJdw",
        "content-type": "application/json",
        "sec-ch-ua": '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://infosys.ufe.edu.mn/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    }
});
var coursePlans = "/course-plan/list";
var lessonGroups = ["63844", "63845", "66716"];
var pheGroups = ["64164", "64091", "64097"];
var interval;
var fin226 = function () {
    return Promise.all(lessonGroups.map(function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, instance.post("lesson-choice", {
                            lessonGroup: id
                        })];
                case 1:
                    res = _b.sent();
                    clearInterval(interval);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    if (err_1 instanceof axios_1.AxiosError) {
                        console.log("fin226" + id + "---> " + ((_a = err_1.response) === null || _a === void 0 ? void 0 : _a.data.message));
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }));
};
var PHE149 = function () {
    Promise.all(pheGroups.map(function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, instance.post("lesson-choice", {
                            lessonGroup: id
                        })];
                case 1:
                    res = _b.sent();
                    clearInterval(interval);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _b.sent();
                    if (err_2 instanceof axios_1.AxiosError) {
                        console.log("PHE" + id + "---> " + ((_a = err_2.response) === null || _a === void 0 ? void 0 : _a.data.message));
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }));
};
interval = setInterval(function () {
    fin226();
    PHE149();
}, 400);
