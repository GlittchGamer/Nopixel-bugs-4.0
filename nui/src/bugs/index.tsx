import { Show } from "solid-js"
import { Transition } from "solid-transition-group"
import { Header } from "./components/header";
import { createStore } from "solid-js/store";
import { INITIAL_STATE } from "./store"
import { Description } from "./components/description";
import { TypeSelector } from "./components/type-selector";
import { Input } from "./components/input";
import { SubmitButton } from "./components/submit";

const [state, setState] = createStore(INITIAL_STATE);

export const Bugs = () => {
    return (
        <Transition
            name="slide-bottom"
        >
            <Show
                when={state.show}
            >
                <div
                    class="_App_yyqr0_1"
                >
                    <div
                        class="_container_yyqr0_11"
                    >
                        <div
                            class="_border_yyqr0_24"
                        >
                            <Header />
                            <Description />
                            <TypeSelector />
                            <Input
                                title="Title"
                                description="Title of your report"
                                smallHeight
                                value={state.title}
                                onChange={(e: any) => {
                                    setState("title", e.target.value);
                                }}
                            />
                            <Input
                                title="Description"
                                description="Describe your situation or bug or whatever you feel need to be here"
                                value={state.description}
                                onChange={(e: any) => {
                                    setState("description", e.target.value);
                                }}
                            />
                            <Input
                                title="VOD / Clip / Screenshot URLs"
                                description="Must be separated by new line, include scrolling of F8 window if possible"
                                value={state.urls}
                                onChange={(e: any) => {
                                    setState("urls", e.target.value);
                                }}
                            />
                            <SubmitButton />
                        </div>
                    </div>
                </div>
            </Show>
        </Transition>
    )
}