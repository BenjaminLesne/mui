import {
  LocationOn,
  LocalPhone,
  Feed,
  Lock,
  Folder,
  SupportAgent,
  ChatBubble,
  Security,
} from "@mui/icons-material";

export const section1 = [
  { icon: <Feed />, text: "Information générales", id: 1 },
  { icon: <LocalPhone />, text: "Me contacter / Coordonnées", id: 2 },
  { icon: <LocationOn />, text: "Adresse", id: 3 },
];

export const section2 = [
  { icon: <Lock />, text: "Securité", id: 4 },
  { icon: <Folder />, text: "Documents", id: 5 },
];

export const section3 = [
  { icon: <SupportAgent />, text: "Aide & Support", id: 6 },
  { icon: <ChatBubble />, text: "Contactez-nous", id: 7 },
  { icon: <Security />, text: "Politique de confidentialité", id: 8 },
];
