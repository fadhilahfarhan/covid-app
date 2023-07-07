import { createSlice } from "@reduxjs/toolkit";
import covidData from "../../utils/constants/provinces";

const covidSlice = createSlice({
  name: "Covid Slice",
  initialState: { covid: covidData },
  reducers: {
    addCovid(state, action) {
      const findIndex = state.covid.provinces.findIndex(
        (province) => province.kota === action.payload.kota
      );
      
      const updateProvinces = [...state.covid.provinces];
      updateProvinces[findIndex] = action.payload;

      return {
        ...state,
        covid: {
          ...state.covid,
          provinces: updateProvinces,
        },
      };
    },
  },
});

const { addCovid } = covidSlice.actions;
const covidReducer = covidSlice.reducer;

export { addCovid };
export default covidReducer;
