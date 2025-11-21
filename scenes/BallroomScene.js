class BallroomScene extends Phaser.Scene {
  constructor() {
    super("BallroomScene");
  }

  create() {
    this.add.image(640, 360, "ballroom_tiles").setScale(4);

    this.mc = this.physics.add.sprite(640, 600, "mc_walk", 0);

    this.anims.create({
      key: "mc_walk_anim",
      frames: this.anims.generateFrameNumbers("mc_walk", { start: 0, end: 7 }),
      frameRate: 8,
      repeat: -1
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    // 舞女互动区
    this.dancerZone = this.add.zone(640, 300, 200, 200);
    this.physics.world.enable(this.dancerZone);

    this.physics.add.overlap(this.mc, this.dancerZone, () => {
      this.scene.get("DialogUI").startDialog([
        "你看到舞女静静站在粉灯下。",
        "她对你点点头：“跳舞吗？1曲20元，坐台300一小时。”"
      ]);
    });

    // 启动 UI 场景（不切换）
    this.scene.launch("DialogUI");
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

