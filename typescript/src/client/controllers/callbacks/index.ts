import { Inventory } from "../../modules/inventory";
import { Utils } from "../../../shared/utils";
import { NUI } from "../../modules/nui"
import { Exports } from "../../../shared/fivem/exports";
import RPC from "../../modules/rpc/controller";

export const InitCallbacks = async () => {
    NUI.RegisterUICallback('np-ui:crashAction', (data: any, cb: any) => {
        console.error("[np-ui] UI catastrophic error", data?.stack);
        cb({
            data: [],
            meta: {
                ok: true,
                message: ""
            }
        });
    })

    NUI.register('bugs:viewRefunds', async () => {
        await Utils.wait(200)
        const cid = Exports.Sync['isPed'].isPed("cid")
        Inventory.OpenInventory([`bug-refunds::${cid}`], true)
        return true
    })

    NUI.register('bugs:close', async (pSubmited: any) => {
        Exports.Sync['focusmanager'].SetUIFocus(false, false);
        if (!pSubmited) {
            return [2];
        }
        const [success, msg] = RPC.execute('bugs:submit', pSubmited)
        emit('DoLongHudText', msg, success ? 1 : 2)
        return true
    })
}