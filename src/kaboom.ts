// This file imports the kaboom function, and then run and store it in a variable.
// That variable will be exported, so we can import it in other files.
// This module should be the first imported in your main file, so it is the first in the execution order.
import kaboom from "kaboom";

const k = kaboom();

// You can use also this file for export some constants.
export const FLOOR_HEIGHT = 48;
export const JUMP_FORCE = 800;
export const SPEED = 480;

export default k;