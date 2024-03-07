const origDate = new Date();
const cloneDate = structuredClone(origDate);
console.log('origDate', origDate instanceof Date);   // true
console.log('cloneDate', cloneDate instanceof Date); // true
