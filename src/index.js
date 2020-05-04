import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { App, Home, Login, Register } from 'ROOT/containers';

const rootElement = document.getElementById('root');
ReactDOM.render(
<Router>
    <App />
    <Route exact path="/" component={ Home } />
    <Route path="/home" component={ Home } />
    <Route path="/login" component={ Login } />
    <Route path="/register" component={ Register } />
</Router>
, rootElement);