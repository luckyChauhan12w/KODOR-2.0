let page = 1
let isLoading = false;

function fetchData() {

    if (isLoading) return
    isLoading = true

    axios(`https://dummyjson.com/users?limit=10`)  //https://dummyjson.com/users?limit=10&skip=${(page - 1) * 5}
        .then((response) => {
            let users = response.data.users
            users.forEach(user => {

                const card = document.createElement("div");
                card.className =
                    "bg-white rounded-lg shadow-md p-6 flex flex-col items-center";

                const img = document.createElement("img");
                img.className = "w-24 h-24 rounded-full mb-4";
                img.src = user.image;
                img.alt = "User Photo";
                card.appendChild(img);

                const name = document.createElement("h2");
                name.className = "text-xl font-semibold mb-2";
                name.textContent = `${user.firstName} ${user.lastName}`;
                card.appendChild(name);

                const email = document.createElement("p");
                email.className = "text-gray-600 mb-1";
                email.textContent = user.email;
                card.appendChild(email);

                const university = document.createElement("p");
                university.className = "text-gray-500";
                university.textContent = user.university;
                card.appendChild(university);

                document.querySelector(".users").appendChild(card);

                isLoading = false
            });

        })

}

fetchData()

console.dir(document);


window.addEventListener("scroll", () => {

    if (isLoading) return

    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight

    console.log(document.documentElement.scrollHeight);

    console.log(scrollPosition);


    if (scrollPosition >= documentHeight - 400) {
        page++;
        fetchData();
    }
});



