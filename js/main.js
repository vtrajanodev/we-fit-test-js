const menu = document.getElementsByTagName("div")[3]
const header = document.querySelector(".jumbotron")
const firstButton = document.getElementsByTagName("a")[0]
const secondButtonOfCardsGroup = document.getElementsByTagName("a")[2]
const list = document.querySelector(".list-group")
const firstItemList = document.getElementsByTagName("li")[0]

const newItemFour = document.createElement("li")
const textItemFour = document.createTextNode("Quarto item")

const newItemFive = document.createElement("li")
const textItemFive = document.createTextNode("Quinto item")



const changeHtmlDOM = () => {
  menu.classList.replace('btn-group-vertical' , "btn-group-horizontal")
  header.classList.add('text-right', 'bg-secondary', 'text-light')
  firstButton.classList.replace('btn-primary', 'btn-success')
  secondButtonOfCardsGroup.classList.replace('btn-primary', 'btn-success')


  firstItemList.classList.remove('active')

  newItemFour.appendChild(textItemFour)
  newItemFour.setAttribute('class', 'list-group-item')
  newItemFour.classList.add('active')
  list.appendChild(newItemFour)
  

  newItemFive.appendChild(textItemFive)
  newItemFive.setAttribute('class', 'list-group-item')
  list.appendChild(newItemFive)

  console.log(firstItemList)
}


window.onload = changeHtmlDOM()



  