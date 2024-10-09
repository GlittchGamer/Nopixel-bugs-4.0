import { Exports } from "../../../shared/fivem/exports";
import { NUI } from "../../modules/nui";
import RPC from "../../modules/rpc/controller"

export const Events = () => {
    onNet('bugs:open', async() => {
        const pending = RPC.execute('bugs:getPendingRefunds')
        Exports.Sync['focusmanager'].SetUIFocus(true, true);
        NUI.execute("bugs:open", pending);
    })
}