import { canvas, scene } from "Engine/engine"

// Create the camera
let camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 4, -10), scene)
camera.setTarget(new BABYLON.Vector3(0, 0, 10))
camera.attachControl(canvas)

export default camera
