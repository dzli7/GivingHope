import React from 'react';
import { Link } from 'react-router-dom';

export const COLUMNS = [
    /*{
        Header: "Donate Here",
        accessor: 'id',
    },*/
    {
        Header: 'Child Name',
        accessor: 'name',
    },
    {
        Header: 'Age',
        accessor: 'age'
    },
    {
        Header: 'Toy',
        accessor: 'gift'
    },
    {
        Header: "Donation Link",
        accessor: 'link',
        Cell: e =><a href={e.value}> Click Here </a>
    }
]