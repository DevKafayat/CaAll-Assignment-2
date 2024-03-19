const expand = document.querySelectorAll('.expand-icon')
    expand.forEach(expand => {
        expand.style.transform = 'rotate(180deg)'
        expand.addEventListener('click', function() {
            if(expand.style.transform == 'rotate(180deg)'){
                expand.style.transform = 'rotate(0deg)'
            } else {
                expand.style.transform = 'rotate(180deg)'
            }
        })
    })