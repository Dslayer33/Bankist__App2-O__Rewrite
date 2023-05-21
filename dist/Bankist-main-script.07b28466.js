// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/newHeaderModule.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncVault = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var header = document.querySelector('.header');
var newHeader = document.createElement('header');
var newHeaderContainer = document.createElement('div');
var newHeaderContent = document.createElement('div');
var contentBlock1 = document.createElement('div');
var contentBlock2 = document.createElement('div');
var body = document.querySelector('.body');
var contentBlock1Welcome = document.createElement('h2');
var contentBlock1Panels = document.createElement('div');
var contentBlock1LogTime = document.createElement('h2');
var contentBlock1Panel1 = document.createElement('div');
var contentBlock1Panel2 = document.createElement('div');
var contentBlock1Panel3 = document.createElement('div');
var contentBlock1Panel4 = document.createElement('div');
var contentBlock1Panel5 = document.createElement('div');
var contentBlock1Panel6 = document.createElement('div');
var contentBlock2Sum = document.createElement('h2');
var contentBlock2FormsContainer = document.createElement('div');
var contentBlock2FormBlock1 = document.createElement('div');
var contentBlock2FormBlock2 = document.createElement('div');
var contentBlock2CurrBtn = document.createElement('button');
var formCollection = [contentBlock2FormBlock1, contentBlock2FormBlock2];
var contentBlock2StartBalance = 0;
var panelVault = [contentBlock1Panel1, contentBlock1Panel2, contentBlock1Panel3, contentBlock1Panel4, contentBlock1Panel5, contentBlock1Panel6];
var newTimeHours = new Date().getHours();
var newTimeSeconds = new Date().getMinutes();

var newHeaderLoad =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime().mark(function _callee() {
    var headDisplay, newHeadPlace, newHeadClass;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          headDisplay = header.style.display = "none";
          newHeadPlace = body.after(newHeader);
          newHeadClass = newHeader.classList.add('new-header');
          _context.next = 5;
          return headDisplay;

        case 5:
          _context.next = 7;
          return newHeadPlace;

        case 7:
          _context.next = 9;
          return newHeadClass;

        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));

  return function newHeaderLoad() {
    return _ref.apply(this, arguments);
  };
}();

var newHeaderContainerLoad =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime().mark(function _callee2() {
    var newHeadPlaceContainer, newHeadClassContainer;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          newHeadPlaceContainer = newHeader.appendChild(newHeaderContainer);
          newHeadClassContainer = newHeaderContainer.classList.add('new-header__container');
          _context2.next = 4;
          return newHeadPlaceContainer;

        case 4:
          _context2.next = 6;
          return newHeadClassContainer;

        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));

  return function newHeaderContainerLoad() {
    return _ref2.apply(this, arguments);
  };
}();

var newHeaderContentLoad =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime().mark(function _callee3() {
    var newHeadPlaceContent, newHeadClassContent;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          newHeadPlaceContent = newHeaderContainer.appendChild(newHeaderContent);
          newHeadClassContent = newHeaderContent.classList.add('nh-content-block');
          _context3.next = 4;
          return newHeadPlaceContent;

        case 4:
          _context3.next = 6;
          return newHeadClassContent;

        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));

  return function newHeaderContentLoad() {
    return _ref3.apply(this, arguments);
  };
}();

var contentBlocksLoad =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime().mark(function _callee4() {
    var contentBlock1Place, contentBlock2Place, contentBlock1Class, contentBlock2Class;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          contentBlock1Place = newHeaderContent.appendChild(contentBlock1);
          contentBlock2Place = newHeaderContent.appendChild(contentBlock2);
          contentBlock1Class = contentBlock1.classList.add('content-in-block');
          contentBlock2Class = contentBlock2.classList.add('content-in-block');
          _context4.next = 6;
          return contentBlock1Place;

        case 6:
          _context4.next = 8;
          return contentBlock2Place;

        case 8:
          _context4.next = 10;
          return contentBlock1Class;

        case 10:
          _context4.next = 12;
          return contentBlock2Class;

        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));

  return function contentBlocksLoad() {
    return _ref4.apply(this, arguments);
  };
}();

