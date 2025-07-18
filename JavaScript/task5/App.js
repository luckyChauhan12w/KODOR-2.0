let commentsInp = document.querySelector('input')

let comments = []

function pushDataFromInput() {
    comments.push(commentsInp.value)
    console.log(comments);
    
}

document.querySelector('#btn').addEventListener('click', () => {
    pushDataFromInput()

})