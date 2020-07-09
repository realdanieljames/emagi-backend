

const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');



const emagiSearch = function (fullWord) {
    matchingEmoji = []
    

    for (const word of words ){
        let wordsIndex = words.indexOf(fullWord)
        let emoji = symbols[wordsIndex]
        
    if (words.includes(word)) {
        matchingEmoji.push(emoji)
        
        console.log(matchingEmoji)
        console.log(fullWord)
        // console.log(word)
        // console.log(wordsIndex);
        
        
    }
    
    for (character = 0; character < fullWord.length; character++){
        if (fullWord === words.character){
            matchingEmoji.push(fullWord[character])
            console.log(character)
            }
        
        
    }
    



        return matchingEmoji
    }
}








module.exports = emagiSearch