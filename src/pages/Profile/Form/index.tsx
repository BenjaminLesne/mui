import { Box, Button, Container, TextField } from "@mui/material";
import { form, buttons, cancel } from "./styles";

export const Form = () => {
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
  return (
    <Container component="form" sx={form}>
      <TextField
        helperText="maximum 35 caractères"
        label="Prénom"
        variant="outlined"
        defaultValue="Benjamin"
      />
      <TextField
        helperText="maximum 35 caractères"
        label="Nom"
        variant="outlined"
        defaultValue="Lesné"
      />
      <TextField
        label="Email"
        variant="outlined"
        defaultValue="Benjamin.lesne@outlook.fr"
      />
      <TextField
        helperText="maximum 35 caractères"
        label="Prénom"
        variant="outlined"
        defaultValue="Benjamin"
      />
      <TextField
        helperText="maximum 35 caractères"
        label="Nom"
        variant="outlined"
        defaultValue="Lesné"
      />
      <TextField
        label="Email"
        variant="outlined"
        defaultValue="Benjamin.lesne@outlook.fr"
      />
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
