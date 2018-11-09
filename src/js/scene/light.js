import { scene } from "Engine/engine"

export let light = null

export function createLight () {
  light = new BABYLON.PointLight(
    "light",
    new BABYLON.Vector3(0, 5, -5),
    scene)
}
