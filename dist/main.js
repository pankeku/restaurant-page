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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'CrimsonRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonBoldItalic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonItalic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonSemiBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\nbody {\n  font-family: 'CrimsonSemiBold';\n  font-size: 1.2rem;\n  margin: 0px;\n}\n\n.content {\n  display: flex;\n}\n\n.element {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.container {\n  font-size: 1.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  background-color: black;\n  height:60px;\n}\n\n.header {\n  font-family: 'CrimsonBoldItalic';\n  display: flex;\n  justify-content: left;\n  width: 100%;\n  padding: 10px;\n  background-color: black;\n  color: white;\n}\n\n.tabs {\n  justify-self: right;\n  font-family: 'CrimsonBold';\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  gap: 100px;\n  margin-right: 100px;\n  font-size: 1rem;\n}\n\n.tab {\n  display: flex;\n  justify-content: center;\n}\n\n.main {\n  flex: 1;\n  display: grid;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n\n}\n\n.hours-container,\n.reviews-container,\n.greeting-container {\n  /*     background-color: rgba(256, 256, 256, 0.8); */\n  display: grid;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.review-title {\n  height: 30px;\n}\n\n.title--underline {\n  font-family: 'CrimsonBold';\n  border-bottom: 1px solid white;\n  padding-bottom: 1px;\n}\n\n.changing {\n  opacity: 0;\n  transition: all 1s;\n}\n\n.shown {\n  opacity: 1;\n}\n\n.review-text {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: 'CrimsonItalic';\n}\n\n.reviewer {\n  display: flex;\n  justify-content: right;\n}\n\n.hours-container {\n  grid-column-start: 6;\n  grid-row-start: 6;\n  gap: 10px;\n}\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column-start: 2;\n  grid-column-end: 5;\n  grid-row-start: 4;\n}\n\n.greeting-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 3em;\n}\n\n.greeting-text {\n  margin: 0px 20px 30px 0px;\n  font-family: 'CrimsonSemiBold';\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.reviews-container {\n  width: 200px;\n  height: 200px;\n  grid-column-start: 0;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  gap: 10px;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 20px;\n}\n\n.info-wrapper {\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n}\n\n.address-container,\n.telephone-container {\n  font-family: 'CrimsonRegular';\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n}\n\n.contact-map {\n  width: 100%;\n  height: 370px;\n}\n\n.address-title,\n.telephone-title {\n  font-size: 1.5em;\n}\n\n.address,\n.telephone {\n  white-space: pre-wrap;\n  font-size: 1.2em;\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.categories {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 50px;\n  margin-left: 40px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  gap: 20px;\n}\n\n.category-title {\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.meals-list {\n  font-family: 'CrimsonRegular';\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n}\n\n.meal {\n  display: grid;\n}\n\n.meal-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 1.3em;\n}\n\n.meal-ingredients {\n  font-family: 'CrimsonItalic';\n  color: gainsboro;\n  grid-row: 2 ;\n}\n\n.menu-item-selected {\n  border-bottom: 1px solid white;\n}\n\n@media screen and (max-width: 900px) {\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  flex: 1;\n  }\n\n  .reviews-container {\n    order: 3;\n    width: auto;\n  }\n\n  .container {\n    display: flex;\n    flex-direction: column;\n    height: auto;\n  }\n\n  .header {\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n\n  .tabs {\n    justify-self: none;\n    margin-right: 0px;\n  }\n\n  .categories {\n    display: flex;\n    flex-direction: column;\n  }\n\n\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'CrimsonRegular';\n  src: url(./fonts/CrimsonText-Regular.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonBold';\n  src: url(./fonts/CrimsonText-Bold.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonBoldItalic';\n  src: url(./fonts/CrimsonText-BoldItalic.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonItalic';\n  src: url(./fonts/CrimsonText-Italic.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonSemiBold';\n  src: url(./fonts/CrimsonText-SemiBold.ttf);\n}\n\nbody {\n  font-family: 'CrimsonSemiBold';\n  font-size: 1.2rem;\n  margin: 0px;\n}\n\n.content {\n  display: flex;\n}\n\n.element {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.container {\n  font-size: 1.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  background-color: black;\n  height:60px;\n}\n\n.header {\n  font-family: 'CrimsonBoldItalic';\n  display: flex;\n  justify-content: left;\n  width: 100%;\n  padding: 10px;\n  background-color: black;\n  color: white;\n}\n\n.tabs {\n  justify-self: right;\n  font-family: 'CrimsonBold';\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  gap: 100px;\n  margin-right: 100px;\n  font-size: 1rem;\n}\n\n.tab {\n  display: flex;\n  justify-content: center;\n}\n\n.main {\n  flex: 1;\n  display: grid;\n  background: url('./image.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n\n}\n\n.hours-container,\n.reviews-container,\n.greeting-container {\n  /*     background-color: rgba(256, 256, 256, 0.8); */\n  display: grid;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.review-title {\n  height: 30px;\n}\n\n.title--underline {\n  font-family: 'CrimsonBold';\n  border-bottom: 1px solid white;\n  padding-bottom: 1px;\n}\n\n.changing {\n  opacity: 0;\n  transition: all 1s;\n}\n\n.shown {\n  opacity: 1;\n}\n\n.review-text {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: 'CrimsonItalic';\n}\n\n.reviewer {\n  display: flex;\n  justify-content: right;\n}\n\n.hours-container {\n  grid-column-start: 6;\n  grid-row-start: 6;\n  gap: 10px;\n}\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column-start: 2;\n  grid-column-end: 5;\n  grid-row-start: 4;\n}\n\n.greeting-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 3em;\n}\n\n.greeting-text {\n  margin: 0px 20px 30px 0px;\n  font-family: 'CrimsonSemiBold';\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.reviews-container {\n  width: 200px;\n  height: 200px;\n  grid-column-start: 0;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  gap: 10px;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 20px;\n}\n\n.info-wrapper {\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n}\n\n.address-container,\n.telephone-container {\n  font-family: 'CrimsonRegular';\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n}\n\n.contact-map {\n  width: 100%;\n  height: 370px;\n}\n\n.address-title,\n.telephone-title {\n  font-size: 1.5em;\n}\n\n.address,\n.telephone {\n  white-space: pre-wrap;\n  font-size: 1.2em;\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.categories {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 50px;\n  margin-left: 40px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  gap: 20px;\n}\n\n.category-title {\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.meals-list {\n  font-family: 'CrimsonRegular';\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n}\n\n.meal {\n  display: grid;\n}\n\n.meal-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 1.3em;\n}\n\n.meal-ingredients {\n  font-family: 'CrimsonItalic';\n  color: gainsboro;\n  grid-row: 2 ;\n}\n\n.menu-item-selected {\n  border-bottom: 1px solid white;\n}\n\n@media screen and (max-width: 900px) {\n\n  .main {\n    display: flex;\n    flex-direction: column;\n    background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  flex: 1;\n  }\n\n  .reviews-container {\n    order: 3;\n    width: auto;\n  }\n\n  .container {\n    display: flex;\n    flex-direction: column;\n    height: auto;\n  }\n\n  .header {\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n\n  .tabs {\n    justify-self: none;\n    margin-right: 0px;\n  }\n\n  .categories {\n    display: flex;\n    flex-direction: column;\n  }\n\n\n}\n\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFX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dC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBob21lIH0gZnJvbSAnLi9jb25maWcuanMnO1xuaW1wb3J0IHsgZWxlbWVudCwgbWFpbiB9IGZyb20gJy4vcGFnZUxvYWQnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcyBmcm9tICcuL3V0aWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkKCkge1xuICBnZW5lcmF0ZVJldmlldygpO1xuICBnZW5lcmF0ZUdyZWV0aW5nKCk7XG4gIGdlbmVyYXRlSG91cnMoKTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZVJldmlldygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3Jldmlld3MtY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3Jldmlldy10aXRsZScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLS11bmRlcmxpbmUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGhvbWUucmV2aWV3VGl0bGU7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3Jldmlldy10ZXh0Jyk7XG4gICAgY29uc3QgcmV2aWV3ZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3Jldmlld2VyJyk7XG5cbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2NoYW5naW5nJyk7XG4gICAgcmV2aWV3ZXIuY2xhc3NMaXN0LmFkZCgnY2hhbmdpbmcnKTtcblxuICAgIGNoYW5naW5nUmV2aWV3cygpO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdpbmdSZXZpZXdzKCkge1xuICAgICAgY29uc3QgcmV2aWV3cyA9IE9iamVjdC5rZXlzKGhvbWUucmV2aWV3cyk7XG4gICAgICBsZXQgYXV0aG9yO1xuICAgICAgbGV0IHJldmlldztcblxuICAgICAgbGV0IGluZGV4ID0gMDtcblxuICAgICAgYW5pbWF0ZVJldmlld3MoKTtcbiAgICAgIHNldEludGVydmFsKGFuaW1hdGVSZXZpZXdzLCA2MDAwKTtcblxuICAgICAgZnVuY3Rpb24gYW5pbWF0ZVJldmlld3MoKSB7XG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgICAgICAgcmV2aWV3ZXIuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHJldmlld3MubGVuZ3RoKSB7XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8PSByZXZpZXdzLmxlbmd0aCkge1xuICAgICAgICAgIGF1dGhvciA9IHJldmlld3NbaW5kZXhdO1xuICAgICAgICAgIHJldmlldyA9IGhvbWUucmV2aWV3c1thdXRob3JdO1xuXG4gICAgICAgICAgcmV2aWV3ZXIudGV4dENvbnRlbnQgPSBgLSAke2F1dGhvcn1gO1xuICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSByZXZpZXc7XG5cbiAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRleHQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgICAgICAgICByZXZpZXdlci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93bicpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld2VyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlR3JlZXRpbmcoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdncmVldGluZy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdncmVldGluZy10aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaG9tZS5ncmVldGluZ1RpdGxlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBncmVldGluZyA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnZ3JlZXRpbmctdGV4dCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmVldGluZyk7XG4gICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBob21lLmdyZWV0aW5nO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVIb3VycygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2hvdXJzLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2hvdXJzLXRpdGxlJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtLXVuZGVybGluZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaG9tZS5ob3Vyc1RpdGxlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG5cbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIE9iamVjdC5rZXlzKGhvbWUuaG91cnMpKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBob3Vycy5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt2YWx1ZX0gJHtob21lLmhvdXJzW3ZhbHVlXX1cXG5gO1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vycyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Dcmltc29uVGV4dC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3JpbXNvblRleHQtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NyaW1zb25UZXh0LUJvbGRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Dcmltc29uVGV4dC1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Dcmltc29uVGV4dC1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25JdGFsaWMnO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblNlbWlCb2xkJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25TZW1pQm9sZCc7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZWxlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OjYwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YWJzIHtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxufVxcblxcbi5ob3Vycy1jb250YWluZXIsXFxuLnJldmlld3MtY29udGFpbmVyLFxcbi5ncmVldGluZy1jb250YWluZXIge1xcbiAgLyogICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC44KTsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ucmV2aWV3LXRpdGxlIHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnRpdGxlLS11bmRlcmxpbmUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG5cXG4uY2hhbmdpbmcge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG59XFxuXFxuLnNob3duIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yZXZpZXctdGV4dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uSXRhbGljJztcXG59XFxuXFxuLnJldmlld2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA2O1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDY7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ncmVldGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xcbn1cXG5cXG4uZ3JlZXRpbmctdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmdyZWV0aW5nLXRleHQge1xcbiAgbWFyZ2luOiAwcHggMjBweCAzMHB4IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblNlbWlCb2xkJztcXG59XFxuXFxuLmhvdXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmV2aWV3cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAwO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1lbmQ6IDM7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaW5mby13cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWRkcmVzcy1jb250YWluZXIsXFxuLnRlbGVwaG9uZS1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uUmVndWxhcic7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY29udGFjdC1tYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM3MHB4O1xcbn1cXG5cXG4uYWRkcmVzcy10aXRsZSxcXG4udGVsZXBob25lLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5hZGRyZXNzLFxcbi50ZWxlcGhvbmUge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4uY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmNhdGVnb3J5LXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG59XFxuXFxuLm1lYWxzLWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uUmVndWxhcic7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVhbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWVhbC10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi5tZWFsLWluZ3JlZGllbnRzIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkl0YWxpYyc7XFxuICBjb2xvcjogZ2FpbnNib3JvO1xcbiAgZ3JpZC1yb3c6IDIgO1xcbn1cXG5cXG4ubWVudS1pdGVtLXNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXG4gIC5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBmbGV4OiAxO1xcbiAgfVxcblxcbiAgLnJldmlld3MtY29udGFpbmVyIHtcXG4gICAgb3JkZXI6IDM7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAudGFicyB7XFxuICAgIGp1c3RpZnktc2VsZjogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICB9XFxuXFxuICAuY2F0ZWdvcmllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuXFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsNENBQXlDO0FBQzNDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNENBQXdDO0FBQzFDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDRDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsbURBQThCO0VBQzlCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCOztBQUU3Qjs7QUFFQTs7O0VBR0Usb0RBQW9EO0VBQ3BELGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixPQUFPO0VBQ1A7O0VBRUE7SUFDRSxRQUFRO0lBQ1IsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOzs7QUFHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblJlZ3VsYXInO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Dcmltc29uVGV4dC1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBzcmM6IHVybCguL2ZvbnRzL0NyaW1zb25UZXh0LUJvbGQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIHNyYzogdXJsKC4vZm9udHMvQ3JpbXNvblRleHQtQm9sZEl0YWxpYy50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkl0YWxpYyc7XFxuICBzcmM6IHVybCguL2ZvbnRzL0NyaW1zb25UZXh0LUl0YWxpYy50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblNlbWlCb2xkJztcXG4gIHNyYzogdXJsKC4vZm9udHMvQ3JpbXNvblRleHQtU2VtaUJvbGQudHRmKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25TZW1pQm9sZCc7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZWxlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OjYwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YWJzIHtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2UuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lcixcXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLmdyZWV0aW5nLWNvbnRhaW5lciB7XFxuICAvKiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjgpOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5yZXZpZXctdGl0bGUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGl0bGUtLXVuZGVybGluZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jaGFuZ2luZyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4uc2hvd24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJldmlldy10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25JdGFsaWMnO1xcbn1cXG5cXG4ucmV2aWV3ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDY7XFxuICBncmlkLXJvdy1zdGFydDogNjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdyZWV0aW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XFxufVxcblxcbi5ncmVldGluZy10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4uZ3JlZXRpbmctdGV4dCB7XFxuICBtYXJnaW46IDBweCAyMHB4IDMwcHggMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uU2VtaUJvbGQnO1xcbn1cXG5cXG4uaG91cnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDA7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMztcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5hZGRyZXNzLWNvbnRhaW5lcixcXG4udGVsZXBob25lLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jb250YWN0LW1hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzcwcHg7XFxufVxcblxcbi5hZGRyZXNzLXRpdGxlLFxcbi50ZWxlcGhvbmUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmFkZHJlc3MsXFxuLnRlbGVwaG9uZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcblxcbi5jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDUwcHg7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4ubWVhbHMtbGlzdCB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZWFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tZWFsLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLm1lYWwtaW5ncmVkaWVudHMge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uSXRhbGljJztcXG4gIGNvbG9yOiBnYWluc2Jvcm87XFxuICBncmlkLXJvdzogMiA7XFxufVxcblxcbi5tZW51LWl0ZW0tc2VsZWN0ZWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcbiAgLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGZsZXg6IDE7XFxuICB9XFxuXFxuICAucmV2aWV3cy1jb250YWluZXIge1xcbiAgICBvcmRlcjogMztcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLmhlYWRlciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC50YWJzIHtcXG4gICAganVzdGlmeS1zZWxmOiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gIH1cXG5cXG4gIC5jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG5cXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiY29uc3QgaG9tZSA9IHtcbiAgaGVhZGVyOiAnTkVNIFJFU1RBVVJBTlQnLFxuICBob3Vyc1RpdGxlOiAnV09SS0lORyBIT1VSUycsXG4gIGhvdXJzOiB7XG4gICAgJ01vbiAtIFRodTonOiAnMTE6MDAgLSAyMjowMCcsXG4gICAgJ0ZyaTonOiAnMTE6MDAgLSAyMjowMCcsXG4gICAgJ1NhdDonOiAnMTE6MDAgLSAyMzowMCcsXG4gICAgJ1N1bjonOiAnMTE6MDAgLSAyMTowMCcsXG4gIH0sXG4gIHJldmlld1RpdGxlOiAnUkVWSUVXUycsXG4gIHJldmlld3M6IHtcbiAgICBNaWtlOiAnWmUgYmVzdCByZXN0YXVyYW50IGluIHRoZSBhcmVhLicsXG4gICAgSnVsaWU6ICdTaW1wbHkgVyAtIDAgLSBXLicsXG4gICAgSm9objogJ0kgbGl0ZXJhbGx5IGF0ZSBteSBmaW5nZXJzIGl0IHdhcyBzbyBnb29kLicsXG4gICAgQW5kcmV3OiAnMTQgb3V0IG9mIDE1IHl1bW1pZXMhISExMScsXG4gIH0sXG4gIHRhYnM6IFsnSE9NRScsICdNRU5VJywgJ0NPTlRBQ1QnXSxcbiAgZ3JlZXRpbmdUaXRsZTogJ0hJIE5FSUdIQk9VUiwnLFxuICBncmVldGluZzpcbiAgICAnV2UgYXJlIG1ha2luZyB5dW1teSBtZWFscyBhbmQgdHJ5aW5nIG5vdCB0byBmb29kLXBvaXNvbiBhbnlvbmUgc2luY2UgMjAwMHMuJyxcbn07XG5cbmNvbnN0IGNvbnRhY3RzID0ge1xuICBhZGRyZXNzVGl0bGU6ICdBRERSRVNTJyxcbiAgYWRkcmVzczogJzIzIEJvdWxldmFyZCBSZW5lIENhaWxsb3V4XFxuTWFyaWduYW5lXFxuQm91Y2hlcy1kdS1SaMO0blxcbjEzNzAwJyxcbiAgdGVsZXBob25lVGl0bGU6ICdDT05UQUNUUycsXG4gIHRlbGVwaG9uZTogJyswNCA0MiA3NyAwMSAwMVxcbm5lbUBuZW0ubmVtJyxcbiAgbWVzc2FnZTogJ0luc3RlYWQgb2YgY2FsbGluZyB1cywgYmV0dGVyIGNhbGwgeW91ciBtb20uJyxcbn07XG5cbmNvbnN0IG1lbnUgPSB7XG4gIHRpdGxlOiAnT3VyIEZvb2QgTWVudScsXG4gICdNYWluIENvdXJzZSc6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU3VwZXIgRGVsaWNpb3VzIFp1cHBhIFRvc2NhbmEnLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlLCBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0JhY29uIENvbGkgQmFrZWQgQXVzdHJhbGlhbiBCZWVmJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gIF0sXG4gICdTb3VwICYgU2FsYWRzJzogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTYWxhdCBCYW5hbmEgRmxvd2VyJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSwgc3BpbmFjaCcsXG4gICAgICBwcmljZTogJzIw4oKsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHb3VybWV0IE11c2hyb29tIFJpc3NvdG8nLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgXSxcbiAgRGVzc2VydHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnSWNlIENyZWFtIFRhcnRlIEFwcGxlJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSwgc3BpbmFjaCcsXG4gICAgICBwcmljZTogJzIw4oKsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdGcnVpdCBNaWxsZSBGZXVpbGUnLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgXSxcbiAgRHJpbmtzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ0RvdWJsZSBDaG9jb2xhdGUgTXVkIFBpZScsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2UsIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUGFubWFjb3R0ZSBDcmVhbSBDYWtlJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgeyBob21lLCBjb250YWN0cywgbWVudSB9O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2hvbWV9IGZyb20gJy4vY29uZmlnLmpzJztcblxuXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQnKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbmZ1bmN0aW9uIGJhc2UoKSB7XG4gIGdlbmVyYXRlTWFwc1NjcmlwdCgpO1xuICBnZW5lcmF0ZUhlYWRlcigpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICBcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNYXBzU2NyaXB0KCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcHMtc2NyaXB0JykgPT09IG51bGwpIHtcbiAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYyA9XG4gICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lBdTBMcnBVUXVURnFzc0VjY3pSSFBxVUszMTk2YTk2YVkmY2FsbGJhY2s9JnY9d2Vla2x5JztcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdhc3luYycsICcnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkZWZlcicsICcnKTtcbiAgICBzY3JpcHQuaWQgPSAnbWFwcy1zY3JpcHQnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjb250YWluZXInKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdoZWFkZXInKTtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBob21lLmhlYWRlcjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCB0YWJzID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCd0YWJzJyk7XG5cbiAgZ2VuZXJhdGVUYWJzKHRhYnMpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJzKHBhcmVudCkge1xuICBmb3IgKGxldCB2YWx1ZSBvZiBob21lLnRhYnMpIHtcbiAgICBsZXQgdGFiID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCd0YWInKTtcbiAgICB0YWIuaWQgPSB2YWx1ZTtcbiAgICB0YWIudGV4dENvbnRlbnQgPSB2YWx1ZTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YWIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRBbmRDbGFzcyhjbGFzc05hbWUpIHtcbiAgbGV0IGZvbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb28uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIHJldHVybiBmb287XG59XG5cbmV4cG9ydCB7IGJhc2UsIG1haW4sIGVsZW1lbnQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRBbmRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZm9vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvby5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgcmV0dXJuIGZvbztcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgbWVudSBhcyBtZWFscyB9IGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCB7IGVsZW1lbnQsIG1haW4gfSBmcm9tICcuL3BhZ2VMb2FkJztcbmltcG9ydCBjcmVhdGVFbGVtZW50QW5kQ2xhc3MgZnJvbSAnLi91dGlsLmpzJztcblxuZnVuY3Rpb24gbWVudSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ21lbnUtdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBtZWFscy50aXRsZTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGdlbmVyYXRlSXRlbXMoKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJdGVtcygpIHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnY2F0ZWdvcmllcycpO1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5TmFtZSBvZiBPYmplY3Qua2V5cyhtZWFscykpIHtcbiAgICBpZiAoY2F0ZWdvcnlOYW1lID09PSAndGl0bGUnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2NhdGVnb3J5Jyk7XG4gICAgY29uc3QgY2F0ZWdvcnlUaXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnY2F0ZWdvcnktdGl0bGUnKTtcbiAgICBjYXRlZ29yeVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLS11bmRlcmxpbmUnKTtcblxuICAgIGNhdGVnb3J5VGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeU5hbWU7XG5cbiAgICBjb25zdCBtZWFsTGlzdCA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnbWVhbHMtbGlzdCcpO1xuXG4gICAgZm9yIChjb25zdCBjYXRlZ29yeUl0ZW0gb2YgbWVhbHNbY2F0ZWdvcnlOYW1lXSkge1xuICAgICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ21lYWwtdGl0bGUnKTtcbiAgICAgIGNvbnN0IGluZ3JlZGllbnRzID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdtZWFsLWluZ3JlZGllbnRzJyk7XG4gICAgICBjb25zdCBwcmljZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnbWVhbC1wcmljZScpO1xuXG4gICAgICBjb25zdCBtZWFsID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdtZWFsJyk7XG5cbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gY2F0ZWdvcnlJdGVtLm5hbWU7XG4gICAgICBpbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGNhdGVnb3J5SXRlbS5pbmdyZWRpZW50cztcbiAgICAgIHByaWNlLnRleHRDb250ZW50ID0gY2F0ZWdvcnlJdGVtLnByaWNlO1xuXG4gICAgICBtZWFsLmFwcGVuZCh0aXRsZSwgaW5ncmVkaWVudHMsIHByaWNlKTtcbiAgICAgIG1lYWxMaXN0LmFwcGVuZChtZWFsKTtcbiAgICB9XG5cbiAgICBjYXRlZ29yaWVzLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgICBjYXRlZ29yeS5hcHBlbmQoY2F0ZWdvcnlUaXRsZSwgbWVhbExpc3QpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY29udGFjdHMgfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5pbXBvcnQgeyBlbGVtZW50LCBtYWluIH0gZnJvbSAnLi9wYWdlTG9hZCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudEFuZENsYXNzIGZyb20gJy4vdXRpbC5qcyc7XG5cbmZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnY29udGFjdC1jb250YWluZXInKTtcblxuICBjb25zdCBpbmZvV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnaW5mby13cmFwcGVyJyk7XG5cbiAgY29uc3QgYWRkcmVzc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnYWRkcmVzcy1jb250YWluZXInKTtcblxuICBjb25zdCB0ZWxlcGhvbmVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3RlbGVwaG9uZS1jb250YWluZXInKTtcblxuICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChhZGRyZXNzQ29udGFpbmVyKTtcbiAgaW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQodGVsZXBob25lQ29udGFpbmVyKTtcblxuICBjb25zdCB0ZWxlcGhvbmVUaXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygndGVsZXBob25lLXRpdGxlJyk7XG4gIHRlbGVwaG9uZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLS11bmRlcmxpbmUnKTtcbiAgY29uc3QgdGVsZXBob25lID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCd0ZWxlcGhvbmUnKTtcbiAgdGVsZXBob25lVGl0bGUudGV4dENvbnRlbnQgPSBjb250YWN0cy50ZWxlcGhvbmVUaXRsZTtcbiAgdGVsZXBob25lLnRleHRDb250ZW50ID0gY29udGFjdHMudGVsZXBob25lO1xuXG4gIHRlbGVwaG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZWxlcGhvbmVUaXRsZSk7XG4gIHRlbGVwaG9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZWxlcGhvbmUpO1xuXG4gIGNvbnN0IGFkZHJlc3NUaXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnYWRkcmVzcy10aXRsZScpO1xuICBhZGRyZXNzVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtLXVuZGVybGluZScpO1xuICBjb25zdCBhZGRyZXNzID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdhZGRyZXNzJyk7XG4gIGFkZHJlc3NUaXRsZS50ZXh0Q29udGVudCA9IGNvbnRhY3RzLmFkZHJlc3NUaXRsZTtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IGNvbnRhY3RzLmFkZHJlc3M7XG5cbiAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmQoYWRkcmVzc1RpdGxlKTtcbiAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmQoYWRkcmVzcyk7XG5cbiAgY29uc3QgbWFwID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjb250YWN0LW1hcCcpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbmZvV3JhcHBlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXApO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBpbml0TWFwKCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbndpbmRvdy5pbml0TWFwID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBsb2MgPSB7IGxhdDogNDMuNDM3NywgbG5nOiA1LjAzNjkgfTtcbiAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1tYXAnKSwge1xuICAgIHpvb206IDEyLFxuICAgIGNlbnRlcjogbG9jLFxuICB9KTtcbiAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IGxvYyxcbiAgICBtYXA6IG1hcCxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvYWQgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vcGFnZUxvYWQuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmJhc2UoKTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGxvYWQoKSk7XG5cbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pdGVtLXNlbGVjdGVkJykpO1xuXG4gIGlmIChidXR0b24uaWQgPT09ICdIT01FJykge1xuICAgIGNsZWFyKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkKCkpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tc2VsZWN0ZWQnKTtcbiAgfVxuXG4gIGlmIChidXR0b24uaWQgPT09ICdNRU5VJykge1xuICAgIGNsZWFyKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KCkpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tc2VsZWN0ZWQnKTtcbiAgfVxuXG4gIGlmIChidXR0b24uaWQgPT09ICdDT05UQUNUJykge1xuICAgIGNsZWFyKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tc2VsZWN0ZWQnKTtcbiAgfVxufSkpO1xuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gIGxldCBjaGlsZCA9IG1haW4ubGFzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgbWFpbi5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgY2hpbGQgPSBtYWluLmxhc3RFbGVtZW50Q2hpbGQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==