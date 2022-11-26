import axios from 'axios'
const URL = "https://django-back-fubq.onrender.com/api/token/"
const URL_REGISTER = "https://django-back-fubq.onrender.com/api/register/"
const URL_LOGOUT = "https://django-back-fubq.onrender.com/api/logout"

export function signin(cred) {

    return new Promise((resolve) =>
        axios.post(URL, cred).then((res) => resolve({ data: res.data }))
    );
}

export function signUp(cred) {
    return new Promise((resolve) =>
        axios.post(URL_REGISTER, cred).then((res) => resolve({ data: res.data }))
    );
}
export function myLogout(token) {
    return new Promise((resolve) =>
    axios(URL_LOGOUT, {
        headers: {
            'Authorization': `Bearer ${token.token}`
        }
    }).then((res) => resolve({ data: res.data }))
    );
}