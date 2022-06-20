import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserInformation} from '../AccountApiResponse';
interface AccountState {
  isLoading: boolean;
  isError: boolean;
  data: UserInformation & any;
}
const initialState: AccountState = {
  isLoading: true,
  isError: false,
  data: {},
};

export const getUserInfo = createAsyncThunk('user_info', async () => {
  const res = await requestGetUserInformation();
  return res;
});
export const accountSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    logout: state => {
      state.data = {};
      state.isError = false;
      state.isLoading = false;
    },
    setLoading: (state, action) => {},
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {},
  },
  extraReducers: builder => {
    builder.addCase(getUserInfo.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectCount = (state: any) => state.account;
export const {logout, setData} = accountSlice.actions;
export const {actions, reducer} = accountSlice;
export default reducer;
