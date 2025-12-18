function fetchGitHubUser (andreyssouza) {

    fetch(`https://api.github.com/users/${andreyssouza}`)
    .then((response)=>{
        if(!response.ok) {
            console.error(error)
        }

        return response.json()
    })

    .then((user)=>{
        console.log("user", user)
        createUserCard(user)
    })
    .catch((error)=>{
        console.log(error)
        const app = document.querySelector("#app")
        app.innerHTML = `<p style='color:rede'> Erro: ${error.message}</p>`
    })
}


function createUserCard(user) {
    const app = document.querySelector("#app")

    const card = document.createElement("div")
    card.className = "card"

    const avatar = document.createElement("img")
    avatar.src = user.avatar_url
    avatar.alt = `${user.login}'s avatar`

    const name = document.createElement("h2")
    name.textContent = user.name

    const login = document.createElement("p")
    login.textContent = `@${user.login}`

    const bio = document.createElement("p")
    bio.textContent= `${user.bio}`

    card.appendChild(avatar)
    card.appendChild(name)
    card.appendChild(login)
    card.appendChild(bio)

    app.appendChild(card)
}

fetchGitHubUser("andreyssouza")