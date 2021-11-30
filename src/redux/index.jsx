// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";
import  authSlice from "./userSlice";

// export const store = configureStore({
//   reducer: {
//     user: authSlice
//   }
// }

export const store = configureStore({
  reducer: {
    user: authSlice
  }
})