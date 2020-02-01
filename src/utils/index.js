export function formatToDecimalPlaces(num, precision) {
    let factor = Math.pow(10, precision || 0);
    return Math.floor(factor * num) / factor;
}