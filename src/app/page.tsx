"use client";
import { Container, Stack, TextField } from "@mui/material";

export default function Home() {
  return (
    <Container
      fixed
      sx={{
        bgcolor: "red",
        maxWidth: '100%'
      }}
    >
      <Stack>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Stack>
    </Container>
  );
}
