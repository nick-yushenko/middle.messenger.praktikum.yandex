const isEmpty = (value: any) => {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === 'number') {
        return !isNaN(value);
    }

    if (typeof value === 'string') {
        return value === '' || value === '0';
    }

    if (typeof value === 'boolean') {
        return true;
    }

    if (Array.isArray(value)) {
        return value.length === 0;
    }

    // Проверка для Set
    if (value instanceof Set) {
        return value.size === 0;
    }

    // Проверка для Map
    if (value instanceof Map) {
        return value.size === 0;
    }

    // Проверка для объекта
    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    return false;
}
