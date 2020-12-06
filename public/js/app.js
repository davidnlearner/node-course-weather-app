console.log('js file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    const url = 'http://localhost:3000/weather?address=' + location

    messageOne.style.color = 'black'
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""

    fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.style.color = '#7e1a1a'
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.forecast
            messageTwo.textContent = data.location
        }
    })
})
})