import { createAction } from "@reduxjs/toolkit";

interface AccountState {
  selectedAccountId: number;
  selectedAccountName: string;
}
// setCategories 액션 정의
export const setSelectedAccount = createAction<AccountState>("accounts/setAccounts");
