import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {} from '../../Controllers/Redux/authSlice'

import './login.css'

export default ()=>{

    const dispatch = useDispath();

    const [formInput, setFormInput] = useState({
            name: "",
            password: "",


    });

    function inputChanged(e){
            setFormInput({
                ...formInput, //sets the input as the previous input
                [e.target.name]:e.target.value //gets whats in the input

            })


    }

    function submit(e){
         dispatch(signIn(formInput));
        e.preventDefault();


    }

return (

    <div className="loginBG">
            <form className ='login-panel'>
                <h1>Login:</h1>
                <input name='name' placeholder='Name' onChange ={inputChanged}  value = {formInput.name}> </input>
                <input name='password' type='password' placeholder='Password' onChange ={inputChanged} value = {formInput.password} > </input>
                <button type='submit'  onClick ={submit}> Login </button>
            </form>

    </div>
)

}