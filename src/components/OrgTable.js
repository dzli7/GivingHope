import React, { useMemo } from 'react'
import { useTable } from 'react-table'
//import DATA from './DATA.json'
import { COLUMNS } from './OrgColumns'
import './table.css'

export const OrgTable = ( {entries} ) => {

    const columns = useMemo(() => COLUMNS, [])
    //const data = useMemo(() => DATA, [])
    
    const tableInstance = useTable({
        columns: columns,
        data: entries
    })

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead> 
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}