const comments = document.querySelector('.comments')


function makeComment(messageFromInput) {

    const commentDiv = document.createElement("div");
    commentDiv.className = "comment p-4 mb-4";

    // User info section
    const userInfoDiv = document.createElement("div");
    userInfoDiv.className = "flex items-center mb-2";

    const usernameSpan = document.createElement("span");
    usernameSpan.className = "font-semibold text-gray-800 mr-2";
    usernameSpan.textContent = "user1";

    const timeSpan = document.createElement("span");
    timeSpan.className = "text-xs text-gray-500";
    timeSpan.textContent = "2 hours ago";

    userInfoDiv.appendChild(usernameSpan);
    userInfoDiv.appendChild(timeSpan);

    // Comment text
    const commentText = document.createElement("p");
    commentText.className = "text-gray-700 mb-2";
    commentText.textContent = `${messageFromInput}`;

    // Action buttons
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "flex space-x-4 text-sm text-gray-500";

    const replyButton = document.createElement("button");
    replyButton.className = "reply hover:underline";
    replyButton.textContent = "Reply";

    const upvoteButton = document.createElement("button");
    upvoteButton.className = "hover:underline";
    upvoteButton.textContent = "Upvote";

    const downvoteButton = document.createElement("button");
    downvoteButton.className = "hover:underline";
    downvoteButton.textContent = "Downvote";

    buttonDiv.appendChild(replyButton);
    buttonDiv.appendChild(upvoteButton);
    buttonDiv.appendChild(downvoteButton);

    // Assemble the comment
    commentDiv.appendChild(userInfoDiv);
    commentDiv.appendChild(commentText);
    commentDiv.appendChild(buttonDiv);

    // Now you can append it to the document, e.g.:
    return commentDiv

}

function makeForm() {

    const form = document.createElement("form");
    form.className = "commentBox flex items-center gap-4  mx-auto p-4 rounded-xl shadow-md";

    // Create input element
    const input = document.createElement("input");
    input.type = "text";
    input.name = "message";
    input.id = "message";
    input.placeholder = "Enter your message";
    input.className = "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

    // Create button element
    const button = document.createElement("button");
    button.type = "submit";
    button.className = "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors";
    button.textContent = "Send";

    // Append input and button to form
    form.appendChild(input);
    form.appendChild(button);

    return form
}

function attachForm(parent) {

    let form = makeForm()
    parent.appendChild(form);

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        let messageFromInput = e.target[0].value


        let comment = makeComment(messageFromInput)
        parent.removeChild(form);
        parent.appendChild(comment)
        parent.querySelector(".reply").disabled = false;

    })
}

comments.addEventListener('click', function (evt) {


    if (evt.target.classList[0] === 'reply') {
        // evt.target.disabled = true

        const form = evt.target.parentElement.parentElement.querySelector("form")

        if (form) {
            form.remove()
        }
        else {

            attachForm(evt.target.parentElement.parentElement)
        }

    } else {
        console.log('nothing here');
    }
})