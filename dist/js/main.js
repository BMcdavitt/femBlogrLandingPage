const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamMiddle')
const hamBefore = document.querySelector('.hamBefore')
const hamAfter = document.querySelector('.hamAfter')
const hamburgerArea = document.querySelector('.hamburgerArea')

const product = document.getElementById('menuCategory_Product')
const productItems = document.getElementById('items_product')
const productArrow = document.getElementById('dropdown_Product')
const company = document.getElementById('menuCategory_Company')
const companyItems = document.getElementById('items_company')
const companyArrow = document.getElementById('dropdown_Company')
const connect = document.getElementById('menuCategory_Connect')
const connectItems = document.getElementById('items_connect')
const connectArrow = document.getElementById('dropdown_Connect')

let menuVisible = false
let sectionExpanded = 'none'
let sectionArrowExpanded = 'none'

document.addEventListener('click', closeMenus)
hamburger.addEventListener('click', toggleMenu)
hamBefore.addEventListener('click', toggleMenu)
hamAfter.addEventListener('click', toggleMenu)
hamburgerArea.addEventListener('click', toggleMenu)

product.addEventListener('click', () => {
  expandMenu(productItems, productArrow)
})
company.addEventListener('click', () => {
  expandMenu(companyItems, companyArrow)
})
connect.addEventListener('click', () => {
  expandMenu(connectItems, connectArrow)
})

function closeMenus() {

  console.log('he')

  if (
    !menu.contains(event.target) &&
    !hamburgerArea.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    toggleMenu()
    closeOptions()
  }
}

function toggleMenu() {
  if (menuVisible === false) {
    menuVisible = true
    menu.style.animation = 'slideDown 1s forwards'
    hamburger.style.animation = 'fadeout 0.5s forwards'
    hamBefore.style.animation = 'slantDown 0.5s forwards'
    hamAfter.style.animation = 'slantUp 0.5s forwards'
  } else {
    menuVisible = false
    menu.style.animation = 'slideUp 1s forwards'
    hamburger.style.animation = 'fadein 0.5s forwards'
    hamBefore.style.animation = 'slantDownBack 0.5s forwards'
    hamAfter.style.animation = 'slantUpBack 0.5s forwards'
    closeOptions()
  }
}

function closeOptions() {
  if (sectionExpanded !== 'none') {
    sectionExpanded.style.animation = 'collapse 1s forwards'
    sectionArrowExpanded.style.animation = 'unrotateArrow 1s forwards'
    sectionExpanded = 'none'
  }
}

function expandMenu(section, sectionArrow) {
  if (sectionExpanded === section) {
    section.style.animation = 'collapse 1s forwards'
    sectionArrow.style.animation = 'unrotateArrow .25s forwards'
    sectionExpanded = 'none'
  } else {
    if (sectionExpanded !== 'none') {
      sectionExpanded.style.animation = 'collapse 1s forwards'
      sectionArrowExpanded.style.animation = 'unrotateArrow .25s forwards'
    }

    sectionExpanded = section
    sectionArrowExpanded = sectionArrow
    section.style.animation = 'expand 1s forwards'
    sectionArrow.style.animation = 'rotateArrow .25s forwards'
  }
}
