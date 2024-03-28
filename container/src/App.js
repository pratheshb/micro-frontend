import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import React from 'react';

const generateClassName = createGenerateClassName({
    productionPrefix: 'app'
});

export function App() {
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <Header />
            <MarketingApp />
        </BrowserRouter>
    </StylesProvider>
}