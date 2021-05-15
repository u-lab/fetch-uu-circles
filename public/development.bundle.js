/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
// Selector
var appSelector = '.js-fetch-uu-circles-app';
// リクエストURL
var REQUEST_URL =  true
    ? 'http://localhost:8000'
    : 0;
// data-attribute の値
var DATA_ATTRIBUTE_NAME = 'data-uu-circles';
var DATA_ATTRIBUTE_COLUMN = 'data-column';
var DATA_ATTRIBUTE_TYPE = {
    card: 'card'
};
// クラス名
var CLASS_NAME_PREFIX = 'fetchUuCircles__card';
var handler = function () { return __awaiter(void 0, void 0, void 0, function () {
    var appElms, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                appElms = document.querySelectorAll(appSelector);
                return [4 /*yield*/, fetchedUuCircles()];
            case 1:
                data = _a.sent();
                appElms.forEach(function (appElm) {
                    // カード型であるかを確認
                    if (appElm.getAttribute(DATA_ATTRIBUTE_NAME) === DATA_ATTRIBUTE_TYPE.card) {
                        var column = appElm.getAttribute(DATA_ATTRIBUTE_COLUMN);
                        // DATA_ATTRIBUTE_COLUMNが 1 or 2 でない場合は処理終了
                        if (!['1', '2'].includes(column)) {
                            return;
                        }
                        var parentDiv = document.createElement('div');
                        parentDiv.className = CLASS_NAME_PREFIX + "__circle-container " + CLASS_NAME_PREFIX + "__grid-cols-" + column;
                        for (var i = 0; i < 4; i++) {
                            var circle = data.data[i];
                            var childDiv = document.createElement('div');
                            childDiv.className = CLASS_NAME_PREFIX + "__circle-wrapper";
                            var a = document.createElement('a');
                            a.className = CLASS_NAME_PREFIX + "__circle-handbill-anchor";
                            a.href = "https://uu-circles.com/circle/" + circle.slug;
                            var image = document.createElement('img');
                            image.setAttribute('src', circle.handbillImageUrl);
                            image.setAttribute('alt', circle.name + " UU-Circles");
                            image.setAttribute('width', '300');
                            image.className = CLASS_NAME_PREFIX + "__circle-handbill-image";
                            a.insertAdjacentElement("beforeend", image);
                            // div > a > img
                            childDiv.insertAdjacentElement("beforeend", a);
                            var p = document.createElement('p');
                            p.textContent = circle.name;
                            p.className = CLASS_NAME_PREFIX + "__circle-name";
                            // div > p
                            childDiv.insertAdjacentElement("beforeend", p);
                            parentDiv.insertAdjacentElement("beforeend", childDiv);
                        }
                        appElm.insertAdjacentElement('beforebegin', parentDiv);
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
var fetchedUuCircles = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(REQUEST_URL + "/api/main")
                //レスポンスのボディーからJSONデータを取得
            ];
            case 1:
                res = _a.sent();
                //レスポンスのボディーからJSONデータを取得
                return [2 /*return*/, res.json()];
        }
    });
}); };
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, handler()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();


/******/ })()
;
//# sourceMappingURL=development.bundle.js.map