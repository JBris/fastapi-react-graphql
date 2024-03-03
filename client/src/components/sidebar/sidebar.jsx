import Select from "react-select";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export default function Sidebar() {
    const [selectedOption, setSelectedOption] = useState("");

    const handlePredictorTypeSelect = (e) => {
        console.log(e.value)
        setSelectedOption(e.value);
    };

    const handleResponseTypeSelect = (e) => {
        console.log(e.value)
        setSelectedOption(e.value);
    };

    return (
        <div id="sidebar" className="flex flex-col w-1/4 shadow-md ml-1 p-6">

            <div id="header-wrapper flex flex-col">
                <h1 className="text-2xl mb-5">Visualise</h1>
            </div>

            <div id="select-wrapper flex flex-col">
                <Select
                    id="select-predictor"
                    placeholder="Predictor"
                    className="w-full max-w-sm m-2.5"
                    options={options}
                    onChange={handlePredictorTypeSelect}
                    value={options.find(function (option) {
                        return option.value === selectedOption;
                    })}
                />

                <Select
                    id="select-response"
                    placeholder="Response"
                    className="w-full max-w-sm m-2.5"
                    options={options}
                    onChange={handleResponseTypeSelect}
                    value={options.find(function (option) {
                        return option.value === selectedOption;
                    })}
                />
            </div>

            <div id="confirm-wrapper flex flex-col">
                <button className="btn w-1/4 bg-base-100 shadow-md mt-5 rounded-2xl">
                    <FontAwesomeIcon
                        icon={faCheck}
                        size="2x"
                    />
                </button>
            </div>
        </div >
    );
}