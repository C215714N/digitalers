import { create, renderTime } from "../utils/index.js"

export function actionForm(clock){
    const form = create({tag: "div", id:"clock-form"})
    const inputProps = {
        tag: "input",
        type: "number",
        min: 0,
        max: 59
    }
    const HHInput = create({...inputProps, max:24, oninput: ({target}) => {
        clock.HH = target.value;
        renderTime(clock);
    }})
    const mmInput = create({...inputProps, oninput: ({target}) => {
        clock.mm = target.value;
        renderTime(clock);
    }})
    const ssInput = create({...inputProps, oninput: ({target}) => {
        clock.ss = target.value;
        renderTime(clock);
    }})
    form.append(HHInput, mmInput, ssInput);
    return form;
}