import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const ExpensifyLogin = ({startLogin}) => (
  <div className="box-layout">
    <div className="box-layout__box">
    <h1 className="box-layout__title">Expensify</h1>
    <p>Get your expenses under control</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps) (ExpensifyLogin);


/*
<input
  type="login"
  placeholder="username"
  
/>

<input
  type="password"
  placeholder="password"
 
/> */