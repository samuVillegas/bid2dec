"use client";
import { Box, Button, TextField, Typography, Container, Stack } from "@mui/material";

const styles = {
  box: {
    width: "100vw",
    height: "100vh",
    bgcolor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    bgcolor: "white",
    borderRadius: 3,
  },
  title: {
    textAlign: "center",
    mt: 2,
  },
  inputNumber: {
    width: "300px",
  },
};

export default function Home() {
  return (
    <Box sx={styles.box}>
      <Container sx={styles.container}>
        <Typography
          variant="h4"
          sx={styles.title}
        >
          Convert binary number to decimal number
        </Typography>

        <form className="form">
          <Stack direction="column">
            <TextField
              sx={styles.inputNumber}
              label="Binary number"
              required
            ></TextField>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
              }}
            ></Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "red",
              }}
            >
              Convertir
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
}
