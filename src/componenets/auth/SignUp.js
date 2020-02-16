import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {signUp} from '../../store/actions/authAction'

class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

//Set the input from the user to out State
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
//Set the New user info into our Redux store 
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const { auth,authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h1 className="grey-text text-darken-4">Sign Up</h1>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName" id="firstName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName" id="lastName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email" id="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password" id="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink z-depth-0 lighten-1 ">Sign Up</button>
                        <div className="red-text center">
                            {authError? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
//getting state from Redux store to the componenet 
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError:state.auth.authError
    }
}
//Dispatch the action of signUp a new user
const mapDispatchToProps=(dispatch) =>{
    return{
        signUp:(newUser)=> dispatch (signUp(newUser))
    }
}
//connect our component to our store  
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)