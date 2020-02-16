const initState={
    authError:null
};

const authReducer= ( state=initState,action) => {
switch(action.type){
    case 'LOGIN_ERROR':
        console.log('Login Failed');
        return {
            ...state,
            authError:'Login Failed'
        }
    case 'LOGIN_SUCCESS':
        console.log('Login Success');
        return {
            ...state,
            authError:null
        }
        case 'SIGNOUT_SUCCESS':
            console.log('Logged out Successfully');
            return state;
            case 'SIGNUP_SUCCESSFULLY':
                console.log('SIGNUP_SUCCESSFULLY')
            return{
                ...state,
                authError:null
            }
            case 'SIGNUP_ERROR' :
                console.log('SIGNUP_ERROR');
                return{
                    ...state,
                    authError:action.err.message
                }
        default :
    return state
        }
    }

export default authReducer