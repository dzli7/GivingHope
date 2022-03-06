import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';

import { useState } from 'react'
import Cookies from 'universal-cookie';
import Register from './Register';
//const cookies = new Cookies();


export default function Landing() {

    return (
        <div className=  'container'>
                <Header />
                <p>Welcome to Send4Good! Our mission is to bring back the heart warming feeling of giving 
                   during the holidays.  
                </p>
                <div>
                    <Link to= '/Register'>
                            <button class= 'btn btn-secondary'>Register as Organizer</button>
                    </Link>
                    <Link to= '/login'>
                            <button class= 'btn btn-secondary'>Log In</button>
                    </Link>
                </div>
                <p>There are active gift requests! Please consider bringing holdiay cheer to a child in need today!
                </p>
                <Link to= "make-donation">
                            <button class= 'btn btn-secondary'>Donate Here</button>
                </Link>
                {/* <Register /> */}
                
        </div>
       
    )
}