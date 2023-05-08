const users = [
    { id: "user_1" , name: "User 1" },
    { id: "user_2" , name: "User 2" },
    { id: "user_3" , name: "User 3" },
    { id: "user_4" , name: "User 4" },
]

const fetchUsers = async () => {
    return await users
}


module.exports = {
    fetchUsers,
}