import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "stake",
  initialState: {
    value: {
      totalstake: "0.00",
      stakingtenure: "",
      text: "",
    },
  },
  reducers: {
    setStake: (state, action) => {
      console.log(action);
      state.value.stakingtenure = action.payload.stakingtenure;
    },
    setTotalStake: (state, action) => {
      console.log(action);
      state.value.totalstake = action.payload.totalstake;
    },
    setText: (state, action) => {
      console.log(action);
      state.value.text = action.payload.text;
    },
  },
});

export const { setStake } = counterSlice.actions;
export const { setText } = counterSlice.actions;
export const { setTotalStake } = counterSlice.actions;
export default counterSlice.reducer;
