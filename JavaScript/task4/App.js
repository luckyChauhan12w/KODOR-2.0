let file = document.querySelector('input')
let imageDiv = document.querySelector('.preview')
let dets = document.querySelector('.details')


file.addEventListener('change', (e) => {

    if ((e.target.files[0].type === 'image/jpeg' || e.target.files[0].type === 'image/png') && ((e.target.files[0].size) / (1024 * 1024)).toFixed(3) <= 2) {

        let sizep = document.createElement('p')

        sizep.textContent = `Size: ${((e.target.files[0].size) / (1024 * 1024)).toFixed(3)} MB`

        let typep = document.createElement('p')
        typep.textContent = `Type: ${e.target.files[0].type}`

        dets.append(sizep, typep)

        let url = URL.createObjectURL(e.target.files[0]);

        let img = document.createElement('img')
        img.src = url
        imageDiv.innerHTML = ''
        imageDiv.append(img)
    }

})


document.querySelector('button').addEventListener('click',()=>{
file.click()
 
})