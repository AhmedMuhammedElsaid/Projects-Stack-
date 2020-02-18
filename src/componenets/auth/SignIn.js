import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom';
class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state);
        this.props.signIn(this.state);
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    render() {
        const { authError,auth } = this.props;
        if(auth.uid) return <Redirect to='/'/>
        return (
            <div className="container">
                <form className="white " onSubmit={this.handleSubmit}>
                    <h1 className="grey-text text-darken-3">Sign In</h1>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email"
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
                        <button className="btn pink lighten-1 z-depth-0">
                            Login
            </button>
                        <div className=" center  card z-depth-0">
                        {authError ? <h4 className="red-text lighten-2">{authError}</h4> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state);

    return {
        authError: state.auth.authError,
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
