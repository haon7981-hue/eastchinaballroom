class StreetScene extends Phaser.Scene {
  constructor() {
    super("StreetScene");
  }

  create() {

    // 加载 tilemap
    const map = this.make.tilemap({
      key: "street_map",
      tileWidth: 64,
      tileHeight: 64
    });

    const tiles = map.addTilesetImage("street", "street_tiles");

    const groundLayer = map.createLayer("ground", tiles, 0, 0);

    // 主角出生点
    this.player = this.physics.add.sprite(300, 300, "mc_walk", 0);

    // 创建动画
    this.anims.create({
      key: "mc_walk_anim",
      frames: this.anims.generateFrameNumbers("mc_walk", { start: 0, end: 7 }),
      frameRate: 8,
      repeat: -1
    });

    // 摄像头跟随
    this.cameras.main.startFollow(this.player);

    // 地图边界限制摄像头
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    // 移动输入
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const speed = 200;

    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-speed);
      this.player.play("mc_walk_anim", true);
    } 
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(speed);
      this.player.play("mc_walk_anim", true);
    } 
    else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-speed);
      this.player.play("mc_walk_anim", true);
    } 
    else if (this.cursors.down.isDown) {
      this.player.setVelocityY(speed);
      this.player.play("mc_walk_anim", true);
    } 
    else {
      this.player.setVelocity(0);
      this.player.stop();
    }
  }
}
