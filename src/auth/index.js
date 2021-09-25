export const addLocalUser = currentUser => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
}

export const removeLocalUser = () => {
    localStorage.removeItem('currentUser')
}

export const getToken = ()=>{
    const token = JSON.parse(localStorage.getItem('currentUser'))
    return token
}