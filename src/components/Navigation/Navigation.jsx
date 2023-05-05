import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import {NavLinkStyled,NavContainer} from './NavigationStyles';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <NavLink to="/"></NavLink>
      {isLoggedIn && (
        <NavLinkStyled  to="/contacts">
          Contacts
        </NavLinkStyled>
      )}
    </NavContainer>
  );
};

export default Navigation;
