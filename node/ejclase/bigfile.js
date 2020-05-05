const fs = require('fs');

console.time('syn');
const data = fs.readFileSync('/Users/rodriguezmaria/Desktop/SIE/Control_Gastos_Vehiculos/Alfredo.xlsx');
console.timeEnd('syn');

console.time('callback');
console.time('asyn');
fs.readFile('/Users/rodriguezmaria/Desktop/SIE/Control_Gastos_Vehiculos/Alfredo.xlsx', (err, data) => { 
    console.timeLog('callback');
    if (err)throw err;
});
console.timeEnd('asyn');