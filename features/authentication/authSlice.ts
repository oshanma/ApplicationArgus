import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  username: string | null;
  email: string | null;
  password: string | null; // Store password temporarily for login check
}

const initialState: AuthState = {
  username: null,
  email: null,
  password: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.username = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password; // Save password for validation
    },
    login: (state, action) => {
      const { email, password } = action.payload;

      // Validate credentials (only works for temporary in-memory data)
      if (state.email === email && state.password === password) {
        state.username = email; // Set user as logged in
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logout: (state) => {
      state.username = null;
      state.email = null;
      state.password = null;
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export default authSlice.reducer;
