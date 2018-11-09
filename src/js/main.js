import { engine, scene } from "Engine/engine"
import { createCamera } from "Scene/camera"
import { createLight } from "Scene/light"
import { createSphere } from "Objects/sphere"

function startGame () {
  // Create basic objects
  createCamera()
  createLight()
  createSphere()

  // Game loop
  engine.runRenderLoop(() => {
    scene.render()

    // Add some code here...
  })
}

// Wait for the engine
document
  .querySelector("canvas")
  .addEventListener("loaded", startGame, false)
