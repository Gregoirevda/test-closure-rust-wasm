import("../../pkg/test")
  .then(module => {
    console.log("imported wasm package");
    module.run();
  })
