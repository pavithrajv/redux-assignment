import React from 'react';
import UserDetail from './userDetail';
import broadcastFirstNameClicked from '../actions/broadcastFname';
import broadcastLastNameClicked from '../actions/broadcastLname';
import broadcastScoreClicked from '../actions/broadcastScore';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            score: ''
        }
    }
    getFirstName=(event)=>{
        this.setState({
            firstname:event.target.value
        })
    }
    getLastName=(event)=>{
        this.setState({
            lastname:event.target.value
        })
    }
    getScore=(event)=>{
        this.setState({
            score:event.target.value
        })
    }
    render() { 
        return ( 
            <div>
                <p>Firstname</p>
                <input type="text" name="firstname" onChange={this.getFirstName}></input>
                <button onClick={()=>this.props.firstnameClicked(this.state.firstname)}>Add</button>
                <p>Lastname</p>
                <input type="text" name="lastname" onChange={this.getLastName}></input>
                <button onClick={()=>this.props.lastnameClicked(this.state.lastname)}>Add</button>
                <p>Score</p>
                <input type="number"  name="score" onChange={this.getScore}></input>
                <button onClick={()=>this.props.scoreClicked(this.state.score)}>Add</button>
            </div>
         );
    }
}
 
function convertEventToPropsAndDispatch(dispatch) {
    return bindActionCreators({
        firstnameClicked: broadcastFirstNameClicked,
        lastnameClicked: broadcastLastNameClicked,
        scoreClicked: broadcastScoreClicked
    }, dispatch)
}
export default connect(null, convertEventToPropsAndDispatch)(User);