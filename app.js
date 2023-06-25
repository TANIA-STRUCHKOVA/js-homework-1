//string 'hello' "hello" `hello`
// bigInt
// Simbol
// Object [], {}
// undefined
// null
// boolean true false
// Var let const
/* let sayHello='hello'

console.log(`${sayHello} Dima`)
console.log(Object.is(NaN, NaN))
console.log(0 / -3)

// isNaN ()

// || &&
console.log(null==0)

//if(){

const num = 1
num = 2
 */
/* if(num === 2){
    console.log(true)
} else{
    console.log(false)
} else if(num===3){
 console.log('hello')
} */
/* alert('hello?')

const sayHello = prompt('hello?')
console.log(+sayHello)

if(isNaN (sayHello)){
    console.log('kikik')
} */
/*
let num2=20
console.log(num2.toString()) */
/* const getNumber = +prompt ('enter your number') */
/* if(getNumber % 2 === 0) {
alert('even')

} else{
alert('odd')
}
 */
/* getNumber % 2===0 ? alert ('even') : alert ('odd')


switch(getNumber) {
    case 10:
    console.log('10');
    break
    case 20:
    console.log('20');
    break
    default:
    console.log('default');
} */
/*
console.log(false || 1 || false)

console.log(null, false, 0, '', undefined, NaN) /*отрицательные значения*/
/*
const getAdmin = confirm('Admin?')
console.log(getAdmin)

if(getAdmin === true) {
    const getPassword=prompt
    ('enter password')

    if(getPassword==='admin'){
        alert('admin')
    }
    else {
        alert('bye')
    }
} */
/*
const getAge = prompt ('Your age?')

if(getAge <19 && getAge >=0) {
alert('young')
} else if(getAge >18 && getAge <51) {
    alert ('middle')
} else if (getAge >50 && getAge <101){
    alert ('old')
} else if (getAge <0 || getAge >100){
    alert ('error')
} */
//Циклы (while, do while, for)
/* let num = 0;
while (num < 5) {
    num++
    console.log(num)

} */
/* let num = 0;
do {
    num++
    console.log(num)
} while (num<3) */
/* let i = 0

for (Let i = 0, i < 5; i++) {
console.log(i)
if (i===2){
    break
}
} */
/*
for (let i=0; i<5; i ++){
    if (i % 2 === 0)
    console.log('${i} - even')
    } else {console.log ('${i}' - 'odd')
    }
 */
/*
    let str = "Hello"

    console.log(str.length)

    for(let i=0; i<str.length; i++){
        console.log(str[i])
    }
 */
/* let str = "abbbbbaabab"
let countA = 0
let countB = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        countA++
    }
    else if (str[i] === 'b') {
        countB++
    }
}
if (countA > countB) {
    console.log('awin')
} else if (countA < countB) {
    console.log('b win')
} else {
    console.log('eqal')
} */
// Функции 
//сама функция
/* function getSum  (a,b) {
    return a+b
} */
// вызвать функцию
/* console.log(getSum(1,2)) */
//или
/* const numUser = prompt ('sad')
function getSum() {
    return 'hello $ {numUser}'
} */
/* const getAny = function (a, b) {
    return a+b
}
console.log(getAny(1,2)) */
/*
const getAny = function (a, b) => {
    return a+b
}
/* const getAny = (a, b) => a+b */ /*  запись без слова return */
/* console.log(getAny(1,2)) */
/*
(function getSmt(){
    console.log('IIFI')
    })()
    */
/*


function getAny (age){
    if (age>18) {
        return ('18')
    }
    else {
        return '100'
    }
}

console.log (getAny (20)) */
/*
const obj = {
    name: 'Dima',
    age: 1,
    skills:
    {
        reakt: true,
        angular: false
    },
    sayHi: function () {
        return `say ${this.name}`;
    },

    sayHiArrow: () => {
        return `say ${this.name}`
    }
}
*/
/* const objCopy = {...obj} */
/* const objCopy = JSON.parse(JSON.stringify(obj)) */
/*const objCopy = structuredClone(obj)
objCopy.skills.reakt = 100
console.log(objCopy)
console.log(obj)*/
// Объекты*******************************************
/* const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
 */
