import React from 'react'
//import Button from './Button'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
const cookies = new Cookies();

class Confirmation extends React.Component{    
    render() {
        return (
            <div class= 'container'>
                <h1>Order Confirmed! You are gonna make someone very happy! Thank you so much!
                </h1>
            </div>
        )
    }
}

export default Confirmation