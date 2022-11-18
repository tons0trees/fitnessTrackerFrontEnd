const url = 'https://fitnesstrac-kr.herokuapp.com/api'

function includeToken(paramObj) {
    const localToken = localStorage.getItem("token")
    if (localToken) {
        paramObj.headers["Authorization"] = "Bearer " + localToken
    }
}

export async function getUserRoutines({username, id}) {
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if (id) includeToken(reqObj)

    try {
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

export async function postRoutine({ name, goal, isPublic }) {
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

export async function deleteRoutine({ id }) {
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

export async function updateRoutine({ id, name, goal, isPublic }) {
    const reqObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    }
    includeToken(reqObj)

    try {
        const response = await fetch(url + `/routines/${id}`, reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}