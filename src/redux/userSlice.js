// import { createSlice } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   email: null,
//   id: null,
//   token: null,
// }

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     getUser: (state, { payload }) => {
//       state.email = payload.email
//       state.id = payload.id
//       state.token = payload.token
//     },
//     removeUser: (state) => {
//       state.email = null
//       state.id = null
//       state.token = null
//     },
//   },
// })

// export const {getUser, removeUser} = authSlice.actions

// export default authSlice.reducer

const initialState = {
  email: null,
  id: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.email = payload.email
      state.id = payload.id
      state.token = payload.token
    },
    removeUser: (state) => {
      state.email = null
      state.id = null
      state.token = null
    },
  },
})

export const {getUser, removeUser} = authSlice.actions

export default authSlice.reducer