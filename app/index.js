import getData from "./callback.js";
import handleRender from "./render.js";

let method = "GET";
let url = "/assets/content/methods"

getData({
    method, url, 
    callBack: handleRender
})