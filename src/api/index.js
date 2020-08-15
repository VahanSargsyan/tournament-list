import { of } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { map, switchMap, catchError } from "rxjs/operators";

const getTournamentURL = (query) =>
  `https://api-search.win.gg/search?q=${query}&index=tournament`;

export function getTournamentsByQuery(query) {
  return fromFetch(getTournamentURL(query)).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    // map(({ id, images, title, descriptions }) => ({
    //   id,
    //   images,
    //   title,
    //   descriptions,
    // })),
    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    })
  );
}
