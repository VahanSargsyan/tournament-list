export function addFavoriteToStore(favorite) {
  localStorage.setItem(favorite.id, JSON.stringify(favorite));
}

export function deleteFavoriteFromStore(id) {
  localStorage.removeItem(id);
}

export function getAllFavoritesFromStore() {
  const favorites = [];

  for (let i = 0; i < localStorage.length; i++) {
    favorites.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

  return favorites;
}
