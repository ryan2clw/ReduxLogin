import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {

    //componentDidMount() {
        //network calls go here
        //this.props.dispatch(userActions.getAll());
        //var myUser = localStorage.getItem("user");
        //myUser = {"player":{"username":"p@p.com","firstName":"Peter","lastName":"Waechter","balances":[{"id":46523,"balanceTypeID":1,"name":"Cash","amount":48657,"displayOrder":null,"alias":null,"description":null},{"id":56743,"balanceTypeID":2,"name":"Bonus","amount":0,"displayOrder":null,"alias":null,"description":null},{"id":0,"balanceTypeID":0,"name":"Total","amount":48657,"displayOrder":null,"alias":null,"description":null},{"id":0,"balanceTypeID":0,"name":"Withdrawable","amount":48657,"displayOrder":null,"alias":null,"description":null}],"balanceCurrency":"USD","isActive":true,"isLocked":false,"isExcluded":false,"isVerified":true,"hasPin":false,"culture":null,"currencyCulture":"en-US","features":{"feature_Syndication":true,"feature_SupportTickets":true,"feature_PlayerLimits":true,"feature_PlayerExclusions":true,"feature_Promotions":true,"feature_Messaging":true},"fullName":"Peter Waechter (#19)","cashBalanceString":"48,657.00","franchiseKey":"8e22faa5-6f9e-4488-8efd-af1e8fcc7d6f","lastLoginDate":"2019-07-01T20:54:30.517","optIn_Important":true,"optIn_Marketing":false},"applicationKey":null,"phoneNumber":null,"serverTimeLocal":"7/2/2019 3:34:48 PM","serverTimeUTC":"7/2/2019 7:34:48 PM","wasSuccessful":true,"validationError":false,"message":null,"token":"f2ca1493-0802-455a-80a5-db5ed67e1d35"}
    //}

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }
    

    render() {
        const { user } = this.props;
        return (
            <div className="col-md-12">
                <h1>Hi {user.firstName} {user.lastName} !</h1>
                <p>You're logged in with React!!</p>
                <p> { user.username }</p>
                {/* <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                } */}
                <p>
                    <Link to="/lobby">Wait for game in lobby</Link>
                </p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    //const { users, authentication } = state;
    const { user } = authentication;
    // return {
    //     user,
    //     users
    // };
    return {
         user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };