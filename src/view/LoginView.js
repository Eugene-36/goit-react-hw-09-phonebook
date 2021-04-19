import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "./LoginView.module.css";
console.log(authOperations);

export default function LoginView() {
  //console.log(props);
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    Setemail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    Setpassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    Setemail("");
    Setpassword("");

    //state.onLogin(state);
    //this props ; this state

    //Setpassword({ name: "", email: "", password: "" });
  };
  return (
    <div className={s.centered}>
      {" "}
      <form onSubmit={handleSubmit} autoComplete="off" className={s.fr}>
        <h1 className={s.head}>Страница логина</h1>
        <label className={s.label}>
          Почта
          <input
            className={s.st}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            className={s.st}
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button className={s.bt} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

// class LoginView extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { email, password } = this.state;

//     return <div></div>;
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
