import { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { Information } from "./Information";
import { profileStyle } from "./styles";
import { Box, Typography } from "@mui/material";
import { generalInformation } from "./utils/data";
import type { InputData } from "../../utils/Types";

export const Profile = () => {
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState<null | number>(null);

  const data: { title: string; inputs: InputData[] }[] = [
    {
      title: "Information générales",
      inputs: generalInformation,
    },
  ];

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // fetch the data useEffect check doc, []}, -> DONE
  // merge it to inputsDatas (default values)
  // thats all?
  if (error) return <Typography>Error: {error.message}</Typography>;

  if (isLoaded === false) return <Typography>Chargement...</Typography>;

  return (
    <Box sx={profileStyle}>
      <Hero />
      <Menu selectedId={selectedId} setSelectedId={setSelectedId} />
      {selectedId !== null && (
        <Information data={data[selectedId]} setSelectedId={setSelectedId} />
      )}
    </Box>
  );
};
