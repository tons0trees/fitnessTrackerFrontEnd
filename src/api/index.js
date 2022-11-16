const url = 'https://fitnesstrac-kr.herokuapp.com/api'
const notreqObj = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}

function includeToken(paramObj) {
    const localToken = localStorage.getItem("token")
    if (localToken) {
        paramObj.headers["Authorization"] = "Bearer " + localToken
    }
}

export async function logIn({username, password}) {
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

export async function getPublicRoutines() {
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        const response = await fetch(url + '/routines', reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function getPublicActivities() {
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        const response = await fetch(url + '/activities', reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function postActivity({name, description}) {
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            description: description
        })
    }
    includeToken(reqObj)

    try {
        const response = await fetch(url + '/activities', reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}


export async function postRoutine({name, goal, isPublic}) {
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: (isPublic || null)
        })
    }
    includeToken(reqObj)

    try {
        const response = await fetch(url + '/routines', reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function deleteRoutine({id}) {
    const reqObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    includeToken(reqObj)

    console.log('inside the delete');

    try {
        const response = await fetch(url + `/routines/${id}`, reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function updateRoutine({id, name, goal, isPublic}) {
    
    const reqObj = {
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    }
    console.log("*** ahahah ***", reqObj)
        includeToken(reqObj)
    
    try {
        const response = await fetch(url + `/routines/${id}`, reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
    }
