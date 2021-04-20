import React, { useCallback } from "react";
import { v4 as unId } from "uuid";
import Contacts from "./Contacts.module.css";

import { todosOperations, visibleSelectors } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

// const mapStateToProps = (state) => ({
//   allUsers: visibleSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = {
//   onDelete: (id) => todosOperations.deleteTodo(id),
// };

// allUsers, onDelete
export default function ContactList() {
  const dispatch = useDispatch();
  const allUsers = useSelector(visibleSelectors.getVisibleContacts);
  const deleteContact = useCallback(
    (id) => dispatch(todosOperations.deleteTodo(id)),
    [dispatch]
  );

  return (
    <ul className="TodoList">
      {allUsers.map(({ id, name, number }) => (
        <li key={unId()} className="listStyle">
          <p className="TodoList__text">
            {name}:{number}
          </p>
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => deleteContact(id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
