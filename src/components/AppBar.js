import React from "react";

import Navigation from "./Navigation";
import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav";
import { authSelectors } from "../redux/auth";
// import { authSelectors } from "../redux/auth";
import { useSelector } from "react-redux";
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

//const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getisAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);

//isAuthenticated
export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getisAuthenticated);
  return (
    <header style={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getisAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
