import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import authSelectors from "../redux/auth/auth-selectors";
export default function PublicRoute({
    
    redirectTo,
    restricted = false,
    children,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ?  <Redirect to={redirectTo} /> : children}
        </Route>
    )
}