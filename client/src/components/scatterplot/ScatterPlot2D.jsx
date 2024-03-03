import React from 'react';

import Plot from 'react-plotly.js';

export default function Scatterplot2D(
    { title, xaxis, yaxis, data, limit }
) {
    const x = data
        .slice(0, limit)
        .map(row => row[xaxis]);

    const y = data
        .slice(0, limit)
        .map(row => row[yaxis]);

    return (
        <div id="scatter-2d" className='flex flex-col w-full h-full justify-normal items-start'>
            <Plot
                style={{ width: "80%", height: "80%" }}
                data={[
                    {
                        x: x,
                        y: y,
                        mode: "markers",
                        type: "scatter",
                    },
                ]}
                layout={{
                    title: title,
                    xaxis: {
                        title: xaxis,
                    },
                    yaxis: {
                        title: yaxis,
                    },
                }}
            />
        </div>
    );
}


