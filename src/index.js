function ordinalSuffix(num) {
    if (num > 3 && num < 21) {
        return num + 'th';
    }
    switch (num % 10) {
        case 1:
            return num + 'st';
        case 2:
            return num + 'nd';
        case 3:
            return num + 'rd';
        default:
            return num + 'th';
    }
}
module.exports = ordinalSuffix;
console.log(ordinalSuffix(1)); // 'st' -> 1st
console.log(ordinalSuffix(2)); // 'nd' -> 2nd
console.log(ordinalSuffix(3)); // 'rd' -> 3rd
console.log(ordinalSuffix(4)); // 'th' -> 4th
console.log(ordinalSuffix(11)); // 'th' -> 11th
console.log(ordinalSuffix(502)); // 'nd' -> 502nd
console.log(ordinalSuffix(1001)); // 'st' -> 1001st
console.log(ordinalSuffix(433)); // 'rd' -> 433rd
