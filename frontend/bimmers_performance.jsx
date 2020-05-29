import configureStore from './store/store';
import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
// import * as commands from './util/session_api_util';
// import * as commands2 from './util/photo_api_util';
// import { login } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    // window.getState = store.getState;
    // window.dispatch = store.dispatch; // just for testing!
    // window.fetchPhotos = fetchPhotos;
});