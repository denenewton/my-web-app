import { Link } from "react-router-dom"

export default function Aside() {
  return (
    <aside className="w-1/5 min-h-[92vh] flex-col place-content-between bg-gray-800 hidden lg:flex">

      <div className="hidden md:flex">
        <ul className="flex flex-col space-y-3 p-6 text-gray-100">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/pages/profile">Profile</Link></li>
          <li><Link to="/pages/about">About</Link></li>
          <li><Link to="/pages/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="p-5">
        <p className="text-gray-100 text-xs font-extralight ">&copy; Copyright 2024 denenewton</p>
      </div>

    </aside>
  )
}
