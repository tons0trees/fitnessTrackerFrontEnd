const url = 'https://fitnesstrac-kr.herokuapp.com/api'

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

export async function addActivityToRoutine({routineId, activityId, count, duration}) {
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            activityId: activityId,
            count: count,
            duration: duration
        })
    }

    try {
        const response = await fetch(url + `/routines/${routineId}/activities`, reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function deleteActivity({routineActivityId}) {
    const reqObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    includeToken(reqObj)

    try {
        const response = await fetch(url + `/routine_activities/${routineActivityId}`, reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function updateRoutineActivity({routineActivityId, count, duration}) {
    const reqObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            count: count,
            duration: duration
        })
    }
    includeToken(reqObj)

    try {
        const response = await fetch(url + `/routine_activities/${routineActivityId}`, reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}