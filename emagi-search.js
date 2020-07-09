

const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');



const emagiSearch = function(searchTerm){
    const results = [];
    for (let i = 0; i < words.length; i++){
        if (words[i].includes(searchTerm)) {
            results.push(symbols[i]);
        }
    }
    return results
}





module.exports = emagiSearch