//Методы строк
/* let str = 'hello hello'
console.log(str.slice(0,-1))
console.log(true+false)


console.log(str.toUpperCase())  // верхний регистр //
console.log(str.toLowerCase())  // нижний регистр
console.log(str.split('@'))     // обернуть всё в массив
console.log(str.slice(0,-1))    // отрезать часть
console.log(str.repeat(3))      // повторение чего-то
 */
/* let str = 'Hello'
function get(str){
    console.log(str.toLowerCase(1,0))
    return `say ${getStr}`
}
console.log(getStr('this.leSsoN'))

 */
/*
console.log(str.startsWith('h'))
console.log(str.sendsWith('y'))
console.log(str.replace(/h/gi, 'g'))
console.log(a1)




function getStr(str){
    let strFirst = str.toUpperCase()
    let strUpper = strFirst.slice(0, 1)
    let strSecond= strFirst.slice(1, str.length)
    let result = strUpper+strSecond.toLowerCase()
    return result
}
console.log (getStr ('leSsoN')) */
/*
const movies = [
    {
        title: 'rerminator',
        genre: 'action',
        date: '12.03.1994',
        img: 'htpps://link'

    },

    {
        title: 'robocop',
        genre: 'action',
        date: '12.03.1991',
        img: 'htpps://link2'

    },
]
 */
