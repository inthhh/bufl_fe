import { setSelectedAccount } from "./../actions/accountAction";
import { createReducer } from "@reduxjs/toolkit";

interface AccountState {
  selectedAccount: number;
}

const initialState: AccountState = {
  selectedAccount: -1,
};

const accountReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedAccount, (state, action) => {
    state.selectedAccount = action.payload;
  });
});

export default accountReducer;
