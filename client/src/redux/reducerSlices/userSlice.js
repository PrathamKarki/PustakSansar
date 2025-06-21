import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  token: '',
  isLoggedIn: false,
  _id: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: () => initialState,
    addLoginDetails: (state, action) => {
      return {
        ...state,
        email: action.payload.user?.email,
        firstName: action.payload.user?.firstName,
        lastName: action.payload.user?.lastName,
        token: action.payload?.token,
        isLoggedIn: action.payload?.isLoggedIn,
        _id: action.payload.user?._id
        
      }
    },
  },
})

export const { logoutUser, addLoginDetails } = userSlice.actions
export default userSlice.reducer