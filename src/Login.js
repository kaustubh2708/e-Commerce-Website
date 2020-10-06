import React,{useState} from 'react'
import "./Login.css"
import{Link , useHistory} from "react-router-dom";
import { auth } from './Firebase';


function Login() {
    const history = useHistory();
    const[email, setEmail]= useState('');
    const[password, setPassword]=useState('');

    const login= (event)  => {
        event.preventDefault();//prevents refresh
        //login logic/
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) =>{
                //Logged in successfully
                //Redirect
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };
    const register = (event) => {
        event.preventDefault();//prevents refresh
        //register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //Created a user and logged in
                //Redirect
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG42.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password"/>
                    <button 
                        onClick={login}
                        type="submit" 
                        className="login__signIn">Sign In</button>
                </form>
                <p>
                By signing-in you agree to our Conditions of Use 
                & Sale. Please see our Privacy Notice, our Cookies Notice
                and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__create">Create your Account</button>
            </div>
        </div>
    )
}

export default Login
