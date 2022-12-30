import { Section } from "./Section";
import {
  Inbox,
  LocationOn,
  LocalPhone,
  Feed,
  Lock,
  Folder,
  SupportAgent,
  ChatBubble,
  Security,
} from "@mui/icons-material";
import { List } from "@mui/material";
import { list } from "./styles";
export const Menu = () => {
  const section1 = [
    { icon: <Feed />, text: "Information générales" },
    { icon: <LocalPhone />, text: "Me contacter / Coordonnées" },
    { icon: <LocationOn />, text: "Adresse" },
  ];

  const section2 = [
    { icon: <Lock />, text: "Securité" },
    { icon: <Folder />, text: "Documents" },
  ];

  const section3 = [
    { icon: <SupportAgent />, text: "Aide & Support" },
    { icon: <ChatBubble />, text: "Contactez-nous" },
    { icon: <Security />, text: "Politique de confidentialité" },
  ];

  return (
    <>
      <List sx={list}>
        <Section data={section1} />
        <Section data={section2} />
        <Section data={section3} />
      </List>
    </>
  );
};
