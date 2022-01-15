import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutIcon from './components/AboutIcon';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="about" element={<About />} />
                </Routes>
                <AboutIcon />
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
