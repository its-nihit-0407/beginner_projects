/*
✅ Beginner Level
🔹 1. Fetch and Display JSON Data
API: https://jsonplaceholder.typicode.com/posts

Task: Fetch posts and display them in the DOM (title + body).

🔹 2. Show Random User Info
API: https://randomuser.me/api/

Task: Show random user's name, email, and profile picture on button click.

🔹 3. Joke Generator
API: https://official-joke-api.appspot.com/random_joke

Task: Show a random joke each time a button is clicked.

*/


// Fetch and Display JSON Data

let fetching = async (url: string) => {
    const options: object ={
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return await data;

}

(async () => {
    let data = await fetching('https://jsonplaceholder.typicode.com/posts')
    // console.log(data)
    let container = document.getElementById('todisplay')
    
    if (container){
        for (const post of data) {
            let postDiv = document.createElement('div');
            postDiv.className = 'post';

            let posttitle = document.createElement('h2');
            posttitle.innerHTML = post.title;
            let postbody = document.createElement('p')
            postbody.innerHTML = post.body;

            postDiv.appendChild(posttitle)
            postDiv.appendChild(postbody)

            container.appendChild(postDiv)
        }
}
})();