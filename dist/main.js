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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'CrimsonRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonBoldItalic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonItalic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonSemiBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\nbody {\n  font-family: 'CrimsonSemiBold';\n  font-size: 1.2rem;\n  margin: 0px;\n}\n\n.content {\n  display: flex;\n}\n\n.element {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.container {\n  font-size: 1.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  background-color: black;\n  height:60px;\n}\n\n.header {\n  font-family: 'CrimsonBoldItalic';\n  display: flex;\n  justify-content: left;\n  width: 100%;\n  padding: 10px;\n  background-color: black;\n  color: white;\n}\n\n.tabs {\n  justify-self: right;\n  font-family: 'CrimsonBold';\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  gap: 100px;\n  margin-right: 100px;\n  font-size: 1rem;\n}\n\n.tab {\n  display: flex;\n  justify-content: center;\n}\n\n.main {\n  flex: 1;\n  display: grid;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n\n}\n\n.hours-container,\n.reviews-container,\n.greeting-container {\n  /*     background-color: rgba(256, 256, 256, 0.8); */\n  display: grid;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.review-title {\n  height: 30px;\n}\n\n.title--underline {\n  font-family: 'CrimsonBold';\n  border-bottom: 1px solid white;\n  padding-bottom: 1px;\n}\n\n.changing {\n  opacity: 0;\n  transition: all 1s;\n}\n\n.shown {\n  opacity: 1;\n}\n\n.review-text {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: 'CrimsonItalic';\n}\n\n.reviewer {\n  display: flex;\n  justify-content: right;\n}\n\n.hours-container {\n  grid-column-start: 6;\n  grid-row-start: 6;\n  gap: 10px;\n}\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column-start: 2;\n  grid-column-end: 5;\n  grid-row-start: 4;\n}\n\n.greeting-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 3em;\n}\n\n.greeting-text {\n  margin: 0px 20px 30px 0px;\n  font-family: 'CrimsonSemiBold';\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.reviews-container {\n  width: 200px;\n  height: 200px;\n  grid-column-start: 0;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  gap: 10px;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 20px;\n}\n\n.info-wrapper {\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n}\n\n.address-container,\n.telephone-container {\n  font-family: 'CrimsonRegular';\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n}\n\n.contact-map {\n  width: 100%;\n  height: 370px;\n}\n\n.address-title,\n.telephone-title {\n  font-size: 1.5em;\n}\n\n.address,\n.telephone {\n  white-space: pre-wrap;\n  font-size: 1.2em;\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.categories {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 50px;\n  margin-left: 40px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  gap: 20px;\n}\n\n.category-title {\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.meals-list {\n  font-family: 'CrimsonRegular';\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n}\n\n.meal {\n  display: grid;\n}\n\n.meal-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 1.3em;\n}\n\n.meal-ingredients {\n  font-family: 'CrimsonItalic';\n  color: gainsboro;\n  grid-row: 2 ;\n}\n\n.menu-item-selected {\n  border-bottom: 1px solid white;\n}\n\n@media screen and (max-width: 900px) {\n\n  .main {\n  display: flex;\n  flex-direction: column;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-position: center;\n\n  }\n\n  :root {\n    background-attachment: fixed;\n  }\n\n  .element {\n    \n  }\n\n  .reviews-container {\n    order: 3;\n    width: auto;\n  }\n\n  .container {\n    top: 0;\n    position: sticky;\n    display: flex;\n    flex-direction: column;\n    height: auto;\n    \n  }\n\n  .header {\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n\n  .tabs {\n    justify-self: none;\n    margin-right: 0px;\n    gap: 10%;\n    justify-content: center;\n  }\n\n  .categories {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .info-wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .contact-container {\n    gap: 20px;\n  }\n\n  .address-container, .telephone-container {\n    flex: 1;\n    width: auto;\n  }\n\n  .greeting-title {\n    font-size: 3rem;\n  }\n\n  .menu-container {\n    gap: 20px;\n  }\n\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'CrimsonRegular';\n  src: url(./fonts/CrimsonText-Regular.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonBold';\n  src: url(./fonts/CrimsonText-Bold.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonBoldItalic';\n  src: url(./fonts/CrimsonText-BoldItalic.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonItalic';\n  src: url(./fonts/CrimsonText-Italic.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonSemiBold';\n  src: url(./fonts/CrimsonText-SemiBold.ttf);\n}\n\nbody {\n  font-family: 'CrimsonSemiBold';\n  font-size: 1.2rem;\n  margin: 0px;\n}\n\n.content {\n  display: flex;\n}\n\n.element {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.container {\n  font-size: 1.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  background-color: black;\n  height:60px;\n}\n\n.header {\n  font-family: 'CrimsonBoldItalic';\n  display: flex;\n  justify-content: left;\n  width: 100%;\n  padding: 10px;\n  background-color: black;\n  color: white;\n}\n\n.tabs {\n  justify-self: right;\n  font-family: 'CrimsonBold';\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  gap: 100px;\n  margin-right: 100px;\n  font-size: 1rem;\n}\n\n.tab {\n  display: flex;\n  justify-content: center;\n}\n\n.main {\n  flex: 1;\n  display: grid;\n  background: url('./image.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n\n}\n\n.hours-container,\n.reviews-container,\n.greeting-container {\n  /*     background-color: rgba(256, 256, 256, 0.8); */\n  display: grid;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.review-title {\n  height: 30px;\n}\n\n.title--underline {\n  font-family: 'CrimsonBold';\n  border-bottom: 1px solid white;\n  padding-bottom: 1px;\n}\n\n.changing {\n  opacity: 0;\n  transition: all 1s;\n}\n\n.shown {\n  opacity: 1;\n}\n\n.review-text {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: 'CrimsonItalic';\n}\n\n.reviewer {\n  display: flex;\n  justify-content: right;\n}\n\n.hours-container {\n  grid-column-start: 6;\n  grid-row-start: 6;\n  gap: 10px;\n}\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column-start: 2;\n  grid-column-end: 5;\n  grid-row-start: 4;\n}\n\n.greeting-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 3em;\n}\n\n.greeting-text {\n  margin: 0px 20px 30px 0px;\n  font-family: 'CrimsonSemiBold';\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.reviews-container {\n  width: 200px;\n  height: 200px;\n  grid-column-start: 0;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  gap: 10px;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 20px;\n}\n\n.info-wrapper {\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n}\n\n.address-container,\n.telephone-container {\n  font-family: 'CrimsonRegular';\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n}\n\n.contact-map {\n  width: 100%;\n  height: 370px;\n}\n\n.address-title,\n.telephone-title {\n  font-size: 1.5em;\n}\n\n.address,\n.telephone {\n  white-space: pre-wrap;\n  font-size: 1.2em;\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.categories {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 50px;\n  margin-left: 40px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  gap: 20px;\n}\n\n.category-title {\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.meals-list {\n  font-family: 'CrimsonRegular';\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n}\n\n.meal {\n  display: grid;\n}\n\n.meal-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 1.3em;\n}\n\n.meal-ingredients {\n  font-family: 'CrimsonItalic';\n  color: gainsboro;\n  grid-row: 2 ;\n}\n\n.menu-item-selected {\n  border-bottom: 1px solid white;\n}\n\n@media screen and (max-width: 900px) {\n\n  .main {\n  display: flex;\n  flex-direction: column;\n  background: url('./image.jpg');\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-position: center;\n\n  }\n\n  :root {\n    background-attachment: fixed;\n  }\n\n  .element {\n    \n  }\n\n  .reviews-container {\n    order: 3;\n    width: auto;\n  }\n\n  .container {\n    top: 0;\n    position: sticky;\n    display: flex;\n    flex-direction: column;\n    height: auto;\n    \n  }\n\n  .header {\n    align-items: center;\n    justify-content: center;\n    width: auto;\n  }\n\n  .tabs {\n    justify-self: none;\n    margin-right: 0px;\n    gap: 10%;\n    justify-content: center;\n  }\n\n  .categories {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .info-wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .contact-container {\n    gap: 20px;\n  }\n\n  .address-container, .telephone-container {\n    flex: 1;\n    width: auto;\n  }\n\n  .greeting-title {\n    font-size: 3rem;\n  }\n\n  .menu-container {\n    gap: 20px;\n  }\n\n}\n\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9B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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0E7QUFDTTtBQUNFO0FBQ2hCOztBQUVyQixrREFBSTs7QUFFSjtBQUNBLG9CQUFvQixvREFBSTs7QUFFeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFJO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixvREFBSTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQU87QUFDL0I7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCB7IGVsZW1lbnQsIG1haW4gfSBmcm9tICcuL3BhZ2VMb2FkJztcbmltcG9ydCBjcmVhdGVFbGVtZW50QW5kQ2xhc3MgZnJvbSAnLi91dGlsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZCgpIHtcbiAgZ2VuZXJhdGVSZXZpZXcoKTtcbiAgZ2VuZXJhdGVHcmVldGluZygpO1xuICBnZW5lcmF0ZUhvdXJzKCk7XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVSZXZpZXcoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdyZXZpZXdzLWNvbnRhaW5lcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdyZXZpZXctdGl0bGUnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS0tdW5kZXJsaW5lJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBob21lLnJldmlld1RpdGxlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdyZXZpZXctdGV4dCcpO1xuICAgIGNvbnN0IHJldmlld2VyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdyZXZpZXdlcicpO1xuXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdjaGFuZ2luZycpO1xuICAgIHJldmlld2VyLmNsYXNzTGlzdC5hZGQoJ2NoYW5naW5nJyk7XG5cbiAgICBjaGFuZ2luZ1Jldmlld3MoKTtcblxuICAgIGZ1bmN0aW9uIGNoYW5naW5nUmV2aWV3cygpIHtcbiAgICAgIGNvbnN0IHJldmlld3MgPSBPYmplY3Qua2V5cyhob21lLnJldmlld3MpO1xuICAgICAgbGV0IGF1dGhvcjtcbiAgICAgIGxldCByZXZpZXc7XG5cbiAgICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICAgIGFuaW1hdGVSZXZpZXdzKCk7XG4gICAgICBzZXRJbnRlcnZhbChhbmltYXRlUmV2aWV3cywgNjAwMCk7XG5cbiAgICAgIGZ1bmN0aW9uIGFuaW1hdGVSZXZpZXdzKCkge1xuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgICAgIHJldmlld2VyLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSByZXZpZXdzLmxlbmd0aCkge1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPD0gcmV2aWV3cy5sZW5ndGgpIHtcbiAgICAgICAgICBhdXRob3IgPSByZXZpZXdzW2luZGV4XTtcbiAgICAgICAgICByZXZpZXcgPSBob21lLnJldmlld3NbYXV0aG9yXTtcblxuICAgICAgICAgIHJldmlld2VyLnRleHRDb250ZW50ID0gYC0gJHthdXRob3J9YDtcbiAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gcmV2aWV3O1xuXG4gICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJyk7XG4gICAgICAgICAgcmV2aWV3ZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdlcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUdyZWV0aW5nKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnZ3JlZXRpbmctY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnZ3JlZXRpbmctdGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGhvbWUuZ3JlZXRpbmdUaXRsZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZ3JlZXRpbmcgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2dyZWV0aW5nLXRleHQnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xuICAgIGdyZWV0aW5nLnRleHRDb250ZW50ID0gaG9tZS5ncmVldGluZztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSG91cnMoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdob3Vycy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdob3Vycy10aXRsZScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLS11bmRlcmxpbmUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGhvbWUuaG91cnNUaXRsZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuXG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiBPYmplY3Qua2V5cyhob21lLmhvdXJzKSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaG91cnMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7dmFsdWV9ICR7aG9tZS5ob3Vyc1t2YWx1ZV19XFxuYDtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3JpbXNvblRleHQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NyaW1zb25UZXh0LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Dcmltc29uVGV4dC1Cb2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3JpbXNvblRleHQtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3JpbXNvblRleHQtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uUmVndWxhcic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uSXRhbGljJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25TZW1pQm9sZCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uU2VtaUJvbGQnO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGhlaWdodDo2MHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFicyB7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhYiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyLFxcbi5yZXZpZXdzLWNvbnRhaW5lcixcXG4uZ3JlZXRpbmctY29udGFpbmVyIHtcXG4gIC8qICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuOCk7ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLnJldmlldy10aXRsZSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi50aXRsZS0tdW5kZXJsaW5lIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXG59XFxuXFxuLmNoYW5naW5nIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi5zaG93biB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmV2aWV3LXRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkl0YWxpYyc7XFxufVxcblxcbi5yZXZpZXdlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNjtcXG4gIGdyaWQtcm93LXN0YXJ0OiA2O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ3JlZXRpbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBncmlkLXJvdy1zdGFydDogNDtcXG59XFxuXFxuLmdyZWV0aW5nLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5ncmVldGluZy10ZXh0IHtcXG4gIG1hcmdpbjogMHB4IDIwcHggMzBweCAwcHg7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25TZW1pQm9sZCc7XFxufVxcblxcbi5ob3VycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnJldmlld3MtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMDtcXG4gIGdyaWQtY29sdW1uLWVuZDogMTtcXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctZW5kOiAzO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmluZm8td3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmFkZHJlc3MtY29udGFpbmVyLFxcbi50ZWxlcGhvbmUtY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblJlZ3VsYXInO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbnRhY3QtbWFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNzBweDtcXG59XFxuXFxuLmFkZHJlc3MtdGl0bGUsXFxuLnRlbGVwaG9uZS10aXRsZSB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uYWRkcmVzcyxcXG4udGVsZXBob25lIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG59XFxuXFxuLmNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAwcHg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXRlZ29yeS10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcblxcbi5tZWFscy1saXN0IHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblJlZ3VsYXInO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm1lYWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm1lYWwtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4ubWVhbC1pbmdyZWRpZW50cyB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25JdGFsaWMnO1xcbiAgY29sb3I6IGdhaW5zYm9ybztcXG4gIGdyaWQtcm93OiAyIDtcXG59XFxuXFxuLm1lbnUtaXRlbS1zZWxlY3RlZCB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuXFxuICAubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxuICB9XFxuXFxuICA6cm9vdCB7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICB9XFxuXFxuICAuZWxlbWVudCB7XFxuICAgIFxcbiAgfVxcblxcbiAgLnJldmlld3MtY29udGFpbmVyIHtcXG4gICAgb3JkZXI6IDM7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIHRvcDogMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAudGFicyB7XFxuICAgIGp1c3RpZnktc2VsZjogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIGdhcDogMTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5pbmZvLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcblxcbiAgLmFkZHJlc3MtY29udGFpbmVyLCAudGVsZXBob25lLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLmdyZWV0aW5nLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcblxcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLDRDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0Q0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDRDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw0Q0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNa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QUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblJlZ3VsYXInO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Dcmltc29uVGV4dC1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBzcmM6IHVybCguL2ZvbnRzL0NyaW1zb25UZXh0LUJvbGQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIHNyYzogdXJsKC4vZm9udHMvQ3JpbXNvblRleHQtQm9sZEl0YWxpYy50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkl0YWxpYyc7XFxuICBzcmM6IHVybCguL2ZvbnRzL0NyaW1zb25UZXh0LUl0YWxpYy50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblNlbWlCb2xkJztcXG4gIHNyYzogdXJsKC4vZm9udHMvQ3JpbXNvblRleHQtU2VtaUJvbGQudHRmKTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25TZW1pQm9sZCc7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZWxlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OjYwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YWJzIHtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMTAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2UuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lcixcXG4ucmV2aWV3cy1jb250YWluZXIsXFxuLmdyZWV0aW5nLWNvbnRhaW5lciB7XFxuICAvKiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjgpOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5yZXZpZXctdGl0bGUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGl0bGUtLXVuZGVybGluZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jaGFuZ2luZyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4uc2hvd24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJldmlldy10ZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25JdGFsaWMnO1xcbn1cXG5cXG4ucmV2aWV3ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDY7XFxuICBncmlkLXJvdy1zdGFydDogNjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmdyZWV0aW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDQ7XFxufVxcblxcbi5ncmVldGluZy10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4uZ3JlZXRpbmctdGV4dCB7XFxuICBtYXJnaW46IDBweCAyMHB4IDMwcHggMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uU2VtaUJvbGQnO1xcbn1cXG5cXG4uaG91cnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5yZXZpZXdzLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDA7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMztcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5hZGRyZXNzLWNvbnRhaW5lcixcXG4udGVsZXBob25lLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jb250YWN0LW1hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzcwcHg7XFxufVxcblxcbi5hZGRyZXNzLXRpdGxlLFxcbi50ZWxlcGhvbmUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmFkZHJlc3MsXFxuLnRlbGVwaG9uZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcblxcbi5jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDUwcHg7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4ubWVhbHMtbGlzdCB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZWFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tZWFsLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLm1lYWwtaW5ncmVkaWVudHMge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uSXRhbGljJztcXG4gIGNvbG9yOiBnYWluc2Jvcm87XFxuICBncmlkLXJvdzogMiA7XFxufVxcblxcbi5tZW51LWl0ZW0tc2VsZWN0ZWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcbiAgLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vaW1hZ2UuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFxuICB9XFxuXFxuICA6cm9vdCB7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICB9XFxuXFxuICAuZWxlbWVudCB7XFxuICAgIFxcbiAgfVxcblxcbiAgLnJldmlld3MtY29udGFpbmVyIHtcXG4gICAgb3JkZXI6IDM7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIHRvcDogMDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBcXG4gIH1cXG5cXG4gIC5oZWFkZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuXFxuICAudGFicyB7XFxuICAgIGp1c3RpZnktc2VsZjogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIGdhcDogMTAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5pbmZvLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcblxcbiAgLmFkZHJlc3MtY29udGFpbmVyLCAudGVsZXBob25lLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLmdyZWV0aW5nLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcblxcbiAgLm1lbnUtY29udGFpbmVyIHtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgfVxcblxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJjb25zdCBob21lID0ge1xuICBoZWFkZXI6ICdORU0gUkVTVEFVUkFOVCcsXG4gIGhvdXJzVGl0bGU6ICdXT1JLSU5HIEhPVVJTJyxcbiAgaG91cnM6IHtcbiAgICAnTW9uIC0gVGh1Oic6ICcxMTowMCAtIDIyOjAwJyxcbiAgICAnRnJpOic6ICcxMTowMCAtIDIyOjAwJyxcbiAgICAnU2F0Oic6ICcxMTowMCAtIDIzOjAwJyxcbiAgICAnU3VuOic6ICcxMTowMCAtIDIxOjAwJyxcbiAgfSxcbiAgcmV2aWV3VGl0bGU6ICdSRVZJRVdTJyxcbiAgcmV2aWV3czoge1xuICAgIE1pa2U6ICdaZSBiZXN0IHJlc3RhdXJhbnQgaW4gdGhlIGFyZWEuJyxcbiAgICBKdWxpZTogJ1NpbXBseSBXIC0gMCAtIFcuJyxcbiAgICBKb2huOiAnSSBsaXRlcmFsbHkgYXRlIG15IGZpbmdlcnMgaXQgd2FzIHNvIGdvb2QuJyxcbiAgICBBbmRyZXc6ICcxNCBvdXQgb2YgMTUgeXVtbWllcyEhITExJyxcbiAgfSxcbiAgdGFiczogWydIT01FJywgJ01FTlUnLCAnQ09OVEFDVCddLFxuICBncmVldGluZ1RpdGxlOiAnSEkgTkVJR0hCT1VSLCcsXG4gIGdyZWV0aW5nOlxuICAgICdXZSBhcmUgbWFraW5nIHl1bW15IG1lYWxzIGFuZCB0cnlpbmcgbm90IHRvIGZvb2QtcG9pc29uIGFueW9uZSBzaW5jZSAyMDAwcy4nLFxufTtcblxuY29uc3QgY29udGFjdHMgPSB7XG4gIGFkZHJlc3NUaXRsZTogJ0FERFJFU1MnLFxuICBhZGRyZXNzOiAnMjMgQm91bGV2YXJkIFJlbmUgQ2FpbGxvdXhcXG5NYXJpZ25hbmVcXG5Cb3VjaGVzLWR1LVJow7RuXFxuMTM3MDAnLFxuICB0ZWxlcGhvbmVUaXRsZTogJ0NPTlRBQ1RTJyxcbiAgdGVsZXBob25lOiAnKzA0IDQyIDc3IDAxIDAxXFxubmVtQG5lbS5uZW0nLFxuICBtZXNzYWdlOiAnSW5zdGVhZCBvZiBjYWxsaW5nIHVzLCBiZXR0ZXIgY2FsbCB5b3VyIG1vbS4nLFxufTtcblxuY29uc3QgbWVudSA9IHtcbiAgdGl0bGU6ICdPdXIgRm9vZCBNZW51JyxcbiAgJ01haW4gQ291cnNlJzogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTdXBlciBEZWxpY2lvdXMgWnVwcGEgVG9zY2FuYScsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2UsIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQmFjb24gQ29saSBCYWtlZCBBdXN0cmFsaWFuIEJlZWYnLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgXSxcbiAgJ1NvdXAgJiBTYWxhZHMnOiBbXG4gICAge1xuICAgICAgbmFtZTogJ1NhbGF0IEJhbmFuYSBGbG93ZXInLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlLCBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0dvdXJtZXQgTXVzaHJvb20gUmlzc290bycsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2Ugc3BpbmFjaCcsXG4gICAgICBwcmljZTogJzIw4oKsJyxcbiAgICB9LFxuICBdLFxuICBEZXNzZXJ0czogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdJY2UgQ3JlYW0gVGFydGUgQXBwbGUnLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlLCBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ZydWl0IE1pbGxlIEZldWlsZScsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2Ugc3BpbmFjaCcsXG4gICAgICBwcmljZTogJzIw4oKsJyxcbiAgICB9LFxuICBdLFxuICBEcmlua3M6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnRG91YmxlIENob2NvbGF0ZSBNdWQgUGllJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSwgc3BpbmFjaCcsXG4gICAgICBwcmljZTogJzIw4oKsJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQYW5tYWNvdHRlIENyZWFtIENha2UnLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCB7IGhvbWUsIGNvbnRhY3RzLCBtZW51IH07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7aG9tZX0gZnJvbSAnLi9jb25maWcuanMnO1xuXG5cbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWxlbWVudCcpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuZnVuY3Rpb24gYmFzZSgpIHtcbiAgZ2VuZXJhdGVNYXBzU2NyaXB0KCk7XG4gIGdlbmVyYXRlSGVhZGVyKCk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1hcHNTY3JpcHQoKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwcy1zY3JpcHQnKSA9PT0gbnVsbCkge1xuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID1cbiAgICAgICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUF1MExycFVRdVRGcXNzRWNjelJIUHFVSzMxOTZhOTZhWSZjYWxsYmFjaz0mdj13ZWVrbHknO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2FzeW5jJywgJycpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RlZmVyJywgJycpO1xuICAgIHNjcmlwdC5pZCA9ICdtYXBzLXNjcmlwdCc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSGVhZGVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2NvbnRhaW5lcicpO1xuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2hlYWRlcicpO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IGhvbWUuaGVhZGVyO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IHRhYnMgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3RhYnMnKTtcblxuICBnZW5lcmF0ZVRhYnModGFicyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhYnMpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYnMocGFyZW50KSB7XG4gIGZvciAobGV0IHZhbHVlIG9mIGhvbWUudGFicykge1xuICAgIGxldCB0YWIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3RhYicpO1xuICAgIHRhYi5pZCA9IHZhbHVlO1xuICAgIHRhYi50ZXh0Q29udGVudCA9IHZhbHVlO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRhYik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEFuZENsYXNzKGNsYXNzTmFtZSkge1xuICBsZXQgZm9vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvby5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgcmV0dXJuIGZvbztcbn1cblxuZXhwb3J0IHsgYmFzZSwgbWFpbiwgZWxlbWVudCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudEFuZENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmb28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICByZXR1cm4gZm9vO1xufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBtZW51IGFzIG1lYWxzIH0gZnJvbSAnLi9jb25maWcuanMnO1xuaW1wb3J0IHsgZWxlbWVudCwgbWFpbiB9IGZyb20gJy4vcGFnZUxvYWQnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcyBmcm9tICcuL3V0aWwuanMnO1xuXG5mdW5jdGlvbiBtZW51KCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnbWVudS10aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG1lYWxzLnRpdGxlO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgZ2VuZXJhdGVJdGVtcygpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUl0ZW1zKCkge1xuICBjb25zdCBjYXRlZ29yaWVzID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjYXRlZ29yaWVzJyk7XG4gIGZvciAoY29uc3QgY2F0ZWdvcnlOYW1lIG9mIE9iamVjdC5rZXlzKG1lYWxzKSkge1xuICAgIGlmIChjYXRlZ29yeU5hbWUgPT09ICd0aXRsZScpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBjYXRlZ29yeSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnY2F0ZWdvcnknKTtcbiAgICBjb25zdCBjYXRlZ29yeVRpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjYXRlZ29yeS10aXRsZScpO1xuICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtLXVuZGVybGluZScpO1xuXG4gICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5TmFtZTtcblxuICAgIGNvbnN0IG1lYWxMaXN0ID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdtZWFscy1saXN0Jyk7XG5cbiAgICBmb3IgKGNvbnN0IGNhdGVnb3J5SXRlbSBvZiBtZWFsc1tjYXRlZ29yeU5hbWVdKSB7XG4gICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnbWVhbC10aXRsZScpO1xuICAgICAgY29uc3QgaW5ncmVkaWVudHMgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ21lYWwtaW5ncmVkaWVudHMnKTtcbiAgICAgIGNvbnN0IHByaWNlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdtZWFsLXByaWNlJyk7XG5cbiAgICAgIGNvbnN0IG1lYWwgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ21lYWwnKTtcblxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeUl0ZW0ubmFtZTtcbiAgICAgIGluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gY2F0ZWdvcnlJdGVtLmluZ3JlZGllbnRzO1xuICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBjYXRlZ29yeUl0ZW0ucHJpY2U7XG5cbiAgICAgIG1lYWwuYXBwZW5kKHRpdGxlLCBpbmdyZWRpZW50cywgcHJpY2UpO1xuICAgICAgbWVhbExpc3QuYXBwZW5kKG1lYWwpO1xuICAgIH1cblxuICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIGNhdGVnb3J5LmFwcGVuZChjYXRlZ29yeVRpdGxlLCBtZWFsTGlzdCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jb250YWluZXInKS5hcHBlbmRDaGlsZChjYXRlZ29yaWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjb250YWN0cyB9IGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCB7IGVsZW1lbnQsIG1haW4gfSBmcm9tICcuL3BhZ2VMb2FkJztcbmltcG9ydCBjcmVhdGVFbGVtZW50QW5kQ2xhc3MgZnJvbSAnLi91dGlsLmpzJztcblxuZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjb250YWN0LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGluZm9XcmFwcGVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdpbmZvLXdyYXBwZXInKTtcblxuICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdhZGRyZXNzLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHRlbGVwaG9uZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygndGVsZXBob25lLWNvbnRhaW5lcicpO1xuXG4gIGluZm9XcmFwcGVyLmFwcGVuZENoaWxkKGFkZHJlc3NDb250YWluZXIpO1xuICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZCh0ZWxlcGhvbmVDb250YWluZXIpO1xuXG4gIGNvbnN0IHRlbGVwaG9uZVRpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCd0ZWxlcGhvbmUtdGl0bGUnKTtcbiAgdGVsZXBob25lVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtLXVuZGVybGluZScpO1xuICBjb25zdCB0ZWxlcGhvbmUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3RlbGVwaG9uZScpO1xuICB0ZWxlcGhvbmVUaXRsZS50ZXh0Q29udGVudCA9IGNvbnRhY3RzLnRlbGVwaG9uZVRpdGxlO1xuICB0ZWxlcGhvbmUudGV4dENvbnRlbnQgPSBjb250YWN0cy50ZWxlcGhvbmU7XG5cbiAgdGVsZXBob25lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbGVwaG9uZVRpdGxlKTtcbiAgdGVsZXBob25lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbGVwaG9uZSk7XG5cbiAgY29uc3QgYWRkcmVzc1RpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdhZGRyZXNzLXRpdGxlJyk7XG4gIGFkZHJlc3NUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS0tdW5kZXJsaW5lJyk7XG4gIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2FkZHJlc3MnKTtcbiAgYWRkcmVzc1RpdGxlLnRleHRDb250ZW50ID0gY29udGFjdHMuYWRkcmVzc1RpdGxlO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gY29udGFjdHMuYWRkcmVzcztcblxuICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZChhZGRyZXNzVGl0bGUpO1xuICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZChhZGRyZXNzKTtcblxuICBjb25zdCBtYXAgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2NvbnRhY3QtbWFwJyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluZm9XcmFwcGVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGluaXRNYXAoKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxud2luZG93LmluaXRNYXAgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxvYyA9IHsgbGF0OiA0My40Mzc3LCBsbmc6IDUuMDM2OSB9O1xuICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LW1hcCcpLCB7XG4gICAgem9vbTogMTIsXG4gICAgY2VudGVyOiBsb2MsXG4gIH0pO1xuICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICBwb3NpdGlvbjogbG9jLFxuICAgIG1hcDogbWFwLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZCBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9wYWdlTG9hZC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuYmFzZSgpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZCgpKTtcblxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcblxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWl0ZW0tc2VsZWN0ZWQnKSk7XG5cbiAgaWYgKGJ1dHRvbi5pZCA9PT0gJ0hPTUUnKSB7XG4gICAgY2xlYXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWQoKSk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1zZWxlY3RlZCcpO1xuICB9XG5cbiAgaWYgKGJ1dHRvbi5pZCA9PT0gJ01FTlUnKSB7XG4gICAgY2xlYXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1zZWxlY3RlZCcpO1xuICB9XG5cbiAgaWYgKGJ1dHRvbi5pZCA9PT0gJ0NPTlRBQ1QnKSB7XG4gICAgY2xlYXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1zZWxlY3RlZCcpO1xuICB9XG59KSk7XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgbGV0IGNoaWxkID0gbWFpbi5sYXN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBtYWluLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBjaGlsZCA9IG1haW4ubGFzdEVsZW1lbnRDaGlsZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9