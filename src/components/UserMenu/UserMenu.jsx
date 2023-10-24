
import { useSelector ,useDispatch} from "react-redux";
import { logOut } from "redux/Auth/authOperations";


export const UserMenu = () => {
    const { email } = useSelector(state => state.auth.user); 
    const dispatch = useDispatch();
  
    return (
      
       <div>
        <p>{email}</p>

        <button type="primary" onClick={() => dispatch(logOut())}>
          LogOut
        </button>{' '}
        </div>
      
     
    );
  };