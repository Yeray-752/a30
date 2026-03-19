import { Scene } from 'phaser';


export class PreloaderScene extends Scene {
    constructor() {
        super('preloader');
    }

    preload(): void {
        this.load.image('acho', 'acho.png');
        this.load.image('ground', 'ground.png');
        this.load.image('perro', 'perro.jpg');
        this.load.image('boton', 'boton.png');
    }

    create(): void {
        this.scene.start('game');
    }
}