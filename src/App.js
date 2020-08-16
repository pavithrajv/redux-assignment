import React from 'react';
import userList from './containers/userList';
import userDetail from './containers/userDetail';
import User from '../src/containers/userList'
import UserDetail from '../src/containers/userDetail'

function App(){
  return(
    <div>
      <h2>My app.........</h2>
      <User></User>
      <UserDetail></UserDetail>
    </div>
  )
}

export default App;