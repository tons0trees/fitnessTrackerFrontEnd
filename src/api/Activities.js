const url = 'https://fitnesstrac-kr.herokuapp.com/api'

function includeToken(paramObj) {
    const localToken = localStorage.getItem("token")
    if (localToken) {
        paramObj.headers["Authorization"] = "Bearer " + localToken
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

export async function postActivity({ name, description }) {
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

export async function addActivityToRoutine({ routineId, activityId, count, duration }) {
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

export async function deleteActivity({ routineActivityId }) {
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

export async function updateRoutineActivity({ routineActivityId, count, duration }) {
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

export async function getRoutinesByActivity({activityId}) {
    const reqObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(url + `/activities/${activityId}/routines`, reqObj)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}