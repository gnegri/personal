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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_leetcode_leetcode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/leetcode/leetcode.component */ "./src/app/components/leetcode/leetcode.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'resume', component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'leetcode', component: _components_leetcode_leetcode_component__WEBPACK_IMPORTED_MODULE_5__["LeetcodeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<app-header></app-header>\n\n<!-- Carousel -->\n<app-carousel></app-carousel>\n\n<!-- Body -->\n<app-body></app-body>\n\n<!-- Footer \n<app-footer id='footer'></app-footer>\n-->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_body_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/body/body.component */ "./src/app/components/body/body.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_leetcode_leetcode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/leetcode/leetcode.component */ "./src/app/components/leetcode/leetcode.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
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
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_body_body_component__WEBPACK_IMPORTED_MODULE_7__["BodyComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_leetcode_leetcode_component__WEBPACK_IMPORTED_MODULE_12__["LeetcodeComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/NavbarItemList.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/NavbarItemList.ts ***!
  \*******************************************/
/*! exports provided: NavbarItemList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarItemList", function() { return NavbarItemList; });
var NavbarItemList = /** @class */ (function () {
    function NavbarItemList() {
        this.list = [];
    }
    return NavbarItemList;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Intro -->\n<div class='row'>\n    <div class='col-sm-6'>\n        <h1 class='display-4'>About This Website</h1>\n    </div>\n\n    <div class='col-sm-6'>\n        <ul class='list-group list-group-flush'>\n            <li class='list-group-item'>Built with Angular</li>\n            <li class='list-group-item'><a href='https://getbootstrap.com/'>Bootstrap</a>/<a href='https://ng-bootstrap.github.io/'>ng-Bootstrap</a> for styling</li>\n            <li class='list-group-item'>Generated with styling preconfigured using\n                <mark (click)='generateIsCollapsed = !generateIsCollapsed' [attr.aria-expanded]='!generateIsCollapsed' aria-controls='generateproject'><code>generateproject.bash</code></mark></li>\n            <li class='list-group-item'>Published to <a href='surge.sh'>surge.sh</a> using\n                <mark (click)='publishIsCollapsed = !publishIsCollapsed' [attr.aria-expanded]='!publishIsCollapsed' aria-controls='publishproject'><code>publishproject.bash</code></mark></li>\n            <li class='list-group-item'>Managed on Windows 10 WSL Debian 9.4</li>\n        </ul>\n    </div>\n</div>\n\n<!-- Row for bash scripts -->\n<div class='row'>\n    <div class='col-12'>\n        <div id='generateproject' [ngbCollapse]='generateIsCollapsed'>\n            <div class='card text-white bg-dark'>\n                <div class='card-body'>\n                    <h5 class='card-title'>generateproject.bash</h5>\n                    <pre class='pre-scrollable text-white m-3'>\n#!/bin/bash\n\n# called as ./generateproject.bash appname* [path]\n# appname* doesn't support dashes\n# pass path if you aren't in your root dev folder\nappName=$1\npath=$2\n\n# make app\nif [[ $&#123;path&#125; != '' ]]\nthen\n  cd $&#123;path&#125;\nfi\nng new $&#123;appName&#125; --style=scss\n\n# install bootstrap\ncd $&#123;appName&#125;\nnpm install --save bootstrap @ng-bootstrap/ng-bootstrap font-awesome\n\n# modify angular.json for bootstrap\ncat angular.json | jq '.projects.'$&#123;appName&#125;'.architect.build.options.styles[.projects.'$&#123;appName&#125;'.architect.build.options.styles | length] += 'node_modules/bootstrap/dist/css/bootstrap.min.css'' >> angular_temp1.json\nmv angular_temp1.json angular.json\ncat angular.json | jq '.projects.'$&#123;appName&#125;'.architect.build.options.styles[.projects.'$&#123;appName&#125;'.architect.build.options.styles | length] += 'node_modules/font-awesome/css/font-awesome.min.css'' >> angular_temp2.json\nmv angular_temp2.json angular.json\n\n# modify app.module.ts for bootstrap\ncd src/app\nsed -i '/import &#123; AppComponent &#125; from '\\.\\/app\\.component';/aimport &#123; NgbModule &#125; from \\'@ng-bootstrap\\/ng-bootstrap\\'\\;' app.module.ts\nsed -i '/\\  imports: \\[/a\\    NgbModule\\.forRoot\\(\\),/a' app.module.ts\n\n# add router\nng generate module app-routing --flat --module=app\n\n# add core module\nng generate module core\n\n# start server\nng serve -o\n              </pre>\n                </div>\n            </div>\n            <br>\n        </div>\n    </div>\n</div>\n\n<div class='row'>\n    <div class='col-12'>\n        <div id='publishproject' [ngbCollapse]='publishIsCollapsed'>\n            <div class='card text-white bg-dark'>\n                <div class='card-body'>\n                    <h5 class='card-title'>publishproject.bash</h5>\n                    <pre class='pre-scrollable text-white m-3'>\n#!/bin/bash\n\n# called as ./publishproject.bash appname* [cname] [path]\n# appname* doesn't support dashes\n# pass cname if your surge domain is somthing other than the app name\n# pass path if you aren't in your root dev folder\nappName=$1\nsurgeSite=$2\npath=$3\n\nif [[ $&#123;cname&#125; == '' ]]\n  then\n  cname=$&#123;appName&#125;\nfi\n\n# if path passed in\nif [[ $&#123;path&#125; != '' ]]\n  then\n    cd $&#123;path&#125;\nfi\n\n# enter project directory and build it\ncd $&#123;appName&#125;\nnpm run build\n\n# enter built app folder, make 200.html file for URL routing\ncd ./dist/$&#123;appName&#125;\ncp ./index.html ./200.html\n\n# add CNAME file\necho $&#123;cname&#125;.surge.sh &gt; CNAME\n\n# publish site\nsurge\n\n# open ng server to compare new updates\ncd ../..\nng serve -o\n                </pre>\n                </div>\n            </div>\n            <br>\n        </div>\n    </div>\n</div>\n\n<div class='row'>\n    <div class='col-6'>\n\n    </div>\n\n    <div class='col-6'>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
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
        this.generateIsCollapsed = true;
        this.publishIsCollapsed = true;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/body/body.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/body/body.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class='container pt-5'>\n    <router-outlet></router-outlet>\n</body>"

/***/ }),

/***/ "./src/app/components/body/body.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/body/body.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  position: relative;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/body/body.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/body/body.component.ts ***!
  \***************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
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

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/components/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.scss */ "./src/app/components/body/body.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel *ngIf='shouldShowCarousel()' class='bg-light'>\n    <div *ngFor='let page of headerList'>\n        <ng-template ngbSlide>\n            <a [routerLink]='page.url'><img [src]='page.src' [alt]='page.alt' class='d-block carousel-image'></a>\n            <span [routerLink]='page.url' class='carousel-title'>\n              <div class='carousel-caption '>\n                      <h3>{{ page.title }}</h3>\n              </div>\n          </span>\n        </ng-template>\n    </div>\n</ngb-carousel>"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-image {\n  width: 110%;\n  height: 600px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.9; }\n\n.carousel-title {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_extensable_HeaderList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/extensable/HeaderList */ "./src/app/data/extensable/HeaderList.ts");
/* harmony import */ var _data_Images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/Images */ "./src/app/data/Images.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(location) {
        this.carouselImages = _data_Images__WEBPACK_IMPORTED_MODULE_3__["carouselImages"];
        this.headerList = _data_extensable_HeaderList__WEBPACK_IMPORTED_MODULE_2__["headerList"];
        this.location = location;
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent.prototype.shouldShowCarousel = function () {
        return (this.location.path() === '');
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.scss */ "./src/app/components/carousel/carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar class='footer' [type]='type'></app-navbar>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/Footer */ "./src/app/data/Footer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.type = _data_Footer__WEBPACK_IMPORTED_MODULE_1__["footer"];
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar class='header' [type]='type'></app-navbar>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/Header */ "./src/app/data/Header.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.type = _data_Header__WEBPACK_IMPORTED_MODULE_1__["header"];
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class='display-4'>\n    Welcome!\n</h1>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/leetcode/leetcode.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/leetcode/leetcode.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-accordion #acc='ngbAccordion'>\n    <div *ngFor='let exercise of exercises'>\n        <ngb-panel>\n            <ng-template ngbPanelTitle class=''>\n                {{ makeTitle(exercise) }}\n            </ng-template>\n            <ng-template ngbPanelContent>\n                <div class='row'>\n                    <div class='col-9'>\n                        <ngb-progressbar class='pbar' [value]='exercise.percentile' [ngbPopover]='runtimeTooltip(exercise.percentile)' triggers='mouseenter:mouseleave' striped='true' animated='true' [type]='colorType(exercise.percentile)' height='2.4rem'>Runtime: {{ exercise.runtime }} ms</ngb-progressbar>\n                    </div>\n                    <br> <br>\n                    <div [class]='problemInfoColWidth()'>\n                        <a class='btn btn-outline-secondary' [href]='exercise.solutionURL'>Solution</a> &nbsp;\n                        <a class='btn btn-outline-secondary' [href]='exercise.problemURL'>Problem</a>\n                    </div>\n                </div>\n                <div class='row scrollbox bg-dark m-3'>\n                    <div *ngIf='!isMobile' class=' col-1 ml-3 pl-3 '>\n                        <!-- don't display line numbers in mobile -->\n                        <pre class='text-white '><span *ngFor='let codeLine of exercise.code; index as i '>\n{{ i }}</span></pre>\n                    </div>\n                    <div class='col-10 ml-3 pl-3 '>\n                        <pre class='text-white '><span *ngFor='let codeLine of exercise.code; index as i '>\n{{ codeLine }}</span></pre>\n                    </div>\n                </div>\n            </ng-template>\n        </ngb-panel>\n    </div>\n</ngb-accordion>"

/***/ }),

