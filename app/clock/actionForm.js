import { create, renderTime } from "../utils/index.js"

export function actionForm(clock){
    const form = create({tag: "div", id:"clock-form"})
    const inputProps = {
        tag: "input",
        type: "number"
    }
    const HHInput = create({...inputProps, onclick: ({target}) => {
        clock.HH = target.value;
        renderTime(clock);
    }})
    const mmInput = create({...inputProps, onclick: ({target}) => {
        clock.mm = target.value;
        renderTime(clock);
    }})
    const ssInput = create({...inputProps, onclick: ({target}) => {
        clock.ss = target.value;
        renderTime(clock);
    }})
    form.append(HHInput, mmInput, ssInput);
    return form;
}