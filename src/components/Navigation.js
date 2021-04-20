import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../redux/auth";
const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getisAuthenticated(state),
// });
// export default connect(mapStateToProps)(Navigation);
// isAuthenticated

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getisAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Главная
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/todos"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
}

// const mapStateToProps = (state) => ({
//   isAuthenticated: authSelectors.getisAuthenticated(state),
// });
// export default connect(mapStateToProps)(Navigation);
