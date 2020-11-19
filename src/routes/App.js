import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Recommended from '../containers/Recommended';
import checkout from '../containers/checkout';
const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Recommended} />
        <Route exact path="/checkout" component={checkout} />
    </BrowserRouter>
)

export default App;