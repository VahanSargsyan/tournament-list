import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Tournament } from "../../components";

import { getTournamentsByQuery } from "../../api";
import { from } from "rxjs";

export default function SearchInput({ addFavorite }) {
  const [tournaments, setTournaments] = useState([]);
  const [query, setQuery] = useState("");

  const testTrnmnt = {
    city: "Sao Paulo",
    country_name: "Brazil",
    description:
      "Riot game's International Wildcard Qualifier is bacL studios in Sao Paulo, Brazil.",
    end: "2016-09-05T00:00:00.000Z",
    game_id: "2",
    id: "MTU5Nw",
    short_title: "IWCQ",
    slug: "iwcq",
    source: "abios",
    title: "2016 International Wildcard Qualifier",
  };



  const handelQueryOnChange = (event) => {
    console.log(event);
    if (event) {
      setQuery(event.target.value);
      if (event.target?.value?.length > 2) {
        getTournamentsByQuery(query).subscribe(([data]) => {
          if (data) {
            setTournaments(data.documents);
          }
        });
      }
    }
  };

  return (
    <Autocomplete
      options={tournaments}
      getOptionLabel={(option) => {
        return option.title ? option.title : option.toString();
      }}
      renderOption={(option) => {
        return (
          <Tournament
            onClick={addFavorite}
            data={option}
          ></Tournament>
        );
      }}
      // getOptionSelected={(e) => console.log("selected tornament", { e })}
      value={query}
      onChange={(e) => handelQueryOnChange(e)}
      renderInput={(params) => (
        <TextField
          {...params}
          onInput={(e) => handelQueryOnChange(e)}
          label="Search Input"
          variant="outlined"
        />
      )}
    />
  );
}
