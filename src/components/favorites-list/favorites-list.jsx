import React from 'react';
import TournamentCard from './tournament-card/tournament-card'

import styles from './favorites-list.module.css'

export default function Favorites({favorites, deleteFavorite}) {
  return(
    <div className={styles.container}>
      {favorites?.map((favorite) => <TournamentCard key={favorite.id} deleteFavorite={deleteFavorite} data={favorite} ></TournamentCard> )}
    </div>
  );
}