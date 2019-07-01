import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { gameActions } from '../_actions';

class LobbyPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(gameActions.startGame());
        console.log("STARTING GAME");
    }
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Waiting to Play Game</h2>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { games } = state.games;
    return {
        games
    };
}
// connect to the redux store
const connectedLobbyPage = connect(mapStateToProps)(LobbyPage);
export { connectedLobbyPage as LobbyPage }; 