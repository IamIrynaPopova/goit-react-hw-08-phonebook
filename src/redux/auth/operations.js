import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = token => {
   axios.defaults.headers.common.Authorization = ' ';
}

// ????axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const createUser = createAsyncThunk(
  'user/createUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);
         console.log(response.data.token);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

 export const logIn = createAsyncThunk(
  'user/logIn',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      console.log(response.data.token);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

 export const logOut = createAsyncThunk(
   'user/logOut',
   async (userData, thunkAPI) => {
     try {
       const response = await axios.post('/users/logout', userData);
       clearAuthHeader(response.data.token);
       return response.data;
     } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
     }
   }
 );