/***/ "./src/app/components/leetcode/leetcode.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/leetcode/leetcode.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\n  display: block; }\n\n.pbar {\n  font-size: 150%;\n  cursor: help; }\n\n.scrollbox {\n  height: 340px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/components/leetcode/leetcode.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/leetcode/leetcode.component.ts ***!
  \***********************************************************/
/*! exports provided: LeetcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeetcodeComponent", function() { return LeetcodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_extensable_LeetcodeExercises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/extensable/LeetcodeExercises */ "./src/app/data/extensable/LeetcodeExercises.ts");
/* harmony import */ var _data_Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/Globals */ "./src/app/data/Globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeetcodeComponent = /** @class */ (function () {
    function LeetcodeComponent() {
        this.exercises = _data_extensable_LeetcodeExercises__WEBPACK_IMPORTED_MODULE_1__["exercises"];
        this.globals = _data_Globals__WEBPACK_IMPORTED_MODULE_2__["globals"];
    }
    LeetcodeComponent.prototype.ngOnInit = function () {
        this.isMobile = _data_Globals__WEBPACK_IMPORTED_MODULE_2__["globals"].isMobile();
    };
    LeetcodeComponent.prototype.makeTitle = function (exercise) {
        return 'Exercise ' + exercise.exercise + ': ' + exercise.title;
    };
    LeetcodeComponent.prototype.runtimeTooltip = function (percentile) {
        return 'This solution is faster than ' + percentile + '% of other submissions in this language.';
    };
    LeetcodeComponent.prototype.problemInfoColWidth = function () {
        if (this.isMobile) {
            return 'col-9';
        }
        else {
            return 'col-3';
        }
    };
    LeetcodeComponent.prototype.colorType = function (percentile) {
        if (percentile >= 75) {
            return 'success';
        }
        else if (percentile >= 50) {
            return 'info';
        }
        else if (percentile >= 25) {
            return 'warning';
        }
        else if (percentile >= 0) {
            return 'danger';
        }
        else {
            return '';
        }
    };
    LeetcodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leetcode',
            template: __webpack_require__(/*! ./leetcode.component.html */ "./src/app/components/leetcode/leetcode.component.html"),
            styles: [__webpack_require__(/*! ./leetcode.component.scss */ "./src/app/components/leetcode/leetcode.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeetcodeComponent);
    return LeetcodeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class='navbar {{ type.position }} {{ type.size }} {{ type.color }}'>\n    <!-- Icon -->\n    <a *ngIf='type.img' class='navbar-brand' routerLink='' (click)='setActive(null)'>\n        <img [src]='type.img'></a>\n    <!-- Navbar Items -->\n    <div class='collapse navbar-collapse' id='navbarSupportedContent'>\n        <ul class='navbar-nav mr-auto'>\n\n            <!-- for each item in the NavbarItemList -->\n            <li *ngFor='let item of type.list' class='nav-item lead'>\n                <!-- if internal link, use routerLink. href otherwise-->\n                <div *ngIf='item.isInternal; else useHREF' (click)='setActive(item.url)' [class.active]='isActive(item.url)'>\n                    <a class='nav-link' [routerLink]='item.url'>{{ item.title }}</a>\n                </div>\n                <ng-template #useHREF>\n                    <a class='nav-link' [href]='item.url' routerLinkActive='active-link'>{{ item.title }}</a>\n                </ng-template>\n            </li>\n            <!-- for each route defined in router \n            <li *ngFor='let route of routes' class='nav-item'>\n                <div *ngIf='!routeIsHome(route.path)'>\n                    <div (click)='setActive(route.path)' [class.active]='isActive(route.path)'>\n                        <a class='nav-link' [routerLink]='route.path'>{{ route.path | titlecase }}</a>\n                    </div>\n                </div>\n            </li>\n            -->\n\n        </ul>\n\n        <div class='justify-right'>\n            <a href='https://github.com/gnegri/'><i class='fa fa-github icon'></i></a> &nbsp;\n            <a href='https://www.linkedin.com/in/grantnegri'><i class='fa fa-linkedin-square icon'></i></a>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  font-size: 250%;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _classes_NavbarItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/NavbarItemList */ "./src/app/classes/NavbarItemList.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location) {
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.setActive = function (page) {
        this.currentPage = page;
        return;
    };
    NavbarComponent.prototype.routeIsHome = function (route) {
        return (route === '' || route === '#');
    };
    NavbarComponent.prototype.isActive = function (page) {
        if (this.currentPage === page) {
            return true;
        }
        else if (this.location.path() === page) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _classes_NavbarItemList__WEBPACK_IMPORTED_MODULE_2__["NavbarItemList"])
    ], NavbarComponent.prototype, "type", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<div class='row text-justify'>\n    <div [class]='primaryColWidth()'>\n        <h1 class='display-4'>\n            Grant Negri\n        </h1>\n        <p class='text-muted'>NYC-based software developer with experience in healthcare and bioinformatics</p>\n    </div>\n\n    <div class='{{ secondaryColWidth() }} text-center'>\n        <br> <a href='https://github.com/gnegri/ ' class='btn btn-outline-primary '>GitHub</a> &nbsp;\n        <a href='https://www.linkedin.com/in/grantnegri/ ' class='btn btn-outline-primary '>LinkedIn</a>\n        <br>\n        <div class='mt-1 '>\n            <b>grantnegri@gmail.com</b>\n        </div>\n    </div>\n</div>\n<br>\n\n<!-- Experience Section -->\n<h4 class='sectionHeader '>EXPERIENCE</h4>\n\n<!-- Epic -->\n<!-- Intro Row -->\n<div class='row '>\n    <div [class]='primaryColWidth()'>\n        <h5><b>Epic Systems Corporation</b>, Madison, WI</h5>\n        <h6>Technical Support Engineer, Oncology</h6>\n    </div>\n\n    <div [class]='secondaryColWidth()'>\n        <!-- <h6 class='text-muted '>3 Yrs</h6>-->\n        <h6 class='text-muted {{ dateTextAlign() }}'>06.2015 - 06.2018</h6>\n    </div>\n</div>\n\n<!-- Body -->\n<div class='row '>\n    <div class='col-11 '>\n        <p>I was involved in both software development and technical support for clients on the oncology module of Epic’s software suite.</p>\n        <p>I designed, developed, and helped deploy development projects and bug fixes. I was manager and lead developer on a project to reduce wait times for treatment, which won a module-wide award and was highlighted in a major update.\n        </p>\n        <p>I worked with multiple health care systems, including Johns Hopkins Medicine and Ballad Health System. I assisted IT teams and leadership at these clients with project management, custom development, system performance, data analysis, and their\n            reporting needs. At Ballad Health System, I helped implement software configuration for the 340B program, which has saved them tens of thousands per month on drug costs and\n            <mark (click)='isCollapsed=! isCollapsed ' [attr.aria-expanded]='!isCollapsed ' aria-controls='source1 '>was a contributing factor in changing two hospitals' revenue from a net loss to a net profit.</mark>\n        </p>\n    </div>\n</div>\n\n<!-- Toggle section for 340B source -->\n<div id='source1' [ngbCollapse]='isCollapsed'>\n    <div class='card {{ sourceCardWidth() }}'>\n        <img class='card-img-bottom' src='/assets/WHS_operating_losses.png'>\n        <div class='card-body'>\n            “While Wellmont’s Lonesome Pine Hospital and Hawkins County Memorial Hospital show operating gains, these gains are only the result of their participation in the federal 340B drug purchasing program, which enables them to purchase many outpatient drugs\n            (primarily for chemotherapy) at the very low federal government cost. However, Hawkins County Memorial Hospital lost its 340B eligibility as of August 22, 2016, and it is therefore no longer profitable.” <br>\n            <a class='source' href='http://www.vdh.virginia.gov/content/uploads/sites/96/2017/04/Response-12.pdf'>Source</a>\n        </div>\n    </div>\n    <br>\n</div>\n\n\n<!-- Brent Lab -->\n<!-- Intro Row -->\n<div class='row'>\n    <div [class]='primaryColWidth()'>\n        <h5><b>Washington University School of Medicine</b>, St. Louis MO</h5>\n        <h6>Research Assistant, Center for Genome Sciences and Systems Biology</h6>\n    </div>\n\n    <div [class]='secondaryColWidth()'>\n        <!-- <h6 class='text-muted'>1.2 Yrs</h6>-->\n        <h6 class='text-muted {{ dateTextAlign() }}'>02.2014 - 04.2015</h6>\n    </div>\n</div>\n\n<!-- Body -->\n<div class='row'>\n    <div class='col-11'>\n        <p>I worked with Dr. Michael Brent and doctoral candidates on a project to link gene regulation to metabolism. I was responsible for both wet lab bench work and development to validate and analyze collected data using Mathematica.</p>\n    </div>\n</div>\n\n<!-- Education and Misc -->\n<!-- Education -->\n<div class='row'>\n    <div [class]='primaryColWidth()'>\n        <h4 class='sectionHeader'>EDUCATION</h4>\n\n        <!-- Intro Row -->\n        <div class='row'>\n            <div [class]='primaryColWidth()'>\n                <h5><b>Washington University in St. Louis</b>, MO</h5>\n            </div>\n\n            <div *ngIf='!isMobile' [class]='secondaryColWidth()'>\n                <h6 class='text-muted'>08.2011 - 05.2015</h6>\n            </div>\n        </div>\n\n        <div class='row'>\n            <div class='col-12'>\n                <h6>Biology - Computational Biology and Genomics, Minor in Bioinformatics</h6>\n            </div>\n\n        </div>\n\n        <div *ngIf='isMobile' class='row'>\n            <div class='col-12'>\n                <h6 class='text-muted'>08.2011 - 05.2015</h6>\n            </div>\n        </div>\n\n        <!-- Body -->\n        <div class='row'>\n            <div class='col-10'>\n                <ul class='list-group list-group-flush'>\n                    <li class='list-group-item'>Dean’s List, Fall 2014</li>\n                    <li class='list-group-item'>Zeta Beta Tau, Philanthropy and Community Service Chair</li>\n                    <li class='list-group-item'>Relevant Coursework: <br>\n                        <a href='http://bio5495.wustl.edu/' class='pl-5'>Algorithms for Computational Biology [Graduate-level]</a> <br>\n                        <a href='https://classes.engineering.wustl.edu/cse330' class='pl-5'>Rapid Prototype Development &amp; Creative Programming</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- Misc -->\n    <div [class]='secondaryColWidth()'>\n        <h4 class='sectionHeader'>LANGUAGES <span style='font-size: 2rem;'>|</span> SKILLS</h4>\n        <div class='row'>\n            <div class='col-12'>\n                <span class='fa fa-square checked checkYes'></span>\n                <span class='preCheckYes'>&nbsp;</span>\n                <span class='fa fa-square checked checkYes'></span>\n                <span class='preCheckYes'>&nbsp;</span>\n                <span class='fa fa-square checked checkYes'></span> Caché\n                <br>\n                <span class='fa fa-square checked checkYes'></span>\n                <span class='preCheckYes'>&nbsp;</span>\n                <span class='fa fa-square checked checkYes'></span>\n                <span class='preCheckNo'>&nbsp;</span>\n                <span class='fa fa-square checked checkNo'></span> JS | Java | Mathematica\n                <br>\n                <span class='fa fa-square checked checkYes'></span>\n                <span class='preCheckNo'>&nbsp;</span>\n                <span class='fa fa-square checked checkNo'></span>\n                <span class='preCheckNo'>&nbsp;</span>\n                <span class='fa fa-square checked checkNo'></span> Angular | MySQL\n                <br>\n                <br>\n                <ul class='list-group list-group-flush'>\n                    <li class='list-group-item mt-2'>Software development life cycle</li>\n                    <li class='list-group-item'>Project management, Jira</li>\n                    <li class='list-group-item'>Healthcare industry, oncology</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/resume/resume.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sectionHeader {\n  color: #3F7FBF; }\n\n.source {\n  font-style: italic; }\n\n.contact {\n  font-size: 3rem; }\n\n.checkYes {\n  text-shadow: 0px 0px 1px #3F7FBF, 0px 0px 1px #3F7FBF, 0px 0px 1px #3F7FBF;\n  display: inline-block;\n  color: #3F7FBF; }\n\n.preCheckYes {\n  font-size: .5em; }\n\n.checkNo {\n  text-shadow: 0px 0px 1px #3F7FBF, 0px 0px 1px #3F7FBF, 0px 0px 1px #3F7FBF;\n  display: inline-block;\n  color: white; }\n\n.preCheckNo {\n  font-size: .6em; }\n"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/Globals */ "./src/app/data/Globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.isCollapsed = true;
        this.globals = _data_Globals__WEBPACK_IMPORTED_MODULE_1__["globals"];
    }
    ResumeComponent.prototype.ngOnInit = function () {
        this.isMobile = _data_Globals__WEBPACK_IMPORTED_MODULE_1__["globals"].isMobile();
    };
    ResumeComponent.prototype.sourceCardWidth = function () {
        if (this.isMobile) {
            return 'w-100';
        }
        else {
            return 'w-50';
        }
    };
    ResumeComponent.prototype.primaryColWidth = function () {
        if (this.isMobile) {
            return 'col-12';
        }
        else {
            return 'col-8';
        }
    };
    ResumeComponent.prototype.secondaryColWidth = function () {
        if (this.isMobile) {
            return 'col-12';
        }
        else {
            return 'col-4';
        }
    };
    ResumeComponent.prototype.dateTextAlign = function () {
        if (this.isMobile) {
            return 'text-left';
        }
        else {
            return 'text-center';
        }
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/components/resume/resume.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/data/Footer.ts":
/*!********************************!*\
  !*** ./src/app/data/Footer.ts ***!
  \********************************/
/*! exports provided: footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return footer; });
/* harmony import */ var _extensable_FooterList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensable/FooterList */ "./src/app/data/extensable/FooterList.ts");

