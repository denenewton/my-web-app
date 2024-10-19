import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SearchProvider } from "../src/contex/SearchContext";
import router from "./route";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </StrictMode>
);
