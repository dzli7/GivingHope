import React from 'react'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const cookies = new Cookies();




export default function DonorHomepage( ){ 
    
    return (
        <div class= 'container'>
            <h1>Welcome *INSERT DONOR NAME</h1>
            <Link to= '/make-donation'>
                    <button class= 'btn btn-secondary'>Donate Now !</button>
            </Link>
        </div>
    )

}
