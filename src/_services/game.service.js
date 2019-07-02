import config from 'config';
import { authHeader } from '../_helpers';

export const gameService = {
    startGame
};

function startGame(gameName) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameName })
    };
    let myUri = `${config.apiUrl}/api/Bingo/StartGame`;
    console.log("", )
    return fetch(myUri, requestOptions)
        .then(handleResponse)
        .then(game => {
            // see if it works
            alert(JSON.stringify(game));
            return game;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}