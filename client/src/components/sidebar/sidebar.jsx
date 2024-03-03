import Select from "react-select";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setX, setY } from "../../features/variables/relationshipSlice";
import { setLimit } from "../../features/pagination/paginationSlice";
import { config } from '../../config/config';

export default function Sidebar() {
    const options = config.IRIS_FIELDS;

    const x = useSelector(state => state.relationship.x);
    const y = useSelector(state => state.relationship.y);
    const limit = useSelector(state => state.pagination.limit);

    const dispatch = useDispatch()

    return (
        <div id="sidebar" className="flex flex-col w-1/4 shadow-md ml-1 p-6">

            <div id="header-wrapper flex flex-col">
                <h1 className="text-2xl text-center">Visualise</h1>
            </div>

            <div className="divider"></div>

            <div id="select-wrapper flex flex-col">
                <Select
                    id="select-predictor"
                    placeholder="Predictor"
                    className="w-full max-w-sm m-2.5"
                    options={options}
                    onChange={
                        e => dispatch(setX(e.value))
                    }
                    defaultValue={x}
                />

                <Select
                    id="select-response"
                    placeholder="Response"
                    className="w-full max-w-sm m-2.5"
                    options={options}
                    onChange={
                        e => dispatch(setY(e.value))
                    }
                    defaultValue={y}
                />

                <input
                    type="number"
                    placeholder="Pagination Limit"
                    className="input input-bordered w-full max-w-sm m-2.5"
                    step="any"
                    min="1"
                    max="250"
                    defaultValue={limit}
                    onChange={
                        e => dispatch(setLimit(e.target.value))
                    }
                />
            </div>
        </div >
    );
}