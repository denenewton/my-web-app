import { Link } from "react-router-dom";
import {useRef , useContext} from 'react';
import SearchContext from '../contex/SearchContext';

export default function Header() {
    const ref = useRef(null);
    // @ts-ignore
    const { setSearchText,SearchText } = useContext(SearchContext);

    return (
        <header className="w-full">
            <nav className="navbar shadow-sm">
                <Link to="/" className="btn btn-ghost text-xl hidden md:flex">Dene</Link>
                <div className="navbar-start">
                    <DropdownHidden />
                </div>
                <div className="navbar-center hidden md:flex lg:hidden">
                    <NavMenu className="menu menu-horizontal" />
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <ButtonGhost />

                        <div tabIndex={2} className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           <form
                               onSubmit={( event) => {
                                   event.preventDefault();
                                   if (ref.current) {
                                       // @ts-ignore
                                       setSearchText(ref.current.value)
                                   }
                               }}
                           >
                            <input
                                ref={ref}
                                className="w-full h-full rounded-box m-0 font-medium text-indigo-400 pl-3 py-1 focus:outline-none"
                                type="search"
                                placeholder="Search"
                            />
                           </form>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end">
                        <Dropdown />
                    </div>
                </div>
            </nav>
        </header>
    );
}



function Dropdown() {
    return(
    <>   
        <div tabIndex={3} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="/images/me.jpg" />
            </div>
        </div>
        <ul tabIndex={3} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li> <Link to="/pages/profile" className="justify-between"> Profile <span className="badge">New</span></Link></li>
            <li><Link to="/pages/settings">Settings</Link></li>
            <li><Link to="">Logout</Link></li>
        </ul>
    </>
    )
}


function DropdownHidden() {
    return (
    <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn">
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

       <NavMenu 
        className ="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" 
       />

    </div>
    )
}

function NavMenu({className }: {className: string}) {
    return(
     <ul
        tabIndex={0}
        className={className}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pages/movies">Movies</Link></li>
        <li><Link to="/pages/profile">Profile</Link></li>
        <li><Link to="/pages/about">About</Link></li>
        <li><Link to="/pages/contact">Contact</Link></li>
    </ul>
    )
}


function ButtonGhost() {
    return (
        <button tabIndex={2} role="button" className="btn btn-ghost mr-1 btn-circle">
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
    )
}

