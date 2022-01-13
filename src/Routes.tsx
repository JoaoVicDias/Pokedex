import React from 'react'
import { BrowserRouter, Routes as Switch, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home/index'
import Pokemon from './pages/Pokemon'
import ServerError from './pages/ServerError'
import NotFound from './pages/NotFound'

const Routes: React.FC = () =>
(
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
            <Route path="/something-wrong" element={<ServerError />} />
            <Route path="/not-found" element={<NotFound />} />

            <Route path="*" element={<Navigate replace to='/not-found' />} />
        </Switch>
    </BrowserRouter>
)



export default Routes

