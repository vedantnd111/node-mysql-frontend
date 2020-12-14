const {
    API
} = require("../configure")

export const createRoom = (userId, token, room) => {
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

export const updateRoomById = (userId, token, room, roomId) => {
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

export const deleteRoomById = (userId, token, roomId) => {
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
};

export const listAll = () => {
    return fetch(`${API}/api/rooms/admin`, {
            method: 'GET'
        }).then(response => response.json())
        .catch(err => console.log(err));
};