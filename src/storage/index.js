export function addFavoriteToStore(favorite) {
  localStorage.setItem(JSON.stringify(favorite), favorite.id);
}

export function deleteFavoriteFromStore(id) {
  localStorage.removeItem(id);
}

export function getAllFavoritesFromStore() {
  const favorites = [];

  for (let i = 0; i < localStorage.length; i++) {
    favorites.push(JSON.parse(localStorage.key(i)));
  }

  return favorites;
}
