import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="w-full">
            <nav className="navbar shadow-sm">
                <Link to="/" className="btn btn-ghost text-xl hidden md:flex">Dene</Link>
                <div className="navbar-start">
                    <div className="dropdown md:hidden">
                        <div tabIndex="0" role="button" className="btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/">Homepage</Link></li>
                            <li><Link to="/pages/profile">Profile</Link></li>
                            <li><Link to="/pages/about">About</Link></li>
                            <li><Link to="/pages/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex lg:hidden">
                    <ul className="menu menu-horizontal">
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="/pages/profile">Profile</Link></li>
                        <li><Link to="/pages/about">About</Link></li>
                        <li><Link to="/pages/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <button tabIndex="2" role="button" className="btn btn-ghost mr-1 btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <div tabIndex="2" className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <input className="w-full h-full rounded-box m-0 font-medium text-indigo-400 pl-3 py-1 focus:outline-none" type="search" name="" id="" />
                        </div>
                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex="3" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="/images/me.jpg" />
                            </div>
                        </div>
                        <ul tabIndex="3" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li> <Link to="/pages/profile" className="justify-between"> Profile <span className="badge">New</span></Link></li>
                            <li><Link to="/pages/settings">Settings</Link></li>
                            <li><Link to="">Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
