import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SalaryInfoState {
  salary: number;
  payday: string;
  selectedAccount: number | null;
}

const initialState: SalaryInfoState = {
  salary: 2500000,
  payday: "20일",
  selectedAccount: null,
};

const salaryInfoSlice = createSlice({
  name: "salaryInfo",
  initialState,
  reducers: {
    setSalary: (state, action: PayloadAction<number>) => {
      state.salary = action.payload;
    },
    setPayday: (state, action: PayloadAction<string>) => {
      state.payday = action.payload;
    },
    setSelectedAccount: (state, action: PayloadAction<number | null>) => {
      state.selectedAccount = action.payload;
    },
  },
});

export const { setSalary, setPayday, setSelectedAccount } = salaryInfoSlice.actions;
export default salaryInfoSlice.reducer;
