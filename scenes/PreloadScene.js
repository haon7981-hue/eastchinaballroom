class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    // ---- 主角 ----
    this.load.spritesheet("mc_walk", "assets/mc/mc_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    this.load.image("mc_stand", "assets/mc/mc_stand.png");

    // ---- 舞女 ----
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

    // 舞女行走图（可选）
    this.load.spritesheet("dancer_walk", "assets/dancer/dancer_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // ---- 龙女 ----
    this.load.image("dragon_a", "assets/dragon/dragon_a.png");
    this.load.image("dragon_b", "assets/dragon/dragon_b.png");
    this.load.image("dragon_c", "assets/dragon/dragon_c.png");

    this.load.spritesheet("dragon_walk", "assets/dragon/dragon_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // ---- NPC ----
    this.load.image("npc_hooligan", "assets/npc/npc_hooligan.png");
    this.load.spritesheet("npc_hooligan_walk", "assets/mc/npc_hooligan_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });

    // ---- Tileset（街道 + 舞厅） ----
    this.load.image("street_tiles", "assets/tileset/street_tiles.png");
    this.load.image("street_night_tiles", "assets/tileset/street_night_tiles.png");

    this.load.image("ballroom_tiles", "assets/tileset/ballroom_tiles.png");
    this.load.image("ballroom_hall_tiles", "assets/tileset/ballroom_hall_tiles.png");
    this.load.image("ballroom_dark_tiles", "assets/tileset/ballroom_dark_tiles.png");
    this.load.image("ballroom_floor_reflect", "assets/tileset/ballroom_floor_reflect.png");
    this.load.image("ballroom_vip_tiles", "assets/tileset/ballroom_vip_tiles.png");

    // ---- CG ----
    this.load.image("cg_bankrupt", "assets/cg/cg_dragon_back.png");
    this.load.image("cg_rain", "assets/cg/cg_rain.png");
    this.load.image("cg_sit", "assets/cg/cg_sit.png");

    // ---- 音频 ----
    this.load.audio("bgm", "assets/audio/bgm.mp3");
  }

  create() {
    this.scene.start("StreetScene");
  }
}
