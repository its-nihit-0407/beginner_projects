/*
/*

🔹 1. Fetch and Display JSON Data
API: https://jsonplaceholder.typicode.com/posts

Task: Fetch posts and display them in the DOM (title + body).

🔹 2. Show Random User Info
API: https://randomuser.me/api/

Task: Show random user's name, email, and profile picture on button click.

🔹 3. Joke Generator
API: https://official-joke-api.appspot.com/random_joke

Task: Show a random joke each time a button is clicked.

🔹 4. Weather App
API: https://openweathermap.org/api (requires API key)

Task: Take city name as input and display current weather (temp, description).

🔹 5. Currency Converter
API: https://api.exchangerate-api.com/

Task: Convert amount between two selected currencies.

🔹 6. GitHub User Finder
API: https://api.github.com/users/{username}

Task: Enter GitHub username and display their avatar, name, public repos, and followers.

🔹 7. Country Search App
API: https://restcountries.com/v3.1/all

Task: Display a list of countries and allow search by country name.


*/


const postdiv = document.querySelector(".root") as HTMLElement;


// postdiv.style.border = "1px solid white" 
postdiv.style.borderRadius = "10px" 
postdiv.style.height = "500px"
postdiv.style.width = "400px"
// postdiv.style.boxShadow = "0 0 12px 0"
postdiv.style.display = "flex"
postdiv.style.justifyContent = "center"
postdiv.style.alignItems = "center"
postdiv.style.flexDirection = "column"
postdiv.style.margin = "20px"



const projects: object = {
    "GitHub User Finder": {
        level: "Beginner",
        API: "https://api.github.com/users/{username}",
        Task: "Enter GitHub username and display their avatar, name, public repos, and followers.",
        live_link: "../intermediate/07_sol.html"
        
    },
    "Weather App": {
        level: "Beginner",
        API: "https://openweathermap.org/api",
        Task: "Take city name as input and display current weather (temp, description).",
        live_link: "https://weathernishdh.netlify.app/"
    },
    "Currency Converter": {
        level: "Beginner",
        API: "https://api.exchangerate-api.com/",
        Task: "Convert amount between two selected currencies.",
        live_link: "../intermediate/05_sol.html"
        
    },
      
    "Country Search App": {
        level: "Beginner",
        API: "https://restcountries.com/v3.1/all",
        Task: "Display a list of countries and allow search by country name.",
        live_link : "../intermediate/08_sol.html"
      },
    
    "Show Random User Info": {
        level: "Beginner",
        API: "https://randomuser.me/api/",
        Task: "Show random user's name, email, and profile picture on button click.",
        live_link: "../practice/02_sol.html"
    },
    
    "Joke Generator": {
        level: "Beginner",
        API: "https://official-joke-api.appspot.com/random_joke",
        Task: "Show a random joke each time a button is clicked.",
        live_link: "../practice/03_sol.html"
    },
    
    "Fetch and Display JSON Data": {
        level: "Beginner",
        API: "https://jsonplaceholder.typicode.com/posts",
        Task: "Fetch posts and display them in the DOM (title + body).",
        live_link: "../index.html"
    },
};

for (const [key, value] of Object.entries(projects)) {
  const wrapper = document.createElement("div");
  wrapper.style.textAlign = "center";
  wrapper.style.color = "white";
  wrapper.style.padding = "20px";
  wrapper.style.boxShadow = "0 0 12px 0";
  wrapper.style.borderRadius = "10px";
  wrapper.style.margin = "10px auto";
  wrapper.style.width = "80%";
  wrapper.style.transition = "all 0.3s ease";
  wrapper.style.cursor = "pointer";
  wrapper.style.position = "relative";

  // Title and dropdown arrow
  const title = document.createElement("div");
  title.innerHTML = `<h4 style="margin: 0;">${key} &#9662;</h4>`;
  title.style.display = "flex";
  title.style.justifyContent = "space-between";
  title.style.alignItems = "center";
  title.style.gap = "10px";

  // API Info
  const apiInfo = document.createElement("div");
  apiInfo.innerHTML = `
    <p style="margin-top: 10px;">
      <strong>API:</strong> 
      <a href="${value.API}" target="_blank" style="color: cyan; text-decoration: none;">
        ${value.API}
      </a>
    </p>`;
  apiInfo.style.display = "none";

  // Live Link
  const liveLink = document.createElement("div");
  liveLink.innerHTML = `
    <p style="margin-top: 10px;">
      <strong>Live Link:</strong> 
      <a href="${value.live_link}" target="_blank" style="color: cyan; text-decoration: none;">
        Click here to redirect
      </a>
    </p>`;
  liveLink.style.display = "none";

  // Toggle display of both API and live link
  title.addEventListener("click", () => {
    const isVisible = apiInfo.style.display === "block";
    apiInfo.style.display = isVisible ? "none" : "block";
    liveLink.style.display = isVisible ? "none" : "block";
    title.innerHTML = `<h4 style="margin: 0;">${key} ${isVisible ? '&#9662;' : '&#9652;'}</h4>`;
  });

  // Hover effect
  wrapper.addEventListener("mouseover", () => {
    wrapper.style.transform = "scale(1.05)";
    wrapper.style.backgroundColor = "#1e1e1e";
    wrapper.style.zIndex = "5";
  });
  wrapper.addEventListener("mouseout", () => {
    wrapper.style.transform = "scale(1)";
    wrapper.style.backgroundColor = "transparent";
    wrapper.style.zIndex = "1";
  });

  // Append elements to wrapper
  wrapper.appendChild(title);
  wrapper.appendChild(apiInfo);
  wrapper.appendChild(liveLink);
  postdiv.appendChild(wrapper);
}





