let _namedColors;
/** @internal */
export function getNamedColors() {
    if (!_namedColors) {
        _namedColors = new Map();
    }
    return _namedColors;
}
/** @internal */
export function getNamedColor(key) {
    return key ? _namedColors?.get(key) : undefined;
}
/** @internal */
export function hasNamedColor(key) {
    return key ? _namedColors?.has(key) ?? false : false;
}
