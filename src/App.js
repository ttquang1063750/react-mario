import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/create' component={CreateProject} />
                    <Route path='/project/:id' component={ProjectDetail} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={SignUp} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
