class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    // 主角行走图
    this.load.spritesheet("mc_walk", "assets/sprites/mc/walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // 街道 tiles
    this.load.image("street_tiles", "assets/tilesets/suzhou_street/tile01.png");

    // 舞厅 tiles
    this.load.image("ballroom_tiles", "assets/tilesets/ballroom/tile_pink01.png");

    // CG
    this.load.image("cg_bankrupt", "assets/cg/bankrupt.png");

    // Audio
    this.load.audio("bgm", "assets/audio/bgm.mp3");
  }

  create() {
    this.scene.start("StreetScene");
  }
}

