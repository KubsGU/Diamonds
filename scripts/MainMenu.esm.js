import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from "./Common.esm.js";

const SCALE_PROPERTY = "--scale-value";
const START_SCREEN_SETTINGS_BUTTON_ID = "js-settings-button";
const START_SCREEN_GAME_BUTTON_ID = "js-start-game";
const START_SCREEN_ID = "js-start-screen";
// or const START_SCREEN_SELECTOR = "#js-start-screen"

class MainMenu extends Common{
    constructor() {
        super(START_SCREEN_ID); //invoking Common constructor
        this.bindToGameElements();
        this.resizeGameWindow();
        window.addEventListener("resize",this.resizeGameWindow);
    }
    bindToGameElements() {
        const gameStartButton = this.bindToElement(START_SCREEN_GAME_BUTTON_ID);
        const gameSettingsButton = this.bindToElement(START_SCREEN_SETTINGS_BUTTON_ID);

        gameStartButton.addEventListener("click", () => this.showLevelScreen());
        gameSettingsButton.addEventListener("click", () => this.showSettingsScreen());
    }

    showLevelScreen() {
        console.log("Wybór poziomu");
    }

    showSettingsScreen() {
        console.log("Ustawienia gry");
    }

    resizeGameWindow() {
        const { innerWidth: width, innerHeight: height} = window;
        const scale = Math.min(width / 640, height / 480);

        document.documentElement.style.setProperty(SCALE_PROPERTY, scale);


    }
}
export const mainMenu = new MainMenu();