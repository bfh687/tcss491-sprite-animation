class TextOverlay {
    constructor(game) {
        Object.assign(this, { game });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/stormhead.png");
    }

    update() {}

    draw(ctx) {
        ctx.fillStyle = "Black";
        ctx.fillText(
            "IDLE",
            ctx.canvas.width / 2 - 192 * 2 + 192 / 2 - ctx.measureText("IDLE").width / 2 + 1,
            ctx.canvas.height / 2 - 192 / 2 + (192 / 6) * 5 - 40 + 1
        );

        ctx.fillText(
            "WALKING",
            ctx.canvas.width / 2 - 192 + 192 / 2 - ctx.measureText("WALKING").width / 2 + 1,
            ctx.canvas.height / 2 - 192 / 2 + (192 / 6) * 5 - 40 + 1
        );

        ctx.fillText(
            "ATTACK",
            ctx.canvas.width / 2 + 192 / 2 - ctx.measureText("ATTACK").width / 2 + 1,
            ctx.canvas.height / 2 - 192 / 2 + (192 / 6) * 5 - 40 + 1
        );

        ctx.fillText(
            "DEATH",
            ctx.canvas.width / 2 +
                192 +
                192 / 2 -
                ctx.measureText("DEATH").width / 2 +
                Math.floor(Math.random() * 4) -
                2,
            ctx.canvas.height / 2 - 192 / 2 + (192 / 6) * 5 - 40 + Math.floor(Math.random() * 4) - 2
        );
        ctx.fillText(
            "DEATH",
            ctx.canvas.width / 2 + 192 + 192 / 2 - ctx.measureText("DEATH").width / 2,
            ctx.canvas.height / 2 - (192 * 1) / 2 + (192 / 6) * 5 - 40
        );

        ctx.fillStyle = "White";
        ctx.fillText(
            "IDLE",
            ctx.canvas.width / 2 - 192 * 2 + 192 / 2 - ctx.measureText("IDLE").width / 2,
            ctx.canvas.height / 2 - 192 / 2 + (192 / 6) * 5 - 40
        );

        ctx.fillText(
            "WALKING",
            ctx.canvas.width / 2 - 192 + 192 / 2 - ctx.measureText("WALKING").width / 2,
            ctx.canvas.height / 2 - 192 / 2 + (192 / 6) * 5 - 40
        );

        ctx.fillText(
            "ATTACK",
            ctx.canvas.width / 2 + 192 / 2 - ctx.measureText("ATTACK").width / 2,
            ctx.canvas.height / 2 - 192 / 2 + (192 / 6) * 5 - 40
        );

        ctx.save();
        ctx.font = "normal 12px Arial";

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
