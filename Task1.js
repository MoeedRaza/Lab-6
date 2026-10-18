async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const user = await response.json();
        return user;
    }
    catch (error) {
        throw error;
    }
}

getUser()
    .then(user => console.log(user))
    .catch(error => console.log(error.message));