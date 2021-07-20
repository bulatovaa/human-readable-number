module.exports = function toReadable (number) {
 const units = {
     1: 'one',
     2: 'two',
     3: 'three',
     4: 'four',
     5: 'five',
     6: 'six',
     7: 'seven',
     8: 'eight',
     9: 'nine'
 };

 const teens = {
     10: 'ten',
     11: 'eleven',
     12: 'twelve',
     13: 'thirteen',
     14: 'fourteen',
     15: 'fifteen',
     16: 'sixteen',
     17: 'seventeen',
     18: 'eighteen',
     19: 'nineteen'
 };

 const dozens = {
     20: 'twenty',
     30: 'thirty',
     40: 'forty',
     50: 'fifty',
     60: 'sixty',
     70: 'seventy',
     80: 'eighty',
     90: 'ninety',
     2: 'twenty',
     3: 'thirty',
     4: 'forty',
     5: 'fifty',
     6: 'sixty',
     7: 'seventy',
     8: 'eighty',
     9: 'ninety'
 }

 const firstChar = Number(String(number)[0]);
 const secondChar = Number(String(number)[1]);
 const thirdChar = Number(String(number)[2]);
 const substrChar = Number(String(number).substring(1));

 if (number === 0) {
     return 'zero';
 }
 if (number < 10) {
     return units[number];
 }
 if (number < 20) {
    return teens[number];
 }
 if (substrChar === 10) {
    return units[firstChar] + ' ' + 'hundred' + ' ' + 'ten';
}
 if (String(number).length === 2 && String(number)[1] === '0') {
    return dozens[number];
 }

 if (String(number).length === 3 && String(number)[1] === '0' && String(number)[2] === '0') {
    return units[firstChar] + ' ' + 'hundred';
 }
 if (String(number).length === 3 && String(number)[2] === '0') {
    return units[firstChar] + ' ' + 'hundred' + ' ' + dozens[secondChar];
 }
 if (String(number).length === 3 && substrChar > 10 && substrChar < 20) {
    return units[firstChar] + ' ' + 'hundred' + ' ' + teens[substrChar];
 }


 if (String(number).length === 2) {
    return dozens[firstChar] + ' ' + units[secondChar];
 }
 if (String(number).length === 3) {
     if (secondChar === 0) {
         return units[firstChar] + ' ' + 'hundred' + ' ' + units[thirdChar];
     }
    return units[firstChar] + ' ' + 'hundred' + ' ' + dozens[secondChar] + ' ' + units[thirdChar];
 }
};
