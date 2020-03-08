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
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="row">
                <div className="col s12 l8 push-l2">
                    <div className="container">
                        <form className="form1" onSubmit={this.handleSubmit}>
                            <h1 className="white-text text-darken-5">Sign In</h1>
                            <div className="input-field">
                                <label htmlFor="email" className="white-text">Email</label>
                                <input type="email"
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
                                <button className="btn-large indigo waves-effect waves-light z-depth-0">
                                    Login
            </button>
                                <div className="     z-depth-0">
                                    {authError ? <h4 className="white-text lighten-2">{authError}</h4> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state);

    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
