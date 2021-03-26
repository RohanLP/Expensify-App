import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const ExpensifyLogin = ({startLogin}) => (
  <div>
    <h1> Please Log In</h1>
    <input
      type="login"
      placeholder="username"
      
    />

    <input
      type="password"
      placeholder="password"
     
    />

    <button onClick={startLogin}>Log In</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps) (ExpensifyLogin);