import * as BABYLON from "babylonjs"

let canvas, engine, scene

if (!BABYLON.Engine.isSupported()) {
  console.log("Your Browser is not supported")
} else {
  canvas = document.getElementById("renderCanvas")
  engine = new BABYLON.Engine(canvas, true)
  scene = new BABYLON.Scene(engine)

  window.addEventListener("resize", () => {
    engine.resize()
  })
}

export {
  canvas,
  engine,
  scene
}
