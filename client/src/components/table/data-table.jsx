import * as React from 'react'
import { useEffect } from 'react';
import { addListener } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from 'react-redux';
import { config } from '../../config/config';

export default function DataTable(
    { data, limit }
) {
    const rows = data.slice(0, limit);

    return (
        <div className="overflow-x-auto h-96">

            <table className="table">
                <thead className='bg-white border-b text-xl sticky top-0'>
                    <tr>
                        <th />
                        {
                            config.IRIS_FIELDS.map(
                                ele => (
                                    <th key={ele.value}>{ele.label}</th>
                                )
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(
                            (row, i) => (
                                <tr key={i + "_row"} className="hover">
                                    <th key={i + "_id"}>{i + 1}</th>
                                    <td key={i + "_sepalWidth"}>{row.sepalWidth}</td>
                                    <td key={i + "_sepalLength"}>{row.sepalLength}</td>
                                    <td key={i + "_petalWidth"}>{row.petalWidth}</td>
                                    <td key={i + "_petalLength"}>{row.petalLength}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}