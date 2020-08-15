import { ADD_FAVORITE, DELETE_FAVORITE } from "../constants/action-types";
import {
  getAllFavoritesFromStore,
  addFavoriteToStore,
  deleteFavoriteFromStore,
} from "../storage";

const initialState = getAllFavoritesFromStore();

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      addFavoriteToStore(action.payload);
      return [...state, action.payload];
    case DELETE_FAVORITE:
      deleteFavoriteFromStore(action.payload.id);
      return state.filter((favorite) => favorite.id !== action.payload.id);
    default:
      return state;
  }
}
