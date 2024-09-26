import { Outlet } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";

function Layout() {
  return (
    <>
      <Header />
      <div className="w-full flex">
        <Aside />
        <main className="w-full p-5 lg:w-3/4">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
