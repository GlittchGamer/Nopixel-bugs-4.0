export const isEnvBrowser = (): boolean => !(window as any).invokeNative

class Controller {
    private _events = new Map()

    constructor() {
        this._events = new Map();
        window.addEventListener('message', async(data: any) => {
            if (!data.data.event) {
                return;
            }

            const callback = this._events.get(data.data.event);
            if (callback) {
                callback(data.data.args);
            } else {
                console.log('no callback')
            }
        })
    }

    execute = async(pName: any, pData: any = undefined) => {
        if (isEnvBrowser()) {
            return
        }
        const FetchAction = await fetch(`https://${(window as any).GetParentResourceName()}/${pName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(pData)
        })

        const FetchActionData = await FetchAction.json();

        return FetchActionData;
    }

    register = async(pName: any, pCb: any = undefined) => {
        this._events.set(pName, pCb)
    }
}

export const NUI = new Controller();