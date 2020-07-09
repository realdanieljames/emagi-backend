
// const symbol = require ('./emagi-symbols')


const randomElement = function (arr){
    let randomArray =[]
    let random = Math.floor((Math.random() * arr.length) + 0); 
    randomArray.push(random)
    return arr[random]
}


module.exports = randomElement