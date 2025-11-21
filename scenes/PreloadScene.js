class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {

    // 主角行走图
    this.load.spritesheet("mc_walk", "assets/mc/mc_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // 舞女行走图（如果要）
    this.load.spritesheet("dancer_walk", "assets/dancer/dancer_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // 龙女 walking
    this.load.spritesheet("dragon_walk", "assets/dragon/dragon_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // NPC 混混 walking
    this.load.spritesheet("npc_hooligan_walk", "assets/npc/npc_hooligan_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // 苏州老街 Tiles
    this.load.image("street_tiles", "assets/tileset/street_tiles.png");

    // 舞厅 Tiles
    this.load.image("ballroom_tiles", "assets/tileset/ballroom_tiles.png");

    // 舞厅暗区
    this.load.image("ballroom_dark_tiles", "assets/tileset/ballroom_dark_tiles.png");

    // 舞厅反光地板
    this.load.image("ballroom_floor_reflect", "assets/tileset/ballroom_floor_reflect.png");

    // 舞厅 VIP
    this.load.image("ballroom_vip_tiles", "assets/tileset/ballroom_vip_tiles.png");

    // CG 场景
    this.load.image("cg_sit", "assets/cg/cg_sit.png");
    this.load.image("cg_rain", "assets/cg/cg_rain.png");
    this.load.image("cg_dragon_back", "assets/cg/cg_dragon_back.png");

    // 背景音乐
    this.load.audio("bgm", "assets/audio/bgm.mp3");
  }

  create() {
    this.scene.start("StreetScene");
  }
}
