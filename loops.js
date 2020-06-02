//** for */ 
// for (let i = 0; i < 5; i ++) {
//     console.info(i);
// }




const arr = [1, 2, 5, 8, 10, 15, 18];
const newArr = [];

//** forEach */ 
arr.forEach(num => {
    newArr.push(num*num);
})
console.info(newArr);

//** map */ 
const mapArr = arr.map( num  => num)
console.log(mapArr);

//** filter */ 
const filterArr = arr.filter(num => num  % 5 == 0 )
console.log(filterArr);

//** reduce */ 
const reduceArr = arr.reduce((acc, num) => {
    return acc + num
}, 10);
console.log(reduceArr);