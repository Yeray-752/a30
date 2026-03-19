import { Scene, Types } from 'phaser';
import { Bugfender } from '@bugfender/sdk';

export class GameScene extends Scene {
    private achoThePup!: Types.Physics.Arcade.ImageWithDynamicBody;
    private miPerro!: Types.Physics.Arcade.ImageWithDynamicBody;


    constructor() {
        super('game');
    }

    create(): void {
        const boton = this.add.image(200,200, 'boton')
        boton.setScale(0.5)
        boton.setInteractive()
        boton.on('pointerdown', () => {
            try {
                fetch('http://mi-fetch-rancio')
               
            } catch (error) {
                Bugfender.error('Error ' + error)
            }
        })


        this.add.image(400, 570, 'ground');
        this.achoThePup = this.physics.add.image(0, 0, 'acho');

        try {
            this.miPerro = this.physics.add.image(0, 0, 'perro')
            this.miPerro.setScale(0.1);

        } catch (error) {
            Bugfender.error('Fallo al cargar la imagen')
            console.log('error')
        }

        this.miPerro.setCollideWorldBounds(true);
        this.miPerro.setBounce(1, 1);
        this.miPerro.setInteractive();

        this.miPerro.on('pointerdown', () => {
            try {
                (this.miPerro as any).ladra();
               
            } catch (error) {
                Bugfender.error('Error ' + error)
            }
        })



        this.achoThePup.setCollideWorldBounds(true);
        this.achoThePup.setBounce(1, 1);
        this.achoThePup.setVelocityX(300);
        this.achoThePup.setInteractive()

        this.achoThePup.on('pointerdown', () => {
            Bugfender.info('prueba')
            console.log('hola')
        })
        Bugfender.info('El usuario ha entrado en la página: ' + window.location.pathname);

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