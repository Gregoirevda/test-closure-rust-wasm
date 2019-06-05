/* tslint:disable */
import * as wasm from './test_bg';

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_log_a9d2d4385c0de928(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    try {
        console.log(varg0);
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}
/**
* @returns {void}
*/
export function run() {
    return wasm.run();
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

export function __widl_instanceof_Window(idx) {
    return getObject(idx) instanceof Window ? 1 : 0;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

function handleError(exnptr, e) {
    const view = getUint32Memory();
    view[exnptr / 4] = 1;
    view[exnptr / 4 + 1] = addHeapObject(e);
}

export function __widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window(arg0, arg1, arg2, exnptr) {
    try {
        return getObject(arg0).setInterval(getObject(arg1), arg2);
    } catch (e) {
        handleError(exnptr, e);
    }
}

export function __wbg_newnoargs_e5412d32e226619e(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    try {
        return addHeapObject(new Function(varg0));
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}

export function __wbg_call_f183995dc9d8c54c(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        handleError(exnptr, e);
    }
}

export function __wbindgen_object_clone_ref(idx) {
    return addHeapObject(getObject(idx));
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

export function __wbindgen_object_drop_ref(i) { dropObject(i); }

export function __wbindgen_cb_drop(i) {
    const obj = getObject(i).original;
    dropObject(i);
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
}

export const __wbindgen_cb_forget = dropObject;

export function __wbindgen_closure_wrapper68(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(2);
    const d = wasm.__wbg_function_table.get(3);
    const cb = function() {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b);

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
}

function freeClosureHandle(ptr) {

    wasm.__wbg_closurehandle_free(ptr);
}
/**
*/
export class ClosureHandle {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeClosureHandle(ptr);
    }

}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

