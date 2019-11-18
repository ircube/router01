import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from '../functions/auth';



export interface PrivateRouteProps {
    children: React.ReactNode;
    path: string;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, path }: PrivateRouteProps) => {
        return (
            <Route
                render={({ location }) =>
                    fakeAuth.isAuthenticated ? (
                        children
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        );
    }
export default PrivateRoute;
