const engine = new GameEngine();
const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/stormhead.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    // add entities
    engine.addEntity(new StormHead(engine, 1024 / 2, 768 / 2));
    //engine.addEntity(new HUD(engine));

    // initialize and start engine
    engine.init(ctx);
    engine.start();
});
