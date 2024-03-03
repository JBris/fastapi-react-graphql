import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div id="header" className="flex flex-row w-full shadow-md mb-0.5">
            <div className="navbar bg-base-100 rounded-box">
                <div className="navbar-start pl-20 text-2xl">
                    <h1>FastAPI React GraphQL</h1>
                </div>
                <div className="navbar hidden lg:flex">
                    <ul className="menu menu-horizontal text-2xl">
                        <li>
                            <Link to="/iris">Iris</Link>
                        </li>
                        <li>
                            <Link to="/predictions">Predictions</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}