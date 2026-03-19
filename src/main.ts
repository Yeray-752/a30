import * as Phaser from 'phaser';

import { PreloaderScene } from './scenes/preloader.scene';
import { GameScene } from './scenes/game.scene';
import { Bugfender } from '@bugfender/sdk';

Bugfender.init({
    appKey: 'KrCLuC1CVhAjmCjf4rdii6kbeaP06G9R',
    // overrideConsoleMethods: true,
    // printToConsole: true,
    // registerErrorHandler: true,
    // logBrowserEvents: true,
    // logUIEvents: true,
    // version: '',
    // build: '',
});

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x : 0, y: 500 }
        }
    },
    scene: [PreloaderScene, GameScene],
    backgroundColor: '#21213B'
};

export default new Phaser.Game(config);