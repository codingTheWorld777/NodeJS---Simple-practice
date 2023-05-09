const users = [
    { id: 0, name: "LeBron James" },
    { id: 1, name: "Binz" },
    { id: 2, name: "HK" },
    { id: 3, name: "Cris7" },
]

const fetchUsers = async () => {
    return await users
}

const fetchUser = async (id) => {
    return (await users).find(user => user.id === parseInt(id))
}

module.exports = { fetchUsers, fetchUser }