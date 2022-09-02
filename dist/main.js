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




function load() {

  generateReview();
  generateGreeting();
  generateHours();

  function generateReview() {
    const container = createElementAndClass('reviews-container');
    _pageLoad__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(container);

    const title = createElementAndClass('review-title');
    title.classList.add('title--underline');
    title.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.reviewTitle;
    container.appendChild(title);

    const text = createElementAndClass('review-text');
    const reviewer = createElementAndClass('reviewer');

    text.classList.add('changing');
    reviewer.classList.add('changing');

    changingReviews();

    function changingReviews() {
      let reviews = Object.keys(_config_js__WEBPACK_IMPORTED_MODULE_1__.home.reviews);
      let author;
      let review;

      let index = 0;

      fadingReviews();
      setInterval(fadingReviews, 6000);

      function fadingReviews() {
        text.classList.add('shown');
        reviewer.classList.add('shown');

        if (index === reviews.length) {
          index = 0;
        }
        if (index <= reviews.length) {
          author = reviews[index];
          review = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.reviews[author];

          reviewer.textContent = '- ' + author;
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
    const container = createElementAndClass('greeting-container');

    const title = createElementAndClass('greeting-title');
    title.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.greetingTitle;
    container.appendChild(title);

    const greeting = createElementAndClass('greeting-text');
    container.appendChild(greeting);
    greeting.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.greeting;

    _pageLoad__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(container);
  }

  function generateHours() {
    const container = createElementAndClass('hours-container');

    const title = createElementAndClass('hours-title');
    title.classList.add('title--underline');
    title.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.home.hoursTitle;
    container.appendChild(title);

    _pageLoad__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(container);

    const hours = document.createElement('div');
    hours.classList.add('hours');

    for (let value of Object.keys(_config_js__WEBPACK_IMPORTED_MODULE_1__.home.hours)) {
      const element = document.createElement('div');
      hours.appendChild(element);
      element.textContent = value + ' ' + _config_js__WEBPACK_IMPORTED_MODULE_1__.home.hours[value] + '\n';
    }

    container.appendChild(hours);
  }

  return _pageLoad__WEBPACK_IMPORTED_MODULE_2__.element;
}

function createElementAndClass(className) {
  let foo = document.createElement('div');
  foo.classList.add(className);

  return foo;
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'CrimsonRegular';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonBoldItalic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonItalic';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n@font-face {\n  font-family: 'CrimsonSemiBold';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\nbody {\n  font-family: 'CrimsonSemiBold';\n  font-size: 1.2rem;\n  margin: 5px;\n}\n\n.element {\n  display: grid;\n  flex-direction: column;\n}\n\n.container {\n  font-size: 1.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  background-color: black;\n}\n\n.header {\n  font-family: 'CrimsonBoldItalic';\n  display: flex;\n  justify-content: left;\n  width: 100%;\n  padding: 20px;\n  background-color: black;\n  color: white;\n}\n\n.image {\n  object-fit: fill;\n}\n\n.tabs {\n  font-family: 'CrimsonBold';\n  display: grid;\n  grid-template-columns: 50px 50px 50px;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  gap: 100px;\n  margin-right: 50px;\n  font-size: 1rem;\n}\n\n.main {\n  display: grid;\n  height: 90vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.hours-container,\n.reviews-container,\n.greeting-container,\n.menu-container {\n  /*     background-color: rgba(256, 256, 256, 0.8); */\n  display: grid;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.review-title {\n  height: 30px;\n}\n\n.title--underline {\n  font-family: 'CrimsonBold';\n  border-bottom: 1px solid white;\n  padding-bottom: 1px;\n}\n\n.changing {\n  opacity: 0;\n  transition: all 1s;\n}\n\n.shown {\n  opacity: 1;\n}\n\n.review-text {\n  font-family: 'CrimsonItalic';\n}\n\n.reviewer {\n  display: flex;\n  justify-content: right;\n}\n\n.hours-container {\n  grid-column-start: 6;\n  grid-row-start: 6;\n  gap: 10px;\n}\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column-start: 2;\n  grid-column-end: 5;\n  grid-row-start: 4;\n}\n\n.greeting-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 3em;\n}\n\n.greeting-text {\n  margin: 0px 20px 30px 0px;\n  font-family: 'CrimsonSemiBold';\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.reviews-container {\n  width: 300px;\n  grid-column-start: 0;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  gap: 10px;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 20px;\n}\n\n.info-wrapper {\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n}\n\n.address-container,\n.telephone-container {\n  font-family: 'CrimsonRegular';\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n}\n\n.contact-map {\n  width: 100%;\n  height: 370px;\n}\n\n.address-title,\n.telephone-title {\n  font-size: 1.5em;\n}\n\n.address,\n.telephone {\n  white-space: pre-wrap;\n  font-size: 1.2em;\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.categories {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 50px;\n  margin-left: 40px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  gap: 20px;\n}\n\n.category-title {\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.meals-list {\n  font-family: 'CrimsonRegular';\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n}\n\n.meal {\n  display: grid;\n}\n\n.meal-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 1.3em;\n}\n\n.meal-ingredients {\n  font-family: 'CrimsonItalic';\n  color: gainsboro;\n  grid-row: 2 ;\n  \n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,4CAAyC;AAC3C;;AAEA;EACE,0BAA0B;EAC1B,4CAAsC;AACxC;;AAEA;EACE,gCAAgC;EAChC,4CAA4C;AAC9C;;AAEA;EACE,4BAA4B;EAC5B,4CAAwC;AAC1C;;AAEA;EACE,8BAA8B;EAC9B,4CAA0C;AAC5C;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,qBAAqB;EACrB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mDAA8B;EAC9B,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;;;;EAIE,oDAAoD;EACpD,aAAa;EACb,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;EAChC,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,6BAA6B;EAC7B,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,2BAA2B;EAC3B,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,YAAY;;AAEd","sourcesContent":["@font-face {\n  font-family: 'CrimsonRegular';\n  src: url(./fonts/CrimsonText-Regular.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonBold';\n  src: url(./fonts/CrimsonText-Bold.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonBoldItalic';\n  src: url(./fonts/CrimsonText-BoldItalic.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonItalic';\n  src: url(./fonts/CrimsonText-Italic.ttf);\n}\n\n@font-face {\n  font-family: 'CrimsonSemiBold';\n  src: url(./fonts/CrimsonText-SemiBold.ttf);\n}\n\nbody {\n  font-family: 'CrimsonSemiBold';\n  font-size: 1.2rem;\n  margin: 5px;\n}\n\n.element {\n  display: grid;\n  flex-direction: column;\n}\n\n.container {\n  font-size: 1.5em;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  background-color: black;\n}\n\n.header {\n  font-family: 'CrimsonBoldItalic';\n  display: flex;\n  justify-content: left;\n  width: 100%;\n  padding: 20px;\n  background-color: black;\n  color: white;\n}\n\n.image {\n  object-fit: fill;\n}\n\n.tabs {\n  font-family: 'CrimsonBold';\n  display: grid;\n  grid-template-columns: 50px 50px 50px;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  gap: 100px;\n  margin-right: 50px;\n  font-size: 1rem;\n}\n\n.main {\n  display: grid;\n  height: 90vh;\n  background: url('./image.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.hours-container,\n.reviews-container,\n.greeting-container,\n.menu-container {\n  /*     background-color: rgba(256, 256, 256, 0.8); */\n  display: grid;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  margin: 20px;\n}\n\n.review-title {\n  height: 30px;\n}\n\n.title--underline {\n  font-family: 'CrimsonBold';\n  border-bottom: 1px solid white;\n  padding-bottom: 1px;\n}\n\n.changing {\n  opacity: 0;\n  transition: all 1s;\n}\n\n.shown {\n  opacity: 1;\n}\n\n.review-text {\n  font-family: 'CrimsonItalic';\n}\n\n.reviewer {\n  display: flex;\n  justify-content: right;\n}\n\n.hours-container {\n  grid-column-start: 6;\n  grid-row-start: 6;\n  gap: 10px;\n}\n\n.greeting-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column-start: 2;\n  grid-column-end: 5;\n  grid-row-start: 4;\n}\n\n.greeting-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 3em;\n}\n\n.greeting-text {\n  margin: 0px 20px 30px 0px;\n  font-family: 'CrimsonSemiBold';\n}\n\n.hours {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.reviews-container {\n  width: 300px;\n  grid-column-start: 0;\n  grid-column-end: 1;\n  grid-row-start: 1;\n  grid-row-end: 3;\n  gap: 10px;\n}\n\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n  padding: 20px;\n}\n\n.info-wrapper {\n  margin-top: 20px;\n  display: flex;\n  gap: 20px;\n}\n\n.address-container,\n.telephone-container {\n  font-family: 'CrimsonRegular';\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 50%;\n}\n\n.contact-map {\n  width: 100%;\n  height: 370px;\n}\n\n.address-title,\n.telephone-title {\n  font-size: 1.5em;\n}\n\n.address,\n.telephone {\n  white-space: pre-wrap;\n  font-size: 1.2em;\n}\n\n.menu-title {\n  display: flex;\n  justify-content: center;\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.categories {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 50px;\n  margin-left: 40px;\n}\n\n.category {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  gap: 20px;\n}\n\n.category-title {\n  font-family: 'CrimsonBold';\n  font-size: 1.8em;\n}\n\n.meals-list {\n  font-family: 'CrimsonRegular';\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n}\n\n.meal {\n  display: grid;\n}\n\n.meal-title {\n  font-family: 'CrimsonBoldItalic';\n  font-size: 1.3em;\n}\n\n.meal-ingredients {\n  font-family: 'CrimsonItalic';\n  color: gainsboro;\n  grid-row: 2 ;\n  \n}\n\n\n"],"sourceRoot":""}]);
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
let home = {
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
    "We are making yummy meals and trying not to food-poison anyone since 2000s.",
};

let contacts = {
  addressTitle: 'ADDRESS',
  address: '23 Boulevard Rene Cailloux\nMarignane\nBouches-du-Rhôn\n13700',
  telephoneTitle: 'CONTACTS',
  telephone: '+04 42 77 01 01\nnem@nem.nem',
  message: 'Instead of calling us, better call your mom.',
};

let menu = {
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
  'Desserts': [
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
  'Drinks': [
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
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=&v=weekly';
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);





function menu() {
  const container = document.createElement('div');
  container.classList.add('menu-container');
  _pageLoad__WEBPACK_IMPORTED_MODULE_2__.main.appendChild(container);

  const wrapper = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('menu-wrapper');

  const title = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('menu-title');
  title.textContent = _config_js__WEBPACK_IMPORTED_MODULE_1__.menu.title;

  const list = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('menu-list');

  wrapper.appendChild(title);
  container.appendChild(wrapper);

  generator();

  return _pageLoad__WEBPACK_IMPORTED_MODULE_2__.element;
}

function generator() {
  let categories = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('categories');
  for (let categoryName of Object.keys(_config_js__WEBPACK_IMPORTED_MODULE_1__.menu)) {
    if (categoryName === 'title') {
      continue;
    }
    let category = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('category');
    let categoryTitle = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('category-title');
    categoryTitle.classList.add('title--underline');

    categoryTitle.textContent = categoryName;

    let mealList = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meals-list');

    for (let categoryItem of _config_js__WEBPACK_IMPORTED_MODULE_1__.menu[categoryName]) {
      let title = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meal-title');
      let ingredients = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meal-ingredients');
      let price = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meal-price');

      let meal = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('meal');
      

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

  function generateCategory(title) {}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementAndClass)
/* harmony export */ });
function createElementAndClass(className) {
    let foo = document.createElement('div');
    foo.classList.add(className);
  
    return foo;
  }

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
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);





function contact() {
  let container = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('contact-container');

  let infoWrapper = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('info-wrapper');
  
  let addressContainer = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('address-container');

  let telephoneContainer = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('telephone-container');

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

  let map = (0,_util_js__WEBPACK_IMPORTED_MODULE_3__["default"])('contact-map');
  
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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);






(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_3__.base)();

let content = document.getElementById('content');
content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

let buttons = document.querySelectorAll('.tab');



buttons.forEach(button => button.addEventListener('click', () => {

   

    if (button.id === "HOME") {
        clear();
        content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    }

    if (button.id === "MENU") {
        clear();
        content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    }

    if (button.id === "CONTACT") {
        clear();
        content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
        
    }
}))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNBO0FBQ007QUFDQTtBQUNkOztBQUVyQixrREFBSTs7QUFFSjtBQUNBLG9CQUFvQixvREFBSTs7QUFFeEI7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLG9EQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQUk7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qix1REFBTztBQUNuQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtob21lfSBmcm9tICcuL2NvbmZpZy5qcyc7XG5pbXBvcnQge2Jhc2UsIGVsZW1lbnQsIG1haW4gfSBmcm9tICcuL3BhZ2VMb2FkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZCgpIHtcblxuICBnZW5lcmF0ZVJldmlldygpO1xuICBnZW5lcmF0ZUdyZWV0aW5nKCk7XG4gIGdlbmVyYXRlSG91cnMoKTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZVJldmlldygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3Jldmlld3MtY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3Jldmlldy10aXRsZScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLS11bmRlcmxpbmUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGhvbWUucmV2aWV3VGl0bGU7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3Jldmlldy10ZXh0Jyk7XG4gICAgY29uc3QgcmV2aWV3ZXIgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3Jldmlld2VyJyk7XG5cbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2NoYW5naW5nJyk7XG4gICAgcmV2aWV3ZXIuY2xhc3NMaXN0LmFkZCgnY2hhbmdpbmcnKTtcblxuICAgIGNoYW5naW5nUmV2aWV3cygpO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdpbmdSZXZpZXdzKCkge1xuICAgICAgbGV0IHJldmlld3MgPSBPYmplY3Qua2V5cyhob21lLnJldmlld3MpO1xuICAgICAgbGV0IGF1dGhvcjtcbiAgICAgIGxldCByZXZpZXc7XG5cbiAgICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICAgIGZhZGluZ1Jldmlld3MoKTtcbiAgICAgIHNldEludGVydmFsKGZhZGluZ1Jldmlld3MsIDYwMDApO1xuXG4gICAgICBmdW5jdGlvbiBmYWRpbmdSZXZpZXdzKCkge1xuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG4gICAgICAgIHJldmlld2VyLmNsYXNzTGlzdC5hZGQoJ3Nob3duJyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSByZXZpZXdzLmxlbmd0aCkge1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPD0gcmV2aWV3cy5sZW5ndGgpIHtcbiAgICAgICAgICBhdXRob3IgPSByZXZpZXdzW2luZGV4XTtcbiAgICAgICAgICByZXZpZXcgPSBob21lLnJldmlld3NbYXV0aG9yXTtcblxuICAgICAgICAgIHJldmlld2VyLnRleHRDb250ZW50ID0gJy0gJyArIGF1dGhvcjtcbiAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gcmV2aWV3O1xuXG4gICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3duJyk7XG4gICAgICAgICAgcmV2aWV3ZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd24nKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXZpZXdlcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUdyZWV0aW5nKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnZ3JlZXRpbmctY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnZ3JlZXRpbmctdGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGhvbWUuZ3JlZXRpbmdUaXRsZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgZ3JlZXRpbmcgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2dyZWV0aW5nLXRleHQnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JlZXRpbmcpO1xuICAgIGdyZWV0aW5nLnRleHRDb250ZW50ID0gaG9tZS5ncmVldGluZztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSG91cnMoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdob3Vycy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdob3Vycy10aXRsZScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLS11bmRlcmxpbmUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGhvbWUuaG91cnNUaXRsZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuXG4gICAgZm9yIChsZXQgdmFsdWUgb2YgT2JqZWN0LmtleXMoaG9tZS5ob3VycykpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHZhbHVlICsgJyAnICsgaG9tZS5ob3Vyc1t2YWx1ZV0gKyAnXFxuJztcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRBbmRDbGFzcyhjbGFzc05hbWUpIHtcbiAgbGV0IGZvbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb28uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIHJldHVybiBmb287XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3JpbXNvblRleHQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NyaW1zb25UZXh0LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Dcmltc29uVGV4dC1Cb2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3JpbXNvblRleHQtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vZm9udHMvQ3JpbXNvblRleHQtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9pbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uUmVndWxhcic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uSXRhbGljJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25TZW1pQm9sZCc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uU2VtaUJvbGQnO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmVsZW1lbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgb2JqZWN0LWZpdDogZmlsbDtcXG59XFxuXFxuLnRhYnMge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDUwcHggNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyLFxcbi5yZXZpZXdzLWNvbnRhaW5lcixcXG4uZ3JlZXRpbmctY29udGFpbmVyLFxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAvKiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjgpOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5yZXZpZXctdGl0bGUge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udGl0bGUtLXVuZGVybGluZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi5jaGFuZ2luZyB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4uc2hvd24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJldmlldy10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkl0YWxpYyc7XFxufVxcblxcbi5yZXZpZXdlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG59XFxuXFxuLmhvdXJzLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNjtcXG4gIGdyaWQtcm93LXN0YXJ0OiA2O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ3JlZXRpbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBncmlkLXJvdy1zdGFydDogNDtcXG59XFxuXFxuLmdyZWV0aW5nLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5ncmVldGluZy10ZXh0IHtcXG4gIG1hcmdpbjogMHB4IDIwcHggMzBweCAwcHg7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25TZW1pQm9sZCc7XFxufVxcblxcbi5ob3VycyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnJldmlld3MtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAwO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1lbmQ6IDM7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaW5mby13cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYWRkcmVzcy1jb250YWluZXIsXFxuLnRlbGVwaG9uZS1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uUmVndWxhcic7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY29udGFjdC1tYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM3MHB4O1xcbn1cXG5cXG4uYWRkcmVzcy10aXRsZSxcXG4udGVsZXBob25lLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5hZGRyZXNzLFxcbi50ZWxlcGhvbmUge1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLm1lbnUtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4uY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmNhdGVnb3J5LXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG59XFxuXFxuLm1lYWxzLWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uUmVndWxhcic7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVhbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ubWVhbC10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkSXRhbGljJztcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi5tZWFsLWluZ3JlZGllbnRzIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkl0YWxpYyc7XFxuICBjb2xvcjogZ2FpbnNib3JvO1xcbiAgZ3JpZC1yb3c6IDIgO1xcbiAgXFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpc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QVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLFlBQVk7O0FBRWRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIHNyYzogdXJsKC4vZm9udHMvQ3JpbXNvblRleHQtUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Dcmltc29uVGV4dC1Cb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBzcmM6IHVybCguL2ZvbnRzL0NyaW1zb25UZXh0LUJvbGRJdGFsaWMudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25JdGFsaWMnO1xcbiAgc3JjOiB1cmwoLi9mb250cy9Dcmltc29uVGV4dC1JdGFsaWMudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25TZW1pQm9sZCc7XFxuICBzcmM6IHVybCguL2ZvbnRzL0NyaW1zb25UZXh0LVNlbWlCb2xkLnR0Zik7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uU2VtaUJvbGQnO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmVsZW1lbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW1hZ2Uge1xcbiAgb2JqZWN0LWZpdDogZmlsbDtcXG59XFxuXFxuLnRhYnMge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDUwcHggNTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlLmpwZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ob3Vycy1jb250YWluZXIsXFxuLnJldmlld3MtY29udGFpbmVyLFxcbi5ncmVldGluZy1jb250YWluZXIsXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIC8qICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuOCk7ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLnJldmlldy10aXRsZSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi50aXRsZS0tdW5kZXJsaW5lIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGQnO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXG59XFxuXFxuLmNoYW5naW5nIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi5zaG93biB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmV2aWV3LXRleHQge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uSXRhbGljJztcXG59XFxuXFxuLnJldmlld2VyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbn1cXG5cXG4uaG91cnMtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA2O1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDY7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ncmVldGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIGdyaWQtcm93LXN0YXJ0OiA0O1xcbn1cXG5cXG4uZ3JlZXRpbmctdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZEl0YWxpYyc7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmdyZWV0aW5nLXRleHQge1xcbiAgbWFyZ2luOiAwcHggMjBweCAzMHB4IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvblNlbWlCb2xkJztcXG59XFxuXFxuLmhvdXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucmV2aWV3cy1jb250YWluZXIge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDA7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDE7XFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIGdyaWQtcm93LWVuZDogMztcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbmZvLXdyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5hZGRyZXNzLWNvbnRhaW5lcixcXG4udGVsZXBob25lLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5jb250YWN0LW1hcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzcwcHg7XFxufVxcblxcbi5hZGRyZXNzLXRpdGxlLFxcbi50ZWxlcGhvbmUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmFkZHJlc3MsXFxuLnRlbGVwaG9uZSB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25Cb2xkJztcXG4gIGZvbnQtc2l6ZTogMS44ZW07XFxufVxcblxcbi5jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDUwcHg7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnktdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uQm9sZCc7XFxuICBmb250LXNpemU6IDEuOGVtO1xcbn1cXG5cXG4ubWVhbHMtbGlzdCB7XFxuICBmb250LWZhbWlseTogJ0NyaW1zb25SZWd1bGFyJztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5tZWFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5tZWFsLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbkJvbGRJdGFsaWMnO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuLm1lYWwtaW5ncmVkaWVudHMge1xcbiAgZm9udC1mYW1pbHk6ICdDcmltc29uSXRhbGljJztcXG4gIGNvbG9yOiBnYWluc2Jvcm87XFxuICBncmlkLXJvdzogMiA7XFxuICBcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwibGV0IGhvbWUgPSB7XG4gIGhlYWRlcjogJ05FTSBSRVNUQVVSQU5UJyxcbiAgaG91cnNUaXRsZTogJ1dPUktJTkcgSE9VUlMnLFxuICBob3Vyczoge1xuICAgICdNb24gLSBUaHU6JzogJzExOjAwIC0gMjI6MDAnLFxuICAgICdGcmk6JzogJzExOjAwIC0gMjI6MDAnLFxuICAgICdTYXQ6JzogJzExOjAwIC0gMjM6MDAnLFxuICAgICdTdW46JzogJzExOjAwIC0gMjE6MDAnLFxuICB9LFxuICByZXZpZXdUaXRsZTogJ1JFVklFV1MnLFxuICByZXZpZXdzOiB7XG4gICAgTWlrZTogJ1plIGJlc3QgcmVzdGF1cmFudCBpbiB0aGUgYXJlYS4nLFxuICAgIEp1bGllOiAnU2ltcGx5IFcgLSAwIC0gVy4nLFxuICAgIEpvaG46ICdJIGxpdGVyYWxseSBhdGUgbXkgZmluZ2VycyBpdCB3YXMgc28gZ29vZC4nLFxuICAgIEFuZHJldzogJzE0IG91dCBvZiAxNSB5dW1taWVzISEhMTEnLFxuICB9LFxuICB0YWJzOiBbJ0hPTUUnLCAnTUVOVScsICdDT05UQUNUJ10sXG4gIGdyZWV0aW5nVGl0bGU6ICdISSBORUlHSEJPVVIsJyxcbiAgZ3JlZXRpbmc6XG4gICAgXCJXZSBhcmUgbWFraW5nIHl1bW15IG1lYWxzIGFuZCB0cnlpbmcgbm90IHRvIGZvb2QtcG9pc29uIGFueW9uZSBzaW5jZSAyMDAwcy5cIixcbn07XG5cbmxldCBjb250YWN0cyA9IHtcbiAgYWRkcmVzc1RpdGxlOiAnQUREUkVTUycsXG4gIGFkZHJlc3M6ICcyMyBCb3VsZXZhcmQgUmVuZSBDYWlsbG91eFxcbk1hcmlnbmFuZVxcbkJvdWNoZXMtZHUtUmjDtG5cXG4xMzcwMCcsXG4gIHRlbGVwaG9uZVRpdGxlOiAnQ09OVEFDVFMnLFxuICB0ZWxlcGhvbmU6ICcrMDQgNDIgNzcgMDEgMDFcXG5uZW1AbmVtLm5lbScsXG4gIG1lc3NhZ2U6ICdJbnN0ZWFkIG9mIGNhbGxpbmcgdXMsIGJldHRlciBjYWxsIHlvdXIgbW9tLicsXG59O1xuXG5sZXQgbWVudSA9IHtcbiAgdGl0bGU6ICdPdXIgRm9vZCBNZW51JyxcbiAgJ01haW4gQ291cnNlJzogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTdXBlciBEZWxpY2lvdXMgWnVwcGEgVG9zY2FuYScsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2UsIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQmFjb24gQ29saSBCYWtlZCBBdXN0cmFsaWFuIEJlZWYnLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgXSxcbiAgJ1NvdXAgJiBTYWxhZHMnOiBbXG4gICAge1xuICAgICAgbmFtZTogJ1NhbGF0IEJhbmFuYSBGbG93ZXInLFxuICAgICAgaW5ncmVkaWVudHM6ICdDaGlja2VuLCByaWNlLCBzYXVzYWdlLCBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0dvdXJtZXQgTXVzaHJvb20gUmlzc290bycsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2Ugc3BpbmFjaCcsXG4gICAgICBwcmljZTogJzIw4oKsJyxcbiAgICB9LFxuICBdLFxuICAnRGVzc2VydHMnOiBbXG4gICAge1xuICAgICAgbmFtZTogJ0ljZSBDcmVhbSBUYXJ0ZSBBcHBsZScsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2UsIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnJ1aXQgTWlsbGUgRmV1aWxlJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gIF0sXG4gICdEcmlua3MnOiBbXG4gICAge1xuICAgICAgbmFtZTogJ0RvdWJsZSBDaG9jb2xhdGUgTXVkIFBpZScsXG4gICAgICBpbmdyZWRpZW50czogJ0NoaWNrZW4sIHJpY2UsIHNhdXNhZ2UsIHNwaW5hY2gnLFxuICAgICAgcHJpY2U6ICcyMOKCrCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUGFubWFjb3R0ZSBDcmVhbSBDYWtlJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnQ2hpY2tlbiwgcmljZSwgc2F1c2FnZSBzcGluYWNoJyxcbiAgICAgIHByaWNlOiAnMjDigqwnLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgeyBob21lLCBjb250YWN0cywgbWVudSB9O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2hvbWV9IGZyb20gJy4vY29uZmlnLmpzJztcblxuXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQnKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbmZ1bmN0aW9uIGJhc2UoKSB7XG4gIGdlbmVyYXRlTWFwc1NjcmlwdCgpO1xuICBnZW5lcmF0ZUhlYWRlcigpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICBcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNYXBzU2NyaXB0KCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcHMtc2NyaXB0JykgPT09IG51bGwpIHtcbiAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYyA9XG4gICAgICAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT1BSXphU3lCNDFEUlViS1dKSFB4YUZqTUF3ZHJ6V3piVkthcnROR2cmY2FsbGJhY2s9JnY9d2Vla2x5JztcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdhc3luYycsICcnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkZWZlcicsICcnKTtcbiAgICBzY3JpcHQuaWQgPSAnbWFwcy1zY3JpcHQnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhlYWRlcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjb250YWluZXInKTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdoZWFkZXInKTtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBob21lLmhlYWRlcjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCB0YWJzID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCd0YWJzJyk7XG5cbiAgZ2VuZXJhdGVUYWJzKHRhYnMpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJzKHBhcmVudCkge1xuICBmb3IgKGxldCB2YWx1ZSBvZiBob21lLnRhYnMpIHtcbiAgICBsZXQgdGFiID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCd0YWInKTtcbiAgICB0YWIuaWQgPSB2YWx1ZTtcbiAgICB0YWIudGV4dENvbnRlbnQgPSB2YWx1ZTtcblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YWIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRBbmRDbGFzcyhjbGFzc05hbWUpIHtcbiAgbGV0IGZvbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb28uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gIHJldHVybiBmb287XG59XG5cbmV4cG9ydCB7IGJhc2UsIG1haW4sIGVsZW1lbnQgfTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaG9tZSwgbWVudSBhcyBtZWFscyB9IGZyb20gJy4vY29uZmlnLmpzJztcbmltcG9ydCB7IGJhc2UsIGVsZW1lbnQsIG1haW4gfSBmcm9tICcuL3BhZ2VMb2FkJztcbmltcG9ydCBjcmVhdGVFbGVtZW50QW5kQ2xhc3MgZnJvbSAnLi91dGlsLmpzJztcblxuZnVuY3Rpb24gbWVudSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnbWVudS13cmFwcGVyJyk7XG5cbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ21lbnUtdGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBtZWFscy50aXRsZTtcblxuICBjb25zdCBsaXN0ID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdtZW51LWxpc3QnKTtcblxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIGdlbmVyYXRvcigpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0b3IoKSB7XG4gIGxldCBjYXRlZ29yaWVzID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjYXRlZ29yaWVzJyk7XG4gIGZvciAobGV0IGNhdGVnb3J5TmFtZSBvZiBPYmplY3Qua2V5cyhtZWFscykpIHtcbiAgICBpZiAoY2F0ZWdvcnlOYW1lID09PSAndGl0bGUnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IGNhdGVnb3J5ID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjYXRlZ29yeScpO1xuICAgIGxldCBjYXRlZ29yeVRpdGxlID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjYXRlZ29yeS10aXRsZScpO1xuICAgIGNhdGVnb3J5VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUtLXVuZGVybGluZScpO1xuXG4gICAgY2F0ZWdvcnlUaXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5TmFtZTtcblxuICAgIGxldCBtZWFsTGlzdCA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnbWVhbHMtbGlzdCcpO1xuXG4gICAgZm9yIChsZXQgY2F0ZWdvcnlJdGVtIG9mIG1lYWxzW2NhdGVnb3J5TmFtZV0pIHtcbiAgICAgIGxldCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnbWVhbC10aXRsZScpO1xuICAgICAgbGV0IGluZ3JlZGllbnRzID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdtZWFsLWluZ3JlZGllbnRzJyk7XG4gICAgICBsZXQgcHJpY2UgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ21lYWwtcHJpY2UnKTtcblxuICAgICAgbGV0IG1lYWwgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ21lYWwnKTtcbiAgICAgIFxuXG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5SXRlbS5uYW1lO1xuICAgICAgaW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBjYXRlZ29yeUl0ZW0uaW5ncmVkaWVudHM7XG4gICAgICBwcmljZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5SXRlbS5wcmljZTtcblxuICAgICAgbWVhbC5hcHBlbmQodGl0bGUsIGluZ3JlZGllbnRzLCBwcmljZSk7XG4gICAgICBtZWFsTGlzdC5hcHBlbmQobWVhbCk7XG4gICAgfVxuXG4gICAgY2F0ZWdvcmllcy5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgY2F0ZWdvcnkuYXBwZW5kKGNhdGVnb3J5VGl0bGUsIG1lYWxMaXN0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGNhdGVnb3JpZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDYXRlZ29yeSh0aXRsZSkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRBbmRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBsZXQgZm9vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgXG4gICAgcmV0dXJuIGZvbztcbiAgfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtjb250YWN0c30gZnJvbSAnLi9jb25maWcuanMnO1xuaW1wb3J0IHsgYmFzZSwgZWxlbWVudCwgbWFpbiB9IGZyb20gJy4vcGFnZUxvYWQnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcyBmcm9tICcuL3V0aWwuanMnO1xuXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICBsZXQgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCdjb250YWN0LWNvbnRhaW5lcicpO1xuXG4gIGxldCBpbmZvV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnaW5mby13cmFwcGVyJyk7XG4gIFxuICBsZXQgYWRkcmVzc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnYWRkcmVzcy1jb250YWluZXInKTtcblxuICBsZXQgdGVsZXBob25lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudEFuZENsYXNzKCd0ZWxlcGhvbmUtY29udGFpbmVyJyk7XG5cbiAgaW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRhaW5lcik7XG4gIGluZm9XcmFwcGVyLmFwcGVuZENoaWxkKHRlbGVwaG9uZUNvbnRhaW5lcik7XG5cbiAgY29uc3QgdGVsZXBob25lVGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ3RlbGVwaG9uZS10aXRsZScpO1xuICB0ZWxlcGhvbmVUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS0tdW5kZXJsaW5lJyk7XG4gIGNvbnN0IHRlbGVwaG9uZSA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygndGVsZXBob25lJyk7XG4gIHRlbGVwaG9uZVRpdGxlLnRleHRDb250ZW50ID0gY29udGFjdHMudGVsZXBob25lVGl0bGU7XG4gIHRlbGVwaG9uZS50ZXh0Q29udGVudCA9IGNvbnRhY3RzLnRlbGVwaG9uZTtcblxuICB0ZWxlcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGVsZXBob25lVGl0bGUpO1xuICB0ZWxlcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGVsZXBob25lKTtcblxuICBjb25zdCBhZGRyZXNzVGl0bGUgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2FkZHJlc3MtdGl0bGUnKTtcbiAgYWRkcmVzc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLS11bmRlcmxpbmUnKTtcbiAgY29uc3QgYWRkcmVzcyA9IGNyZWF0ZUVsZW1lbnRBbmRDbGFzcygnYWRkcmVzcycpO1xuICBhZGRyZXNzVGl0bGUudGV4dENvbnRlbnQgPSBjb250YWN0cy5hZGRyZXNzVGl0bGU7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250YWN0cy5hZGRyZXNzO1xuXG4gIFxuXG4gIGFkZHJlc3NDb250YWluZXIuYXBwZW5kKGFkZHJlc3NUaXRsZSk7XG4gIGFkZHJlc3NDb250YWluZXIuYXBwZW5kKGFkZHJlc3MpO1xuXG4gIGxldCBtYXAgPSBjcmVhdGVFbGVtZW50QW5kQ2xhc3MoJ2NvbnRhY3QtbWFwJyk7XG4gIFxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb1dyYXBwZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgaW5pdE1hcCgpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG53aW5kb3cuaW5pdE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbG9jID0geyBsYXQ6IDQzLjQzNzcsIGxuZzogNS4wMzY5IH07XG4gIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtbWFwJyksIHtcbiAgICB6b29tOiAxMixcbiAgICBjZW50ZXI6IGxvYyxcbiAgfSk7XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgIHBvc2l0aW9uOiBsb2MsXG4gICAgbWFwOiBtYXAsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCB7YmFzZX0gZnJvbSAnLi9wYWdlTG9hZC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuYmFzZSgpO1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGxvYWQoKSk7XG5cbmxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuXG5cblxuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgIFxuXG4gICAgaWYgKGJ1dHRvbi5pZCA9PT0gXCJIT01FXCIpIHtcbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsb2FkKCkpO1xuICAgIH1cblxuICAgIGlmIChidXR0b24uaWQgPT09IFwiTUVOVVwiKSB7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbiAgICB9XG5cbiAgICBpZiAoYnV0dG9uLmlkID09PSBcIkNPTlRBQ1RcIikge1xuICAgICAgICBjbGVhcigpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG4gICAgICAgIFxuICAgIH1cbn0pKVxuXG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBsZXQgY2hpbGQgPSBtYWluLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICBjaGlsZCA9IG1haW4ubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG4gICAgXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9