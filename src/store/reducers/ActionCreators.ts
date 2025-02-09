import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     setTimeout(() => {
//       dispatch(userSlice.actions.usersFetching());
//     }, 2000);

//     setTimeout(async () => {
//       const response = await axios.get<IUser[]>(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//     }, 4000);
//   } catch (e) {
//     dispatch(
//       userSlice.actions.usersFetchingError(
//         e instanceof Error ? e.message : "Unknown error."
//       )
//     );
//   }
// };

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (__, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      //Замедление
      for (let index = 0; index < 1000000000; index++) { 
        continue;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error instanceof Error ? error.message : "Unknown error."
      );
    }
  }
);
