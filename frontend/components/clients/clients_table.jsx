import React from "react";
import { useTable, useSortBy } from "react-table";
import { Link, withRouter } from "react-router-dom";

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data
    })
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    if (row.original.home_phone === " " || row.original.home_phone === "undefined") {
                        row.values.home_phone = " "
                    } else {
                        row.values.home_phone = `(${row.values.home_phone.slice(0, 3)}) ${row.values.home_phone.slice(3, 6)}-${row.values.home_phone.slice(6)}`
                    }
                    if (row.original.cell_phone === " " || row.original.cell_phone === "undefined") {
                        row.original.cell_phone = " "
                    } else {
                        row.values.cell_phone = `(${row.values.cell_phone.slice(0, 3)}) ${row.values.cell_phone.slice(3, 6)}-${row.values.cell_phone.slice(6)}`
                    }
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}><Link to={`/clients/${row.values.id}`}>{cell.render('Cell')}</Link></td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
};

function ClientsIndexTable(props) {
    const data = React.useMemo(() => props.clients);
    const columns = React.useMemo(
        () => [
            {
                Header: 'Client Info',
                columns: [
                    {
                        Header: 'Client ID',
                        accessor: 'id',
                    },
                    {
                        Header: 'First Name',
                        accessor: 'first_name',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'last_name',
                    },
                    {
                        Header: 'Email',
                        accessor: 'email',
                    },
                    {
                        Header: 'Address',
                        accessor: 'address',
                    },
                    {
                        Header: 'Cell Phone',
                        accessor: 'cell_phone',
                    },
                    {
                        Header: 'Home Phone',
                        accessor: 'home_phone',
                    },
                ],
            },
            {
                Header: 'Vehicle Info',
                columns: [
                    {
                        Header: 'Make',
                        accessor: 'make',
                    },
                    {
                        Header: 'Model',
                        accessor: 'model',
                    },
                    {
                        Header: 'Year',
                        accessor: 'year',
                    },
                    {
                        Header: 'Registration',
                        accessor: 'registration',
                    },
                    {
                        Header: 'Last Service',
                        accessor: 'last_service',
                    },
                ],
            },
        ],
        []
    )
    return (
        <div className="top-clients-table-container">
            <Table columns={columns} data={data} />
        </div>
    )
}

export default ClientsIndexTable;