const {
    API
} = require("../configure")

const createRoom = (userId, token, room) => {
    return fetch(`${API}/api/room/${userId}`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: room

    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
};
const updateRoomById = (userId, token, room, roomId) => {
    return fetch(`${API}/api/room/${roomId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: room
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
}

const deleteRoomById = (userId, token, roomId) => {
    return fetch(`${API}/api/room/${roomId}/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
}