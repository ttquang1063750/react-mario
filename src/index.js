import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider, useSelector} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import {createFirestoreInstance} from 'redux-firestore';
import {getFirebase, isLoaded, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import firebase from './config/fbConfig';
import './index.css';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(getFirebase)),
    )
);

const rrfProps = {
    firebase,
    config: {
        userProfile: 'users',
        useFirestoreForProfile: true
    },
    dispatch: store.dispatch,
    createFirestoreInstance
};

const AuthIsLoaded = ({children}) => {
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth)) return <div className="container center">App Loading...</div>;
    return children
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded><App/></AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

