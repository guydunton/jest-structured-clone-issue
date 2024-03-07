# Jest structured clone issue repro

This shows an issue with `structuredClone` when running with Jest.

The core or the issue is the following code:

```javascript
const origDate = new Date();
const copyDate = structuredClone(origDate);

const isOrigDate = origDate instanceof Date;
const isCopyDate = copyDate instanceof Date;

console.log('origDate', origDate instanceof Date);
console.log('cloneDate', cloneDate instanceof Date);
```

When running using jest the result is that the 2 objects are not the same. With just node they are the same.

## To replicate issue

When running the code with `npm run start` the output is:

```
origDate true
cloneDate true
```

When running under jest (`npm run test`) the output is:

```
    Expected: true
    Received: false

       6 |   const isCopyDate = copyDate instanceof Date;
       7 |
    >  8 |   expect(isCopyDate).toBe(isOrigDate);
         |                      ^
       9 | });
      10 |

      at Object.toBe (main.test.js:8:22)
```
