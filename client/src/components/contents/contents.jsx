import { Outlet } from "react-router-dom";

export default function Contents() {
    return (
        <div id="contents">
            <Outlet />
        </div>
    );
}