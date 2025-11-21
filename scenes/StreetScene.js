// scenes/StreetScene.js
export default class StreetScene extends Phaser.Scene {
  constructor() {
    super("StreetScene");
  }

  preload() {
    this.load.image("street", "assets/tileset/street_tiles.png");
    this.load.spritesheet("mc_walk", "assets/mc/mc_walk.png", {
      frameWidth: 64,
      frameHeight: 64
    });
  }

  create() {
    // 背景
    const bg = this.add.image(0, 0, "street").setOrigin(0);

    // 背景等比例缩放（适配 1920×1080 或任何浏览器尺寸）
    const scaleX = this.cameras.main.width / bg.width;
    const scaleY = this.cameras.main.height / bg.height;
    const scale = Math.max(scaleX, scaleY);
    bg.setScale(scale);

    // 主角
    this.player = this.physics.add.sprite(400, 300, "mc_walk", 0);
    this.player.setScale(1.2); // 缩放主角

    // 动画
    this.anims.create({
      key: "mc_walk_anim",
      frames: this.anims.generateFrameNumbers("mc_walk", { start: 0, end: 7 }),
      frameRate: 8,
      repeat: -1
    });

    // 摄像机跟随人物
    this.cameras.main.startFollow(this.player);
    this.cameras.main.setZoom(1.5);

    // 控制
    this.cursors = this.input.keyboard.createCursorKeys();
    this.W = this.input.keyboard.addKey("W");
    this.A = this.input.keyboard.addKey("A");
    this.S = this.input.keyboard.addKey("S");
    this.D = this.input.keyboard.addKey("D");
  }

  update() {
    const speed = 180;
    let vx = 0, vy = 0;

    if (this.cursors.left.isDown || this.A.isDown) vx = -speed;
    else if (this.cursors.right.isDown || this.D.isDown) vx = speed;

    if (this.cursors.up.isDown || this.W.isDown) vy = -speed;
    else if (this.cursors.down.isDown || this.S.isDown) vy = speed;

    this.player.setVelocity(vx, vy);

    if (vx !== 0 || vy !== 0) {
      this.player.anims.play("mc_walk_anim", true);
    } else {
      this.player.anims.stop();
    }
  }
}
