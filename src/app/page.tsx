"use client";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";
import { useState } from "react";

const styles: {
  box: SxProps<Theme>;
  container: SxProps<Theme>;
  title: SxProps<Theme>;
  inputNumber: SxProps<Theme>;
  decimalTitle: SxProps<Theme>;
  button: SxProps<Theme>;
} = {
  box: {
    width: "100vw",
    height: "100vh",
    bgcolor: "#35a194",
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
    width: "100%",
  },
  decimalTitle: {
    textAlign: "center",
  },
  button: {
    mt: 2,
    bgcolor: "#35a194",
  },
};

export default function Home(): JSX.Element {
  const [state, setState] = useState<{
    binaryNumber: string;
    decimalNumber: string;
    error: boolean;
    errorText: string;
  }>({
    binaryNumber: "",
    decimalNumber: "",
    error: false,
    errorText: "",
  });

  /**
   *
   * @param value is the value that we want to know if it is binary
   * @returns true if value is binary, false otherwise.
   */
  const isBinary = (value: string): boolean => {
    const reg = /^[0-1]+$/;
    return reg.test(value);
  };

  /**
   *
   * @param binary binary number to be converted to decimal
   * @returns decimal number
   */
  const convertBinaryToDecimal = (binary: string): string => {
    let res = 0;
    let n = binary.length - 1;
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] == "1") res += Math.pow(2, n);
      n--;
    }
    return res.toString();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, binaryNumber: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isBinary(state.binaryNumber)) {
      // Convert to decimal
      const decimalNumber = convertBinaryToDecimal(state.binaryNumber);
      setState({ ...state, error: false, errorText: "", decimalNumber });
    } else {
      // Error
      setState({ ...state, error: true, errorText: "INVALID BINARY NUMBER" });
    }
  };

  return (
    <Box sx={styles.box}>
      <Container sx={styles.container}>
        <Typography variant="h4" sx={styles.title}>
          Convert binary number to decimal number
        </Typography>
        <form className="form" onSubmit={onSubmit}>
          <Stack direction="column">
            <TextField
              sx={styles.inputNumber}
              label="Binary number"
              value={state.binaryNumber}
              onChange={onChange}
              error={state.error}
              helperText={state.errorText}
              required
            ></TextField>
            <Typography variant="h6" sx={styles.decimalTitle}>
              {state.decimalNumber}
            </Typography>
            <Button variant="contained" sx={styles.button} type="submit">
              Convert
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
}