var contentBlock1Load =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return contentBlock1.appendChild(contentBlock1Welcome);

        case 2:
          _context5.next = 4;
          return contentBlock1Welcome.classList.add('content-welcome');

        case 4:
          _context5.next = 6;
          return contentBlock1Welcome.textContent = "Good day,user!";

        case 6:
          _context5.next = 8;
          return contentBlock1.appendChild(contentBlock1Panels);

        case 8:
          _context5.next = 10;
          return contentBlock1Panels.classList.add('content-panels-collection');

        case 10:
          _context5.next = 12;
          return contentBlock1Panels.appendChild(contentBlock1Panel1);

        case 12:
          _context5.next = 14;
          return contentBlock1Panels.appendChild(contentBlock1Panel2);

        case 14:
          _context5.next = 16;
          return contentBlock1Panels.appendChild(contentBlock1Panel3);

        case 16:
          _context5.next = 18;
          return contentBlock1Panels.appendChild(contentBlock1Panel4);

        case 18:
          _context5.next = 20;
          return contentBlock1Panels.appendChild(contentBlock1Panel5);

        case 20:
          _context5.next = 22;
          return contentBlock1Panels.appendChild(contentBlock1Panel6);

        case 22:
          _context5.next = 24;
          return panelVault.forEach(function (items) {
            items.classList.add('panel-item');
          });

        case 24:
          _context5.next = 26;
          return contentBlock1.appendChild(contentBlock1LogTime);

        case 26:
          _context5.next = 28;
          return contentBlock1LogTime.classList.add('content-time');

        case 28:
          _context5.next = 30;
          return contentBlock1LogTime.textContent = "You will be logged in ".concat(newTimeHours, ":").concat(newTimeSeconds);

        case 30:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));

  return function contentBlock1Load() {
    return _ref5.apply(this, arguments);
  };
}();

var contentBlock2Load =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return contentBlock2.appendChild(contentBlock2Sum);

        case 2:
          _context6.next = 4;
          return contentBlock2Sum.classList.add('content-sum');

        case 4:
          _context6.next = 6;
          return contentBlock2Sum.textContent = "Current Balance: ".concat(contentBlock2StartBalance, "$");

        case 6:
          _context6.next = 8;
          return contentBlock2.appendChild(contentBlock2FormsContainer);

        case 8:
          _context6.next = 10;
          return contentBlock2FormsContainer.classList.add('content-forms');

        case 10:
          _context6.next = 12;
          return contentBlock2FormsContainer.appendChild(contentBlock2FormBlock1);

        case 12:
          _context6.next = 14;
          return contentBlock2FormsContainer.appendChild(contentBlock2FormBlock2);

        case 14:
          _context6.next = 16;
          return formCollection.forEach(function (items) {
            items.classList.add('form-content');
          });

        case 16:
          _context6.next = 18;
          return contentBlock2.appendChild(contentBlock2CurrBtn);

        case 18:
          _context6.next = 20;
          return contentBlock2CurrBtn.classList.add('content-btn');

        case 20:
          _context6.next = 22;
          return contentBlock2CurrBtn.textContent = 'Currency';

        case 22:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));

  return function contentBlock2Load() {
    return _ref6.apply(this, arguments);
  };
}(); // let newHeaderLoad = new Promise(function(resolve,reject){
//     header.style.display = "none";
//     resolve();
// }).then(function(){
//     body.after(newHeader);
// }).then(function(){
//     newHeader.classList.add('new-header');
// });
// let newHeaderContainerLoad = new Promise(function(resolve,reject){
//     newHeader.appendChild(newHeaderContainer);
//     resolve();
// }).then(function(){
//     newHeaderContainer.classList.add('new-header__container');
// });
// let newHeaderContentLoad = new Promise(function(resolve,reject){
//     newHeaderContainer.appendChild(newHeaderContent);
//     resolve();
// }).then(function(){
//     newHeaderContent.classList.add('nh-content-block');
// });
// let contentBlocksLoad = new Promise(function(resolve,reject){
//     newHeaderContent.appendChild(contentBlock1);
//     newHeaderContent.appendChild(contentBlock2);
//     resolve();
// }).then(function(){
//     contentBlock1.classList.add('content-in-block');
//     contentBlock2.classList.add('content-in-block');
// });


