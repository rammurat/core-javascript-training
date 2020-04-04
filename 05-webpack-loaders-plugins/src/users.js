export const getUser = (arr, id) => {
    return arr.filter((row) => row.id === id)
}

export const getUserName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

export default getUserName