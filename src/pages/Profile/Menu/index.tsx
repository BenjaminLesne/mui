import { Section } from "./Section";
import { Divider, List, Typography } from "@mui/material";
import { list, titleStyle, dividerStyle, containerStyle } from "./styles";
import { Dispatch } from "react";
import { section1, section2, section3 } from "./data";
import { Container } from "@mui/system";

interface Props {
  selectedId: null | number;
  setSelectedId: Dispatch<React.SetStateAction<number | null>>;
}

export const Menu = ({ selectedId, setSelectedId }: Props) => {
  return (
    <Container sx={containerStyle}>
      <Typography variant="h5" component="h2" sx={titleStyle}>
        Menu
      </Typography>
      <List component={"nav"} sx={list}>
        <Section
          data={section1}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Section
          data={section2}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <Section
          data={section3}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </List>
      <Divider orientation="vertical" sx={dividerStyle} />
    </Container>
  );
};
