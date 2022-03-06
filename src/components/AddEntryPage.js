import React from 'react'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import Entries from './Entries';
import { useState } from 'react';
import { Table } from './Table';
import AddEntry from './AddEntry';

const cookies = new Cookies();

export default function AddEntryPage( {addEntry} ) { 
        return (
            <div class= 'container'>
                <h1>Enroll Child</h1>
                <AddEntry />
            </div>
        )
    
}
