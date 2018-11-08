import { engine, scene } from "Engine/engine"
import "Scene/camera"
import "Scene/light"
import "Objects/sphere"

engine.runRenderLoop(() => {
  scene.render()
})
