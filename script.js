// mode

document.addEventListener('DOMContentLoaded', () => {
    const light = document.querySelector('.light')
    const dark = document.querySelector('.dark')
    const body = document.querySelector('body')

    const mode = localStorage.getItem('mode')

    if (mode === 'dark') {
        body.classList.add('dark-mode')
        light.classList.remove('hidden')
        dark.classList.add('hidden')
    } else {
        body.classList.remove('dark-mode')
        light.classList.add('hidden')
        dark.classList.remove('hidden')
    }

    light.addEventListener('click', () => {
        light.classList.add('hidden')
        dark.classList.remove('hidden')
        body.classList.remove('dark-mode')
        localStorage.setItem('mode', 'light')
    })

    dark.addEventListener('click', () => {
        light.classList.remove('hidden')
        dark.classList.add('hidden')
        body.classList.add('dark-mode')
        localStorage.setItem('mode', 'dark')
    })
})

// overlay

let overlay = document.querySelector('.overlay')

function Loader(load){
    if(load){
        overlay.classList.remove('hidden')
    }else{
        overlay.classList.add('hidden')
    }
}

// request

function getData(){
    return new Promise((resolve, reject)=>{
        let request = new XMLHttpRequest()

        request.addEventListener('readystatechange', ()=>{
            if(request.readyState < 4){
                Loader(true)
            } else if(request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText)
                resolve(data.results)
                Loader(false)
            }else if(request.readyState === 4){
                reject('Malumot kelmadi !!!')
                Loader(false)
            }
        })

        request.open('GET', 'https://randomuser.me/api/?results=9')
        request.send()
    })
}

function reload() {
    getData().then((data) => {
        update(data)
    }).catch((error) => {
        console.log(error)
    })
}

document.addEventListener('DOMContentLoaded', reload)