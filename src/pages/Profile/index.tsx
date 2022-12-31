import { useState } from "react";
import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { Information } from "./Information";
import { profileStyle } from "./styles";
import { Box } from "@mui/material";
import { generalInformation } from "./utils/data";

export const Profile = () => {
  const [selectedId, setSelectedId] = useState<null | number>(null);

  const data = [
    {
      title: "Information générales",
      inputs: generalInformation,
    },
  ];

  // figure out a way to use only one Information component but
  // rendering all scenarios needed (documents, password, general info...)
  // make an array of objects representing each page (title, inputs(type, label, helperText...))

  return (
    <Box sx={profileStyle}>
      <Hero />
      <Menu selectedId={selectedId} setSelectedId={setSelectedId} />
      {selectedId === 0 && (
        <Information data={data[selectedId]} setSelectedId={setSelectedId} />
      )}
    </Box>
  );
};
