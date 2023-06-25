/*
const main = document.getElementById("main")

const mainClass = document.querySelector(".main-cont")

const mainClassAll = document.querySelectorAll(".main-cont")
const arr = [...mainClassAll]
const arr1 = Array.from(mainClassAll)
console.log (arr)
*/


/*
const main = document.getElementById("main")
const divElem = document.createElement("div")

divElem.textContent = "Hello!"                    //положили текст в div
main.append(divElem)                               //вывели текст
divElem.style.color = 'red'                       // цвет

const divElem1 = document.createElement("div")    //создали новый div
divElem1.textContent = "Cat,"                     // присвоили текст
divElem1.classList.toggle ("cat")                  //.add присвоили класс, .remove---удаляет стиль, ---.toggle(если нет-присоединяет, если есть удаляет)
main.prepend(divElem1)                            //вывели


const input = document.createElement('input')
input.main = "input1"
input.type = "checkbox"

main.append(input)

const label = document.createElement("label")
const divInputLabel = document.createElement("div")

divInputLabel.append(input)
divInputLabel.append(label)
label.textContent = "Cdxvc rdfx thybnui"

main.append(divInputLabel)

setInterval(() => {
    divElem.classList.toggle("cat")
}, 1000)


setInterval(() => {
    divElem.classList.toggle("cat")
}, 1500)
*/










/////////////26/.04/2023//////////////////////////////////////////////////


const main = document.getElementById("main")

const cardCont = document.getElementById("main")

cardCont.classList.add('card-cont')

const movie = [{
    title: 'robocop',
    genre: "action",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAyOTUzMTcxN15BMl5BanBnXkFtZTgwMjkyOTc1MDE@._V1_FMjpg_UX1000_.jpg",
},
{
    title: 'robocop',
    genre: "action",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAyOTUzMTcxN15BMl5BanBnXkFtZTgwMjkyOTc1MDE@._V1_FMjpg_UX1000_.jpg",
},
{
    title: 'robocop',
    genre: "action",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAyOTUzMTcxN15BMl5BanBnXkFtZTgwMjkyOTc1MDE@._V1_FMjpg_UX1000_.jpg",
},
{
    title: 'robocop',
    genre: "action",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAyOTUzMTcxN15BMl5BanBnXkFtZTgwMjkyOTc1MDE@._V1_FMjpg_UX1000_.jpg",
},
{
    title: 'robocop',
    genre: "action",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAyOTUzMTcxN15BMl5BanBnXkFtZTgwMjkyOTc1MDE@._V1_FMjpg_UX1000_.jpg",
},
{
    title: 'robocop',
    genre: "action",
    poster: "https://m.media-amazon.com/images/M/MV5BMjAyOTUzMTcxN15BMl5BanBnXkFtZTgwMjkyOTc1MDE@._V1_FMjpg_UX1000_.jpg",
}]


main.classList.add("main-header")

movie.forEach(i => {
const card = document.createElement('div')
const titleCard = document.createElement('p')
const genreCard = document.createElement('p')
const posterCard = document.createElement('img')

titleCard.textContent = i.title
genreCard.textContent = i.genre
posterCard.src = i.poster
posterCard.width= "100"
card.classList.add('card')


card.append(titleCard, genreCard, posterCard)
cardCont.append(card)
}


)


btnFilterByHorror.addEventListener('click', handleHorror())

sortByName.addEventListener('click',
handleSortByName)

function handleSortByName (){
arr.filter(({genre})) => genre === "Horror")
main.innerHTML = ""
getBooks(arr)
}
*/