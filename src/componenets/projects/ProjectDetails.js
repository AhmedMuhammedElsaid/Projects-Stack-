import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment'


const ProjectDetails = (props) => {

    // console.log(props);
    // const id = props.match.params.id;
    // console.log(project);
    const { project, auth } = props;
    // console.log(project.createdAt);
    // console.log(project);
    if (!auth.uid) return <Redirect to='/signup' />
    if (project) {
        return (

            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> {project.title}</span>
                        <span className="project-content">{project.content}</span>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <span className="">Posted by {project.authorFirstName} {project.authorLastName}</span>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>

        )
    } else {
        return (
            <div className="container center">Loading...</div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    // console.log(state);

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    // console.log(projects);

    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)