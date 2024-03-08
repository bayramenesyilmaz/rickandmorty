import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const fovorites = createEntityAdapter();
const initialState = fovorites.getInitialState();

export const {
  selectById: selectFavoriteById,
  selectIds: selectFavoriteIds,
  selectAll: selectAllFavorites,
  selectTotal: selectTotalFavorites,
} = fovorites.getSelectors((state) => state.favorites);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addFavorite: fovorites.addOne,
    deleteFavorite: fovorites.removeOne,
    deleteAllFavorites: fovorites.removeAll,
  },
});

export const { addFavorite, deleteFavorite, deleteAllFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
