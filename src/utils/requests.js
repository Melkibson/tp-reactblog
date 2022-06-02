export const getPosts = (setPosts, path) => {
    fetch(path, {
        method: "GET",
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

export const getUsers = (setUsers, path) => {
    fetch(path, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },

    })
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
        .catch(err => console.log(err));
}