var asyncVault = [newHeaderLoad, newHeaderContainerLoad, newHeaderContentLoad, contentBlocksLoad, contentBlock1Load, contentBlock2Load];
exports.asyncVault = asyncVault;
},{}],"scripts/Bankist-main-script.js":[function(require,module,exports) {
"use strict"; // import {header,newHeader,newHeaderContainer,newHeaderContent,
//   contentBlock1,contentBlock2,promisesVault,loadCont} from "./newHeaderModule";

var _newHeaderModule = require("./newHeaderModule");

var icon5 = document.querySelector('.nav-icon-5');
var burgerMenuShadow = document.querySelector('.nav-icon--shadow');
var mainColumn = document.querySelector('.header-right-column');
var columnMenu = document.querySelector('.column-main-menu');
var columnIcon = document.querySelector('.column-icon');
var mainWarning = document.querySelector('.main-warning');
var windowWarning = document.querySelector('.main-warning--window');
var columnIcon2 = document.querySelector('.column-icon--shadow');
var warningClose = document.querySelector('.warn-close');
var formsBtn = document.querySelector('.forms-btn');
var body = document.querySelector('.body');
var columnWandH = 100;
var warnOpacity = 1;
icon5.addEventListener('click', function (event) {
  icon5.classList.toggle("open");

  if (mainColumn.offsetWidth !== columnWandH) {
    mainColumn.style.width = "100px";
    columnMenu.style.display = "none";
  } else {
    mainColumn.style.width = "50%";
    mainColumn.style.position = "absolute";
    mainColumn.style.zIndex = "100";
    columnMenu.style.display = "flex";
  }
});
burgerMenuShadow.addEventListener('click', function (e2) {
  burgerMenuShadow.classList.toggle("open");

  if (mainColumn.offsetHeight !== columnWandH) {
    mainColumn.style.height = "100px";
    columnMenu.style.display = "none";
    mainColumn.style.flexDirection = "row";
    mainColumn.style.justifyContent = "space-between";
  } else {
    mainColumn.style.height = "65%";
    mainColumn.style.width = "100%";
    mainColumn.style.position = "absolute";
    mainColumn.style.zIndex = "100";
    columnMenu.style.display = "flex";
    mainColumn.style.flexDirection = "column";
    mainColumn.style.justifyContent = "space-around";
  }
});
columnIcon.addEventListener('click', function (event1) {
  event1.preventDefault();
  event1.stopPropagation();

  if (mainWarning.style.opacity == warnOpacity) {
    mainWarning.style.opacity = "0";
    mainWarning.style.visibility = "hidden";
    mainWarning.animate([{
      visibility: 'visible',
      opacity: '1'
    }, {
      visibility: 'hidden',
      opacity: '0'
    }], {
      duration: 1500,
      iterations: 1,
      easing: "linear"
    });
    columnIcon.animate([{
      transform: 'rotate(0deg)'
    }, {
      transform: 'rotate(-360deg)'
    }], {
      duration: 1000,
      iterations: 1,
      easing: "linear"
    });
  } else {
    mainWarning.style.opacity = "1";
    mainWarning.style.visibility = "visible";
    mainWarning.animate([{
      visibility: 'hidden',
      opacity: '0'
    }, {
      visibility: 'visible',
      opacity: '1'
    }], {
      duration: 1500,
      iterations: 1,
      easing: "linear"
    });
    columnIcon.animate([{
      transform: 'rotate(0deg)'
    }, {
      transform: 'rotate(360deg)'
    }], {
      duration: 1000,
      iterations: 1,
      easing: "linear"
    });
  }
});
columnIcon2.addEventListener('click', function (event2) {
  event2.preventDefault();
  event2.stopPropagation();
  mainColumn.style.display = "none";
  windowWarning.style.display = "flex";
});
warningClose.addEventListener('click', function (event3) {
  event3.preventDefault();
  event3.stopPropagation();
  mainColumn.style.display = "flex";
  windowWarning.style.display = "none";
});
formsBtn.addEventListener('click', function (event4) {
  event4.preventDefault();
  event4.stopPropagation();

  _newHeaderModule.asyncVault.forEach(function (items) {
    return items();
  }); // header.style.display = "none";
  // body.after(newHeader);
  // newHeader.classList.add('new-header');
  // newHeader.appendChild(newHeaderContainer);
  // newHeaderContainer.classList.add('new-header__container');
  // newHeaderContainer.appendChild(newHeaderContent);
  // newHeaderContent.classList.add('nh-content-block');
  // newHeaderContent.appendChild(contentBlock1);
  // newHeaderContent.appendChild(contentBlock2);
  // contentBlock1.classList.add('content-in-block');
  // contentBlock2.classList.add('content-in-block');

});
},{"./newHeaderModule":"scripts/newHeaderModule.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49914" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","scripts/Bankist-main-script.js"], null)
//# sourceMappingURL=/Bankist-main-script.07b28466.js.map