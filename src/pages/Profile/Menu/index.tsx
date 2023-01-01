import { Section } from "./Section";
import { Divider, List, Typography } from "@mui/material";
import { list, titleStyle, dividerStyle, containerStyle } from "./styles";
import { Dispatch } from "react";
import { section1, section2, section3 } from "./data";
import { Container } from "@mui/system";

interface Props {
  selectedId: null | number;
  setSelectedId: Dispatch<React.SetStateAction<number | null>>;
  isDesktop: boolean;
}

export const Menu = ({ selectedId, setSelectedId, isDesktop }: Props) => {
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
          isDesktop={isDesktop}
        />
        <Section
          data={section2}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          isDesktop={isDesktop}
        />
        <Section
          data={section3}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          isDesktop={isDesktop}
        />
      </List>
      <Divider orientation="vertical" sx={dividerStyle} />
    </Container>
  );
};
