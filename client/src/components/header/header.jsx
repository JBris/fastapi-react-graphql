import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div id="header" className="flex flex-row w-full shadow-md">
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

                <div className="navbar-end mr-10 text-2xl">
                    <button
                        className="btn w-1/5 bg-secondary-content shadow-md rounded-2xl"
                        onClick={() => document.getElementById('info_modal').showModal()}>
                        <FontAwesomeIcon
                            icon={faQuestion}
                            size="2x"
                        />
                    </button>
                </div>
                <dialog id="info_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Information</h3>
                        <p className="py-4">This application demonstrates the use of FastAPI, React, and GraphQL.</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div >
    );
}
