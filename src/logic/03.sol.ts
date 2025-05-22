/*
🔹 3. Joke Generator
API: https://official-joke-api.appspot.com/random_joke

Task: Show a random joke each time a button is clicked.

*/

const fetch_joke = async (url: string) => {
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (err) {
        console.error("Error fetching joke:", err);
        alert("Failed to fetch joke. Check the console.");
    }
};


let when_clk = async () => {
    const data = await fetch_joke('https://official-joke-api.appspot.com/random_joke');

    const container = document.getElementById("show")

    if (container){
        const joke = data.setup
        const puchline = data.punchline

        const postdiv = document.createElement('div')

        postdiv.style.display = 'flex';
        postdiv.style.backgroundColor = '#212121';
        postdiv.style.color = 'white';
        postdiv.style.borderRadius = '5px';
        postdiv.style.padding = "10px";
        postdiv.style.justifyContent = 'center';
        postdiv.style.width = 'auto';
        postdiv.style.height = 'fit-content';
        postdiv.style.margin = '5px';

        const the_joke = document.createElement('h3')
        const the_punchline = document.createElement('h4')

        the_joke.innerHTML = joke;
        the_punchline.innerHTML = puchline;

        postdiv.appendChild(the_joke);
        postdiv.appendChild(the_punchline);

        container.appendChild(postdiv);

        
    }

}

const get_button = document.querySelector('#btn') as HTMLButtonElement

get_button.addEventListener('click', () => {
    when_clk()
})