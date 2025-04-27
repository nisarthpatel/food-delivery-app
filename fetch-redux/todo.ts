import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk(
  'fetchTodos',
  async ({currentPage}: {currentPage: number}) => {
    const response = await axios.get(
      `https://randomuser.me/api/?page=${currentPage}&results=10`,
    );
    return response.data?.results;
  },
);

interface counterState {
  isLoading: boolean;
  data: Array<User>;
  isError: boolean;
}

const initialState: counterState = {
  isLoading: false,
  data: [],
  isError: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    resetData: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      (state.isLoading = false), (state.data = action.payload);
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      (state.isError = true), console.log('error : ', action.payload);
    });
  },
});

export default todoSlice.reducer;

export type User = {
  gender: 'female' | 'male';
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string | null;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
