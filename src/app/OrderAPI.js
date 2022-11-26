import axios from 'axios'

const URL = "https://django-back-fubq.onrender.com/api/addOrder/"
// async(2)
export function sendOrders(myCart,token) {
    // console.log(myOrders,token)
    return new Promise((resolve) =>
        axios.post(URL,myCart,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => resolve({ data: res.data }))
    );
}
