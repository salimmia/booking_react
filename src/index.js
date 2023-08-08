import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Generals from "./components/Generals";
import Contact from "./components/Contact";
import Majors from "./components/Majors";
import MakeReservation from "./components/MakeReservation";
import ReservationSummary from "./components/ReservationSummary";
import SearchAvailability from "./components/SearchAvailability";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/generals-quarters", element: <Generals /> },
      { path: "/majors-suite", element: <Majors /> },
      { path: "/contact", element: <Contact /> },
      { path: "/make-reservation", element: <MakeReservation /> },
      { path: "/reservation-summary", element: <ReservationSummary /> },
      { path: "/search-availability", element: <SearchAvailability /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