/*
function customRepeat(str, n) {
    let strRepeat = ''
    for (let i=0; i<n; i++) {
        strRepeat += str
    }
    return strRepeat
}
console.log (customRepeat('string', 3))
*/
/*

let str = 'DString'
console.log(str.split('').join('/?'))
*/
/*

let str = 'DString'
function foo(str){
    const newStr = str.split('')
    const newStr1 = newStr.join('-')

    return str.split
   /* return str.split('').join('-')
}

*/
/*
let str = '            string                      '
console.log (str.trim())  // убрать пробелы сначала или с конца строки.Внутри слова пробелы не убирает

*/
/*
const arr = [1, 2, 3, 10, 100]
/* const arr2 = arr.forEach((i, index) => console.log(index))  // перебрать каждое значение и расставить по порядку
console.log(index)  */
/*
const arr3 = arr.map(i => console.log(i))
console.log(arr3)
*/
// Задача (вывести в консоль сумму =6)
/*
const arr = [2, 2, 2]
function sumNum (arrNum) {
    let sum = 0;
    for (let i=0; i < arrNum.length; i++){
    sum += arrNum[i]
}
return sum
}
console.log (sumNum(arr))

*/
/*
const arrNew = [1,2,3]
arrNew[0] = 10000
arrNew[20] = 5

console.log(arrNew)
*/
/*
const obj = {
    a:1,
    b:3
}
obj.hello= 'hello'
console.log (arrNew)


const arrNew = [1,2,3]



const a=1
delete a
console.log (a)
*/
/*
const arr=[2,2,2]

function sumNumMap(arrNum){
    let count = 0
    arrNum.map((num)) => count += num)
    return count
}

console.log (sumNumMap([2,2,2]))
*/
// Методы 
/*
const arrStr = ['cat', 'dog', 'bee']
arrStr.push('cow')                    // добавляет что-то
console.log(arrStr)

*/
/*
const arrStr = ['cat', 'dog', 'bee']
arrStr.pop('cow')                    // удаляет что-то и сохраняет
console.log(arrStr)
*/
/*
const arrStr = ['cat', 'dog', 'bee']
arrStr.unshift('bird')                    // добавляет что-то
console.log(arrStr)
*/
/*

const arrStr = ['cat', 'dog', 'bee']
arrStr.shift('bird')                    // удаляет
console.log(arrStr)

*/
/*
function getEmail (str) {
 const arr=str.split('@'.t())
    return (str.slice(25))
}
console.log(getEmail ('dima111@gmail.com@mail.ru@123'))

*/
/*
const arr = [1, 2, 3, 4, 5, 0, undefined]
const arr2 = arr.filter(i => i>2)

console.log(arr2)


let a = false
console,log(Boolean(a))
*/
//Метод фильтр
/*
const arr = [1, 2, 3, 4, 5, 0, undefined]
const arr2=arr.filter(i => i !== 0 && i !== undefined)
console.log(arr2)
*/
//Метод сорт (по возрастанию - а-б или на уменьшение б-а)
/*
const arr = [1, 2, 3]
const arr2=arr.sort((a,b) => b-a)
console.log(arr2)
*/
// метод сорт со строками
/*
const arr = ['yasd', 'sad', 'asd']
const arr2=arr.sort((a,b) => a>b ? 1 : -1)
console.log(arr2)
*/
//метод reduse (к нему принимается 2 аргумента)
/*
const arr = [1,2,3]
const arr2=arr.reduce ((a,b) =>
{
return a+b
}, 0)
console.log(arr2)
*/
/*
const arr = [1,2,3]
const arr2=arr.reduce ((a,b) =>{
    if (b%2===0){
    a.push(b)
}
return a
}, [])

console.log(arr2)
*/
//Метод 
/*
const arr = [1, 2, 3]
const arr2 = arr.reverse()
*/
/*
const arr = [1, 3, 10]
function customReverse(arrAny) {
    for (let i=arrAny.length -1; i>=0; i--)
{
    resizeBy.push(arrAny[i])
}
return res
}
console.log(customReverse([1, 3, 10]))
*/
// Метод SOME 
/*
const arr = [1, 3, 10]
const arr2 = arr.some(i =>i === 12)
console.log(arr2)
*/
// Метод, чтобы всё в массиве соответствовало условию (если хотя бы 1 несоответствует будет фолс)
/*
const arr = [2, 2, 2]
const arr2 = arr.every(i => i === 2)
console.log(arr2)
*/
//Метод concat
/*
const arr = [2, 2, 1]
const arrNew = [2, 3, 4]
const arr2 = arr.concat(arrNew)
console.log(arr2)
*/
//Объединить несколько массивов
/*
const arr = [2, 2, 1]
const arrNew = [2, 3, 4]
const arr2 = [...arr, ...arrNew]
console.log(arr2)
*/
//Сколько двоек в массиве
/*
const arr = [2, 2, 2, 2, 2, 1]
for(let item of arr) {
    console.log(item)
}
*/
// Вывести 1,2,3
/*
const obj = {
    a:1,
    b:2,
    c:3
}
for(let item in obj){
    console.log(obj[item])
}
*/
//Методы объектов
/*
const obj = {
    a:1,
    b:2,
    c:3
}
console.log(Object.values(obj))
*/
//ключ  возвращает 
/*
const obj = {
    a:1,
    b:2,
    c:3
}
console.log(Object.c(obj))
*/
//и ключ и значение возвращает
/*
const obj = {
    a:1,
    b:2,
    c:3
}
console.log(Object.entries(obj))
*/
//Расскрыть массив
/*
const arr = [[[1, 2, 3]]]
console.log(arr.flat(2))
*/
/*
const arr = [[0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1]]
function genOne(anyArr) {
    return anyArr.flat().filter(Boolean).length
}
console.log(getOne(arr))
*/
//
/*
try{
    jujuki
}
 catch (err) {
    alert (err)
 }

throw new Error ('sad(((')
*/
//
/*
console.log(Math.abs(1 - 3))
console.log(Math.random()-0.5)   // возвращает случайные значения до 1
console.log(Math.min(1,2,3,5))    // берет минимальное число
console.log(Math.max(...[1,2,3,5]))    // берет максимальное число
console.log(Math.round(1,5))    // округляет дробное число
console.log(Math.floor(1,5))    // округляет дробное число в меньшую сторону
console.log(Math.ceil(1,5))    // округляет дробное число в большую сторону
console.log(Math.sqrt(4))    //

*/
//fill заполняет массив, в () => чем хотим заполнить вводим
/*
const arr = new Array(5).fill(undefined)
console.log(arr)
*/




