export const addLocalUser = token => {
    localStorage.setItem('token', JSON.stringify(token))
}

export const removeLocalUser = () => {
    localStorage.removeItem('token')
}

export const getToken = ()=>{
    const token = JSON.parse(localStorage.getItem('token'))
    return token
}