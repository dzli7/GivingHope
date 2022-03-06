import React from 'react'
import Button from './Button'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
const cookies = new Cookies();

class Login extends React.Component{    
    render() {
        return (
            <div class= 'container'>
                <h1>Login</h1>
            <label>If you are already a user enter email and password below</label>
            <br />
            <form onSubmit= {this.handleSubmit}>
                <input type='email' name= 'email' placeholder= 'email' required onChange= {this.handleChange}/>
                <br />
                <input type='password' name= 'password' placeholder= 'password' required onChange= {this.handleChange}/>
                <br />
                <button onSubmit={this.handleSubmit}>Log In</button>
                {/* <Button onSubmit={this.handleSubmit} text = 'Log In' link = '/'/> */}
            </form>
            <br />
            <label>Not Registered? It's quick to sign up!</label>
            <br />
            <Link to= '/register'>
                        <button class= 'btn btn-secondary'>Register</button>
            </Link>

            


            </div>
        )
    }
}

export default Login