const origDate = new Date();
const cloneDate = structuredClone(origDate);

console.log('origDate', origDate instanceof Date);
console.log('cloneDate', cloneDate instanceof Date);
