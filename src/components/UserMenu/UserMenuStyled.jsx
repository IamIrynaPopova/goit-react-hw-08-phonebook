import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    neutral: {
      main: '#eff0f3',
      contrastText: '#1976d2',
    },
        },
        
});

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const User = styled('b')({
        color: '#fff',
        marginRight:'5px'
});