import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const switchNavigatorSlice = createSlice({
  name: 'switch',
  initialState: {
    switch: SCREEN_ROUTER.SPLASH,
    params: '',
  },
  reducers: {
    navigateSwitch: (state, action) => {
      reactotron.log!({action});
      state.switch = action.payload.key;
      state.params = action.payload.params;
    },
  },
});

export const {navigateSwitch} = switchNavigatorSlice.actions;
export default switchNavigatorSlice.reducer;