//Проверить является ли массив массивом 
/*
const arr = new Array(5).fill(undefined)
console.log(Array.isArray(arr))
*/




//ЗАДАЧА 1
/*
const boocks = [
    {
    title: 'Fight club',
    date: '1997',
    genre: 'action',
},
    {
    title: 'Hunger',
    date: '1993',
    genre: 'biography',
},
{
    title: 'Top',
    date: '2000',
    genre: 'romance',
},
]
const sortBooks = boocks.sort((a,b) => a.title > b.title ? 1 : -1)
boocks.sort

console.log(sortBooks)
*/








//Задача 2 (Из всего массива выбрается только с жанром "романс")
/*
const boocks = [
    {
    title: 'Fight club',
    date: '1997',
    genre: 'action',
},
    {
    title: 'Hunger',
    date: '1993',
    genre: 'biography',
},
{
    title: 'Top',
    date: '2000',
    genre: 'romance',
},
]
const sortBooks = boocks.sort((a,b) => a.title > b.title ? 1 : -1)
boocks.sort

const filtrBooks = sortBooks.filter((boocksGenre) => boocksGenre.genre === 'romance')
console.log(filtrBooks)
*/
/*
17.04.2023  ////////////////////////////////////////////////////////////////////////






// Задача с использованием цикла for, чтобы отображались только чётные числа

function getEven(arr) {
    let res = []
   for (i=0; i<arr.length; i++)
   if (arr [i] % 2=== 0) {{
    res.push(arr[i])
   }
}
return res
}
console.log(getEven([1, 2, 3, 4]))





*/
// Задача с использованием map, чтобы отображались только чётные числа
/*
function getEven(arr) {
    const res = []
    arr.map((i) => {
        if (i % 2 === 0) res.push(i)
    })
    return res
}
console.log(getEven([1, 2, 3, 4]))




*/
// Задача с использованием filter, чтобы отображались только чётные числа
/*
function getEven(arr) {
    return arr.filter(i => i % 2 === 0)
}
console.log(getEven([1, 2, 3, 4]))
*/
/*




ЗАДАЧА

function foo(str) {
    if (typeof str !== 'string') {
        return
    }
    const arr = str
        .toUpperCase()                      // все буквы стали заглавные
        .split(',')                        // разбиение строки в массив по указанному разделителю
        .map(i => i                       // map позволяет применить заданную функцию для каждого элемента массива
        .trim()[0])                      //удаляем пробелы
        .sort((a, b) => a > b ? 1 : -1) // сортируем
        .join('')                      // Обратно объединить в строку
    console.log(arr)
}
console.log(foo('Dima,Anna,Vlad'))
*/




//////////////////////////////////////////////// 19/04/2023///////////////////////////////////
//      setTimeout  --- позволяет чему-то сработать через какое-то время (через 2000 м/сек)



/*
setTimeout (() => {
console.log('done')
}, 2000)

*/



/*
setInterval (() => {
console.log ('done')
}, 1000)
*/


/*
const date = new Date().toLocaleTimeString()
console.log(date)
*/




/*
function bar(num) {
    const arr = new Array(num).fill(undefined)           /// создали массив                              
    return arr.map((_, idx) => 2 * idx + 1)              //массив заполняется чмслами вместо  "undefined"
}
console.log(bar(3))  /// [1,3,5]*/





function bar(num) {
    const arr = new Array(num).fill(undefined)           /// создали массив                              
}
console.log(bar(3))  