import React from 'react';
import './App.css';

import Menu from '../components/layouts/Menu/index';
import Content from '../components/layouts/Content/index';

const App = props => {
    return (
        <div className="App">
            <Menu />
            <Content />
        </div>
    )
}

export default App;