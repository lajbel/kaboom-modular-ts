import k, { JUMP_FORCE } from "../kaboom";
import { makeFloor } from "../objects/floor";
import { makePlayer } from "../objects/player";
import { makeTree } from "../objects/tree";

// We call the function scene, because we only create the scene one time.
k.scene("game", () => {
    // Define gravity.
    k.setGravity(1600);

    // Add the player object to screen.
    const player = k.add(makePlayer());

    // Add the floor
    k.add(makeFloor());

    function jump() {
        if (player.isGrounded()) {
            player.jump(JUMP_FORCE);
        }
    }

    // Jump when user press space.
    k.onKeyPress("space", jump);
    k.onClick(jump);

    function spawnTree() {
        // Add tree obj.
        k.add(makeTree());
        // Wait a random amount of time to spawn next tree.
        k.wait(k.rand(0.5, 1.5), spawnTree);
    }

    // Start spawning trees
    spawnTree();

    // Lose if player collides with any game obj with tag "tree".
    player.onCollide("tree", () => {
        k.burp();
        k.addKaboom(player.pos);
        // Go to "lose" scene and pass the score.
        k.go("lose", score);
    });

    // Keep track of score.
    let score = 0;

    const scoreLabel = k.add([
        k.text(score.toString()),
        k.pos(24, 24),
    ]);

    // Increment score every frame.
    k.onUpdate(() => {
        score++;
        scoreLabel.text = score.toString();
    });
});