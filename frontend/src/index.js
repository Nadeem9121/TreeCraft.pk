import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/bootstrap.custom.css";
import "./assets/index.css";
import App from "./App";
import PlaceOrderScreen from "./screen/PlaceOrderScreen";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import PaymentScreen from "./screen/PaymentScreen";
import CartScreen from "./screen/CartScreen";
import RegisterScreen from "./screen/RegisterScreen";
import ShippingScreen from "./screen/ShippingScreen";
import PrivateRoute from "./components/PrivateRoute";
import OrderScreen from "./screen/OrderScreen";
import OrderListScreen from "./screen/admin/OrderListScreen";
import ProfileScreen from "./screen/ProfileScreen";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./screen/admin/ProductListScreen";
import ProductEidtScreen from "./screen/admin/ProductEditScreen";
import UserEditScreen from "./screen/admin/UserEditScreen";
import UserListScreen from "./screen/admin/UserListScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/search/:keyword" element={<HomeScreen />} />

      <Route path="/page/:pageNumber" element={<HomeScreen />} />
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<HomeScreen />}
      />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />}></Route>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderListScreen />} />
        <Route path="/admin/productlist" element={<ProductListScreen />} />
        <Route
          path="/admin/productlist/:pageNumber"
          element={<ProductListScreen />}
        />
        <Route path="/admin/product/:id/edit" element={<ProductEidtScreen />} />
        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <RouterProvider router={router} />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics e ndpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
