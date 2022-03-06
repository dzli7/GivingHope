import React from 'react'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { render } from '@testing-library/react';
import Entry from './Entry';
import AddEntry from './AddEntry';

const cookies = new Cookies();



const Entries = ( {entries, onDelete} ) => { 
        return (
            <div class= 'container'>
                {entries.map((entry) => (
                <Entry key={entry.id} entry={entry} onDelete={onDelete} />
                ))}
            </div>

        )
    }


export default Entries