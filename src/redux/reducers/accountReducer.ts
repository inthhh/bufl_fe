import { setSelectedAccount } from "./../actions/accountAction";
import { createReducer } from "@reduxjs/toolkit";

interface AccountState {
  selectedAccountId: number;
  selectedAccountName: string;
}

const initialState: AccountState = {
  selectedAccountId: -1,
  selectedAccountName: "",
};

const accountReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedAccount, (state, action) => {
    state.selectedAccountId = action.payload.selectedAccountId;
    state.selectedAccountName = action.payload.selectedAccountName;
  });
});

export default accountReducer;
