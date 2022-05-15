import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Init from "./Init/Init";
import Container from './Container/Container';
import '../assets/styles/reset.css';
import '../assets/styles/styles.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Init />} />
                <Route path='/container' element={<Container />} />
            </Routes>
        </BrowserRouter>
    )
}