import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Album from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
    return <div>
        <StylesProvider>
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