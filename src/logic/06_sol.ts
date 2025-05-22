// 🔹 6. GitHub User Finder
// API: https://api.github.com/users/{username}

// Task: Enter GitHub username and display their avatar, name, public repos, and followers.

const fetch_github_user = async (username: string) => {
    const options: object = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const url: string = `https://api.github.com/users/${username ?? ""}` 

    const response = await fetch(url, options)
    const data = response.json()

    return data
}

const checkUsername = async () => {

}