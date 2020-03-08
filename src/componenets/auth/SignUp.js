import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authAction'

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
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
           <div className="row">
               <div className="col s12 l8 push-l2">
               <div className=" form1 container">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="white-text text-darken-4">Sign Up</h1>
                    <div className="input-field">
                        <label htmlFor="firstName" className="white-text">First Name</label>
                        <input
                            type="text"
                            name="firstName" id="firstName"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName" className="white-text">Last Name</label>
                        <input
                            type="text"
                            name="lastName" id="lastName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email" className="white-text" >Email</label>
                        <input
                            type="email"
                            name="email" id="email"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" className="white-text">Password</label>
                        <input
                            type="password"
                            name="password" id="password"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="input-field center">
                        <button className="btn-large indigo waves-effect waves-light z-depth-2 darken-1 ">Sign Up</button>
                        <div className="red-text center">
                            {authError ? <h4 className="  white-text text-darken-3">{authError}</h4> : null}
                        </div>
                    </div>
                </form>
            </div>
               </div>
           </div>
        )
    }
}
//getting state from Redux store to the componenet 
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
//Dispatch the action of signUp a new user
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
//connect our component to our store  
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)