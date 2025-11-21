class StreetScene extends Phaser.Scene {
  constructor() {
    super("StreetScene");
  }

  create() {
    // 地图底图
    this.add.image(640, 360, "street_tiles").setScale(4);

    // 主角
    this.mc = this.physics.add.sprite(640, 500, "mc_walk", 0);

    this.anims.create({
      key: "mc_walk_anim",
      frames: this.anims.generateFrameNumbers("mc_walk", { start: 0, end: 7 }),
      frameRate: 8,
      repeat: -1
    });

    // 输入
    this.cursors = this.input.keyboard.createCursorKeys();

    // 舞厅入口区域
    this.ballroomZone = this.add.zone(1100, 400, 200, 300);
    this.physics.world.enable(this.ballroomZone);
    this.physics.add.overlap(this.mc, this.ballroomZone, () => {
      this.scene.start("BallroomScene");
    });
  }

  update() {
    const speed = 150;
    this.mc.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.mc.setVelocityX(-speed);
      this.mc.play("mc_walk_anim", true);
    } else if (this.cursors.right.isDown) {
      this.mc.setVelocityX(speed);
      this.mc.play("mc_walk_anim", true);
    } else if (this.cursors.up.isDown) {
      this.mc.setVelocityY(-speed);
      this.mc.play("mc_walk_anim", true);
    } else if (this.cursors.down.isDown) {
      this.mc.setVelocityY(speed);
      this.mc.play("mc_walk_anim", true);
    } else {
      this.mc.stop();
    }
  }
}

