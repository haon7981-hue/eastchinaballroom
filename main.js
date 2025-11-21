// -----------------------------
// 江浙沪砂舞 RPG - 主入口 main.js
// -----------------------------

import BootScene from "./scenes/BootScene.js";
import PreloadScene from "./scenes/PreloadScene.js";
import StreetScene from "./scenes/StreetScene.js";
import BallroomScene from "./scenes/BallroomScene.js";
import DialogUI from "./scenes/DialogUI.js";

let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    pixelArt: true,
    backgroundColor: "#000000",

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

