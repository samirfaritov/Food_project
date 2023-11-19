let modelBtn = document.querySelectorAll('[data-modal]'),
modal = document.querySelector('.modal'),
closeBtn = document.querySelector('[data-close]');

modelBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show')
        modal.classList.add('fade')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    })
})

closeBtn.addEventListener('click', () => {
    modal.classList.add('hide')
    document.body.style.overflow = ''
    modal.classList.remove('show')
})

modal.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target === modal) {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }
})

let tabContents = document.querySelectorAll('.tabcontent'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabHeaderParent = document.querySelector('.tabheader__items');

    function hideTabs() {
        tabContents.forEach(tab => {
            tab.classList.add('hide')
            tab.classList.remove('show', 'fade')
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTab(i) {
        tabContents[i].classList.add('show', 'fade')
        tabContents[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabs()
    showTab(0)
    
    tabHeaderParent.addEventListener('click', (e) => {
        let target = e.target
        
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, index) => {
                if (target === item) {
                    
                    hideTabs()
                    showTab(index)
                
            }
        })
    }
})

let offer = document.querySelector('.offer__slider-prev')
let current = document.querySelector('#current')
let total = document.querySelector('#total')
let next = document.querySelector('.offer__slider-next')
let img = document.querySelectorAll('.offer__slide')



function click() {
    img.forEach(item => {
        item.classList.add('hide')
        item.classList.remove('show', 'fade')
        
    })
}




let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
}

let inps = document.querySelectorAll('.modal__input')
let form = document.querySelector('.order__form')


inps.forEach(inp => {
    inp.onkeyup = () => {
        console.log(
            patterns[inp.name].test(inp.value)
            );
            if (patterns[inp.name].test(inp.value)) {
                inp.parentElement.classList.remove('errorField')
            } else {
                inp.parentElement.classList.add('errorField')
        }
    }
})


form.onsubmit = (e) => {
    e.preventDefault()

    let error = false
    inps.forEach(inp => {
        if (inp.parentElement.classList.contains('errorField') || inp.value.length === 0 && inp.parentElement.classList.contains('required')) {
            inp.parentElement.classList.add('errorField')
            error = true
        }
    })
    if (error) {
        // alert('Xatto')
    } else {
        submit()
    }
    
    function submit() {
        let user = {}
        let fm = new FormData(form)
        fm.forEach((value, key) => {
            user[key] = value
        })
    inps.forEach(inp => inp.value === '')
        console.log(user);
    }
}


// inps.forEach(inp => {
//     inp.onkeyup = () => {
//         console.log(
//             patterns[inp.phone].test(inp.phone)
//             );
//             if (patterns[inp.phone].test(inp.value)) {
//                 inp.parentElement.classList.remove('errorField')
//             } else {
//                 inp.parentElement.classList.add('errorField')
//         }
//     }
// })


// form.onsubmit = (e) => {
//     e.preventDefault()

//     let error = false
//     inps.forEach(inp => {
//         if (inp.parentElement.classList.contains('errorField') || inp.value.length === 0 && inp.parentElement.classList.contains('required')) {
//             inp.parentElement.classList.add('errorField')
//             error = true
//         }
//     })
//     if (error) {
//         // alert('Xatto')
//     } else {
//         submit()
//     }
    
//     function submit() {
//         let user = {}
//         let fm = new FormData(form)
//         fm.forEach((value, key) => {
//             user[key] = value
//         })
//     inps.forEach(inp => inp.value === '')
//         console.log(user);
//     }
// }