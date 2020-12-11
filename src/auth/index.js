import { API } from '../configure';

export const signUpFetch = (user) => {
    return fetch(`${API}/users/register`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(Response => { return Response.json() })
        .catch(err => {
            console.log(err);
        })
};


export const signInFetch = user => {
    return fetch(`${API}/users/login`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(Response => { return Response.json(); })
        .catch(err => {
            console.log(err);
        })
};

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();

    }
};

export const signout = (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem('jwt');
        next();
        fetch(`${API}/users/logout`, {
            method: 'GET'
        })
            .then(response => {
                console.log("signout ", response);
            })
            .catch(err => console.log(err));

    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    }
    else {
        return false;
    }
}
