import { useDispatch, useSelector } from "react-redux";

import { changeFilter } from "../../redux/actions/index";

import getFilterSelctors from "../../redux/actions/contacts-selectors";
import s from "./Filter.module.css";

// const mapStateToProps = (state) => ({
//   value: getFilterSelctors.getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(changeFilter(e.target.value)),
// });

// value, onChange
export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilterSelctors.getFilter);
  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={s.container}>
      <label className={s.position}>
        Find contacts by name
        <input
          type="text"
          className="TodoFilter__input"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
