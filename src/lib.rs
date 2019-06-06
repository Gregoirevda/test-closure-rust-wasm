extern crate wasm_bindgen;
extern crate js_sys;

use web_sys::{Document, Element, HtmlElement, Window};
use wasm_bindgen::JsCast;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct ClosureHandle(Closure<FnMut()>);

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}



#[wasm_bindgen]
pub fn run() {
    fn handle_click() {
        log("Click");
    }

    let boxed_handle_click = Box::new(move || {
        handle_click();
    }) as Box<Fn()>;

    setTimeout(boxed_handle_click);
}

fn setTimeout(handle_click: std::boxed::Box<Fn()>) {
    // First up we use `Closure::wrap` to wrap up a Rust closure and create
    // a JS closure.
    let cb = Closure::wrap(handle_click);

    // Next we pass this via reference to the `setTimeout` function, and
    // `setTimeout` gets a handle to the corresponding JS closure.
    let window = web_sys::window().expect("should have a window in this context");

    window
        .set_interval_with_callback_and_timeout_and_arguments_0(cb.as_ref().unchecked_ref(), 1000);
  

    // If we were to drop `cb` here it would cause an exception to be raised
    // when the timeout elapses. Instead we *return* our handle back to JS
    // so JS can tell us later when it would like to deallocate this handle.
    //ClosureHandle(cb)
    cb.forget();
}