var footer = {
    title: 'About',
    img: '',
    url: '/about',
    position: 'fixed-bottom',
    size: 'navbar-expand-sm',
    color: 'navbar-light bg-light',
    list: _extensable_FooterList__WEBPACK_IMPORTED_MODULE_0__["footerList"]
};


/***/ }),

/***/ "./src/app/data/Globals.ts":
/*!*********************************!*\
  !*** ./src/app/data/Globals.ts ***!
  \*********************************/
/*! exports provided: globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
var globals = {
    _isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    isMobile: function () { return globals._isMobile; }
};


/***/ }),

/***/ "./src/app/data/Header.ts":
/*!********************************!*\
  !*** ./src/app/data/Header.ts ***!
  \********************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
/* harmony import */ var _extensable_HeaderList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensable/HeaderList */ "./src/app/data/extensable/HeaderList.ts");

var header = {
    title: 'Home',
    img: '../../../favicon.ico',
    url: '',
    position: 'sticky-top',
    size: 'navbar-expand-lg',
    color: 'navbar-dark bg-primary',
    list: _extensable_HeaderList__WEBPACK_IMPORTED_MODULE_0__["headerList"]
};


/***/ }),

/***/ "./src/app/data/Images.ts":
/*!********************************!*\
  !*** ./src/app/data/Images.ts ***!
  \********************************/
