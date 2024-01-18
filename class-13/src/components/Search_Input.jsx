import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

export const Search_Input = (props) => {
  const { on_click_handle } = props;
  const [Search_Input, setSearch_Input] = useState("");

  return (
    <Stack flexDirection="row" flex={1}>
      <Stack flex={0.5}>
        <TextField
          onChange={(e) => on_click_handle(e.target.value)}
          placeholder="Enter title to search...."
        />
      </Stack>
      <Button
        onClick={() => on_click_handle(Search_Input)}
        variant="outlined"
        sx={{ textTransform: "none" }}
      >
        Search
      </Button>
    </Stack>
  );
};
