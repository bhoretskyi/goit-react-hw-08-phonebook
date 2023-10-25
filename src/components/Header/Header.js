import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const { isLoggedin, isLoading } = useSelector(state => state.auth);
  return (
    <div>
      <header>
        {isLoading && <p>Loading</p>}

        <nav>
          <ul>
            {isLoggedin ? (
              <UserMenu />
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {isLoggedin && (
              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};
