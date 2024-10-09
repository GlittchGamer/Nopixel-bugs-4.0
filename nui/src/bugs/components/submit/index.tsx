import { createStore } from "solid-js/store";
import { INITIAL_STATE } from "../../store";
import { NUI } from "../../../lib/nui";

const [state, setState] = createStore(INITIAL_STATE);

export const SubmitButton = () => {
    return (
        <div
            class="_button_suv8d_1"
            onClick={() => {
                setState("show", false);
                NUI.execute("bugs:close", {
                    title: state.title,
                    description: state.description,
                    urls: state.urls,
                    type: state.type
                });
            }}
        >
            Submit
        </div>
    )
}