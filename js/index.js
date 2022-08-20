import { Router } from './router.js'
const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe.html', '/pages/universe.html')
router.add('/exploration.html', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.router = () => router.route()

const home = document.querySelector('#home')
const universe = document.querySelector('#universe')
const exploration = document.querySelector('#exploration')
const pageChange = document.querySelector('#pageChange')

function removeNavSelect() {
  home.classList.remove('select')
  universe.classList.remove('select')
  exploration.classList.remove('select')
}

home.addEventListener('click', () => {
  removeNavSelect()
  home.classList.add('select')
})

universe.addEventListener('click', () => {
  removeNavSelect()
  universe.classList.add('select')
})

exploration.addEventListener('click', () => {
  removeNavSelect()
  exploration.classList.add('select')
})

pageChange.addEventListener('click', () => {
  removeNavSelect()
  universe.classList.add('select')
})
