import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Tournament } from "../../components";
import { Subject, EMPTY } from "rxjs";

import { getTournamentsByQuery } from "../../api";
import {
  tap,
  debounceTime,
  filter,
  switchMap,
  distinctUntilChanged,
  catchError,
} from "rxjs/operators";

import styles from "./search-input.module.css";

export default function SearchInput({ addFavorite }) {
  const [tournaments, setTournaments] = useState([]);
  const [query, setQuery] = useState("");

  const queryChangeSubject = new Subject();

  queryChangeSubject
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((query) => setQuery(query)),
      filter((query) => query.length > 2),
      switchMap((query) =>
        getTournamentsByQuery(query).pipe(
          catchError((error) => console.error(error) || EMPTY)
        )
      ),
      tap(([data]) => setTournaments(data ? data.documents : []))
    )
    .subscribe();

  const resetTournaments = () => {
    setTournaments([]);
    setQuery("");
  };

  return (
    <div className={styles.container}>
      <Autocomplete
        options={tournaments}
        getOptionLabel={(option) => {
          return option.title ? option.title : option.toString();
        }}
        renderOption={(option) => {
          return (
            <Tournament
              resetTournaments={resetTournaments}
              onClick={addFavorite}
              data={option}
            ></Tournament>
          );
        }}
        value={query}
        renderInput={(params) => (
          <TextField
            {...params}
            onInput={(e) => queryChangeSubject.next(e?.target?.value)}
            label="Search Input"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}
