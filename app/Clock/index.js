import { root } from "../variables.js";
import { InputController, ClickController } from "./actions.js";
import { UI } from "./interface.js";

const section = Object.assign(
    document.createElement('section'),{
    id: "clock",
    innerHTML: UI,
    onclick: ClickController,
    oninput: InputController,
})

root.append(section)