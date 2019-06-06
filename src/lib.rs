extern crate wasm_bindgen;
extern crate js_sys;

use web_sys::{Document, Element, HtmlElement, Window};
use wasm_bindgen::JsCast;
use wasm_bindgen::prelude::*;

// Used in the documentation do return the Closure (Not a solution in the app scope)
#[wasm_bindgen]
pub struct ClosureHandle(Closure<FnMut()>);

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn run() {
    // Requirment 1: the callback function is defined at this place...
    fn handle_click() {
        log("Click");
    }

    let boxed_handle_click = Closure::wrap(Box::new(move || {
        handle_click();
    }) as Box<Fn()>);

    // Requirment 2: the callback is passed as a reference
    // Doesn't matter if it is the Closure function or the function 
    // (Which would be wrapped by Closure in the setTimeout function)
    setTimeout(&boxed_handle_click);
}

fn setTimeout(handle_click: &Closure<Fn()>) {
    let window = web_sys::window().expect("should have a window in this context");

    window
        .set_interval_with_callback_and_timeout_and_arguments_0(handle_click.as_ref().unchecked_ref(), 1000);
  
    // Not possible with a reference (only a copied value, but not possible in poroject scope)
   // handle_click.forget();
}
