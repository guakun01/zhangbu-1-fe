export const throttle = (fn: Function, time: number) => {
    let clock: number | undefined = undefined;

    return (...args: any[]) => {
        if (clock) {
            return;
        } else {
            fn(...args);
            clock = setTimeout(() => {
                clock = undefined;
            }, time);
        }
    }
}