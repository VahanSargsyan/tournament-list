import { of } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError } from "rxjs/operators";
import {
  TOURNAMENT_SEARCH_ROOT,
  TOURNAMENT_SEARCH_APENDIX,
} from "../constants/constants";

const getTournamentURL = (query) =>
  `${TOURNAMENT_SEARCH_ROOT}${query}${TOURNAMENT_SEARCH_APENDIX}`;

export function getTournamentsByQuery(query) {
  return fromFetch(getTournamentURL(query)).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),

    catchError((err) => {
      console.error(err);
      return of({ error: true, message: err.message });
    })
  );
}
