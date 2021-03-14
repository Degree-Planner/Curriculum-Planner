import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import makeStyles from './styles';

const App = () => {
    const classes = makeStyles();

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar/>
                <div className={classes.navbar}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
                </div>
            </Container>
        </BrowserRouter>
    );
}

export default App;