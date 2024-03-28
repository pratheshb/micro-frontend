import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Album from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

const App = () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Album} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}
const mount = (el) => {
    ReactDOM.render(<App />, el);
}

export { mount };