import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 초기 상태 정의
interface PersonalInfoState {
  name: string;
  idFront: string;
  idBack: string;
  phone: string;
  agreements: {
    all: boolean;
    terms: boolean;
    privacy: boolean;
    marketing: boolean;
  };
}

const initialState: PersonalInfoState = {
  name: "",
  idFront: "",
  idBack: "",
  phone: "",
  agreements: {
    all: false,
    terms: false,
    privacy: false,
    marketing: false,
  },
};

// Redux Slice 생성
const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setIdFront: (state, action: PayloadAction<string>) => {
      state.idFront = action.payload;
    },
    setIdBack: (state, action: PayloadAction<string>) => {
      state.idBack = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setAgreements: (state, action: PayloadAction<PersonalInfoState["agreements"]>) => {
      state.agreements = action.payload;
    },
  },
});

export const { setName, setIdFront, setIdBack, setPhone, setAgreements } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;