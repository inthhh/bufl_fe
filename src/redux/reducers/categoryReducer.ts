import { createReducer } from "@reduxjs/toolkit";
import { setCategories } from "../actions/categoryAction";

interface CategoryState {
  categoryList: string[];
}

const initialState: CategoryState = {
  categoryList: [],
};

const categoryReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCategories, (state, action) => {
    state.categoryList = action.payload;
  });
});

export default categoryReducer;
