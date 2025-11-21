// scenes/PreloadScene.js
class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    // ===== 主角 =====
    // 立绘
    this.load.image("mc_stand", "assets/mc/mc_stand.png");

    // 行走图（64x64 Q 版）
    this.load.spritesheet("mc_walk", "assets/mc/mc_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // ===== 舞女（立绘）=====
    this.load.image("dancer_a", "assets/dancer/dancer_a.png");
    this.load.image("dancer_b", "assets/dancer/dancer_b.png");
    this.load.image("dancer_c", "assets/dancer/dancer_c.png");
    this.load.image("dancer_d", "assets/dancer/dancer_d.png");
    this.load.image("dancer_e", "assets/dancer/dancer_e.png");
    this.load.image("dancer_f", "assets/dancer/dancer_f.png");
    this.load.image("dancer_g", "assets/dancer/dancer_g.png");
    this.load.image("dancer_h", "assets/dancer/dancer_h.png");
    this.load.image("dancer_i", "assets/dancer/dancer_i.png");
    this.load.image("dancer_j", "assets/dancer/dancer_j.png");

    // 舞女行走图
    this.load.spritesheet("dancer_walk", "assets/dancer/dancer_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // ===== 龙女（立绘）=====
    this.load.image("dragon_a", "assets/dragon/dragon_a.png");
    this.load.image("dragon_b", "assets/dragon/dragon_b.png");
    this.load.image("dragon_c", "assets/dragon/dragon_c.png");

    // 龙女行走图
    this.load.spritesheet("dragon_walk", "assets/dragon/dragon_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // ===== NPC（混混 / 保安 / 老板等）=====
    // 立绘（站一排那张）
    this.load.image("npc_hooligan", "assets/npc/npc_hooligan.png");

    // 混混行走图
    this.load.spritesheet(
      "npc_hooligan_walk",
      "assets/mc/npc_hooligan_walk.png",
      {
        frameWidth: 64,
        frameHeight: 64
      }
    );

    // ===== Tileset：苏州老街 & 粉灯舞厅 =====
    // 街道
    this.load.image("street_tiles", "assets/tileset/street_tiles.png");
    this.load.image("street_night_tiles", "assets/tileset/street_night_tiles.png");

    // 舞厅
    this.load.image("ballroom_tiles", "assets/tileset/ballroom_tiles.png");
    this.load.image("ballroom_dark_tiles", "assets/tileset/ballroom_dark_tiles.png");
    this.load.image(
      "ballroom_floor_reflect",
      "assets/tileset/ballroom_floor_reflect.png"
    );
    this.load.image("ballroom_vip_tiles", "assets/tileset/ballroom_vip_tiles.png");
    this.load.image("ballroom_hall_tiles", "assets/tileset/ballroom_hall_tiles.png");

    // ===== 剧情 CG =====
    this.load.image("cg_dragon_back", "assets/cg/cg_dragon_back.png");
    this.load.image("cg_rain", "assets/cg/cg_rain.png");
    this.load.image("cg_sit", "assets/cg/cg_sit.png");

    // ===== 背景音乐 =====
    this.load.audio("bgm", "assets/audio/bgm.mp3");
  }

  create() {
    // 可以在这里顺便把常用动画注册好（可选）
    this.anims.create({
      key: "mc_walk_down",
      frames: this.anims.generateFrameNumbers("mc_walk", { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    });

    // 其他方向的可以以后再补，现在先保证能跑起来
    // this.anims.create({ key: "mc_walk_left", ... });

    this.scene.start("StreetScene");
  }
}
