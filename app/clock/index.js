import { Chron } from "./Chron.js";
import { create, renderTime } from "../utils/index.js";
import { clockButtons } from "./actionButtons.js";
import { actionForm } from "./actionForm.js";

const clock = () => {
    const now = new Date();
    const clock = new Chron(now.getHours(),now.getMinutes(),now.getSeconds());
    const article = create({ tag: "article", id:"clock-section"});
    const section = create({tag:"section", id:"clock"})
    const markList = create({ tag: "ul", id: "marklist"});

    [actionForm(clock), section, ...clockButtons(clock), markList]
    .map(item => article.append(item));
    root.append(article);

    renderTime(clock);
}
export default clock