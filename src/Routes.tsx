import React from 'react'
import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home/index'
import Pokemon from './pages/Pokemon'

const Routes: React.FC = () =>
(
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:pokemonId" element={<Pokemon/>} />

            <Route path="*" element={<Navigate replace to='/' />} />
        </Switch>
    </BrowserRouter>
)



export default Routes

