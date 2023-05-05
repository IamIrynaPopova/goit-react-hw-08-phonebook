import { styled } from '@mui/material/styles';

export const RegisterFormStyles = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '10px',
  border: '2px solid #989595',
  borderRadius: '10px',
  boxShadow: ' 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)',
  '& button': {
    marginTop: '20px',
    alignSelf: 'flex-end',
    backgroundColor: '#1976d2',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  },
});
