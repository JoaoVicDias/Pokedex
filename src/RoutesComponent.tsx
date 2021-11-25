import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home/index'

const RoutesComponent: React.FC = () =>
(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/pokemon/:pokemonId" element={null} /> */}
            <Route path="*" element={<Navigate replace to='/' />} />
        </Routes>
    </BrowserRouter>
)



export default RoutesComponent

