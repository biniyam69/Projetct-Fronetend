import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Authentication/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  </Router>
);
