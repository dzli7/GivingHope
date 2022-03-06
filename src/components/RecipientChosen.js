import React from 'react'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Paypal from './Paypal';


export default function RecipientChosen() { 
    const [checkout, setCheckOut] = useState(false);

    return (
        <div class= 'container'>
            <h2>
        Child Name: Joon Young Park
      </h2>
        Toy: Dildo <br></br>
        Price: $69.00 <br></br>
        Age: 2
        <p>
          Joon Young Park is a little boy who escaped from North Korea. <br></br>
          Joon has no money or food and just wants a dildo for Christmas. <br></br>
        </p>
      {checkout ? (
        <Paypal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Click to Donate!
        </button>
      )}
           
        </div>
    )

}
