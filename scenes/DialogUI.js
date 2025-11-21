class DialogUI extends Phaser.Scene {
  constructor() {
    super("DialogUI");
  }

  create() {
    this.visible = false;

    this.bg = this.add.rectangle(640, 630, 1200, 180, 0x000000, 0.6)
      .setVisible(false);

    this.text = this.add.text(100, 560, "", {
      fontSize: "26px",
      color: "#ffffff",
      wordWrap: { width: 1100 }
    }).setVisible(false);

    this.dialogQueue = [];
    this.input.keyboard.on("keydown-SPACE", () => {
      this.showNextLine();
    });
  }

  startDialog(lines) {
    this.dialogQueue = lines;
    this.bg.setVisible(true);
    this.text.setVisible(true);
    this.visible = true;
    this.showNextLine();
  }

  showNextLine() {
    if (this.dialogQueue.length === 0) {
      this.bg.setVisible(false);
      this.text.setVisible(false);
      this.visible = false;
      return;
    }

    const line = this.dialogQueue.shift();
    this.text.setText(line);
  }
}

