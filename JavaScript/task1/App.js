let form = document.querySelector('form')

let title = document.querySelector('#title')
let url = document.querySelector('#url')

let bookmark = localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : []

form.addEventListener('submit', (dets) => {
    dets.preventDefault()

    let inpValue = title.value
    let urlValue = url.value

    // validate email 

    if (urlValue.startsWith("http")) {
        const obj = {
            title: inpValue,
            url: urlValue
        }

        bookmark.push(obj)

        localStorage.setItem("bookmarks", JSON.stringify(bookmark))

        location.reload();

    }
    else console.error('invalid link');

})


let savedBookmarks = JSON.parse(localStorage.getItem('bookmarks'))

savedBookmarks.forEach(e => {

    let a = document.createElement('a')
    a.href = e.url
    a.textContent = e.title
    a.target = '_blank'

    let li = document.createElement('li')
    li.append(a)

    document.querySelector('ul').append(li)
    
});



