export const getPosts = (setPosts, path) => {
    fetch(path, {
        method: "Get",
        headers: {
            "Content-Type": "application/json"
        },

    })
        .then(res => res.json())
        .then(data => {
            setPosts(data);
        })
        .catch(err => console.log(err));
};


