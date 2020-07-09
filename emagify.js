const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');



const emagify = function (string) {
    let transformedArray = [];

    for (word of string) {
        let emojiIndex = words.indexOf(word)
        let emoji = symbols[emojiIndex]


        if (!words.includes(word)) {
            transformedArray.push(word)
        }
        if (words.includes(word)) {
            transformedArray.push(emoji)
        }
    }
    return transformedArray
}




module.exports = emagify