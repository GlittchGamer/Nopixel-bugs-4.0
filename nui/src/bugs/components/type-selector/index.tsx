import { createStore } from "solid-js/store";
import { INITIAL_STATE } from "../../store";

const [state, setState] = createStore(INITIAL_STATE);

const BugTypes = [
    {
        id: "scuff",
        name: "General Scuff"
    }, {
        id: "job",
        name: "Job or Rep Scuff"
    }, {
        id: "lost",
        name: "Lost Item or Reward"
    }, {
        id: "exploit",
        name: "Exploit"
    }, {
        id: "vehicles",
        name: "Vehicles"
    }, {
        id: "clothing",
        name: "Clothing or Character Customization"
    }, {
        id: "3d",
        name: "3D Misc (Props, Interiors, etc)"
    }
];

export const TypeSelector = () => {
    return (
        <div
            class="_type_1r90u_1"
        >
            <div
                class="flex flex-col items-start justify-center"
            >
                <div
                    class="_title_1r90u_13"
                >Type of Report</div>
                <div
                    class="_description_1r90u_22"
                >Select type of report there</div>
            </div>
            <div
                class="ml-auto flex flex-row items-center justify-center"
            >
                <div
                    class="_arrow_1r90u_47"
                    onClick={() => {
                        let newIndex = state.selectedIndex - 1;
                        if (newIndex < 0) {
                            newIndex = BugTypes.length - 1;
                        }
                        setState("selectedIndex", newIndex);
                        setState("type", BugTypes[newIndex].id);
                    }}
                >
                    <svg
                        width="0.648vh"
                        height="1.11vh"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.34315 5.65686V6.19888e-06L0.686292 5.65686L6.34315 11.3137V5.65686Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div
                    class="_box_1r90u_30"
                >
                    {BugTypes[state.selectedIndex].name}
                </div>
                <div
                    class="_arrow_1r90u_47"
                    onClick={() => {
                        let newIndex = state.selectedIndex + 1;
                        if (newIndex > BugTypes.length - 1) {
                            newIndex = 0;
                        }
                        setState("selectedIndex", newIndex);
                        setState("type", BugTypes[newIndex].id);
                    }}
                >
                    <svg
                        width="0.648vh"
                        height="1.11vh"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.34315 5.65686V6.19888e-06L0.686292 5.65686L6.34315 11.3137V5.65686Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}