import React from 'react'
//import Button from './Button'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
const cookies = new Cookies();

class OrgRegComplete extends React.Component{    
    render() {
        return (
            <div class= 'container'>
                <h1>Thanks for Registering! We will be in contact with you via email
                    so that we can learn more about your organization. We're looking forward to
                    working together! 
                </h1>
            </div>
        )
    }
}

export default OrgRegComplete