class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    // 加载街道 tileset 图
    this.load.image("street_tiles", "assets/tileset/street_tiles.png");

    // 加载 JSON 地图
    this.load.tilemapTiledJSON("street_map", "assets/maps/street_map.json");

    // 主角
    this.load.spritesheet("mc_walk", "assets/mc/mc_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });
  }

  create() {
    this.scene.start("StreetScene");
  }
}
