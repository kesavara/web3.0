const path = require('path');   // node js library used to tell where the file exists.
const fs = require('fs');
const solc = require('solc');

const LotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');
//get all the code from Lotterypath. use fs.readsync
const source = fs.readFileSync(LotteryPath,'utf8'); //checking the code foolows utf8.UTF-8 is the most widely used way to represent Unicode text in web pages,
// and you should always use UTF-8 when creating your web pages and databases. But, in principle, UTF-8 is only one of the possible ways of encoding Unicode characters.

console.log(solc.compile(source,1));  //compile lottery.sol. we will get bytecode and abi
//output of above will give bytecode and abi (interface)

//we need bytecode to depoly lottery.solc
//for this, we will take only byte code from output, which is under contracts and :lottery,
console.log(solc.compile(source,1).contracts[':Lottery']); 
