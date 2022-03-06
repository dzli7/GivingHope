import React from 'react'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import Entries from './Entries';
import { useState } from 'react';
import { Table } from './Table';

const cookies = new Cookies();

export default function MakeDonation( {entries} ) { 
        return (
            <div >
                <h1>Please consider donating to one of the entries below!</h1>
                <center><Table entries={entries}/></center>
                
            </div>
        )
    
}
