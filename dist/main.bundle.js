webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<page-audiobooks></page-audiobooks>',
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_useful_swiper__ = __webpack_require__("../../../../angular2-useful-swiper/lib/swiper.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_useful_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_useful_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_page_page_component__ = __webpack_require__("../../../../../src/components/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_book_book_component__ = __webpack_require__("../../../../../src/components/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routeComponents_audioBooks_audioBooks_component__ = __webpack_require__("../../../../../src/routeComponents/audioBooks/audioBooks.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_page_page_component__["a" /* Page */],
            __WEBPACK_IMPORTED_MODULE_5__components_book_book_component__["a" /* Book */],
            __WEBPACK_IMPORTED_MODULE_6__routeComponents_audioBooks_audioBooks_component__["a" /* AudioBooks */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_useful_swiper__["SwiperModule"],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/components/book/book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".book {\n\n}\n\n.title {\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    width: 100%;\n    z-index: 1;\n    color: white;\n    margin: 0;\n    width: 196px;\n}\n\n.cover-pic {\n    position: relative;\n    height: 300px;\n    width: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<a class='book' href={{book.url}}>\n    <h5 class=\"title\">{{book.title}}</h5>\n    <img class=\"cover-pic\" src={{book.imgSrc}} />\n</a>\n"

/***/ }),

/***/ "../../../../../src/components/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AudioBook = (function () {
    function AudioBook() {
    }
    return AudioBook;
}());
var Book = (function () {
    function Book() {
    }
    return Book;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", AudioBook)
], Book.prototype, "book", void 0);
Book = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'book',
        template: __webpack_require__("../../../../../src/components/book/book.component.html"),
        styles: [__webpack_require__("../../../../../src/components/book/book.component.css")],
    })
], Book);

//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ "../../../../../src/components/page/page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\n    height: calc(100vh - 16px);\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    vertical-align: top;    \n    -webkit-box-orient: vertical;    \n    -webkit-box-direction: normal;    \n        -ms-flex-direction: column;    \n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 200px;\n}\n.content {\n    display: inline-block;\n    vertical-align: top;\n    max-width: 70%;\n}\n.content > h1 {\n    font-size: 36px;\n    font-family: Arial, Helvetica, sans-serif;\n    color: #FFFEF3;\n}\n@media (max-width: 700px) {\n    .sidebar {\n        display: none;\n    }\n    .content {\n        max-width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/components/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='page'>\n    <section class='sidebar'>\n        <a class='title-link' href='/'>\n            PCs4Kids\n        </a>\n        <a class='back-to-menu' href='/'>BACK2MENU</a>\n    </section>\n    <section class='content'>\n        <h1>{{title}}</h1>\n        <ng-content></ng-content>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/components/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* unused harmony export onBookClick */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page = (function () {
    function Page() {
        this.books = [];
    }
    return Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Page.prototype, "title", void 0);
Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page',
        template: __webpack_require__("../../../../../src/components/page/page.component.html"),
        styles: [__webpack_require__("../../../../../src/components/page/page.component.css")],
    })
], Page);

var onBookClick = function (book) { return history.pushState({}, '', book.url); };
/* unused harmony default export */ var _unused_webpack_default_export = (Page);
//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "../../../../../src/constants/books.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Book */
var Book = (function () {
    function Book() {
    }
    return Book;
}());

;
var BOOKS = [
    {
        title: 'The Wizard Of Oz',
        imgSrc: 'https://resizing.flixster.com/0ODXHPXBVOp7zWCGziA4qFHu2kA=/206x305/v1.bTsxMTE2ODA4NjtqOzE3NDk5OzEyMDA7ODAwOzEyMDA',
        url: '#',
    },
    {
        title: 'The Great Gatsby',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg',
        url: '#',
    },
    {
        title: 'The Three Musketeers',
        imgSrc: 'https://lh4.ggpht.com/gldxcfZb_UwAXyzGDra1SfzuS5lBlzEse0h0cCOOp9Npukxs8UTqncujSme3TaMhQSB1=h900',
        url: '#',
    },
    {
        title: 'Moby Dick',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51oCZKH93sL._SX310_BO1,204,203,200_.jpg',
        url: '#',
    },
    {
        title: 'Catcher In The Rye',
        imgSrc: 'https://www.homework-online.com/assets/the-catcher-in-the-rye-cover-1e401bf21b67e7d65e5efac3072f180e.jpg',
        url: '#',
    },
    {
        title: 'To Kill A Mockingbird',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG',
        url: '#',
    },
    {
        title: 'Of Mice And Men',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/0/01/OfMiceAndMen.jpg',
        url: '#',
    },
];
/* harmony default export */ __webpack_exports__["a"] = (BOOKS);
//# sourceMappingURL=books.js.map

/***/ }),

/***/ "../../../../../src/constants/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__books__ = __webpack_require__("../../../../../src/constants/books.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__books__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/routeComponents/audioBooks/audioBooks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/routeComponents/audioBooks/audioBooks.component.html":
/***/ (function(module, exports) {

module.exports = "<page [title]='title'>\n    <swiper [config]=\"config\">\n        <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide\" *ngFor=\"let book of books\">\n                <book [book]=\"book\"></book>\n            </div>\n        </div>\n        <!-- Add Pagination -->\n        <div class=\"swiper-pagination\"></div>\n        <!-- Add Arrows -->\n        <div class=\"swiper-button-next\"></div>\n        <div class=\"swiper-button-prev\"></div>\n    </swiper>\n</page>\n"

/***/ }),

/***/ "../../../../../src/routeComponents/audioBooks/audioBooks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioBooks; });
/* unused harmony export onBookClick */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index__ = __webpack_require__("../../../../../src/constants/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CONFIG = {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 16,
};
var AudioBooks = (function () {
    function AudioBooks() {
        this.title = 'AudioBooks';
        this.books = __WEBPACK_IMPORTED_MODULE_1__constants_index__["a" /* BOOKS */];
        this.config = CONFIG;
    }
    return AudioBooks;
}());
AudioBooks = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-audiobooks',
        template: __webpack_require__("../../../../../src/routeComponents/audioBooks/audioBooks.component.html"),
        styles: [__webpack_require__("../../../../../src/routeComponents/audioBooks/audioBooks.component.css")],
    })
], AudioBooks);

var onBookClick = function (book) { return history.pushState({}, '', book.url); };
//# sourceMappingURL=audioBooks.component.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map