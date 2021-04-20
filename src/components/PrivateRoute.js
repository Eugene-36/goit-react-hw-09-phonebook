import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import authSelector from "../redux/auth/auth-selector";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
export default function PrivateRoute({
  isAuthenticated,
  redirectTo,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelector.getisAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelector.getisAuthenticated(state),
// });

//  connect(mapStateToProps)(PrivateRoute);
