
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './Page';
import Login from './Login';
export default function Rout(){

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/entertainment" element={<Page type={"entertainment"} />} />
          <Route path="/world" element={<Page type={"world"} />} />
          <Route path="/business" element={<Page type={"business"} />} />
          <Route path="/sport" element={<Page type={"sport"}/>} />
          <Route path="/science" element={<Page type={"science"}/>} />
          <Route path="/technology" element={<Page type={"technology"} />} />
        </Routes>
    </Router>
  );
};


