import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import s from "./Form.module.css";
import { v4 as unId } from "uuid";

//todo:
// import { connect } from "react-redux";
// import userAction from "../../redux/actions/create-user";
import todosOperations from "../../redux/actions/todos-operations";

export default function Form() {
  //loginInputId = shortid.generate();
  // numberInputId = shortid.generate();
  // objId = shortid.generate();

  const dispatch = useDispatch();
  const [name, Setname] = useState("");
  const [number, Setnumber] = useState("");
  const [id, Setid] = useState(unId());

  // state = {
  //   name: "",
  //   number: "",
  //   id: "",
  // };
  // const handlId = () => {
  //   Setid();
  // };
  const handleNumber = (event) => {
    Setnumber(event.currentTarget.value);
  };
  const handleChange = (event) => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    // this.setState({

    Setname(event.currentTarget.value);
    //   id: unId(),
    //   [event.currentTarget.name]: event.currentTarget.value,
    // });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //todo: редакс передал создание нового юзера
    if (name !== "") {
      dispatch(todosOperations.addTodo({ name, number, id }));
      // this.props.y(this.state);
      reset();
      return;
    }
  };
  const reset = () => {
    //this.setState({ name: "", number: "" });
    Setname("");
    Setnumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.fr}>
      <label htmlFor={unId()}>
        <input
          placeholder="Name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          id={unId()}
        />
      </label>

      <label htmlFor={unId()}>
        <br />

        <input
          placeholder="Number"
          name="number"
          type="text"
          value={number}
          onChange={handleNumber}
          id={unId()}
        />
      </label>
      <br />

      <button type="submit">Add contact</button>
    </form>
  );
}

// const mapDispatchToProps = {
//   y: todosOperations.addTodo,
// };
// export default connect(null, mapDispatchToProps)(Form);
