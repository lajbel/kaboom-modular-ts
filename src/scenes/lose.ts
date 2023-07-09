import k from "../kaboom";

k.scene("lose", (score) => {
    k.add([
        k.sprite("bean"),
        k.pos(k.width() / 2, k.height() / 2 - 80),
        k.scale(2),
        k.anchor("center"),
    ]);

    // Display score.
    k.add([
        k.text(score),
        k.pos(k.width() / 2, k.height() / 2 + 80),
        k.scale(2),
        k.anchor("center"),
    ]);

    // Go back to game with space is pressed.
    k.onKeyPress("space", () => k.go("game"));
    k.onClick(() => k.go("game"));
});

