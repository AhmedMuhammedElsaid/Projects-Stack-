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
    if (this.state.title){
        this.props.createProject(this.state);
        this.props.history.push('/');
    }
   
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="row">
                <div className="col s12 l9 push-l2">
                
            <div className="container">
                <form className=" project-form" onSubmit={this.handleSubmit}>
                    <h1 className=" white-text text-darken-2">Create A Project</h1>
                    <div className="input-field">
                        <label htmlFor="title"  className="white-text">Project Title</label>
                        <input
                        required
                            type="text"
                            name="title" id="title"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content"   className="white-text">Content</label>
                        <textarea className="materialize-textarea"
                            id="content" name="content"
                            onChange={this.handleChange}
                            required
                        >
                        </textarea>
                    </div>
                    <div className="input-field center">
                        <button className="btn-large waves-effect waves-light pink darken-1 " > Create Project</button>
                    </div>
                </form>
            </div>
                </div>
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
