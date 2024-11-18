import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import * as Sentry from "@sentry/react";
import Layout from "./Pages/Layout";
import IPhonePage from "./Pages/Page";
import Iphone from "./Pages/Iphone";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Store from "./Pages/Store";
import Profile from "./Pages/Profile";
import AdminLayout from "./Admin/Pages_Admin_AdminLayout (1)";
import AdminDashboard from "./Admin/Pages_Admin_AdminDashboard";
import AdminOrders from "./Admin/Pages_Admin_AdminOrders";
import AdminProducts from "./Admin/Pages_Admin_AdminProducts";

const APPRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/iphone" element={<Iphone />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/store" element={<Store />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* <Route path="admin" element={<AdminLayout />}>
            <Route path="home" element={<AdminDashboard />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="products" element={<AdminProducts />} />
          </Route> */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default APPRouter;
