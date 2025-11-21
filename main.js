// main.js - 游戏入口

let game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  pixelArt: true,
  backgroundColor: "#000",

  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  },

  scene: [
    BootScene,
    PreloadScene,
    StreetScene,
    BallroomScene,
    DialogUI
  ]
});
