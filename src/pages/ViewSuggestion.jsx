import _ from "lodash";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
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
    <Box
      sx={{
        height: "100vh",
      }}
    >
      {suggestions.map((value) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          key={uuidv4()}
        >
          <Typography fontSize={20}>{value.suggestion}</Typography>
          <Typography fontSize={15}>{value.name}</Typography>
        </Box>
      ))}
    </Box>
  );
}
