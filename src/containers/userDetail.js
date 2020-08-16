import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
            <p>First Name : {this.props.firstname}</p>
            <p>Last Name : {this.props.lastname}</p>
            <p>Score : {this.props.score}</p>
        
            </div>
         );
    }
}

function convertStoreToProps(store){
    return {
        firstname: store.firstName,
        lastname: store.lastName,
        score:store.Score
    }
}
 
export default connect(convertStoreToProps)(UserDetail);