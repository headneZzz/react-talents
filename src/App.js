import React from 'react';
import LoginPage from "./pages/LoginPage";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={MainPage}/>
                <Route exact path="/login" component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
