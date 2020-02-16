import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
// import {reduxFirestore,getFirestore} from 'redux-firestore'
// import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
// import fbConfig from './config/fbConfig'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'


const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig,{useFirestoreForProfile: true , userProfile:'users' , attachAuthIsReady: true }), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

// const store=createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})) ,
//         reduxFirestore(fbConfig),
//         reactReduxFirebase(fbConfig)
//     )
//      );
store.firebaseAuthIsReady.then(() => {

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>
    , document.getElementById('root'));

})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
