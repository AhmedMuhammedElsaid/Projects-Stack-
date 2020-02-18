import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        // console.log(this.props);
        this.props.createProject(this.state);
        this.props.history.push('/');

    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />

        return (

            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h1 className=" grey-text text-darken-2">Create Project</h1>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input
                            type="text"
                            name="title" id="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea"
                            id="content" name="content"
                            onChange={this.handleChange}
                        >
                        </textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink text-lighten-1" > Create Project</button>
                    </div>
                </form>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
