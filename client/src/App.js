
import "./App.css";
import React from "react";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import { Box } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetailView from "./components/details/DetailView";
import Cart from "./components/cart/Cart";
import Dashboard from "./components/dashboard/Dashboard";
import List from './components/dashboard/list/List'
import Single from './components/dashboard/single/Single'
import New from './components/dashboard/New/New'
import ProductList from "./components/dashboard/productList/ProductList";
import NewProduct from "./components/dashboard/newProduct/NewProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import ViewPro from "./components/dashboard/viewpro/ViewPro";
import OrderList from "./components/dashboard/orderlist/OrderList";
import Earn from "./components/home/Earn";
import About from './components/OtherPage/About';
import ContactPage from './components/OtherPage/ContactPage';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/users" element={<ProtectedRoute><List /></ProtectedRoute>} />
            <Route path="/dashboard/users/:userId" element={<ProtectedRoute><Single /></ProtectedRoute>} />
            <Route path="/dashboard/users/new" element={<ProtectedRoute><New /></ProtectedRoute>} />
            <Route path="/dashboard/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
            <Route path="/dashboard/products/:productId" element={<ProtectedRoute><ViewPro /></ProtectedRoute>} />
            <Route path="/dashboard/products/newpro" element={<ProtectedRoute><NewProduct /></ProtectedRoute>} />
            <Route path="/dashboard/orders" element={<ProtectedRoute><OrderList /></ProtectedRoute>} />
            <Route path="/product/:id" element={<DetailView />} />
          {/* <Route path= '/about' element={<About />} /> */}
          <Route path= '/contactUs' element={<ContactPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
