import { NavContainer, NavLinkStyled } from './AuthNavStyles';
const AuthNav = () => {
  return (
    <NavContainer>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </NavContainer>
  );
};

export default AuthNav;
