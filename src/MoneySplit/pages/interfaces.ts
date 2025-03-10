export interface CategoryProps {
  idx: number;
  total: number;
  category: string;
  ratio: number;
  amount: number;
  isOrigin?: boolean;
  updateRatio: (idx: number, newRatio: number) => void;
  clickForDelete: (idx: number) => void;
}

export interface CategoryInterface {
  id: number;
  name: string;
  goal_amount: number;
  background_color: string;
  ratio: number;
  amount: number;
  bank_name: string;
  account_number: number;
}
export interface CategoryAccountsInterface {
  name: string;
  bankName: string;
  accountNumber: string;
}

export interface CategoryAccountProps {
  categoryId: number;
  category: string;
  account: CategoryAccountsInterface;
  ratio: number;
  amount: number;
}

export interface AccountsInterface {
  id: number;
  user_id: number;
  account_number: number;
  bank_name: number;
  balance: number;
  logo?: string;
}

export interface SelectedAccountInterface {
  selectedAccountId: number;
  selectedAccountName: string;
}
