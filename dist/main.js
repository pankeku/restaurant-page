/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);





function load() {
  generateReview();
  generateGreeting();
  generateHours();

  function generateReview() {
    const container = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('reviews-container');
    _pageLoad__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(container);

    const title = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('review-title');
    title.classList.add('title--underline');
    title.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.reviewTitle;
    container.appendChild(title);

    const text = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('review-text');
    const reviewer = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('reviewer');

    text.classList.add('changing');
    reviewer.classList.add('changing');

    changingReviews();

    function changingReviews() {
      const reviews = Object.keys(_config_js__WEBPACK_IMPORTED_MODULE_1__.home.reviews);
      let author;
      let review;

      let index = 0;

      animateReviews();
      setInterval(animateReviews, 6000);

      function animateReviews() {
        text.classList.add('shown');
        reviewer.classList.add('shown');

        if (index === reviews.length) {
          index = 0;
        }
        if (index <= reviews.length) {
          author = reviews[index];
          review = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.reviews[author];

          reviewer.textContent = `- ${author}`;
          text.textContent = review;

          index++;
        }

        return setTimeout(() => {
          text.classList.remove('shown');
          reviewer.classList.remove('shown');
        }, 5000);
      }
    }

    container.appendChild(text);
    container.appendChild(reviewer);
  }

  function generateGreeting() {
    const container = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('greeting-container');

    const title = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('greeting-title');
    title.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.greetingTitle;
    container.appendChild(title);

    const greeting = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('greeting-text');
    container.appendChild(greeting);
    greeting.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.greeting;

    _pageLoad__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(container);
  }

  function generateHours() {
    const container = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('hours-container');

    const title = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('hours-title');
    title.classList.add('title--underline');
    title.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.hoursTitle;
    container.appendChild(title);

    _pageLoad__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(container);

    const hours = document.createElement('div');
    hours.classList.add('hours');

    for (const value of Object.keys(_config_js__WEBPACK_IMPORTED_MODULE_1__.home.hours)) {
      const element = document.createElement('div');
      hours.appendChild(element);
      element.textContent = `${value} ${_config_js__WEBPACK_IMPORTED_MODULE_1__.home.hours[value]}\n`;
    }

    container.appendChild(hours);
  }

  return _pageLoad__WEBPACK_IMPORTED_MODULE_2__.element;
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 3 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 4 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 5 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 6 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 8 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 9 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(17), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(18), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'CrimsonRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonBoldItalic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonItalic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonSemiBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\nbody {\n  font-family: 'CrimsonSemiBold';\n  font-size: 1.2rem;\n  margin: 0px;\n}\n\n.content {\n  display: flex;\n}\n\n.element {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.container {\n  font-size: 1.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  background-color: black;\n  height:60px;\n}\n\n.header {\n  font-family: 'CrimsonBoldItalic';\n  display: flex;\n  justify-content: left;\n  width: 100%;\n  padding: 10px;\n  background-color: black;\n  color: white;\n}\n\n.tabs {\n  justify-self: right;\n  font-family: 'CrimsonBold';\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  gap: 100px;\n  margin-right: 100px;\n  font-size: 1rem;\n}\n\n.tab {\n  display: flex;\n  justify-content: center;\n}\n\n.main {\n  flex: 1;\n  display: grid;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n\n}\n\n.hours-container,\n.reviews-container,\n.greeting-container {\n  /*     background-color: rgba(256, 256, 256, 0.8); */\n  display: grid;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.review-title {\n  height: 30px;\n}\n\n.title--underline {\n  font-family: 'CrimsonBold';\n  border-bottom: 1px solid white;\n  padding-bottom: 1px;\n}\n\n.changing {\n  opacity: 0;\n  transition: all 1s;\n}\n\n.shown {\n  opacity: 1;\n}\n\n.review-text {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: 'CrimsonItalic';\n}\n\n.reviewer {\n  display: flex;\n  justify-content: right;\n}\n\n.hours-container {\n  grid-column-start: 6;\n  grid-row-start: 6;\n  gap: 10px;\n}\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column-start: 2;\n  grid-column-end: 5;\n  grid-row-start: 4;\n}\n\n.greeting-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 3em;\n}\n\n.greeting-text {\n  margin: 0px 20px 30px 0px;\n  font-family: 'CrimsonSemiBold';\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.reviews-container {\n  width: 200px;\n  height: 200px;\n  grid-column-start: 0;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  gap: 10px;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 20px;\n}\n\n.info-wrapper {\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n}\n\n.address-container,\n.telephone-container {\n  font-family: 'CrimsonRegular';\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n}\n\n.contact-map {\n  width: 100%;\n  height: 370px;\n}\n\n.address-title,\n.telephone-title {\n  font-size: 1.5em;\n}\n\n.address,\n.telephone {\n  white-space: pre-wrap;\n  font-size: 1.2em;\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.categories {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 50px;\n  margin-left: 40px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  gap: 20px;\n}\n\n.category-title {\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.meals-list {\n  font-family: 'CrimsonRegular';\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n}\n\n.meal {\n  display: grid;\n}\n\n.meal-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 1.3em;\n}\n\n.meal-ingredients {\n  font-family: 'CrimsonItalic';\n  color: gainsboro;\n  grid-row: 2 ;\n}\n\n.menu-item-selected {\n  border-bottom: 1px solid white;\n}\n\n@media screen and (max-width: 900px) {\n\n  .main {\n    flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size:cover;\n  background-attachment: fixed;\n  background-repeat:no-repeat;\n  background-position: center;\n\n  }\n\n  .reviews-container {\n    order: 3;\n    width: auto;\n  }\n\n  .container {\n    display: flex;\n    flex-direction: column;\n    height: auto;\n    \n  }\n\n  .header {\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n\n  .tabs {\n    justify-self: none;\n    margin-right: 0px;\n    gap: 10%;\n    justify-content: center;\n  }\n\n  .categories {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .info-wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .contact-container {\n    gap: 20px;\n  }\n\n  .address-container, .telephone-container {\n    flex: 1;\n    width: auto;\n  }\n\n  .greeting-title {\n    font-size: 3rem;\n  }\n\n  .menu-container {\n    gap: 20px;\n  }\n\n\n\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'CrimsonRegular';\n  src: url(./fonts/CrimsonText-Regular.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonBold';\n  src: url(./fonts/CrimsonText-Bold.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonBoldItalic';\n  src: url(./fonts/CrimsonText-BoldItalic.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonItalic';\n  src: url(./fonts/CrimsonText-Italic.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonSemiBold';\n  src: url(./fonts/CrimsonText-SemiBold.ttf);\n}\n\nbody {\n  font-family: 'CrimsonSemiBold';\n  font-size: 1.2rem;\n  margin: 0px;\n}\n\n.content {\n  display: flex;\n}\n\n.element {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.container {\n  font-size: 1.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  background-color: black;\n  height:60px;\n}\n\n.header {\n  font-family: 'CrimsonBoldItalic';\n  display: flex;\n  justify-content: left;\n  width: 100%;\n  padding: 10px;\n  background-color: black;\n  color: white;\n}\n\n.tabs {\n  justify-self: right;\n  font-family: 'CrimsonBold';\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  gap: 100px;\n  margin-right: 100px;\n  font-size: 1rem;\n}\n\n.tab {\n  display: flex;\n  justify-content: center;\n}\n\n.main {\n  flex: 1;\n  display: grid;\n  background: url('./image.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n\n}\n\n.hours-container,\n.reviews-container,\n.greeting-container {\n  /*     background-color: rgba(256, 256, 256, 0.8); */\n  display: grid;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.review-title {\n  height: 30px;\n}\n\n.title--underline {\n  font-family: 'CrimsonBold';\n  border-bottom: 1px solid white;\n  padding-bottom: 1px;\n}\n\n.changing {\n  opacity: 0;\n  transition: all 1s;\n}\n\n.shown {\n  opacity: 1;\n}\n\n.review-text {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: 'CrimsonItalic';\n}\n\n.reviewer {\n  display: flex;\n  justify-content: right;\n}\n\n.hours-container {\n  grid-column-start: 6;\n  grid-row-start: 6;\n  gap: 10px;\n}\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column-start: 2;\n  grid-column-end: 5;\n  grid-row-start: 4;\n}\n\n.greeting-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 3em;\n}\n\n.greeting-text {\n  margin: 0px 20px 30px 0px;\n  font-family: 'CrimsonSemiBold';\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.reviews-container {\n  width: 200px;\n  height: 200px;\n  grid-column-start: 0;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  gap: 10px;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 20px;\n}\n\n.info-wrapper {\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n}\n\n.address-container,\n.telephone-container {\n  font-family: 'CrimsonRegular';\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n}\n\n.contact-map {\n  width: 100%;\n  height: 370px;\n}\n\n.address-title,\n.telephone-title {\n  font-size: 1.5em;\n}\n\n.address,\n.telephone {\n  white-space: pre-wrap;\n  font-size: 1.2em;\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.categories {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 50px;\n  margin-left: 40px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  gap: 20px;\n}\n\n.category-title {\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.meals-list {\n  font-family: 'CrimsonRegular';\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n}\n\n.meal {\n  display: grid;\n}\n\n.meal-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 1.3em;\n}\n\n.meal-ingredients {\n  font-family: 'CrimsonItalic';\n  color: gainsboro;\n  grid-row: 2 ;\n}\n\n.menu-item-selected {\n  border-bottom: 1px solid white;\n}\n\n@media screen and (max-width: 900px) {\n\n  .main {\n    flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: url('./image.jpg');\n  background-size:cover;\n  background-attachment: fixed;\n  background-repeat:no-repeat;\n  background-position: center;\n\n  }\n\n  .reviews-container {\n    order: 3;\n    width: auto;\n  }\n\n  .container {\n    display: flex;\n    flex-direction: column;\n    height: auto;\n    \n  }\n\n  .header {\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n\n  .tabs {\n    justify-self: none;\n    margin-right: 0px;\n    gap: 10%;\n    justify-content: center;\n  }\n\n  .categories {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .info-wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .contact-container {\n    gap: 20px;\n  }\n\n  .address-container, .telephone-container {\n    flex: 1;\n    width: auto;\n  }\n\n  .greeting-title {\n    font-size: 3rem;\n  }\n\n  .menu-container {\n    gap: 20px;\n  }\n\n\n\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 11 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 12 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7af1dccae742a310539.ttf";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22c807fdbe784a0ec91a.ttf";

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17d0e509df0846a8dd9e.ttf";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "428025ba40b1c354f687.ttf";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3518edb0e88939f1d275.ttf";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6abdbf43272556182ac.jpg";

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const home = {
  header: 'NEM RESTAURANT',
  hoursTitle: 'WORKING HOURS',
  hours: {
    'Mon - Thu:': '11:00 - 22:00',
    'Fri:': '11:00 - 22:00',
    'Sat:': '11:00 - 23:00',
    'Sun:': '11:00 - 21:00',
  },
  reviewTitle: 'REVIEWS',
  reviews: {
    Mike: 'Ze best restaurant in the area.',
    Julie: 'Simply W - 0 - W.',
    John: 'I literally ate my fingers it was so good.',
    Andrew: '14 out of 15 yummies!!!11',
  },
  tabs: ['HOME', 'MENU', 'CONTACT'],
  greetingTitle: 'HI NEIGHBOUR,',
  greeting:
    'We are making yummy meals and trying not to food-poison anyone since 2000s.',
};

const contacts = {
  addressTitle: 'ADDRESS',
  address: '23 Boulevard Rene Cailloux\nMarignane\nBouches-du-Rhôn\n13700',
  telephoneTitle: 'CONTACTS',
  telephone: '+04 42 77 01 01\nnem@nem.nem',
  message: 'Instead of calling us, better call your mom.',
};

const menu = {
  title: 'Our Food Menu',
  'Main Course': [
    {
      name: 'Super Delicious Zuppa Toscana',
      ingredients: 'Chicken, rice, sausage, spinach',
      price: '20€',
    },
    {
      name: 'Bacon Coli Baked Australian Beef',
      ingredients: 'Chicken, rice, sausage spinach',
      price: '20€',
    },
  ],
  'Soup & Salads': [
    {
      name: 'Salat Banana Flower',
      ingredients: 'Chicken, rice, sausage, spinach',
      price: '20€',
    },
    {
      name: 'Gourmet Mushroom Rissoto',
      ingredients: 'Chicken, rice, sausage spinach',
      price: '20€',
    },
  ],
  Desserts: [
    {
      name: 'Ice Cream Tarte Apple',
      ingredients: 'Chicken, rice, sausage, spinach',
      price: '20€',
    },
    {
      name: 'Fruit Mille Feuile',
      ingredients: 'Chicken, rice, sausage spinach',
      price: '20€',
    },
  ],
  Drinks: [
    {
      name: 'Double Chocolate Mud Pie',
      ingredients: 'Chicken, rice, sausage, spinach',
      price: '20€',
    },
    {
      name: 'Panmacotte Cream Cake',
      ingredients: 'Chicken, rice, sausage spinach',
      price: '20€',
    },
  ],
};




/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base": () => (/* binding */ base),
/* harmony export */   "element": () => (/* binding */ element),
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);




const element = document.createElement('div');
element.classList.add('element');

const main = document.createElement('div');
main.classList.add('main');

function base() {
  generateMapsScript();
  generateHeader();
  element.appendChild(main);
  
}

function generateMapsScript() {
  if (document.getElementById('maps-script') === null) {
    let script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAu0LrpUQuTFqssEcczRHPqUK3196a96aY&callback=&v=weekly';
    script.setAttribute('async', '');
    script.setAttribute('defer', '');
    script.id = 'maps-script';
    document.getElementsByTagName('body')[0].appendChild(script);
  }
}

function generateHeader() {
  const container = createElementAndClass('container');

  element.appendChild(container);

  const header = createElementAndClass('header');

  header.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.header;

  container.appendChild(header);

  const tabs = createElementAndClass('tabs');

  generateTabs(tabs);

  container.appendChild(tabs);
}

function generateTabs(parent) {
  for (let value of _config_js__WEBPACK_IMPORTED_MODULE_1__.home.tabs) {
    let tab = createElementAndClass('tab');
    tab.id = value;
    tab.textContent = value;

    parent.appendChild(tab);
  }
}

function createElementAndClass(className) {
  let foo = document.createElement('div');
  foo.classList.add(className);

  return foo;
}




/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementAndClass)
/* harmony export */ });
function createElementAndClass(className) {
  const foo = document.createElement('div');
  foo.classList.add(className);

  return foo;
}


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);





function menu() {
  const container = document.createElement('div');
  container.classList.add('menu-container');
  _pageLoad__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(container);

  const title = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('menu-title');
  title.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.menu.title;

  container.appendChild(title);

  generateItems();

  return _pageLoad__WEBPACK_IMPORTED_MODULE_2__.element;
}

function generateItems() {
  const categories = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('categories');
  for (const categoryName of Object.keys(_config_js__WEBPACK_IMPORTED_MODULE_1__.menu)) {
    if (categoryName === 'title') {
      continue;
    }
    const category = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('category');
    const categoryTitle = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('category-title');
    categoryTitle.classList.add('title--underline');

    categoryTitle.textContent = categoryName;

    const mealList = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meals-list');

    for (const categoryItem of _config_js__WEBPACK_IMPORTED_MODULE_1__.menu[categoryName]) {
      const title = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meal-title');
      const ingredients = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meal-ingredients');
      const price = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meal-price');

      const meal = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meal');

      title.textContent = categoryItem.name;
      ingredients.textContent = categoryItem.ingredients;
      price.textContent = categoryItem.price;

      meal.append(title, ingredients, price);
      mealList.append(meal);
    }

    categories.appendChild(category);
    category.append(categoryTitle, mealList);

    document.querySelector('.menu-container').appendChild(categories);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);





function contact() {
  const container = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('contact-container');

  const infoWrapper = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('info-wrapper');

  const addressContainer = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('address-container');

  const telephoneContainer = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('telephone-container');

  infoWrapper.appendChild(addressContainer);
  infoWrapper.appendChild(telephoneContainer);

  const telephoneTitle = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('telephone-title');
  telephoneTitle.classList.add('title--underline');
  const telephone = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('telephone');
  telephoneTitle.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.contacts.telephoneTitle;
  telephone.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.contacts.telephone;

  telephoneContainer.appendChild(telephoneTitle);
  telephoneContainer.appendChild(telephone);

  const addressTitle = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('address-title');
  addressTitle.classList.add('title--underline');
  const address = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('address');
  addressTitle.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.contacts.addressTitle;
  address.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.contacts.address;

  addressContainer.append(addressTitle);
  addressContainer.append(address);

  const map = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('contact-map');

  container.appendChild(infoWrapper);
  container.appendChild(map);

  _pageLoad__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(container);

  initMap();

  return _pageLoad__WEBPACK_IMPORTED_MODULE_2__.element;
}

window.initMap = function () {
  const loc = { lat: 43.4377, lng: 5.0369 };
  const map = new google.maps.Map(document.querySelector('.contact-map'), {
    zoom: 12,
    center: loc,
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);






(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_3__.base)();

const content = document.getElementById('content');
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

const buttons = document.querySelectorAll('.tab');

buttons.forEach((button) => button.addEventListener('click', () => {
  buttons.forEach((button) => button.classList.remove('menu-item-selected'));

  if (button.id === 'HOME') {
    clear();
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    button.classList.add('menu-item-selected');
  }

  if (button.id === 'MENU') {
    clear();
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    button.classList.add('menu-item-selected');
  }

  if (button.id === 'CONTACT') {
    clear();
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    button.classList.add('menu-item-selected');
  }
}));

function clear() {
  const main = document.querySelector('.main');
  let child = main.lastElementChild;
  while (child) {
    main.removeChild(child);
    child = main.lastElementChild;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUI7QUFDYztBQUNRO0FBQ0c7O0FBRS9CO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG9EQUFxQjtBQUMzQyxJQUFJLHVEQUFnQjs7QUFFcEIsa0JBQWtCLG9EQUFxQjtBQUN2QztBQUNBLHdCQUF3Qix3REFBZ0I7QUFDeEM7O0FBRUEsaUJBQWlCLG9EQUFxQjtBQUN0QyxxQkFBcUIsb0RBQXFCOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDLG9EQUFZO0FBQzlDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBWTs7QUFFL0Isc0NBQXNDLE9BQU87QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isb0RBQXFCOztBQUUzQyxrQkFBa0Isb0RBQXFCO0FBQ3ZDLHdCQUF3QiwwREFBa0I7QUFDMUM7O0FBRUEscUJBQXFCLG9EQUFxQjtBQUMxQztBQUNBLDJCQUEyQixxREFBYTs7QUFFeEMsSUFBSSx1REFBZ0I7QUFDcEI7O0FBRUE7QUFDQSxzQkFBc0Isb0RBQXFCOztBQUUzQyxrQkFBa0Isb0RBQXFCO0FBQ3ZDO0FBQ0Esd0JBQXdCLHVEQUFlO0FBQ3ZDOztBQUVBLElBQUksdURBQWdCOztBQUVwQjtBQUNBOztBQUVBLG9DQUFvQyxrREFBVTtBQUM5QztBQUNBO0FBQ0EsK0JBQStCLE9BQU8sRUFBRSxrREFBVSxRQUFRO0FBQzFEOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyw4Q0FBTztBQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlFQUFrRDtBQUM5Riw0Q0FBNEMsaUVBQStDO0FBQzNGLDRDQUE0QyxpRUFBcUQ7QUFDakcsNENBQTRDLGlFQUFpRDtBQUM3Riw0Q0FBNEMsaUVBQW1EO0FBQy9GLDRDQUE0QyxpRUFBOEI7QUFDMUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCxrQ0FBa0MseURBQXlELEdBQUcsZ0JBQWdCLCtCQUErQix5REFBeUQsR0FBRyxnQkFBZ0IscUNBQXFDLHlEQUF5RCxHQUFHLGdCQUFnQixpQ0FBaUMseURBQXlELEdBQUcsZ0JBQWdCLG1DQUFtQyx5REFBeUQsR0FBRyxVQUFVLG1DQUFtQyxzQkFBc0IsZ0JBQWdCLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsa0JBQWtCLEdBQUcsZ0JBQWdCLHFCQUFxQixrQkFBa0IsbUNBQW1DLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLEdBQUcsYUFBYSxxQ0FBcUMsa0JBQWtCLDBCQUEwQixnQkFBZ0Isa0JBQWtCLDRCQUE0QixpQkFBaUIsR0FBRyxXQUFXLHdCQUF3QiwrQkFBK0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixpQkFBaUIsZUFBZSx3QkFBd0Isb0JBQW9CLEdBQUcsVUFBVSxrQkFBa0IsNEJBQTRCLEdBQUcsV0FBVyxZQUFZLGtCQUFrQixnRUFBZ0UsMkJBQTJCLGlDQUFpQyxnQ0FBZ0MsS0FBSyxpRUFBaUUsdURBQXVELG9CQUFvQix5Q0FBeUMsaUJBQWlCLGtCQUFrQixpQkFBaUIsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQixjQUFjLHlDQUF5QyxpQkFBaUIsa0JBQWtCLGlCQUFpQixHQUFHLG1CQUFtQixpQkFBaUIsR0FBRyx1QkFBdUIsK0JBQStCLG1DQUFtQyx3QkFBd0IsR0FBRyxlQUFlLGVBQWUsdUJBQXVCLEdBQUcsWUFBWSxlQUFlLEdBQUcsa0JBQWtCLGtCQUFrQixvQkFBb0IsaUNBQWlDLEdBQUcsZUFBZSxrQkFBa0IsMkJBQTJCLEdBQUcsc0JBQXNCLHlCQUF5QixzQkFBc0IsY0FBYyxHQUFHLHlCQUF5QixrQkFBa0IsMkJBQTJCLGNBQWMseUJBQXlCLHVCQUF1QixzQkFBc0IsR0FBRyxxQkFBcUIscUNBQXFDLG1CQUFtQixHQUFHLG9CQUFvQiw4QkFBOEIsbUNBQW1DLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyx3QkFBd0IsaUJBQWlCLGtCQUFrQix5QkFBeUIsdUJBQXVCLHNCQUFzQixvQkFBb0IsY0FBYyxHQUFHLHdCQUF3QixrQkFBa0IsMkJBQTJCLGVBQWUsa0JBQWtCLEdBQUcsbUJBQW1CLHFCQUFxQixrQkFBa0IsY0FBYyxHQUFHLCtDQUErQyxrQ0FBa0MseUNBQXlDLGlCQUFpQixrQkFBa0Isa0JBQWtCLDJCQUEyQixjQUFjLGVBQWUsR0FBRyxrQkFBa0IsZ0JBQWdCLGtCQUFrQixHQUFHLHVDQUF1QyxxQkFBcUIsR0FBRywyQkFBMkIsMEJBQTBCLHFCQUFxQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLCtCQUErQixxQkFBcUIsR0FBRyxpQkFBaUIsa0JBQWtCLG1DQUFtQyxnQ0FBZ0MsY0FBYyxzQkFBc0IsR0FBRyxlQUFlLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGNBQWMsR0FBRyxxQkFBcUIsK0JBQStCLHFCQUFxQixHQUFHLGlCQUFpQixrQ0FBa0Msa0JBQWtCLGdDQUFnQyxjQUFjLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxpQkFBaUIscUNBQXFDLHFCQUFxQixHQUFHLHVCQUF1QixpQ0FBaUMscUJBQXFCLGlCQUFpQixHQUFHLHlCQUF5QixtQ0FBbUMsR0FBRywwQ0FBMEMsYUFBYSxjQUFjLGtCQUFrQiwyQkFBMkIsZ0VBQWdFLDBCQUEwQixpQ0FBaUMsZ0NBQWdDLGdDQUFnQyxPQUFPLDBCQUEwQixlQUFlLGtCQUFrQixLQUFLLGtCQUFrQixvQkFBb0IsNkJBQTZCLG1CQUFtQixXQUFXLGVBQWUsMEJBQTBCLDhCQUE4QixrQkFBa0IsS0FBSyxhQUFhLHlCQUF5Qix3QkFBd0IsZUFBZSw4QkFBOEIsS0FBSyxtQkFBbUIsb0JBQW9CLDZCQUE2QixLQUFLLHFCQUFxQixvQkFBb0IsNkJBQTZCLEtBQUssMEJBQTBCLGdCQUFnQixLQUFLLGdEQUFnRCxjQUFjLGtCQUFrQixLQUFLLHVCQUF1QixzQkFBc0IsS0FBSyx1QkFBdUIsZ0JBQWdCLEtBQUssU0FBUyxhQUFhLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxV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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNBO0FBQ007QUFDRTtBQUNoQjs7QUFFckIsa0RBQUk7O0FBRUo7QUFDQSxvQkFBb0Isb0RBQUk7O0FBRXhCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixvREFBSTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQUk7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHVEQUFPO0FBQy9CO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29uZmlnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhvbWUgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5pbXBvcnQgeyBlbGVtZW50LCBtYWluIH0gZnJvbSAnLi9wYWdlTG9hZCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudEFuZENsYXNzIGZyb20gJy4vdXRpbC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWQoKSB7XG4gIGdlbmVyYXRlUmV2aWV3KCk7XG4gIGdlbmVyYXRlR3JlZXRpbmcoKTtcbiAgZ2VuZXJhdGVIb3VycygpO1xuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUmV2aWV3KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygncmV2aWV3cy1jb250YWluZXInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygncmV2aWV3LXRpdGxlJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtLXVuZGVybGluZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaG9tZS5yZXZpZXdUaXRsZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygncmV2aWV3LXRleHQnKTtcbiAgICBjb25zdCByZXZpZXdlciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygncmV2aWV3ZXInKTtcblxuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnY2hhbmdpbmcnKTtcbiAgICByZXZpZXdlci5jbGFzc0xpc3QuYWRkKCdjaGFuZ2luZycpO1xuXG4gICAgY2hhbmdpbmdSZXZpZXdzKCk7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2luZ1Jldmlld3MoKSB7XG4gICAgICBjb25zdCByZXZpZXdzID0gT2JqZWN0LmtleXMoaG9tZS5yZXZpZXdzKTtcbiAgICAgIGxldCBhdXRob3I7XG4gICAgICBsZXQgcmV2aWV3O1xuXG4gICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICBhbmltYXRlUmV2aWV3cygpO1xuICAgICAgc2V0SW50ZXJ2YWwoYW5pbWF0ZVJldmlld3MsIDYwMDApO1xuXG4gICAgICBmdW5jdGlvbiBhbmltYXRlUmV2aWV3cygpIHtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdzaG93bicpO1xuICAgICAgICByZXZpZXdlci5jbGFzc0xpc3QuYWRkKCdzaG93bicpO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gcmV2aWV3cy5sZW5ndGgpIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDw9IHJldmlld3MubGVuZ3RoKSB7XG4gICAgICAgICAgYXV0aG9yID0gcmV2aWV3c1tpbmRleF07XG4gICAgICAgICAgcmV2aWV3ID0gaG9tZS5yZXZpZXdzW2F1dGhvcl07XG5cbiAgICAgICAgICByZXZpZXdlci50ZXh0Q29udGVudCA9IGAtICR7YXV0aG9yfWA7XG4gICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHJldmlldztcblxuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpO1xuICAgICAgICAgIHJldmlld2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJyk7XG4gICAgICAgIH0sIDUwMDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVHcmVldGluZygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2dyZWV0aW5nLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2dyZWV0aW5nLXRpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBob21lLmdyZWV0aW5nVGl0bGU7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGdyZWV0aW5nID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdncmVldGluZy10ZXh0Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcbiAgICBncmVldGluZy50ZXh0Q29udGVudCA9IGhvbWUuZ3JlZXRpbmc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUhvdXJzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnaG91cnMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnaG91cnMtdGl0bGUnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS0tdW5kZXJsaW5lJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBob21lLmhvdXJzVGl0bGU7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcblxuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LmtleXMoaG9tZS5ob3VycykpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke3ZhbHVlfSAke2hvbWUuaG91cnNbdmFsdWVdfVxcbmA7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NyaW1zb25UZXh0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Dcmltc29uVGV4dC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3JpbXNvblRleHQtQm9sZEl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NyaW1zb25UZXh0LUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NyaW1zb25UZXh0LVNlbWlCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblJlZ3VsYXInO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkl0YWxpYyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uU2VtaUJvbGQnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblNlbWlCb2xkJztcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5lbGVtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6NjBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhYnMge1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAxMDBweDtcXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lcixcXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLmdyZWV0aW5nLWNvbnRhaW5lciB7XFxuICAvKiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjgpOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5yZXZpZXctdGl0bGUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGl0bGUtLXVuZGVybGluZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jaGFuZ2luZyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4uc2hvd24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJldmlldy10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25JdGFsaWMnO1xcbn1cXG5cXG4ucmV2aWV3ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDY7XFxuICBncmlkLXJvdy1zdGFydDogNjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdyZWV0aW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XFxufVxcblxcbi5ncmVldGluZy10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4uZ3JlZXRpbmctdGV4dCB7XFxuICBtYXJnaW46IDBweCAyMHB4IDMwcHggMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uU2VtaUJvbGQnO1xcbn1cXG5cXG4uaG91cnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDA7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMztcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5hZGRyZXNzLWNvbnRhaW5lcixcXG4udGVsZXBob25lLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jb250YWN0LW1hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzcwcHg7XFxufVxcblxcbi5hZGRyZXNzLXRpdGxlLFxcbi50ZWxlcGhvbmUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmFkZHJlc3MsXFxuLnRlbGVwaG9uZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcblxcbi5jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDUwcHg7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4ubWVhbHMtbGlzdCB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZWFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tZWFsLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLm1lYWwtaW5ncmVkaWVudHMge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uSXRhbGljJztcXG4gIGNvbG9yOiBnYWluc2Jvcm87XFxuICBncmlkLXJvdzogMiA7XFxufVxcblxcbi5tZW51LWl0ZW0tc2VsZWN0ZWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcbiAgLm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG4gIH1cXG5cXG4gIC5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICAgIG9yZGVyOiAzO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIFxcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC50YWJzIHtcXG4gICAganVzdGlmeS1zZWxmOiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgZ2FwOiAxMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNhdGVnb3JpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmluZm8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250YWluZXIge1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuYWRkcmVzcy1jb250YWluZXIsIC50ZWxlcGhvbmUtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAuZ3JlZXRpbmctdGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIge1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuXFxuXFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNENBQXdDO0FBQzFDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDRDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbURBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCOztBQUU3Qjs7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QUNFLE9BQU87SUFDUCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztFQUNYOzs7O0FBSUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIHNyYzogdXJsKC4vZm9udHMvQ3JpbXNvblRleHQtUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Dcmltc29uVGV4dC1Cb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBzcmM6IHVybCguL2ZvbnRzL0NyaW1zb25UZXh0LUJvbGRJdGFsaWMudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25JdGFsaWMnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Dcmltc29uVGV4dC1JdGFsaWMudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25TZW1pQm9sZCc7XFxuICBzcmM6IHVybCguL2ZvbnRzL0NyaW1zb25UZXh0LVNlbWlCb2xkLnR0Zik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uU2VtaUJvbGQnO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGhlaWdodDo2MHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFicyB7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxufVxcblxcbi5ob3Vycy1jb250YWluZXIsXFxuLnJldmlld3MtY29udGFpbmVyLFxcbi5ncmVldGluZy1jb250YWluZXIge1xcbiAgLyogICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC44KTsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ucmV2aWV3LXRpdGxlIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnRpdGxlLS11bmRlcmxpbmUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG5cXG4uY2hhbmdpbmcge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuXFxuLnNob3duIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yZXZpZXctdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uSXRhbGljJztcXG59XFxuXFxuLnJldmlld2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA2O1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDY7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ncmVldGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xcbn1cXG5cXG4uZ3JlZXRpbmctdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmdyZWV0aW5nLXRleHQge1xcbiAgbWFyZ2luOiAwcHggMjBweCAzMHB4IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblNlbWlCb2xkJztcXG59XFxuXFxuLmhvdXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmV2aWV3cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAwO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1lbmQ6IDM7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaW5mby13cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWRkcmVzcy1jb250YWluZXIsXFxuLnRlbGVwaG9uZS1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uUmVndWxhcic7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY29udGFjdC1tYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM3MHB4O1xcbn1cXG5cXG4uYWRkcmVzcy10aXRsZSxcXG4udGVsZXBob25lLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5hZGRyZXNzLFxcbi50ZWxlcGhvbmUge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4uY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmNhdGVnb3J5LXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG59XFxuXFxuLm1lYWxzLWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uUmVndWxhcic7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVhbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWVhbC10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi5tZWFsLWluZ3JlZGllbnRzIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkl0YWxpYyc7XFxuICBjb2xvcjogZ2FpbnNib3JvO1xcbiAgZ3JpZC1yb3c6IDIgO1xcbn1cXG5cXG4ubWVudS1pdGVtLXNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXG4gIC5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG4gIH1cXG5cXG4gIC5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICAgIG9yZGVyOiAzO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIFxcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC50YWJzIHtcXG4gICAganVzdGlmeS1zZWxmOiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgZ2FwOiAxMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNhdGVnb3JpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmluZm8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuY29udGFjdC1jb250YWluZXIge1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAuYWRkcmVzcy1jb250YWluZXIsIC50ZWxlcGhvbmUtY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAuZ3JlZXRpbmctdGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAubWVudS1jb250YWluZXIge1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuXFxuXFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImNvbnN0IGhvbWUgPSB7XG4gIGhlYWRlcjogJ05FTSBSRVNUQVVSQU5UJyxcbiAgaG91cnNUaXRsZTogJ1dPUktJTkcgSE9VUlMnLFxuICBob3Vyczoge1xuICAgICdNb24gLSBUaHU6JzogJzExOjAwIC0gMjI6MDAnLFxuICAgICdGcmk6JzogJzExOjAwIC0gMjI6MDAnLFxuICAgICdTYXQ6JzogJzExOjAwIC0gMjM6MDAnLFxuICAgICdTdW46JzogJzExOjAwIC0gMjE6MDAnLFxuICB9LFxuICByZXZpZXdUaXRsZTogJ1JFVklFV1MnLFxuICByZXZpZXdzOiB7XG4gICAgTWlrZTogJ1plIGJlc3QgcmVzdGF1cmFudCBpbiB0aGUgYXJlYS4nLFxuICAgIEp1bGllOiAnU2ltcGx5IFcgLSAwIC0gVy4nLFxuICAgIEpvaG46ICdJIGxpdGVyYWxseSBhdGUgbXkgZmluZ2VycyBpdCB3YXMgc28gZ29vZC4nLFxuICAgIEFuZHJldzogJzE0IG91dCBvZiAxNSB5dW1taWVzISEhMTEnLFxuICB9LFxuICB0YWJzOiBbJ0hPTUUnLCAnTUVOVScsICdDT05UQUNUJ10sXG4gIGdyZWV0aW5nVGl0bGU6ICdISSBORUlHSEJPVVIsJyxcbiAgZ3JlZXRpbmc6XG4gICAgJ1dlIGFyZSBtYWtpbmcgeXVtbXkgbWVhbHMgYW5kIHRyeWluZyBub3QgdG8gZm9vZC1wb2lzb24gYW55b25lIHNpbmNlIDIwMDBzLicsXG59O1xuXG5jb25zdCBjb250YWN0cyA9IHtcbiAgYWRkcmVzc1RpdGxlOiAnQUREUkVTUycsXG4gIGFkZHJlc3M6ICcyMyBCb3VsZXZhcmQgUmVuZSBDYWlsbG91eFxcbk1hcmlnbmFuZVxcbkJvdWNoZXMtZHUtUmjDtG5cXG4xMzcwMCcsXG4gIHRlbGVwaG9uZVRpdGxlOiAnQ09OVEFDVFMnLFxuICB0ZWxlcGhvbmU6ICcrMDQgNDIgNzcgMDEgMDFcXG5uZW1AbmVtLm5lbScsXG4gIG1lc3NhZ2U6ICdJbnN0ZWFkIG9mIGNhbGxpbmcgdXMsIGJldHRlciBjYWxsIHlvdXIgbW9tLicsXG59O1xuXG5jb25zdCBtZW51ID0ge1xuICB0aXRsZTogJ091ciBGb29kIE1lbnUnLFxuICAnTWFpbiBDb3Vyc2UnOiBbXG4gICAge1xuICAgICAgbmFtZTogJ1N1cGVyIERlbGljaW91cyBadXBwYSBUb3NjYW5hJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSwgc3BpbmFjaCcsXG4gICAgICBwcmljZTogJzIw4oKsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCYWNvbiBDb2xpIEJha2VkIEF1c3RyYWxpYW4gQmVlZicsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2Ugc3BpbmFjaCcsXG4gICAgICBwcmljZTogJzIw4oKsJyxcbiAgICB9LFxuICBdLFxuICAnU291cCAmIFNhbGFkcyc6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU2FsYXQgQmFuYW5hIEZsb3dlcicsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2UsIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnR291cm1ldCBNdXNocm9vbSBSaXNzb3RvJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gIF0sXG4gIERlc3NlcnRzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ0ljZSBDcmVhbSBUYXJ0ZSBBcHBsZScsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2UsIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnJ1aXQgTWlsbGUgRmV1aWxlJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gIF0sXG4gIERyaW5rczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdEb3VibGUgQ2hvY29sYXRlIE11ZCBQaWUnLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlLCBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1Bhbm1hY290dGUgQ3JlYW0gQ2FrZScsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2Ugc3BpbmFjaCcsXG4gICAgICBwcmljZTogJzIw4oKsJyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IHsgaG9tZSwgY29udGFjdHMsIG1lbnUgfTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtob21lfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5cblxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlbGVtZW50Jyk7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG5mdW5jdGlvbiBiYXNlKCkge1xuICBnZW5lcmF0ZU1hcHNTY3JpcHQoKTtcbiAgZ2VuZXJhdGVIZWFkZXIoKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTWFwc1NjcmlwdCgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBzLXNjcmlwdCcpID09PSBudWxsKSB7XG4gICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zcmMgPVxuICAgICAgJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5QXUwTHJwVVF1VEZxc3NFY2N6UkhQcVVLMzE5NmE5NmFZJmNhbGxiYWNrPSZ2PXdlZWtseSc7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnYXN5bmMnLCAnJyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGVmZXInLCAnJyk7XG4gICAgc2NyaXB0LmlkID0gJ21hcHMtc2NyaXB0JztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnY29udGFpbmVyJyk7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnaGVhZGVyJyk7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gaG9tZS5oZWFkZXI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgdGFicyA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygndGFicycpO1xuXG4gIGdlbmVyYXRlVGFicyh0YWJzKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFicyk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFicyhwYXJlbnQpIHtcbiAgZm9yIChsZXQgdmFsdWUgb2YgaG9tZS50YWJzKSB7XG4gICAgbGV0IHRhYiA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygndGFiJyk7XG4gICAgdGFiLmlkID0gdmFsdWU7XG4gICAgdGFiLnRleHRDb250ZW50ID0gdmFsdWU7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGxldCBmb28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICByZXR1cm4gZm9vO1xufVxuXG5leHBvcnQgeyBiYXNlLCBtYWluLCBlbGVtZW50IH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZvbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb28uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIHJldHVybiBmb287XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG1lbnUgYXMgbWVhbHMgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5pbXBvcnQgeyBlbGVtZW50LCBtYWluIH0gZnJvbSAnLi9wYWdlTG9hZCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudEFuZENsYXNzIGZyb20gJy4vdXRpbC5qcyc7XG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdtZW51LXRpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gbWVhbHMudGl0bGU7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBnZW5lcmF0ZUl0ZW1zKCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSXRlbXMoKSB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2NhdGVnb3JpZXMnKTtcbiAgZm9yIChjb25zdCBjYXRlZ29yeU5hbWUgb2YgT2JqZWN0LmtleXMobWVhbHMpKSB7XG4gICAgaWYgKGNhdGVnb3J5TmFtZSA9PT0gJ3RpdGxlJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjYXRlZ29yeScpO1xuICAgIGNvbnN0IGNhdGVnb3J5VGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2NhdGVnb3J5LXRpdGxlJyk7XG4gICAgY2F0ZWdvcnlUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS0tdW5kZXJsaW5lJyk7XG5cbiAgICBjYXRlZ29yeVRpdGxlLnRleHRDb250ZW50ID0gY2F0ZWdvcnlOYW1lO1xuXG4gICAgY29uc3QgbWVhbExpc3QgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ21lYWxzLWxpc3QnKTtcblxuICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJdGVtIG9mIG1lYWxzW2NhdGVnb3J5TmFtZV0pIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdtZWFsLXRpdGxlJyk7XG4gICAgICBjb25zdCBpbmdyZWRpZW50cyA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnbWVhbC1pbmdyZWRpZW50cycpO1xuICAgICAgY29uc3QgcHJpY2UgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ21lYWwtcHJpY2UnKTtcblxuICAgICAgY29uc3QgbWVhbCA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnbWVhbCcpO1xuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5SXRlbS5uYW1lO1xuICAgICAgaW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBjYXRlZ29yeUl0ZW0uaW5ncmVkaWVudHM7XG4gICAgICBwcmljZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5SXRlbS5wcmljZTtcblxuICAgICAgbWVhbC5hcHBlbmQodGl0bGUsIGluZ3JlZGllbnRzLCBwcmljZSk7XG4gICAgICBtZWFsTGlzdC5hcHBlbmQobWVhbCk7XG4gICAgfVxuXG4gICAgY2F0ZWdvcmllcy5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgY2F0ZWdvcnkuYXBwZW5kKGNhdGVnb3J5VGl0bGUsIG1lYWxMaXN0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNhdGVnb3JpZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNvbnRhY3RzIH0gZnJvbSAnLi9jb25maWcuanMnO1xuaW1wb3J0IHsgZWxlbWVudCwgbWFpbiB9IGZyb20gJy4vcGFnZUxvYWQnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcyBmcm9tICcuL3V0aWwuanMnO1xuXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2NvbnRhY3QtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgaW5mb1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2luZm8td3JhcHBlcicpO1xuXG4gIGNvbnN0IGFkZHJlc3NDb250YWluZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2FkZHJlc3MtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGVsZXBob25lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCd0ZWxlcGhvbmUtY29udGFpbmVyJyk7XG5cbiAgaW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRhaW5lcik7XG4gIGluZm9XcmFwcGVyLmFwcGVuZENoaWxkKHRlbGVwaG9uZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgdGVsZXBob25lVGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3RlbGVwaG9uZS10aXRsZScpO1xuICB0ZWxlcGhvbmVUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS0tdW5kZXJsaW5lJyk7XG4gIGNvbnN0IHRlbGVwaG9uZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygndGVsZXBob25lJyk7XG4gIHRlbGVwaG9uZVRpdGxlLnRleHRDb250ZW50ID0gY29udGFjdHMudGVsZXBob25lVGl0bGU7XG4gIHRlbGVwaG9uZS50ZXh0Q29udGVudCA9IGNvbnRhY3RzLnRlbGVwaG9uZTtcblxuICB0ZWxlcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGVsZXBob25lVGl0bGUpO1xuICB0ZWxlcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGVsZXBob25lKTtcblxuICBjb25zdCBhZGRyZXNzVGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2FkZHJlc3MtdGl0bGUnKTtcbiAgYWRkcmVzc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLS11bmRlcmxpbmUnKTtcbiAgY29uc3QgYWRkcmVzcyA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnYWRkcmVzcycpO1xuICBhZGRyZXNzVGl0bGUudGV4dENvbnRlbnQgPSBjb250YWN0cy5hZGRyZXNzVGl0bGU7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250YWN0cy5hZGRyZXNzO1xuXG4gIGFkZHJlc3NDb250YWluZXIuYXBwZW5kKGFkZHJlc3NUaXRsZSk7XG4gIGFkZHJlc3NDb250YWluZXIuYXBwZW5kKGFkZHJlc3MpO1xuXG4gIGNvbnN0IG1hcCA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnY29udGFjdC1tYXAnKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1dyYXBwZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgaW5pdE1hcCgpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG53aW5kb3cuaW5pdE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbG9jID0geyBsYXQ6IDQzLjQzNzcsIGxuZzogNS4wMzY5IH07XG4gIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtbWFwJyksIHtcbiAgICB6b29tOiAxMixcbiAgICBjZW50ZXI6IGxvYyxcbiAgfSk7XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgIHBvc2l0aW9uOiBsb2MsXG4gICAgbWFwOiBtYXAsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL3BhZ2VMb2FkLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5iYXNlKCk7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29udGVudC5hcHBlbmRDaGlsZChsb2FkKCkpO1xuXG5jb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaXRlbS1zZWxlY3RlZCcpKTtcblxuICBpZiAoYnV0dG9uLmlkID09PSAnSE9NRScpIHtcbiAgICBjbGVhcigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZCgpKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXNlbGVjdGVkJyk7XG4gIH1cblxuICBpZiAoYnV0dG9uLmlkID09PSAnTUVOVScpIHtcbiAgICBjbGVhcigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXNlbGVjdGVkJyk7XG4gIH1cblxuICBpZiAoYnV0dG9uLmlkID09PSAnQ09OVEFDVCcpIHtcbiAgICBjbGVhcigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXNlbGVjdGVkJyk7XG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gY2xlYXIoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICBsZXQgY2hpbGQgPSBtYWluLmxhc3RFbGVtZW50Q2hpbGQ7XG4gIHdoaWxlIChjaGlsZCkge1xuICAgIG1haW4ucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIGNoaWxkID0gbWFpbi5sYXN0RWxlbWVudENoaWxkO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=