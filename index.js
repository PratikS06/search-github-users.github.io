const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main")

const getUser = async(username)=>{
    const response = await fetch(APIURL+username)
    const data = await response.json()
    console.log(data)
    const card = `
    <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>#<strong>followers ${data.followers}</strong></li>
                    <li>#<strong>Following ${data.following}</strong></li>
                    <li>#<strong>Repos ${data.public_repos}</strong></li>
                </ul>
            <div id="repos">
            
            </div>
                
            </div>
        `
      main.innerHTML = card
      
      getrepos(username)
}

getUser("PratikS06")


const getrepos = async(username)=>{
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username +"/repos")
    const data = await response.json()

    data.forEach(
        (item)=>{
        console.log(item);
        const element = document.createElement("a")
        element.classList.add("repo")
        element.href = item.html_url
        element.innerHTML = item.name
        element.target = "_blank"
        repos.appendChild(element)
    })
}

const formSubmit = ()=>{
    const serchBox = document.querySelector("#search")
    if(serchBox.value != ""){
        getUser(serchBox.value)
    }return false
}
