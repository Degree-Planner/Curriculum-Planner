import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import useStyles from './styles';
import { AppBar } from '@material-ui/core';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import DegreesList from './components/DegreesList/DegreesList';
import Admin from './components/Admin/Admin';
import AddDegree from './components/AddDegree/AddDegree';
import Footer from './components/Footer/Footer';

const App = () => {
    const classes = useStyles();
    
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar/>
                <div className={classes.topAppBar}>
                <Switch>
                    <Route path="/csc530/dev" exact component={Home}/>
                    <Route path="/csc530/dev/auth" exact component={Auth}/>
                    <Route path="/csc530/dev/degrees" exact component={DegreesList}/>
                    <Route path="/csc530/dev/admin" exact render={() => (
                        !localStorage.getItem('profile') ? (
                            <Redirect to="/csc530/dev/auth"/>
                        ) : (
                            <Admin/>
                        )
                    )}/>
                    <Route path="/csc530/dev/admin/add" exact render={() => (
                        !localStorage.getItem('profile') ? (
                            <Redirect to="/csc530/dev/auth"/>
                        ) : (
                            <AddDegree/>
                        )
                    )}/>
                </Switch>
                </div>
                <Footer/>
            </Container>
        </BrowserRouter>
    );
}

export default App;
