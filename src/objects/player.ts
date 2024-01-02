import k from "../kaboom";

// Exports a function that creates the player object, but not add it,
export const makePlayer = () => {
    const player = k.make([
        // List of components
        k.sprite("bean"),
        k.pos(80, 40),
        k.area(),
        k.body(),
    ]);

    // Returns the player object, but not add it.
    return player;
}
