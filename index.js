const engine = new GameEngine();
const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/stormhead.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    // add entities
    engine.addEntity(new StormHead(engine));
    engine.addEntity(new TextOverlay(engine));

    // initialize and start engine
    engine.init(ctx);
    engine.start();
});
