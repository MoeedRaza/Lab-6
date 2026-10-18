async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return await response.json();
}

async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    return await response.json();
}

async function main() {
    try {
        const [user, post] = await Promise.all([getUser(), getPost()]);

        if (user.id && post.id) {
            console.log("Promise Resolved");
            console.log("User:", user.name);
            console.log("Post:", post.title);
        } else {
            throw new Error("Invalid Data");
        }

    } catch (error) {
        console.log("Promise Rejected:", error.message);
    }
}

main();