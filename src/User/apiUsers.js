const {
    API
} = require("../configure")

export const fetchAllRooms = () => {
    return fetch(`${API}/api/rooms`, {
            method: 'GET'
        }).then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}
export const fetchById = (roomId) => {
    return fetch(`${API}/api/room/${roomId}`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
}

export const getBraintreeClientToken = (userId, token) => {
    return fetch(`${API}/api/braintree/getToken/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const processPayment = (userId, token, paymentData) => {
    return fetch(`${API}/api/braintree/payment/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(paymentData)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const fillingTenant = (userId, roomId, token) => {
    return fetch(`${API}/api/room/fill/tenant/${userId}/${roomId}`, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },

    }).then(response => {
        return response.json()
    }).catch(err => console.log(err));
}