import { gameConstants } from '../_constants';

export function games(state = {}, action) {
  switch (action.type) {
    case gameConstants.START_GAME_REQUEST:
      return { loading: true };
    case gameConstants.START_GAME_SUCESS:
      return {};
    case gameConstants.START_GAME_FAILURE:
      return {};
    default:
      return state
  }
}