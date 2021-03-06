import { Common, HIDDEN_SCREEN, VISIBLE_SCREEN } from "./Common.esm.js";
import { canvas } from "./Canvas.esm.js";
import { DATALOADED_EVENT_NAME, loader } from "./Loader.esm.js";
const gameLevels = [
    {
        level: 1,
    },
    {
        level: 2,
    },
    {
        level: 3,
    },
];

const LEVEL_SELECT_BUTTON_CLASS = "level-select__button";
const LEVEL_SELECT_ID = "js-level-select-screen";
class LevelSelect extends Common {
    constructor() {
        super(LEVEL_SELECT_ID);
        gameLevels.forEach(gameLevel => this.createButton(gameLevel.level));
    }

    createButton(value) {
        const button = document.createElement("button");

        button.type = "button";
        button.classList.add(LEVEL_SELECT_BUTTON_CLASS);
        button.textContent = value;
        button.value = value;
        button.addEventListener("click",event => this.buttonOnClickHandler(event));
        this.element.appendChild(button);
    }
    buttonOnClickHandler(event) {
        this.changeVisibilityScreen(this.element,HIDDEN_SCREEN);
        this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN);
        this.loadLevel(event.currentTarget.value);
    }

    loadLevel(level) {
        const backGround = loader.loadImage("/images/levelbackground.png");
        window.addEventListener(DATALOADED_EVENT_NAME, ()=>console.log("All media loaded"));
    }
}
export const levelSelect = new LevelSelect();