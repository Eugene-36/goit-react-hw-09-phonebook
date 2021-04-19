import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "./RegisterView.module.css";
console.log(s);
export default function RegisterView() {
  // state = {
  //   name: "",
  //   email: "",
  //   password: "",
  // };
  const dispatch = useDispatch();
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

  const handleChangeEmail = (e) => {
    Setemail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    Setpassword(e.target.value);
  };
  const handleNameChange = (e) => {
    Setname(e.target.value);
  };
  // const handleChange = (name, value) => {
  //   SetState({ [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    Setemail("");
    Setpassword("");
    Setname("");

    // this.props.onRegister(this.state);
    // this.setState({ name: "", email: "", password: "" });
  };

  // const { name, email, password } = this.state;

  return (
    <div>
      <h1 className={s.centr}>Страница регистрации</h1>

      <form onSubmit={handleSubmit} autoComplete="off" className={s.postcard}>
        <div className={s.formrow}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>
        <div className={s.formrow}>
          <label>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
        </div>
        <div className={s.formrow}>
          <label>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className={s.edit}
            />
          </label>
        </div>
        <button className={s.floatingButton} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
