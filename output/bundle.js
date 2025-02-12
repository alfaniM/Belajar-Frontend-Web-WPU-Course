/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertService: () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cekInputValid.js */ "./src/app/utils/cekInputValid.js");

class AlertService {
  constructor() {
    this.error = document.querySelector('#error');
  }
  tampilkanErrorPenjumlahan = (input, angka) => {
    const hasil = input.reduce((pesan, nilai, index) => {
      if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__.cekInputValid)(angka[index])) {
        return pesan + '';
      } else {
        return pesan + `${nilai} itu bukan angka! `;
      }
    }, 'Silahkan masukkan angka yang benar: ');
    this.error.classList.remove('d-none');
    this.error.innerText = hasil;
  };
  sembunyikanError = () => this.error.classList.add('d-none');
}

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   run: () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cekInputValid.js */ "./src/app/utils/cekInputValid.js");
/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/parseInput.js */ "./src/app/utils/parseInput.js");


const run = (alertService, calculatorService, jokesService) => {
  alertService.sembunyikanError();
  calculatorService.onClick(() => {
    alertService.sembunyikanError();
    const input = calculatorService.getInput();
    const angka = (0,_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_1__.parseInput)(...input);
    if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__.cekInputValid)(...angka)) {
      const [angka1, angka2] = angka;
      calculatorService.setResult(angka1, angka2);
    } else {
      calculatorService.setResult('');
      alertService.tampilkanErrorPenjumlahan(input, angka);
    }
  });
  jokesService.onClick(() => {
    fetch('https://candaan-api.vercel.app/api/text/random').then(response => response.json()).then(data => {
      jokesService.setModal(data.data);
    });
  });
};

/***/ }),

/***/ "./src/app/calculator.service.js":
/*!***************************************!*\
  !*** ./src/app/calculator.service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalculatorService: () => (/* binding */ CalculatorService)
/* harmony export */ });
class CalculatorService {
  constructor() {
    this.operand1 = document.querySelector('#operand1');
    this.operand2 = document.querySelector('#operand2');
    this.tombolTambah = document.querySelector('#tombol-tambah');
    this.hasil = document.querySelector('#hasil');
  }
  getInput() {
    return [this.operand1.value, this.operand2.value];
  }
  setResult(angka1, angka2) {
    this.hasil.innerText = angka1 + angka2;
  }
  onClick(cb) {
    this.tombolTambah.addEventListener('click', cb);
  }
}

/***/ }),

/***/ "./src/app/jokes.service.js":
/*!**********************************!*\
  !*** ./src/app/jokes.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JokesService: () => (/* binding */ JokesService)
/* harmony export */ });
class JokesService {
  constructor() {
    this.tombolJokes = document.querySelector('#jokes-receh');
    this.modalBody = document.querySelector('.modal-body');
  }
  setModal(str) {
    this.modalBody.innerHTML = str;
  }
  onClick(cb) {
    this.tombolJokes.addEventListener('click', cb);
  }
}

/***/ }),

/***/ "./src/app/utils/cekInputValid.js":
/*!****************************************!*\
  !*** ./src/app/utils/cekInputValid.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cekInputValid: () => (/* binding */ cekInputValid)
/* harmony export */ });
const cekInputValid = function () {
  for (var _len = arguments.length, angka = new Array(_len), _key = 0; _key < _len; _key++) {
    angka[_key] = arguments[_key];
  }
  return angka.every(num => typeof num === 'number' && !isNaN(num));
};

/***/ }),

/***/ "./src/app/utils/parseInput.js":
/*!*************************************!*\
  !*** ./src/app/utils/parseInput.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseInput: () => (/* binding */ parseInput)
/* harmony export */ });
const parseInput = function () {
  for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {
    input[_key] = arguments[_key];
  }
  return input.map(str => parseInt(str));
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (2:5)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| $bg: rgb(14, 155, 202);\n> body {\n|   background-color: $bg;\n| }");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_alert_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/alert.service.js */ "./src/app/alert.service.js");
/* harmony import */ var _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/calculator.service.js */ "./src/app/calculator.service.js");
/* harmony import */ var _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/jokes.service.js */ "./src/app/jokes.service.js");
/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.js */ "./src/app/app.js");





const alertService = new _app_alert_service_js__WEBPACK_IMPORTED_MODULE_1__.AlertService();
const calculatorService = new _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_2__.CalculatorService();
const jokesService = new _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_3__.JokesService();
(0,_app_app_js__WEBPACK_IMPORTED_MODULE_4__.run)(alertService, calculatorService, jokesService);
})();

/******/ })()
;