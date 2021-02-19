// document.addEventListener('DOMContentLoaded', () => {

// })


//LESSON 1 LET AND CONST
// const a =5
// console.log(a)
// a = 6
// console.log(a)

//LESSON 2 ARROW FUNC
// function print(name){
//     console.log(name);
// }

// print('something');

// const print1 = name => {
//     console.log(name);
// }

// print1('onevar')


//CLASSES
// class master{
//     constructor(){
//         this.gender = 'male';
//     }
//     printGender(){
//         console.log(this.gender);
//     }
// }

// class person extends master{
//     constructor(){
//         super();
//         this.name = 'Max';
//         this.gender = 'female';
//     }
//     printMyName(){
//         console.log(this.name);
//     }
// }
// let per = new person();
// per.printMyName();
// per.printGender();


//ES7
// class master{
    
//     gender = 'male';
    
//     printGender = () => {
//         console.log(this.gender);
//     }
// }

// class person extends master{
    
//     name = 'Max';
//     gender = 'female';
   
//     printMyName = () => {
//         console.log(this.name);
//     }
// }
// let per = new person();
// per.printMyName();
// per.printGender();

//SPREAD
// const oldArr = [1,2,3];
// const newArr = [oldArr,4]
// console.log(newArr)

// const person = {
//     name: 'max'
// };

// const newPerson = {
//     ...person,
//     age: 28
// }

// console.log(newPerson)


//REST
// const filter = (...args) => {
//     return args.filter( arg => arg === 1 );
// }

// console.log(filter(1,2,3,1));

//DESTRUCTURING
// const numbers = [1,2,3];
// [num1, ,num3] = numbers;
// console.log(num1,num3)

//REFERENCE and PRIMITIVE
// const obj = {
//     name: 'max'
// };

// const newObj = {
// ...obj  
// };

// obj.name = 'something';
// console.log(newObj.name)

const numbers = [1,2,3];
const doubleNumArray = numbers.map( num => { 
    return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);
