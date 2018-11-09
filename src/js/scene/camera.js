import { canvas, scene } from "Engine/engine"

export let camera = null

export function createCamera () {
  camera = new BABYLON.FreeCamera(
    "camera",
    new BABYLON.Vector3(0, 4, -10),
    scene)
  camera.setTarget(new BABYLON.Vector3(0, 0, 10))
  camera.attachControl(canvas)
}
