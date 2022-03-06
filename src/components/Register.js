import React from 'react'
//import Button from './Button'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import axios from 'axios';

const cookies = new Cookies();


class Register extends React.Component{    
    state={
        email:"",
        password: "",
        organization: "",
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        let body = {
            email: this.state.email,
            password: this.state.password,
            organization: this.state.password
        }

        await axios.post("http://localhost:8001/register", body)
            .then(res => {
                cookies.set('user', res.data._id, { path: '/' });
            }).catch(err => {
                console.error(err)
            })  
    }
    
    render() {
        return (
            <div class= 'container'>
                <h1>Let's Register!</h1>
                <form  onSubmit= {this.handleSubmit}>
                    <label>Please enter email below: </label>
                    <br />
                    <input type='email' name= 'email' placeholder= 'email' required onChange= {this.handleChange}/>
                    <br />
                    <label>Please enter password below: </label>
                    <br />
                    <input type='password' name= 'password' placeholder= 'password' required onChange= {this.handleChange}/>
                    <br />
                    <label>What organization are you a part of ?: </label>
                    <br />
                    <input type='text' name= 'organization' placeholder= 'organization' required onChange= {this.handleChange}/>
                    <br />

                    <button className= 'btn btn' onSubmit={this.handleSubmit}>Register</button>

                    <Link to= '/'>
                        <button class= 'btn btn-secondary'>Back</button>
                    </Link>
                </form>
                {/* <Button color = 'Green' text = 'Register' link = "/"/> */}
            </div>
        )
    }
}

export default Register