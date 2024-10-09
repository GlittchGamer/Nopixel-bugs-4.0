import RPC from "../../modules/rpc/controler"
import { sendBugReport } from "../webhooks";

export const InitEvents = async () => {
    RPC.register('bugs:submit', async (pSource: any, pData: any) => {
        if (!pSource) {
            return [false, 'Mate how u event triggering this shite????']
        }

        sendBugReport(GetPlayerName(pSource), {
            title: `${pData.type} - ${pData.title}`,
            description: pData.description,
            url: pData.urls
        });
        
        return [true, 'Ya allah bug is sbumited']
    })

    RPC.register('bugs:getPendingRefunds', async () => {
        return 0
    })
}