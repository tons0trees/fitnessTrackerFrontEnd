const url = 'https://fitnesstrac-kr.herokuapp.com/api'

function includeToken(paramObj) {
    const localToken = localStorage.getItem("token")
    if (localToken) {
        paramObj.headers["Authorization"] = "Bearer " + localToken
    }
}

export async function logIn({ username, password }) {
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    try {
        const response = await fetch(url + '/users/login', reqObj)
        const result = await response.json()

        if (result.error) {
            return result
        } else {
            const token = result.token
            localStorage.removeItem("token")
            localStorage.setItem("token", token)
            return result.user
        }
    } catch (error) {
        console.error(error)
    }
}

export async function register({ username, password }) {
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    try {
        const response = await fetch(url + '/users/register', reqObj)
        const result = await response.json()
        console.log(result);
        if (result.error) {
            return result
        } else {
            const token = result.token
            localStorage.removeItem("token")
            localStorage.setItem("token", token)
            return result.user
        }
    } catch (error) {
        console.error(error)
    }
}

export async function getCurrentUser() {
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        includeToken(reqObj)
        const response = await fetch(url + '/users/me', reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function getUserRoutines(username) {
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        includeToken(reqObj)
        const response = await fetch(url + `/users/${username}/routines`, reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}