const url = 'https://fitnesstrac-kr.herokuapp.com/api'
const reqObj = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}

export async function logIn({username, password}) {
    reqObj.method = "POST"
    reqObj.body = JSON.stringify({
        username: username,
        password: password
    })

    try {
        const response = await fetch(url+'/users/login', reqObj)
        const result = await response.json()
        console.log(result)
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
        console.log(result)
    } catch (error) {
        console.error(error)
    }
}