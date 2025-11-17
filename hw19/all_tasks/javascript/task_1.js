// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. 
// При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

const HIGHLIGHT_CLASS_NAME = 'div_checked'

function getClickedItem(event, selector) {
  return event.target.closest(selector)
}

function removeClassFromElements(elList, className){
  for (const el of elList) {
      el.classList.remove(className)
  }
}

function highlightNextElements(el, className){
    let nextDiv = el.nextElementSibling
    while(nextDiv){
      if(nextDiv.classList.contains('hello-item')) {
        nextDiv.classList.add(className)
      }
      nextDiv = nextDiv.nextElementSibling
    }
}

const divsContainer = document.querySelector('.divs_container')
const divsList = divsContainer.children

divsContainer.addEventListener('click',(event)=>{
  const changedElement = getClickedItem(event, '.hello-item')
  if(!changedElement) return
  removeClassFromElements(divsList, HIGHLIGHT_CLASS_NAME)
    highlightNextElements(changedElement, HIGHLIGHT_CLASS_NAME)
})
