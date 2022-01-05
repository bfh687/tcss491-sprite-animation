class StormHead {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/stormhead.png");

        this.animations = [];

        this.animations.push(
            new Animator(this.spritesheet, 0, 0, 192, 192, 9, 0.16, 0, false, true)
        );
        this.animations.push(
            new Animator(this.spritesheet, 0, 192, 192, 192, 10, 0.16, 0, false, true)
        );
        this.animations.push();
        this.animations.push();

        this.animation1 = new Animator(this.spritesheet, 0, 0, 192, 192, 9, 0.16, 0, false, true);
        this.animation2 = new Animator(
            this.spritesheet,
            0,
            192,
            192,
            192,
            10,
            0.16,
            0,
            false,
            true
        );
        this.animation3 = new Animator(
            this.spritesheet,
            0,
            384,
            192,
            192,
            21,
            0.16,
            0,
            false,
            true
        );
        this.animation5 = new Animator(this.spritesheet, 0, 768, 192, 192, 7, 0.16, 0, false, true);
    }

    update() {}

    draw(ctx) {
        // set text color
        ctx.fillStyle = "White";

        this.animation1.drawFrame(
            this.game.clockTick,
            ctx,
            ctx.canvas.width / 2 - 192 * 2,
            ctx.canvas.height / 2 - (192 * 1) / 2 - 40,
            1
        );
        ctx.fillStyle = "Black";
        ctx.fillText(
            "IDLE",
            ctx.canvas.width / 2 - 192 * 2 + 192 / 2 - ctx.measureText("IDLE").width / 2 + 1,
            ctx.canvas.height / 2 - (192 * 1) / 2 + (192 / 6) * 5 - 40 + 1
        );
        ctx.fillStyle = "White";
        ctx.fillText(
            "IDLE",
            ctx.canvas.width / 2 - 192 * 2 + 192 / 2 - ctx.measureText("IDLE").width / 2,
            ctx.canvas.height / 2 - (192 * 1) / 2 + (192 / 6) * 5 - 40
        );

        this.animation2.drawFrame(
            this.game.clockTick,
            ctx,
            ctx.canvas.width / 2 - 192 * 1,
            ctx.canvas.height / 2 - (192 * 1) / 2 - 40,
            1
        );
        ctx.fillStyle = "Black";
        ctx.fillText(
            "WALKING",
            ctx.canvas.width / 2 - 192 * 1 + 192 / 2 - ctx.measureText("WALKING").width / 2 + 1,
            ctx.canvas.height / 2 - (192 * 1) / 2 + (192 / 6) * 5 - 40 + 1
        );
        ctx.fillStyle = "White";
        ctx.fillText(
            "WALKING",
            ctx.canvas.width / 2 - 192 * 1 + 192 / 2 - ctx.measureText("WALKING").width / 2,
            ctx.canvas.height / 2 - (192 * 1) / 2 + (192 / 6) * 5 - 40
        );

        this.animation3.drawFrame(
            this.game.clockTick,
            ctx,
            ctx.canvas.width / 2 + 192 * 0,
            ctx.canvas.height / 2 - (192 * 1) / 2 - 40,
            1
        );
        ctx.fillStyle = "Black";
        ctx.fillText(
            "ATTACK",
            ctx.canvas.width / 2 + 192 * 0 + 192 / 2 - ctx.measureText("ATTACK").width / 2 + 1,
            ctx.canvas.height / 2 - (192 * 1) / 2 + (192 / 6) * 5 - 40 + 1
        );
        ctx.fillStyle = "White";
        ctx.fillText(
            "ATTACK",
            ctx.canvas.width / 2 + 192 * 0 + 192 / 2 - ctx.measureText("ATTACK").width / 2,
            ctx.canvas.height / 2 - (192 * 1) / 2 + (192 / 6) * 5 - 40
        );

        this.animation5.drawFrame(
            this.game.clockTick,
            ctx,
            ctx.canvas.width / 2 + 192 * 1,
            ctx.canvas.height / 2 - (192 * 1) / 2 - 40,
            1
        );
        ctx.fillStyle = "Black";
        ctx.fillText(
            "DEATH",
            ctx.canvas.width / 2 +
                192 +
                192 / 2 -
                ctx.measureText("DEATH").width / 2 +
                Math.floor(Math.random() * 4) -
                2,
            ctx.canvas.height / 2 -
                (192 * 1) / 2 +
                (192 / 6) * 5 -
                40 +
                Math.floor(Math.random() * 4) -
                2
        );
        ctx.fillText(
            "DEATH",
            ctx.canvas.width / 2 + 192 + 192 / 2 - ctx.measureText("DEATH").width / 2,
            ctx.canvas.height / 2 - (192 * 1) / 2 + (192 / 6) * 5 - 40
        );

        ctx.save();
        ctx.font = "normal 16px Arial";

        ctx.fillStyle = "Black";
        ctx.fillText(
            "ANIMATION TEST",
            ctx.canvas.width / 2 - ctx.measureText("ANIMATION TEST").width / 2 + 1,
            ctx.canvas.height / 2 - 260 + 1
        );
        ctx.fillStyle = "White";
        ctx.fillText(
            "ANIMATION TEST",
            ctx.canvas.width / 2 - ctx.measureText("ANIMATION TEST").width / 2,
            ctx.canvas.height / 2 - 260
        );

        ctx.font = "normal 12px Arial";
        ctx.fillStyle = "Black";
        ctx.fillText(
            "ASSETS FROM HTTPS://PENUSBMIC.ITCH.IO",
            ctx.canvas.width / 2 -
                ctx.measureText("ASSETS FROM HTTPS://PENUSBMIC.ITCH.IO").width / 2 +
                1,
            ctx.canvas.height / 2 - 235 + 1
        );
        ctx.fillStyle = "White";
        ctx.fillText(
            "ASSETS FROM HTTPS://PENUSBMIC.ITCH.IO",
            ctx.canvas.width / 2 -
                ctx.measureText("ASSETS FROM HTTPS://PENUSBMIC.ITCH.IO").width / 2,
            ctx.canvas.height / 2 - 235
        );
        ctx.restore();
    }
}
