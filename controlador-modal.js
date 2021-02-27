const modals = document.querySelectorAll('.modal-configs')

const btnsFecharModal = document.querySelectorAll('.btnFecharModal')

function abrirModalConfig (idModal) {
    modals.forEach(element => {
        element.classList.remove('active')
    });
    modals[idModal].classList.add('active')
}

btnsFecharModal.forEach(element => {
    element.addEventListener('click', () => {
        modals.forEach(element => {
            element.classList.remove('active')
        });
    })
});

document.querySelector('#inputModalTelefone').values =  document.querySelector('#conteudoInputModalTelefone').innerTEXT

