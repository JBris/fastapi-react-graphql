import Scatterplot2D from "../../components/scatterplot/ScatterPlot2D";
import DataTable from '../../components/table/data-table';
import { useQuery } from '@apollo/client';
import { GET_IRIS } from '../../gql/queries';
import { useSelector } from 'react-redux';

export default function IrisPage() {
    const x = useSelector(state => state.relationship.x);
    const y = useSelector(state => state.relationship.y);
    const limit = useSelector(state => state.pagination.limit);

    const { loading, error, data } = useQuery(
        GET_IRIS, {
        variables: { pagination: {} }
    });

    if (loading) return (
        <div className="flex flex-col w-full h-full shadow-md">
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-8 h-64 w-64"></div>
            </div>
        </div>
    );

    if (error) return `Error! ${error.message}`;

    return (
        <div id="iris-page" className="flex flex-col w-full h-full shadow-md">
            <div className="card w-full h-full bg-base-100">
                <div role="tablist" className="tabs tabs-bordered mt-5">
                    <input type="radio" name="iris_tabs" role="tab" className="tab text-xl" aria-label="Scatterplot" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-100 rounded-box p-6 w-full h-full">
                        <div className="card-body">
                            <Scatterplot2D
                                title="Iris"
                                xaxis={x}
                                yaxis={y}
                                data={data.iris}
                                limit={limit}
                            />
                        </div>
                    </div>

                    <input type="radio" name="iris_tabs" role="tab" className="tab text-xl" aria-label="Table" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-100 rounded-box p-6 w-full h-full">
                        <div className="card-body">
                            <DataTable
                                data={data.iris}
                                limit={limit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}