export const Logger = {
    warning: (string: string, ...args: any) => {
        console.log('[WARNING] ' + string, ...args)
    },
}