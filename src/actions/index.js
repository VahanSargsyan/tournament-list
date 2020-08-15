import { DELETE_FAVORITE, ADD_FAVORITE } from "../constants/action-types";

export const deleteFavorite = (id) => ({
  type: DELETE_FAVORITE,
  payload: { id },
});

export const addFavorite = (favorite) => ({
  type: ADD_FAVORITE,
  payload: favorite,
});
