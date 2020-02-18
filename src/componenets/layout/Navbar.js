import React from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar=(props)=>{
    const {profile,auth} = props;
    // console.log(profile);
    const links=auth.uid ? <SignedInLinks profile={profile}/>  : <SignedOutLinks/>;
    return(
      
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
            <Link to='/' className="brand-logo left hide-on-small-only ">Projects Stack</Link>
            <Link to='/' className=" left hide-on-med-and-up ">
            <i className="material-icons">menu</i>
             </Link>
            {links}
            </div>
        </nav>
      
    )
}
const mapStateToProps = (state)=> {
    console.log(state);
    return{
    auth:state.firebase.auth,
    profile:state.firebase.profile
    }
}
export default connect(mapStateToProps) (Navbar)