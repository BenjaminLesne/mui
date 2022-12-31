import { Box, Button, Container, MenuItem, TextField } from "@mui/material";
import { form, buttons, cancel } from "./styles";
import type { InputData } from "../../../utils/Types";

import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

interface Props {
  inputs: InputData[];
}

export const Form = ({ inputs }: Props) => {
  // dayjs.unix(630892800)
  const [value, setValue] = useState<Dayjs | null>(null);

  function generateInputsComponents(inputsData: InputData[]) {
    return inputsData.map((input) => {
      if (input.id === "birthday") {
        return (
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            key={crypto.randomUUID()}
          >
            <DatePicker
              label="Date de naissance"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        );
      } else {
        return (
          <TextField
            key={crypto.randomUUID()}
            select={input.type === "select" ? true : false}
            type={input.type ?? ""}
            label={input.label}
            helperText={input.helperText ?? ""}
            defaultValue={input.defaultValue ?? ""}
            variant="outlined"
          >
            {input.options?.map((option) => (
              <MenuItem key={crypto.randomUUID()} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
      }
    });
  }

  return (
    <Container component="form" sx={form}>
      {generateInputsComponents(inputs)}
      <Box sx={buttons}>
        <Button variant="text" color="warning" sx={cancel}>
          Annuler
        </Button>
        <Button variant="contained" color="primary">
          Enregistrer
        </Button>
      </Box>
    </Container>
  );
};
