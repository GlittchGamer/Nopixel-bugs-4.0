import { Resource } from "./modules";
import * as Controllers from './controllers';
import { Exports } from "../shared/fivem/exports";
const resName = GetCurrentResourceName()
new Resource(resName);

on('onClientResourceStart', async (resourceName: string) => {
    if (resourceName !== resName) return;
    Exports.Sync['focusmanager'].RegisterFocusHandler(function (mouse: boolean, keyboard: boolean) {
        SetNuiFocus(mouse, keyboard);
    });
    await Controllers.Init();
});
