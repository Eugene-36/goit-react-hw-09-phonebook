import React, { Component, Suspense, lazy, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";

//? Новые импорты.
import AppBar from "./components/AppBar";
import Container from "./components/Container/Container";
import { authOperations } from "./redux/auth";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./view/HomeView"));
const RegisterView = lazy(() => import("./view/RegisterView"));
const LoginView = lazy(() => import("./view/LoginView"));
const TodoViews = lazy(() => import("./view/TodosVIew"));

export default function App() {
  const dispatch = useDispatch();

  // componentDidMount() {
  //   this.props.onCurrentUser();
  // }
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            component={RegisterView}
            redirectTo="/todos"
          />
          <PublicRoute
            path="/login"
            component={LoginView}
            restricted
            redirectTo="/todos"
          />
          <PrivateRoute
            path="/todos"
            redirectTo="/login"
            component={TodoViews}
          />
        </Switch>
      </Suspense>
    </Container>
  );
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {
//   onCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
