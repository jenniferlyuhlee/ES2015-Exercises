//Rest/Spread Operator Exercises

/*ES5 Function
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
*/

//ES2015 Function
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);




//findMin
const findMin = (...vals) => Math.min(...vals);

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg*2)];

//Slice and Dice!
//function removeRandom(items)
const removeRandom = (items) => [...items.splice(Math.floor(Math.random()*items.length), 1)];

//function extend (array1, array2)
const extend = (array1, array2) => [...array1, ...array2];

//function addKeyVal(obj, key, val)
const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

//function removeKey
const removeKey = (obj, key) => {
    const updatedObj = {...obj};
    delete updatedObj[key];
    return updatedObj;
}

//function combine(obj1, obj2)
const combine = (obj1, obj2) => ({...obj1, ...obj2});

//function update (obj, key, val)
const update = (obj, key, val) => ({...obj, [key]: val});
