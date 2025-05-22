/*
🔹 6. GitHub User Finder
API: https://api.github.com/users/{username}

Task: Enter GitHub username and display their avatar, name, public repos, and followers.
*/


const git_finder = async (username: string) => {
    const url: string  = `https://api.github.com/users/${username}`;
    console.log(url)
    const options: object = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await fetch(url, options);
    const data = response.json()

    return data
} 

// (async () => {
//     console.log(await git_finder("its-nihit-0407"))
// })()

const handle_request = async (userinput: string) => {
    const data = await git_finder(userinput)
    const para = document.createElement('p')

    if (data.status === '404') {
        const container = document.querySelector('.container')
        para.innerHTML = "Not Found";
        para.style.color = "red"

        container?.appendChild(para)
        setTimeout(() => para.style.visibility = "hidden", 2000)
        return
    }

    const git_username = data.login ?? "";
    const git_avatar = data.avatar_url ?? "";
    const git_name = data.name ?? "";
    const public_repo = data.public_repos ?? 0;
    const followers = data.followers ?? 0;

    const container = document.querySelector('.container');
    

    if (container) {
        const postdiv = document.createElement('div')
        const details_div = document.createElement('div')
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const name = document.createElement('p')
        const repo = document.createElement('h3')
        const git_follow = document.createElement('h3')

        img.id = "git_image"

        h2.innerHTML = git_username;
        name.innerHTML = git_name;
        repo.innerHTML = "Public Repos: " + public_repo
        git_follow.innerHTML = "followers: " + followers
        
        name.style.color = 'white'
        name.style.left = '5px'

        repo.style.color = 'white'
        git_follow.style.color = 'white'

        img.setAttribute('src', git_avatar)
        img.setAttribute('alt', 'git_profile_img')
        img.style.borderRadius = "30%"
        img.style.height = "200px"
        img.style.width = "200px"

        
        postdiv.appendChild(img)
        details_div.appendChild(h2)
        details_div.appendChild(name)
        details_div.appendChild(repo)
        details_div.appendChild(git_follow)
        
        postdiv.style.margin = '20px'
        postdiv.style.padding = '20px'
        postdiv.style.borderRadius = '20px'
        postdiv.style.display = 'flex'
        postdiv.style.flexWrap = 'wrap'
        postdiv.style.boxShadow = '0 0 12px 0'
        postdiv.style.width = '400px'

        details_div.style.margin = '20px'
        details_div.style.color = 'green'

        postdiv.appendChild(details_div)
        container.appendChild(postdiv);
        img.addEventListener('click', () => {
            postdiv.remove()
        })
        
    }
    
}

const check_btn = document.querySelector("#check_userinput");

check_btn?.addEventListener('click', (event) => {
    event.preventDefault();
    const userinput = document.querySelector("#userinput") as HTMLInputElement;
    const user_val = userinput?.value ?? "";
    handle_request(user_val)
    userinput.value = ""

})
