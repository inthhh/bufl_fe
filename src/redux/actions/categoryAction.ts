import { createAction } from "@reduxjs/toolkit";

export const SET_CATEGORIES = "SET_CATEGORIES";

export const setCategories = createAction<string[]>(SET_CATEGORIES);
