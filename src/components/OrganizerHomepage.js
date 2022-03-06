import React from 'react'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import Entries from './Entries';
import { useState } from 'react';
import AddEntry from './AddEntry';
import { render } from '@testing-library/react';
import { Table } from './Table';
import {OrgTable} from './OrgTable';

const cookies = new Cookies();

export default function OrganizerHomepage( {entries, setEntries} ){
    
    const deleteEntry = async (id) => {
        await fetch(`http://localhost:5000/entries/${id}`, {
            method: 'DELETE'
        })
        setEntries(entries.filter((entry) => entry.id !== id))
    }

    const addEntry = async (entry) => {
        const res = await fetch('http://localhost:5000/entries', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(entry)
        })
  
        const data = await res.json()
        setEntries([...entries], data)
  
  
        // const id = Math.floor(Math.random() * 10000) + 1
        // const newEntry = {id, ...entry}
        // setEntries([...entries, newEntry])
    }


    return (
            <div>
                <header className ='header'>
                    <h1>Welcome John!</h1>
                    <Link to= '/add-entry-page'>
                        <button class= 'btn btn-secondary'>Add Entry</button>
                    </Link>
                </header>
                
                <h3>Your current entries:</h3>
                
                <Entries entries={entries} onDelete={deleteEntry} />
               
                <AddEntry onAdd={addEntry}/>
            </div>
        )
        
    
}
