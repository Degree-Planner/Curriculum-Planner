import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useStyles from './styles';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import DegreesList from './components/DegreesList/DegreesList';

const App = () => {
    const classes = useStyles();
    
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar/>
                <div className={classes.appBar}>
                <Switch>
                    <Route path="/csc530/dev" exact component={Home}/>
                    <Route path="/csc530/dev/auth" exact component={Auth}/>
                    <Route path="/csc530/dev/degrees" exact component={DegreesList}/>
                </Switch>
                </div>
            </Container>
        </BrowserRouter>
    );
}

export default App;