//q1
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//q2
const findMin = (...args) => Math.min(...args)

//q3
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//q4
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

//q# slice and dice
//had to reference the solutions page a bit as I worked through these, but got the hang of it as I went along
//1
const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

//2
const extend = (array1, array2) => {
  return [...array1, ...array2];
}

//3
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}

//4
const removeKey = (obj, key) => {
  let newObj = { ...obj }
  delete newObj[key]
  return newObj;
}

//5
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}

//6
const update = (obj, key, val) => {
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}