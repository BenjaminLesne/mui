import { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { Menu } from "./Menu";
import { Information } from "./Information";
import { profileStyle } from "./styles";
import { Container, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { data } from "./utils/data";
import type { InputData } from "../../utils/Types";

interface Data {
  title: string;
  inputs: InputData[];
}

interface Document {
  date: number;
  name: string;
  visibility: string;
}

interface DefaultValues {
  //@ts-ignore
  documents?: { date: number; name: string; visibility: string }[] | undefined;
  [key: string]: string;
}

export const Profile = () => {
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Data[] | []>([]);
  const [selectedId, setSelectedId] = useState<null | number>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  if (selectedId === null && isDesktop) setSelectedId(0);

  function updateInputsDefaultValue(
    defaultValues: DefaultValues,
    myData: Data[]
  ): Data[] {
    const newData = [...myData];
    newData.forEach((view) => {
      view.inputs.forEach((input) => {
        if (input.documents) return (input.documents = defaultValues.documents);
        if (input.id != null) input.defaultValue = defaultValues[input.id];
      });
    });

    return newData;
  }

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          const newData = updateInputsDefaultValue(result, data);

          setIsLoaded(true);
          setItems(newData);
        },
        (error: any) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) return <Typography>Error: {error.message}</Typography>;

  if (isLoaded === false) return <Typography>Chargement...</Typography>;

  return (
    <Container maxWidth="lg" disableGutters sx={profileStyle}>
      <Hero />
      {selectedId !== null && items[selectedId] != null && (
        <Information data={items[selectedId]} setSelectedId={setSelectedId} />
      )}
      <Menu selectedId={selectedId} setSelectedId={setSelectedId} />
    </Container>
  );
};
