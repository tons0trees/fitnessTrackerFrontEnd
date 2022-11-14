const url = 'https://fitnesstrac-kr.herokuapp.com/api'
const reqObj = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}

function includeToken() {
    const localToken = localStorage.getItem("token")
    if (localToken) {
        reqObj.headers["Authorization"] = "Bearer " + localToken
    }
}

export async function logIn({username, password}) {
    reqObj.method = "POST"
    reqObj.body = JSON.stringify({
        username: username,
        password: password
    })

    try {
        console.log(reqObj);
        const response = await fetch(url+'/users/login', reqObj)
        const result = await response.json()
        const token = result.token
        localStorage.removeItem("token")
        localStorage.setItem("token", token)
        return result.user
    } catch (error) {
        console.error(error)
    }
}

export async function register({username, password}) {
    reqObj.method = "POST"
    reqObj.body = JSON.stringify({
        username: username,
        password: password
    })

    try {
        const response = await fetch(url+'/users/register', reqObj)
        const result = await response.json()
        const token = result.token
        localStorage.removeItem("token")
        localStorage.setItem("token", token)
        return result.user
    } catch (error) {
        console.error(error)
    }
}

export async function getCurrentUser() {
    try {
        includeToken()
        const response = await fetch(url + '/users/me', reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function getUserRoutines(username) {
    try {
        includeToken()
        console.log(url + `/users/${username}/routines`);
        const response = await fetch(url + `/users/${username}/routines`, reqObj)
        const result = await response.json()
        console.log(result);
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function getPublicRoutines() {
    try {
        const response = await fetch(url + '/routines', reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}