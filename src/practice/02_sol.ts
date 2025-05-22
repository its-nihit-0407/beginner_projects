/*
🔹 2. Show Random User Info
API: https://randomuser.me/api/

Task: Show random user's name, email, and profile picture on button click.
*/

let fetch_user = async (url:string) => {
    const options: object = {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return await data.results;
}

let clickable_func = async () => {
    let result = await fetch_user("https://randomuser.me/api/");
    const container = document.getElementById("fortest");

    
    
    if (container){
        container.style.display = 'flex'
        container.style.flexDirection = 'row'
        container.style.flexWrap = 'wrap'
        container.style.margin = "20px"
        for (const obj of result){
            const user_name = obj.name.title + " " + obj.name.first + " " + obj.name.last;
            const user_email = obj.email;
            const profile_pic = obj.picture.thumbnail;
            let postdiv = document.createElement('div')

            postdiv.style.backgroundColor = "#212121";
            postdiv.style.color = "#ffff";
            postdiv.style.width = '350px';
            // postdiv.style.height = '400px';
            postdiv.style.display = 'flex';
            postdiv.style.flexDirection = 'column-reverse';
            postdiv.style.justifyContent = 'center';
            postdiv.style.alignContent = 'center';
            postdiv.style.padding = '10px';
            postdiv.style.borderRadius = '10px'
            postdiv.style.boxShadow = "0 0 12px 0"
            postdiv.style.margin = '10px'
            



            let name = document.createElement("h2")
            name.innerHTML = user_name
            let email =  document.createElement("p")
            email.innerHTML = user_email
            let profile = document.createElement("img")
            profile.setAttribute('src', profile_pic)

            postdiv.appendChild(name)
            postdiv.appendChild(email)
            postdiv.appendChild(profile)

            container.appendChild(postdiv)
            
        }
    }
};


const button = document.querySelector('#btn') as HTMLButtonElement;

button.style.height = "35px"
button.style.width = "200px"
button.style.fontSize = "1rem"
button.style.fontWeight = "Bold"
button.style.borderRadius = "10px"
button.style.margin = "40px"
button.style.opacity = "0.7"


if (button){
    button.addEventListener('click', () => {
        clickable_func()
    })
}