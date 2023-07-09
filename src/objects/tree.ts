import k, { SPEED, FLOOR_HEIGHT } from "../kaboom";

export function makeTree() {
    const tree = k.add([
        k.rect(48, k.rand(32, 96)),
        k.area(),
        k.outline(4),
        k.pos(k.width(), k.height() - FLOOR_HEIGHT),
        k.anchor("botleft"),
        k.color(255, 180, 255),
        k.move(k.LEFT, SPEED),
        "tree",
    ]);

    return tree;
}