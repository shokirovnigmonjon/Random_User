let input = document.querySelector('input')
let form = document.querySelector('form')
let refresh = document.querySelector('.btn-refresh')
let clear = document.querySelector('.btn-clear')
let ul = document.querySelector('.user-list')

// clear

clear.addEventListener('click', (e)=>{
    e.preventDefault()
    ul.innerHTML = ''
    clear.classList.add('hidden')
})

// refresh

refresh.addEventListener('click', (e)=>{
    e.preventDefault()
    reload()
    clear.classList.remove('hidden')
})

// search

input.addEventListener('input', ()=>{
    let qiymat = input.value.toLowerCase()
    let ism = document.querySelectorAll('.user-name')

    ism.forEach((item)=>{
        if(item.textContent.toLowerCase().includes(qiymat)){
            item.parentElement.classList.remove('hidden')
        }else{
            item.parentElement.classList.add('hidden')
        }
    })
})



// delete


document.addEventListener('click', (e)=>{
    if(e.target.classList[0] === 'x-btn'){
        e.target.parentElement.remove()
    }

    if(ul.children.length === 0){
        clear.classList.add('hidden')
    }
})

// user

function update(data){
    ul.innerHTML = ''
    data.forEach((item)=>{
        let {gender, name, picture, location, dob} = item
        ul.innerHTML += ` <li class="user">
                        <img src=${picture.large}><br>
                        <span class="user-name"><i class="bi bi-person-vcard"></i> - ${name.title} ${name.first} ${name.last}</span><br><br>
                        <span><i class="bi bi-card-checklist"></i> - ${dob.age} years old</span><br><br>
                        <span><i class="bi bi-geo-alt-fill"></i> - ${location.city}, ${location.country}</span><br><br>
                        <span><i class="bi bi-gender-ambiguous"></i> - ${gender}</span>
                        <button class="x-btn">X</button>
                    </li>`


    })
}