import {
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { form, buttons, cancel, mobileMenuStyle } from "./styles";
import type { InputData } from "../../../utils/Types";

import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import {
  Article,
  AddCircleOutline,
  MoreVert,
  Visibility,
  Delete,
  Create,
  FileDownload,
} from "@mui/icons-material";

interface Props {
  inputs: InputData[];
}

export const Form = ({ inputs }: Props) => {
  const [birthday, setBirthday] = useState<Dayjs | null>(null);
  const [isDocuments, setIsDocuments] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const documentMenu = [
    { icon: <Visibility />, text: "Afficher" },
    { icon: <FileDownload />, text: "Télécharger" },
    { icon: <Create />, text: "Renommer" },
    { icon: <Delete />, text: "Supprimer" },
  ];

  function generateInputsComponents(inputsData: InputData[]) {
    return inputsData.map((input) => {
      switch (input.id) {
        case "birthday":
          if (isDocuments) setIsDocuments(false);
          if (typeof input.defaultValue === "number" && birthday === null) {
            const newBirthday = dayjs.unix(input.defaultValue);
            setBirthday(newBirthday);
          }
          return (
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              key={crypto.randomUUID()}
            >
              <DatePicker
                label="Date de naissance"
                value={birthday}
                onChange={(newValue) => {
                  setBirthday(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          );
        case "documents":
          if (isDocuments === false) setIsDocuments(true);
          return (
            <List key={crypto.randomUUID()}>
              {inputs.map((input) => {
                const documentComponents = input.documents?.map((document) => {
                  const documentDate = dayjs
                    .unix(document.date)
                    .format("DD/MM/YYYY");

                  return (
                    <ListItem sx={{ padding: "0px" }} key={crypto.randomUUID()}>
                      <ListItemAvatar>
                        <Avatar>
                          <Article />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={document.name}
                        secondary={"Ajouté le " + documentDate}
                      />
                      {document.visibility === "Public" && (
                        <Typography
                          component="span"
                          sx={{
                            padding: "5px 10px",
                            backgroundColor: "green",
                            color: "white",
                            borderRadius: "4px",
                          }}
                        >
                          Public
                        </Typography>
                      )}
                      <ListItemButton
                        sx={{
                          justifyContent: "flex-end",
                          paddingRight: "unset",
                          display: { md: "none" },
                        }}
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                      >
                        <ListItemIcon sx={{ minWidth: "unset" }}>
                          <MoreVert />
                        </ListItemIcon>
                      </ListItemButton>
                      {documentMenu.map((item) => (
                        <ListItemButton
                          key={crypto.randomUUID()}
                          sx={{
                            display: { xs: "none", md: "flex" },
                            maxWidth: "48px",
                            maxHeight: "48px",
                            minWidth: "unset",
                            aspectRatio: "1",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "0px",
                          }}
                        >
                          <ListItemIcon
                            sx={{ display: "grid", placeItems: "center" }}
                          >
                            {item.icon}
                          </ListItemIcon>
                        </ListItemButton>
                      ))}
                    </ListItem>
                  );
                });
                return documentComponents;
              })}
            </List>
          );
        default:
          if (isDocuments) setIsDocuments(false);

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
    <Box
      component={isDocuments ? "div" : "form"}
      sx={isDocuments ? { ...form, maxWidth: "650px" } : form}
    >
      {isDocuments && (
        <>
          <Box sx={{ ...buttons, textAlign: "right", marginTop: "0" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutline />}
            >
              Nouveau
            </Button>
          </Box>
          <Slide direction="up" in={showMobileMenu} mountOnEnter unmountOnExit>
            <List sx={mobileMenuStyle}>
              {documentMenu.map((item) => (
                <ListItem key={crypto.randomUUID()}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Slide>
        </>
      )}
      {generateInputsComponents(inputs)}
      {isDocuments === false && (
        <Box sx={buttons}>
          <Button variant="text" color="warning" sx={cancel}>
            Annuler
          </Button>
          <Button variant="contained" color="primary">
            Enregistrer
          </Button>
        </Box>
      )}
    </Box>
  );
};
