
let btn = document.querySelector('button')


btn.addEventListener('click', () => {
    console.log('hello');
    btn.disabled = true


    let time = 30


    let interval = setInterval(() => {
        if (time > 0) {
            document.querySelector('p').innerHTML = ``
            document.querySelector('p').textContent = `${time}`
            time--
        } else {
            clearInterval(interval)
            btn.disabled = false
            document.querySelector('p').innerHTML = ``
        }
    }, 1000)


})