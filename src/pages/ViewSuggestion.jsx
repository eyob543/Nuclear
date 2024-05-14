import _ from "lodash";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function ViewSuggestions() {
  const db = database;
  const [suggestions, setSuggestions] = useState([]);
  const suggestionRef = ref(db, "suggestions");
  useEffect(() => {
    onValue(
      suggestionRef,
      (snapshot) => {
        const data = snapshot.val();
        const sug = _.toArray(data);
        setSuggestions(sug);
      },
      (error) => console.log(error),
    );
  }, []);
  return (
    <>
      {suggestions.map((value) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            height: "100vh",
          }}
          key={value.email}
        >
          <Typography fontSize={20}>{value.suggestion}</Typography>
          <Typography fontSize={15}>{value.name}</Typography>
        </Box>
      ))}
    </>
  );
}
