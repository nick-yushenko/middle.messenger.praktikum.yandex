export const last = (list: any)=> {
    if (!Array.isArray(list)) {
        return undefined;
    }
    const length = list.length;
    return length ? list[length - 1] : undefined;
}