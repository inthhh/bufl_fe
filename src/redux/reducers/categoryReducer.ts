// reducers/categoryReducer.ts
import { createReducer } from "@reduxjs/toolkit";
import { setCategories } from "../actions/categoryAction";

interface CategoryItem {
  name: string;
  goal: number;
  color: string;
  ratio: number;
}

interface CategoryState {
  categoryList: CategoryItem[];
}

const initialState: CategoryState = {
  categoryList: [],
};

const categoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCategories, (state, action) => {
    state.categoryList = action.payload; // action.payload는 CategoryItem[] 타입
  });
});

export default categoryReducer;
