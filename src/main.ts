// Kaboom context is created. We can use kaboom functions in future imported files.
import k from "./kaboom";

// We execute the scene files, so scene functions are called.
import "./scenes/game";
import "./scenes/lose";

// We execute the assets file, so assets are loaded.
import "./assets";

// The default scene. We can use it to start the game.
k.go("game");