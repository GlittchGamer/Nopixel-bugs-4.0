const registerdUiEvents = []

class Controller {
  constructor() {
    AddEventHandler("_npx_uiReady", () => {
      registerdUiEvents.forEach(event => exports["np-ui"].RegisterUIEvent(event));
    });
  }

  register(event: any, callback: any) {
    //@ts-ignore
    RegisterNuiCallback(`${event}`, (data, cb) => {
      cb(true)
      return callback(data);
    });
  }

  execute(event: any, args: any) {
    SendNUIMessage({
      event: event,
      args: args
    })
  }

  remove(event: any) { }

  RegisterUICallback(event: any, cb: any) {
    AddEventHandler("_npx_uiReq:" + event, cb);
    global.exports["np-ui"].RegisterUIEvent(event);
    registerdUiEvents.push(event);
  }

  SendUIMessage(event: any) {
    global.exports["np-ui"].SendUIMessage(event)
  }

  SendUIAppMessage(app: any, data: any) {
    global.exports["np-ui"].SendUIMessage({
      source: "np-nui",
      app: app,
      data: data
    });
  }

  GetUIFocus() {
    return global.exports["np-ui"].GetUIFocus();
  }

  SetUIFocus(mouse: boolean, keyboard: boolean) {
    global.exports["np-ui"].SetUIFocus(mouse, keyboard)
  }
}

export { Controller };
