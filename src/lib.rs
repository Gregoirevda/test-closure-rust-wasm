pub fn run() -> ClosureHandle {
    // First up we use `Closure::wrap` to wrap up a Rust closure and create
    // a JS closure.
    let cb = Closure::wrap(Box::new(move || {
        log("timeout elapsed!");
    }) as Box<FnMut()>);

    // Next we pass this via reference to the `setTimeout` function, and
    // `setTimeout` gets a handle to the corresponding JS closure.

    // If we were to drop `cb` here it would cause an exception to be raised
    // when the timeout elapses. Instead we *return* our handle back to JS
    // so JS can tell us later when it would like to deallocate this handle.
    ClosureHandle(cb)
}
