import { StyledFilter } from "./ContactFilter.styled";
// import { updateFilter } from "redux/contactSlise";
import { useDispatch,useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";




export const ContactFilter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    return (
      <div>
        <label>
          Filter by name:
          <StyledFilter
            type="text"
            value={filter}
            onChange={e => dispatch(setFilter(e.target.value.trim()))}
          />
        </label>
      </div>
    );
  };