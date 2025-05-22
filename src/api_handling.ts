
const url: string = "https://api.freeapi.app/api/v1/public/randomusers";
let fetch_data = async (url: string) => {
    const options: object = {
        method: "GET",
        header: {
        "Content-Type": "application/json",
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return await data;
    }catch (error) {
        console.error("Error fetching data:", error);
}

}


(async () => {
    const data = await fetch_data(url);
    if (data.success && data.data) {
        console.log([...data.data.data])

        for (const user of data.data.data) {
            console.log(user.login.username + " : " + user.id);
        }

        console.log("Data fetched successfully");
    }
    // console.log(data.data.data);
})();

// const url: string = "https://api.freeapi.app/api/v1/public/randomusers";