const {API} = require("../configure")

exports.fetchAllRooms = () => {
    return fetch(`${API}/api/rooms`, {
            method: 'GET'
        }).then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}
exports.fetchById = (roomId) => {
    return fetch(`${API}/api/room/${roomId}`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
}