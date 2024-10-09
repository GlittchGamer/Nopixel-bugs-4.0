import * as Controllers from './controllers';

on('onResourceStart', async (resourceName: string) => {
    if (resourceName !== GetCurrentResourceName()) return;

    await Controllers.Init();
});