/*! exports provided: carouselImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carouselImages", function() { return carouselImages; });
var carouselImages = [{
        src: '/assets/agreement-business-clapping-990817.jpg',
        alt: 'Resume',
        label: 'Resume',
        body: '',
        routerLink: '/resume'
    }, {
        src: '/assets/code-coding-computer-574071.jpg',
        alt: 'Leetcode',
        label: 'Leetcode',
        body: '',
        routerLink: '/leetcode'
    }, {
        src: '/assets/arrows-box-business-533189.jpg',
        alt: 'About',
        label: 'About',
        body: '',
        routerLink: '/about'
    }];


/***/ }),

/***/ "./src/app/data/extensable/FooterList.ts":
/*!***********************************************!*\
  !*** ./src/app/data/extensable/FooterList.ts ***!
  \***********************************************/
/*! exports provided: footerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerList", function() { return footerList; });
var footerList = [{
        title: 'Github',
        url: 'https://github.com/gnegri/personal',
        isInternal: false,
        src: '',
        alt: ''
    }, {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/grantnegri/',
        isInternal: false,
        src: '',
        alt: ''
    }];


/***/ }),

/***/ "./src/app/data/extensable/HeaderList.ts":
/*!***********************************************!*\
  !*** ./src/app/data/extensable/HeaderList.ts ***!
  \***********************************************/
