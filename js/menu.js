const hamburguerIcon = document.querySelector('.nav__hamburguer')
const navOverlay = document.querySelector('.nav__overlay')

hamburguerIcon.addEventListener('click',  () => {
    hamburguerIcon.classList.toggle('nav__hamburguer--open')
    navOverlay.classList.toggle('nav__overlay--show')
})

navOverlay.addEventListener('click', (e) => {
    e.preventDefault()
    const currentElement = e.target
    if( isActive(currentElement, 'nav__parent') ){
        const subMenu = currentElement.parentElement.children[1]// ul con la clase nav__inner
        if(window.innerWidth < 768){
            //si submenu tiene un height de 0, significa que no se muestras por lo tanto hay que darle un minimo
            //para mostrar su contenido, que son los li
            const height = subMenu.clientHeight == 0 ? subMenu.scrollHeight : 0
            subMenu.style.height = `${height}px`

        } else {

        }
    }
})

const isActive = (element, string) => {
    return element.classList.value.includes(string)
}