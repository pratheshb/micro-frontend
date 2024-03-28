import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import React from 'react';

export function App() {
    return <>
        <BrowserRouter>
            <Header />
            <MarketingApp />
        </BrowserRouter>
    </>
}