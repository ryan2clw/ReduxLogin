import { gameConstants } from '../_constants';
import { gameService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const gameActions = {
    startGame
};

function startGame(gameName) {
    return dispatch => {
        dispatch(request({ gameName }));
        gameService.startGame(gameName)
            .then(
                game => { 
                    dispatch(success(game));
                    history.push('/lobby');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(game) { return { type: gameConstants.START_GAME_REQUEST, game } }
    function success(game) { return { type: gameConstants.START_GAME_SUCCESS, game } }
    function failure(error) { return { type: gameConstants.START_GAME_FAILURE, error } }
}
