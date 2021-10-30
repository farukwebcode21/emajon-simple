import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const uselocation = useLocation();
    console.log("came form", uselocation.state?.form);


    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                <input type="email" name="" id="" placeholder="Your Email" />
                <br/>
                <input type="password" name="" id="" placeholder="password" />
                <br/>
                <input id="submit" type="submit" value="Submit"/>
                </form>
                <p>new to ema-john ? <Link to="/register">Create Account</Link></p>
                <div>-------------or-----------------</div>
                <button
                    className="btn-regular"
                    onClick={signInUsingGoogle}
                >Google Sign In</button>
            </div>

        </div>
    )
}

export default Login
