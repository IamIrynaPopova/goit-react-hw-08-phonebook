/* .wrapper {
  margin: 20px;
  width: 400px;
  background-color: beige;
  border-radius: 5px;
  border: 2px solid #989595;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
} */

import { styled } from '@mui/material/styles';

export const ContactsStyles = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
  backgroundColor: 'beige',
  padding: '10px',
  border: '2px solid #989595',
  borderRadius: '10px',
  boxShadow: ' 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)',
});
