/** INSERT CUSTOM JS HERE **/
export default function () {}

import triangle from '../assets/triangle.png'
import blogPattern from '../assets/blog_pattern.png'
import heroPattern from '../assets/hero_pattern.png'

const btnMobile = document.querySelector('#btn-mobile')
const media = window.matchMedia('(width < 768px)')
const navigation = document.querySelector('#navigation')
const main = document.querySelector('main')
const nav = document.querySelector('nav')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.modal__close-btn')
const openModalBtn = document.querySelector('.hero__play-btn')
const iframeDiv = document.querySelector('.modal__iframe')

const loadImages = () => {
  document.querySelector('.hero__btn-triangle').src = triangle
  document.querySelector('.blog__pattern').src = blogPattern
  document.querySelector('.hero__pattern').src = heroPattern
}

const changeNavInert = (isHidden) => {
  if (isHidden) {
    navigation.setAttribute('inert', '')
  } else {
    navigation.removeAttribute('inert')
    main.removeAttribute('inert')
  }
}

const toggleMenu = () => {
  const attr = btnMobile.getAttribute('aria-expanded')
  if (attr == 'true') {
    btnMobile.setAttribute('aria-expanded', 'false')
    changeNavInert(true)
    btnMobile.focus()
  } else {
    btnMobile.setAttribute('aria-expanded', 'true')
    main.setAttribute('inert', '')
    changeNavInert(false)
    btnMobile.focus()
  }
}

const openModal = () => {
  const iframe = document.createElement('iframe')
  iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=JBPDL0oan4VymR0l&autoplay=1&controls=1'
  iframe.setAttribute('frameborder', '0')
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
  iframe.referrerPolicy = 'strict-origin-when-cross-origin'
  iframe.setAttribute('allowfullscreen', '')

  modal.classList.add('modal_open')
  modal.removeAttribute('inert')
  iframeDiv.append(iframe)

  main.setAttribute('inert', '')
  nav.setAttribute('inert', '')
}

const closeModal = () => {
  iframeDiv.removeChild(document.querySelector('iframe'))
  modal.classList.remove('modal_open')
  modal.setAttribute('inert', '')

  main.removeAttribute('inert')
  nav.removeAttribute('inert')
}

loadImages()

changeNavInert(media.matches)

btnMobile.addEventListener('click', toggleMenu)

openModalBtn.addEventListener('click', openModal)

closeModalBtn.addEventListener('click', closeModal)

media.addEventListener('change', (e) => changeNavInert(e.matches))
