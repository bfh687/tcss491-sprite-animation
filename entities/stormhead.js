class StormHead {
    constructor(game) {
        Object.assign(this, { game });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/stormhead.png");

        this.animations = [];
        this.loadAnimations();
    }

    loadAnimations() {
        this.animations.push(
            new Animator(this.spritesheet, 0, 0, 192, 192, 9, 0.16, 0, false, true)
        );
        this.animations.push(
            new Animator(this.spritesheet, 0, 192, 192, 192, 10, 0.16, 0, false, true)
        );
        this.animations.push(
            new Animator(this.spritesheet, 0, 384, 192, 192, 21, 0.16, 0, false, true)
        );
        this.animations.push(
            new Animator(this.spritesheet, 0, 768, 192, 192, 7, 0.16, 0, false, true)
        );
    }

    update() {}

    draw(ctx) {
        this.animations[0].drawFrame(
            this.game.clockTick,
            ctx,
            ctx.canvas.width / 2 - 192 * 2,
            ctx.canvas.height / 2 - 192 / 2 - 40,
            1
        );
        this.animations[1].drawFrame(
            this.game.clockTick,
            ctx,
            ctx.canvas.width / 2 - 192,
            ctx.canvas.height / 2 - 192 / 2 - 40,
            1
        );
        this.animations[2].drawFrame(
            this.game.clockTick,
            ctx,
            ctx.canvas.width / 2,
            ctx.canvas.height / 2 - 192 / 2 - 40,
            1
        );
        this.animations[3].drawFrame(
            this.game.clockTick,
            ctx,
            ctx.canvas.width / 2 + 192,
            ctx.canvas.height / 2 - 192 / 2 - 40,
            1
        );
    }
}
