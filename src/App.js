import React from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import UserTable from "./components/UserTable";
import AddData from "./components/AddData";

const App = () => {
  return (
    <div className="dark:bg-[#101010] bg-[#F9F9F9]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UserTable />} />
            <Route path="adddata" element={<AddData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
