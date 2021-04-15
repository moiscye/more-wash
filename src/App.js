import "tailwindcss/dist/base.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReactGA from "react-ga";
import ScrollToTop from "helpers/useScrollToTop";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light";
import Footer from "components/footers/MiniCenteredFooter";

import AboutPage from "pages/AboutUs";
import BookingsPage from "pages/Bookings";
import ServicesPage from "pages/Services";
// import ServicesPage from "pages/ServicesPage";
import ContactPage from "pages/ContactPage";
import LandingPage from "pages/LandingPage";

// import FloatingMenu from "helpers/FloatingMenu";
import AdminRoute from "auth/routes/AdminRoute";
import PrivateRoute from "auth/routes/PrivateRoute";
import Dashboard from "auth/admin/Orders";
import Category from "auth/admin/Category";
import Product from "auth/admin/Product";

// initialize Google Analytics to collect traffic data
// ReactGA.initialize("UA-188553675-1");

export default function App() {
  // register a pageview event for GA
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <Router>
      <Header />
      {/* <FloatingMenu /> */}
      <ScrollToTop />
      <Switch>
        {/* Normal Routes  */}
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/about" exact component={AboutPage}></Route>
        <Route path="/contact" exact component={ContactPage}></Route>
        <Route path="/services" exact component={ServicesPage}></Route>
        <Route path="/bookings" exact component={BookingsPage}></Route>
        {/* Private Routes */}

        <PrivateRoute path="/user" exact component={Dashboard} />

        {/* Admin routes  */}
        <AdminRoute path="/admin" exact component={Dashboard} />
        <AdminRoute path="/admin/category" exact component={Category} />
        <AdminRoute path="/admin/product" exact component={Product} />

        {/* Fall back Route to handle unknown paths */}
        <Route path="*" exact component={LandingPage}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}
