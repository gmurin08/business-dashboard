import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import App from './App';
import ScheduleView from './components/ScheduleView/ScheduleView'
import AppointmentView from "./components/AppointmentView/AppointmentView"
import CustomerView from "./components/CustomerView/CustomerView"
import Home from './components/Home/Home'
import Customer from './components/Customer/Customer';
import SettingsView from './components/SettingsView/SettingsView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="home" element={<Home/>}/>
          <Route path="appointments" element={<AppointmentView/>}/>
          <Route path="scheduling" element={<ScheduleView/>}/>
          <Route path="customers" element={<Outlet/>}>
            <Route index element={<CustomerView/>}/>
            <Route path=":customerId" element={<Customer />}/>
          </Route>
          <Route path="settings" element={<SettingsView/>}/>
          <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
