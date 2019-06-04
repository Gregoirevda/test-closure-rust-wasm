/* tslint:disable */
import * as wasm from './test_closure_bg';

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

export function __wbg_setTimeout_b4cf64090128154c(arg0, arg1) {
    try {
        setTimeout(getObject(arg0), arg1);
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}

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

export function __wbg_log_d97ce3d2945e9333(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    try {
        console.log(varg0);
    } catch (e) {
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", e);
        throw e;
    }
}
/**
* @returns {ClosureHandle}
*/
export function run() {
    return ClosureHandle.__wrap(wasm.run());
}

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

export function __wbindgen_cb_drop(i) {
    const obj = getObject(i).original;
    dropObject(i);
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

export function __wbindgen_closure_wrapper27(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(9);
    const d = wasm.__wbg_function_table.get(10);
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

    static __wrap(ptr) {
        const obj = Object.create(ClosureHandle.prototype);
        obj.ptr = ptr;

        return obj;
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

