const btnmains = document.querySelectorAll('.option-conteudo-menu-configs')

const mainPerfil = document.querySelector('#perfil')
const mainPrivSeg = document.querySelector('#priv-seg')
const mainSobre = document.querySelector('#sobre-pets')

const btnsVoltar = document.querySelectorAll('.seta-voltrar-configs')

const mains = [mainPerfil, mainPrivSeg, mainSobre]
window.onload = () => {
    if (window.innerWidth > 700) {
        mains[0].classList.add('active')
    }
}
btnmains.forEach(element => {
    element.addEventListener('click', () => {
        btnmains.forEach(element => {
            element.classList.remove('active')
        });
        element.classList.add('active')
        mains.forEach(element => {
            element.classList.remove('active')
        });
        switch (element) {
            case btnmains[0]:
                mains[0].classList.add('active')
                break
            case btnmains[1]:
                mains[1].classList.add('active')
                break
            case btnmains[2]:
                mains[2].classList.add('active')
                break
        }
    })
});

btnsVoltar.forEach(element => {
    element.addEventListener('click', () => {
        mains.forEach(element => {
            element.classList.remove('active')
        });
    })
});