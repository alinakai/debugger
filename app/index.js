import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import App from 'App';

//Reducers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './Controllers/Redux/bugSlice'
import userReducer from './Controllers/Redux/userSlice'

const reducer = combineReducers({
auth: authReducer,
bug: bugReducer,
user: userReducer,


})

const store = configureStore ({

    reducer
})


createRoot(document.getElementById('root')).render(<Provider store = {store}><App /></Provider>);
/*
ReactDOM.render(

    <Provider store = {store}>
        <App />

    </Provider>
    ,

    document.getElementById('root')
    
); */

