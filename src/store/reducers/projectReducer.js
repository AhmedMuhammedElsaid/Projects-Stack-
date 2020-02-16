const initState ={
    projects:[
        {id:'1' , title:'help me to find the eggs',content:'bla bla bla '},
        {id:'2' , title:'Leave me',content:'bla bdasdasla bla '},
        {id:'3' , title:'help me to find the beach please dude',content:'blaasdas bla bla '},
    ]
}

const projectReducer= ( state=initState , action ) => {
    switch (action.type){
    case 'CREATE_PROJECT':
        console.log('create Project',action.project);
        return state;
    case 'CREATE_PROJECT_ERROR':
    console.log('create project error',action.err);
return state 
default:
    return state
    }
}
export default projectReducer