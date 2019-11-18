import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AuthButton from './AuthButton';
import PublicPage from './PublicPage';
import LoginPage from './LoginPage';
import ProtectedPage from './ProtectedPage';
import PrivateRoute from './PrivateRoute';


const Root = () => {
    return (
        <div className='root'>
            <Router>
                <div>
                    <AuthButton />

                    <ul>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                        <li>
                            <Link to="/protected">Protected Page</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/public">
                            <PublicPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <PrivateRoute path="/protected">
                            <ProtectedPage />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Root;
