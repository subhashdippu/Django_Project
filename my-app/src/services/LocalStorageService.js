const storeToken = (value) => {
    if (value) {
        const { access, refresh } = value
        localStorage.setItem('access_token', access)// Store the token
        localStorage.setItem('refresh_token', refresh)
    }
}
const getToken = () => {
    let access_token = localStorage.getItem('access_token') // Get the token
    let refresh_token = localStorage.getItem('refresh_token')
    return { access_token, refresh_token }
}

const removeToken = () => {
    localStorage.removeItem('access_token') // Remove the token
    localStorage.removeItem('refresh_token')
}

export { storeToken, getToken, removeToken }