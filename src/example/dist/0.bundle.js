(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../pkg/test.js":
/*!******************************************************************************!*\
  !*** /Users/gvanderauw001/dev/opensource/test-clojure-rust-wasm/pkg/test.js ***!
  \******************************************************************************/
/*! exports provided: __wbg_log_a9d2d4385c0de928, run, __wbindgen_cb_drop, ClosureHandle, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_a9d2d4385c0de928\", function() { return __wbg_log_a9d2d4385c0de928; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClosureHandle\", function() { return ClosureHandle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _test_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test_bg */ \"../../pkg/test_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _test_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_test_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_a9d2d4385c0de928(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        log(varg0);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _test_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_cb_drop(i) {\n    const obj = getObject(i).original;\n    dropObject(i);\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return 1;\n    }\n    return 0;\n}\n\nfunction freeClosureHandle(ptr) {\n\n    _test_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_closurehandle_free\"](ptr);\n}\n/**\n*/\nclass ClosureHandle {\n\n    constructor() {\n        throw new Error('cannot invoke `new` directly');\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeClosureHandle(ptr);\n    }\n\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:////Users/gvanderauw001/dev/opensource/test-clojure-rust-wasm/pkg/test.js?");

/***/ }),

/***/ "../../pkg/test_bg.wasm":
/*!***********************************************************************************!*\
  !*** /Users/gvanderauw001/dev/opensource/test-clojure-rust-wasm/pkg/test_bg.wasm ***!
  \***********************************************************************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, __wbg_closurehandle_free, run */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./test */ \"../../pkg/test.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:////Users/gvanderauw001/dev/opensource/test-clojure-rust-wasm/pkg/test_bg.wasm?");

/***/ })

}]);