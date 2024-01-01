import { useState } from "react";
import "./App.css";
import { Catalogue, Members, Track } from "../Index";
import { Routes, Route } from "react-router-dom";
import Browsebook from "./Components/Browsebook";
import Signin from "./Components/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/books" element={<Browsebook />} />
        <Route path="/users" element={<Members />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/book/:title" element={<Track />} />
      </Routes>
    </>
  );
}

export default App;
