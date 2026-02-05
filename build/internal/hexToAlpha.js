export function hexToAlpha(value) {
    return Math.round(parseInt(value, 16) / 255 * 100) / 100;
}
