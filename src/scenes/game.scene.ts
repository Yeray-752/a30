import { Scene, Types } from 'phaser';

export class GameScene extends Scene {
    private achoThePup!: Types.Physics.Arcade.ImageWithDynamicBody;

    constructor() {
        super('game');
    }

    create(): void {

        this.add.image(400, 570, 'ground');
        this.achoThePup = this.physics.add.image(0, 0, 'acho');

        this.achoThePup.setCollideWorldBounds(true);
        this.achoThePup.setBounce(1, 1);
        this.achoThePup.setVelocityX(300);

        this.achoThePup.body.onWorldBounds = true;

        // 2. Escuchar el evento 'worldbounds'
        this.physics.world.on('worldbounds', (body: Phaser.Physics.Arcade.Body) => {
            // Comprobamos que el cuerpo que chocó sea el de nuestro perrito
            if (body.gameObject === this.achoThePup) {
                this.changeColor();
            }
        });
    }

    private changeColor(): void {
        // Genera un color aleatorio hexadecimal
        const randomColor = Phaser.Display.Color.RandomRGB().color;

        // 3. Aplicar el color como un "tint"
        this.achoThePup.setTint(randomColor);
    }

}