/*! exports provided: headerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerList", function() { return headerList; });
var headerList = [{
        title: 'Resume',
        url: '/resume',
        isInternal: true,
        src: '/assets/agreement-business-clapping-990817.jpg',
        alt: 'Resume',
    }, {
        title: 'LeetCode',
        url: '/leetcode',
        isInternal: true,
        src: '/assets/code-coding-computer-574071.jpg',
        alt: 'Leetcode'
    }, {
        title: 'About',
        url: '/about',
        isInternal: true,
        src: '/assets/arrows-box-business-533189.jpg',
        alt: 'About',
    }];


/***/ }),

/***/ "./src/app/data/extensable/LeetcodeExercises.ts":
/*!******************************************************!*\
  !*** ./src/app/data/extensable/LeetcodeExercises.ts ***!
  \******************************************************/
/*! exports provided: exercises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exercises", function() { return exercises; });
var exercises = [{
        exercise: 1,
        title: 'Two Sum',
        problemURL: 'https://leetcode.com/problems/two-sum/',
        solutionURL: 'https://leetcode.com/submissions/detail/170909979/',
        runtime: 184,
        percentile: 22.56,
        code: [
            '/**',
            '* @param {number[]} nums',
            '* @param {number} target',
            '* @return {number[]}',
            '*/',
            'var twoSum = function(nums, target) {',
            'var pair = [];',
            'for (var j = 0; j < nums.length; j++) {',
            '    for (var k = j + 1; k < nums.length; k++) {',
            '        if (nums[j] + nums[k] === target) {',
            '            pair[0] = j;',
            '            pair[1] = k;',
            '            break;',
            '        }',
            '    }',
            '}',
            '',
            'return pair;',
            '};'
        ]
    }, {
        exercise: 2,
        title: 'Add Two Numbers',
        problemURL: 'https://leetcode.com/problems/add-two-numbers/',
        solutionURL: 'https://leetcode.com/submissions/detail/170898763/',
        runtime: 108,
        percentile: 100,
        code: [
            '/**',
            ' * Definition for singly-linked list.',
            ' * function ListNode(val) {',
            ' *     this.val = val;',
            ' *     this.next = null;',
            ' * }',
            ' */',
            '/**',
            ' * @param {ListNode} l1',
            ' * @param {ListNode} l2',
            ' * @return {ListNode}',
            ' */',
            'var addTwoNumbers = function(l1, l2) {',
            '    var answer = [];',
            '    ',
            '    addTwoNumbersHelper(l1, l2, 0, answer)',
            '    ',
            '    return answer;',
            '};',
            '',
            'var addTwoNumbersHelper = function(l1, l2, overflow, answer) {',
            '    var v1;',
            '    var v2;',
            '    if (l1 == null) {',
            '        v1 = 0;',
            '    } else {',
            '        v1 = l1.val;',
            '        l1 = l1.next;',
            '    }',
            '    if (l2 == null) {',
            '        v2 = 0;',
            '    } else {',
            '        v2 = l2.val;',
            '        l2 = l2.next;',
            '    }',
            '    ',
            '    var out = v1 + v2 + overflow;',
            '    if (out >= 10) {',
            '        overflow = out/10 | 0;',
            '        out = out % 10;',
            '    } else {',
            '        overflow = 0;',
            '    }',
            '    answer.push(out);',
            '    ',
            '    if (l1 != null || l2 != null || overflow >= 1) {',
            '        addTwoNumbersHelper(l1, l2, overflow, answer)',
            '    }',
            '    ',
            '    return;',
            '}'
        ]
    }];


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/h/dev/personal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map