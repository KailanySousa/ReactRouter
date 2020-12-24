import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../../views/examples/Home';
import About from '../../../views/examples/About';
import './index.css';

const Content = props => {
    return (
        <main className="Content">
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    )
}

export default Content;