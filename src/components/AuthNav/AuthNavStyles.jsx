import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const NavLinkStyled = styled(NavLink)({
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 500,
  margin: '0 10px',
  '&:hover': {
    textDecoration: 'underline',
  },
});
