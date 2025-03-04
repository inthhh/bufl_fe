// actions/categoryAction.ts
import { createAction } from "@reduxjs/toolkit";

interface CategoryItem {
  name: string;
  goal: number;
  color: string;
  ratio: number;
}

// setCategories 액션 정의
export const setCategories = createAction<CategoryItem[]>("categories/setCategories");
