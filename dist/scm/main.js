(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background-color: #000000;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\n  <div id=\"header\">\n    <div id=\"openMenu\" onclick=\"showMenu()\">|||</div>\n    <div id=\"logo\">...</div>\n  </div>\n\n  <div id=\"horizontalBar\">\n    <div id=\"horizontalMenu\">\n      <ul>\n        <li>Link One</li>\n        <li>Link Two</li>\n        <li>Link Three</li>\n      </ul>\n    </div>\n  </div>\n\n\n\n</div>\n\n<div id=\"lgMenu\">\n  <span id=\"exit\" onclick=\"hideMenu()\">&times;</span>\n  <ul>\n    <li>Link One</li>\n    <li>Link Two</li>\n    <li>Link Three</li>\n  </ul>\n</div>\n\n\n<div id=\"body\" class=\"row\">\n  <div class=\"modal\"> </div>\n  <div >\n    <div id=\"side\" class=\"column side\"></div>\n    <div id=\"middle\" class=\"column middle\">\n      Toţi indicii ROBOR importanţi au revenit miercuri pe creştere, după o zi de stagnare, iar trei dintre aceştia au\n      înregistrat un avans important, arată datele afişate de Banca Naţională a României (BNR).\n\n      Unul dintre motivele acestei creşteri poate fi scăderea lichidităţii, ca urmare a plăţilor de taxe şi impozite\n      care se\n      face pe finalul lunii ianuarie a fiecărui an.\n\n      Indicele ROBOR la 3 luni, în funcţie de care se calculează costul creditelor de consum în lei cu dobândă\n      variabilă, a\n      crescut miercuri la 3,03% pe an, de la 2,97% marţi. Acest indice nu a mai fost la acest nivel din data de 24\n      decembrie\n      2018.\n\n      Indicele ROBOR la 6 luni, utilizat la calculul dobânzilor la creditele ipotecare lei cu dobândă variabilă, a\n      crescut\n      miercuri la 3,31% pe an, de la 3,28% marţi. Un nivel mai ridicat de atât, respectiv de 3,33%, a fost consemnat la\n      data\n      de 28 decembrie 2018.\n\n      În acelaşi timp, indicele ROBOR la 9 luni, care reprezintă rata dobânzii plătită la creditele în lei atrase de\n      către\n      băncile comerciale de la alte bănci comerciale pentru o perioadă de nouă luni, a urcat la 3,41% pe an, de la 3,39%\n      marţi, iar recent mai sus de atât, respectiv la 3,42%, a fost la data de 31 decembrie 2018.\n\n      Indicele ROBOR la 12 luni, care reprezintă rata dobânzii plătită la creditele în lei atrase de către băncile\n      comerciale de la alte bănci comerciale pentru o perioadă de 12 luni, a crescut la doar 3,50% pe an de la 3,49%\n      marţi,\n      acelaşi nivel fiind consemnat la data de 3 ianuarie 2019.\n    </div>\n    <div id=\"side\" class=\"column side\"></div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <app-home></app-home>\r\n        \r\n        \r\n        \r\n\r\n        "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'scm';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n  }\r\n\r\nbody{\r\n    \r\n     font-family: sans-serif;\r\n     background-color: rgb(255, 255, 255);\r\n     color: #000000;\r\n\r\n   }\r\n\r\n/* Create three equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    padding: 15px;\r\n    text-align: justify;\r\n    text-justify: inter-word;\r\n    overflow:auto;\r\n    }\r\n\r\n.column.side {\r\n        width: 25%;\r\n      }\r\n\r\n/* Middle column */\r\n\r\n.column.middle {\r\n        width: 50%;\r\n      }\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n        content: \"\";\r\n        display: table;\r\n        clear: both;\r\n    }\r\n\r\n#openMenu{\r\n       font-size: 1em;\r\n       font-weight: 800;\r\n       cursor: pointer;\r\n       text-align: center;\r\n       transition: all 0.5s;\r\n       z-index: 111;\r\n       transition: all 0.25s;\r\n       -moz-transition: all 0.25s;\r\n       -webkit-transition: all 0.25s;\r\n       color: #00936E;\r\n\r\n   }\r\n\r\n#header{\r\n        display: -ms-grid;\r\n        display: grid;\r\n        -ms-grid-columns: 3% 95%;\r\n            grid-template-columns: 3% 95%;\r\n        grid-gap: 10px;\r\n        background-color: #ffffff;\r\n        padding-bottom: 20px;\r\n        padding-top:20px;\r\n        padding-left: 20px;\r\n        \r\n        \r\n   }\r\n\r\n#header > div {\r\n    font-size: 30px;\r\n  }\r\n\r\n#logo{\r\n       color: #00936E;\r\n       font-family: 'Pacifico', cursive;\r\n       text-align: left;\r\n       padding-left: 10px;\r\n   }\r\n\r\n#openMenu:hover{\r\n       -webkit-transform: rotate(90deg);\r\n               transform: rotate(90deg);\r\n       color:#FF9900;\r\n   }\r\n\r\n#lgMenu ul{\r\n       list-style: none;\r\n       padding: 0;\r\n       background-color: white;\r\n   }\r\n\r\n#lgMenu li{\r\n       text-align: center;\r\n       text-transform: uppercase;\r\n       margin-bottom: 5px;\r\n       border-left: solid 2px;\r\n       border-color: greenyellow;\r\n       color: white;\r\n       cursor: pointer;\r\n       background-color: #00936E;\r\n       font-size: 1em;\r\n       letter-spacing: 0.2em;\r\n       transition: all 0.25s;\r\n       \r\n   }\r\n\r\n#lgMenu li:hover, #horizontalMenu li:hover{\r\n       background-color: white;\r\n       color:#FF9900;\r\n       letter-spacing: 0.3em;\r\n       border: solid 1px #00936E;\r\n       box-shadow: 5px 3px 10px 1px #FF9900;\r\n       -webkit-box-shadow: 5px 3px 10px 1px #FF9900;\r\n       -moz-box-shadow: 5px 3px 10px 1px #FF9900;\r\n   }\r\n\r\n#lgMenu{\r\n       display: block;\r\n       width: 250px;\r\n       height: 100%;\r\n       top: 0;\r\n       left: -400px;\r\n       overflow:hidden;\r\n       background-color:#ffffff;\r\n       border: solid #ffffff;\r\n       box-shadow: 5px 3px 10px 1px grey;\r\n       position: fixed;\r\n       z-index: 130;\r\n       transition: all 2s;\r\n       -webkit-transition: all 1s;\r\n       -moz-transition: all 1s;\r\n   }\r\n\r\n#exit{\r\n       position: relative;\r\n       text-align: right;\r\n       display: block;\r\n       padding: 0px;\r\n       font-size: 2em;\r\n       color: rgb(255, 0, 0);\r\n       background-color: #ffffff;\r\n       font-weight: 500;\r\n       cursor: pointer;\r\n       transition: all 0.25s;\r\n       -webkit-transition: all 0.25s;\r\n       -moz-transition: all 0.25s;\r\n   }\r\n\r\n#exit:hover{\r\n       color:#FF9900;\r\n   }\r\n\r\n#lgMenu.enter{\r\n       opacity: 1;\r\n       left: 0;\r\n   }\r\n\r\n#horizontalBar{\r\n       text-align: center;\r\n       border: solid 1px #00936E;\r\n       border-right: none;\r\n       border-left: none;\r\n       position: relative;\r\n       background-color: #ffffff;\r\n   }\r\n\r\n#horizontalMenu{\r\n    padding: 0;\r\n    top: 0px;\r\n    text-align: center;\r\n    position: relative;    \r\n    }\r\n\r\n#horizontalMenu ul{\r\n        list-style: none; display: inline;\r\n        \r\n        \r\n    }\r\n\r\n#horizontalMenu li{\r\n       background: #ffffff;\r\n       border: solid 1px #00936E;\r\n       border-radius: 9px;\r\n       text-align: center;\r\n       text-transform: uppercase;\r\n       display: inline;\r\n       margin: 10px;\r\n       padding: 7px;\r\n       color: #00936E;\r\n       cursor: pointer;\r\n       font-size: 1em;\r\n       letter-spacing: 0.2em;\r\n       transition: all 0.25s;\r\n       box-shadow: 5px 3px 10px 1px #00936E;\r\n       -webkit-box-shadow: 5px 3px 10px 1px #00936E;\r\n       -moz-box-shadow: 5px 3px 10px 1px #00936E;\r\n   }\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    transition: all 0.25s;\r\n  }\r\n\r\n@media all and (max-width: 600px) {\r\n    #horizontalMenu li{ display: block;}\r\n\r\n      #horizontalMenu ul{ position: relative;list-style: none;}\r\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\n  <div id=\"header\">\n    <div id=\"openMenu\" onclick=\"showMenu()\">|||</div>\n    <div id=\"logo\">...</div>\n  </div>\n\n  <div id=\"horizontalBar\">\n    <div id=\"horizontalMenu\">\n      <ul>\n        <li>Link One</li>\n        <li>Link Two</li>\n        <li>Link Three</li>\n      </ul>\n    </div>\n  </div>\n\n\n\n</div>\n\n<div id=\"lgMenu\">\n  <span id=\"exit\" onclick=\"hideMenu()\">&times;</span>\n  <ul>\n    <li>Link One</li>\n    <li>Link Two</li>\n    <li>Link Three</li>\n  </ul>\n</div>\n\n\n<div id=\"body\" class=\"row\">\n  <div class=\"modal\"> </div>\n  <div >\n    <div id=\"side\" class=\"column side\"></div>\n    <div id=\"middle\" class=\"column middle\">\n      Toţi indicii ROBOR importanţi au revenit miercuri pe creştere, după o zi de stagnare, iar trei dintre aceştia au\n      înregistrat un avans important, arată datele afişate de Banca Naţională a României (BNR).\n\n      Unul dintre motivele acestei creşteri poate fi scăderea lichidităţii, ca urmare a plăţilor de taxe şi impozite\n      care se\n      face pe finalul lunii ianuarie a fiecărui an.\n\n      Indicele ROBOR la 3 luni, în funcţie de care se calculează costul creditelor de consum în lei cu dobândă\n      variabilă, a\n      crescut miercuri la 3,03% pe an, de la 2,97% marţi. Acest indice nu a mai fost la acest nivel din data de 24\n      decembrie\n      2018.\n\n      Indicele ROBOR la 6 luni, utilizat la calculul dobânzilor la creditele ipotecare lei cu dobândă variabilă, a\n      crescut\n      miercuri la 3,31% pe an, de la 3,28% marţi. Un nivel mai ridicat de atât, respectiv de 3,33%, a fost consemnat la\n      data\n      de 28 decembrie 2018.\n\n      În acelaşi timp, indicele ROBOR la 9 luni, care reprezintă rata dobânzii plătită la creditele în lei atrase de\n      către\n      băncile comerciale de la alte bănci comerciale pentru o perioadă de nouă luni, a urcat la 3,41% pe an, de la 3,39%\n      marţi, iar recent mai sus de atât, respectiv la 3,42%, a fost la data de 31 decembrie 2018.\n\n      Indicele ROBOR la 12 luni, care reprezintă rata dobânzii plătită la creditele în lei atrase de către băncile\n      comerciale de la alte bănci comerciale pentru o perioadă de 12 luni, a crescut la doar 3,50% pe an de la 3,49%\n      marţi,\n      acelaşi nivel fiind consemnat la data de 3 ianuarie 2019.\n    </div>\n    <div id=\"side\" class=\"column side\"></div>\n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.myFunc = function () {
        console.log("Start myFunc");
        var myObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(1, 2, 3);
        // Create observer object
        var myObserver = {
            next: function (x) { return console.log('Observer got a next value: ' + x); },
            error: function (err) { return console.error('Observer got an error: ' + err); },
            complete: function () { return console.log('Observer got a complete notification'); },
        };
        // Execute with the observer object
        myObservable.subscribe(myObserver);
        // Logs:
        // Observer got a next value: 1
        // Observer got a next value: 2
        // Observer got a next value: 3
        // Observer got a complete notification
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WebDev\scm\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map