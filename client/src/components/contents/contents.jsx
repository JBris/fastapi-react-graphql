import { Outlet } from "react-router-dom";

export default function Contents() {
    return (
        <div id="contents" className="flex flex-col w-full h-full shadow-md ml-1 p-1">
            < Outlet />
        </div >
    );
}