/*
const arr = [1,2,1,3,1]

const uniqArr = [...new Set (arr)]
console.log(uniqArr)

*/


const main = document.getElementById('main')    ///Возвращает ссылку на элемент по его идентификатору 

function getBooks(arr) {

  let arrFilter = [...arr]


  arr.forEach(i => {
    const card = document.createElement('div')              // создали Div
    const titleCard = document.createElement('p')           // создали текстовый абзац
    const genreCard = document.createElement('p')          // создали текстовый абзац
    const posterCard = document.createElement('img')      // создали картинку
    const btnDelete = document.createElement('button')   // создали кнопку 

    titleCard.textContent = i.name           //.textContent позволяет получить/установить текстовое содержимое
    genreCard.textContent = i.genre          //.textContent позволяет получить/установить текстовое содержимое
    posterCard.src = i.imageUrl              //.src позволяет получить/установить текстовое содержимое
    posterCard.width = '100'              //.width позволяет получить/установить ширину
    card.classList.add('card')              //. classList.add это добавили класс (.remove --- удалили)
    btnDelete.textContent = 'delete'         //.textContent позволяет получить/установить текстовое содержимое

    function addedColor() {
      card.classList.toggle('card-color')  //Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть.
    }

    card.addEventListener('click', addedColor)  // присоединяет обработчик события к card



    function handleDelete() {
      card.remove()
    }

    btnDelete.addEventListener('click', handleDelete)

    card.append(titleCard, genreCard, posterCard, btnDelete)
    main.append(card)

  })

  const sortByName = document.createElement('button')
  sortByName.textContent = 'sort by name'
  const btnFilterByHorror = document.createElement('button')
  btnFilterByHorror.textContent = "filter by horror"
  const btnGetAll = document.createElement('button')
  btnGetAll.textContent = "All books"


  const search = document.createElement('input')
  sortByName.textContent = ''


  main.prepend(sortByName, btnFilterByHorror, btnGetAll, search)



  function handleSearch(e) {
    arrFilter = arr.filter(i => i.name.toLowerCase().includes(e.target.value.toLowerCase()))
    main.innerHTML = "";  //считать или изменить HTML-содержимое элемента
    getBooks(arrFilter)
  }


  search.addEventListener('change', handleSearch)









  function handleSortByName() {
    arr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
    main.innerHTML = ""
    getBooks(arr)
  }

  sortByName.addEventListener('click',
    handleSortByName)


  function handleHorror() {
    arrFilter = arr.filter(({ genre }) => genre === "Horror")
    main.innerHTML = ""
    getBooks(arrFilter)
  }
  btnFilterByHorror.addEventListener('click', handleHorror)


  function handleAllBooks() {
    main.innerHTML = ""
    getFetch(getBooks)
  }
  btnGetAll.addEventListener('click', handleAllBooks)

}


function getFetch(arr) {
  fetch('https://my-json-server.typicode.com/DimaVnuk/db-bookstore/books')
    .then(res => res.json())
    .then(data => arr(data))
}


function handleSortByName() {
  arr.filter(({ genre }) => genre === "Horror")
  main.innerHTML = ""
  getBooks(arr)
}


getFetch(getBooks)

const inp = document.getElementById('inp')
const inp1 = document.getElementById('error')

function testChange(e) {
  if (e.target.value.length > 3) {
    error.innerHTML = "< 3"
    error.style.color = "red"
    inp.style.border = "5px solid red"
  } else {
    error.innerHTML = ""
    error.style.color = ""
    input.style.border = ""

  }
  console.log(e.target.value)
}



//  inp.addEventListener('blur', testChange)  

inp.addEventListener('input', testChange)  /// навести фокус на нажимаемый объект

const link = document.getElementById('link')

function testDefault(e) {
  /*e.preventDefault()*/   /// отключить ссылку, чтобы не переходила
}

link.addEventListener('click', testDefault)




fetch ('https://rickandmortyapi.com/api/character')
.then(res => res.json())
.then(data => getRickAndMorty(data.results))


function getRickAndMorty(arr){
return arr.forEach(i=> `<div>${i/name}</div>`)
}


const main1 = document.getElementById('main1')
function getRickAndMorty(arr){
  main1.innerHTML = arr.map(i=> `<div>${i.name}</div>`).join('')
}








/// Краткая запись
/*
function createInput(type,  value) {
  const input = document.createElement('input')
  input.type = type
  input.value = value
  main.append(input)
}

createInput('text','value1')
createInput('checkbox','value2')
createInput('radio','value3')
*/





/*
const arr=[1,2,3]

const arrReverse = arr.reverse()
console.log(arr)
console.log(arrReverse)
*/




/*
const arr=[1,2,3]

const arrReverse = arr.toReversed()
console.log(arr)
console.log(arrReverse)
*/


/*
const arr = [3, 2, 1]

const arrReverse = arr.toSorted()
console.log(arr)
console.log(arrReverse)
*/



//Показывает есть ли элемент, содержится в массиве или нет
/*
const arr=[1,2,3]
console.log(arr.includes(2))
*/











/*
const obj = {
  a: 1,
  b: 2
}
const { a, b } = obj
console.log(a)
*/



