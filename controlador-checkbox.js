const checkboxs = document.querySelectorAll('.checkbox')

checkboxs.forEach(element => {
    element.addEventListener('click', () => {
        console.log('cl')
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        } else {
            element.classList.add('active')
        }
    })
})

