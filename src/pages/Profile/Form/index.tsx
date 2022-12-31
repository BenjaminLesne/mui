import { Box, Button, Container, MenuItem, TextField } from "@mui/material";
import { form, buttons, cancel } from "./styles";
import type { InputData } from "../utils/Types";

import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

interface Props {
  inputs: InputData[];
}

export const Form = ({ inputs }: Props) => {
  /*
{
   "email":"cyrano@gmail.com",
   "firstName":"Cyrano",
   "lastName":"De Bergerac",
   "identifier":"Cyrano",
   "phoneNumber":"0606060606",
   "mobilePhoneNumber":"0606060606",
   "birthday":630892800,
   "gender":"Male",
   "address":"8 impasse des ecrivains",
   "zipCode":"13004",
   "city":"Marseille",
   "documents":[
      {
         "name":"Test",
         "date":1666292118,
         "visibility":"Public"
      }
   ]
}
  */
  //dayjs(630892800)
  const [value, setValue] = useState<Dayjs | null>(dayjs.unix(630892800));

  function generateInputsComponents(inputsData: InputData[]) {
    return inputsData.map((input) => {
      if (input.type === "date") {
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
            label={input.label}
            helperText={input.helperText ?? ""}
            defaultValue={input.defaultValue ?? ""}
            variant="outlined"
          >
            {input.options?.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
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
