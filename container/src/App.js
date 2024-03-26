import {MarketingApp} from './components/MarketingApp';
import React from 'react';

export function App() {
    return <>
    <header>
        <nav>
            <ul>
                <li>App</li>
                <li>Login</li>
            </ul>
        </nav>
    </header>
    <main>
        <MarketingApp />
    </main>
    </>
}