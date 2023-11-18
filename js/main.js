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


