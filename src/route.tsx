import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Profile from "./pages/Profile.tsx";
import Movies from "./pages/Movies.tsx";
import SingleMovies from "./pages/SingleMovies.tsx";
import Person from "./pages/Person.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "pages/contact",
        element: <Contact />,
      },
      {
        path: "pages/about",
        element: <About />,
      },
      {
        path: "pages/profile",
        element: <Profile />,
      },
      {
        path: "pages/movies",
        element: <Movies />,
      },
      {
        path: "/pages/single_movie/:id_movie/:image_path",
        element: <SingleMovies />,
      },
      {
        path: "/pages/person/:id_person/:image_path",
        element: <Person />,
      },
    ],
  }, 
], { basename: '/dist'});


export default router;
