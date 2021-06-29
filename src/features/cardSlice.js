import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    isCardClicked: false,
  },
  reducers: {
    setCardClicked: (state, action) => {
      state.isCardClicked = action.payload;
    },
  },
});
export const { setCardClicked } = cardSlice.actions;

export const selectCard = (state) => state.card.isCardClicked;

export default cardSlice.reducer;
