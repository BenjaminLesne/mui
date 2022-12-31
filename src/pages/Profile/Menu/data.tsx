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
  { icon: <Feed />, text: "Information générales", id: 0 },
  { icon: <LocalPhone />, text: "Me contacter / Coordonnées", id: 1 },
  { icon: <LocationOn />, text: "Adresse", id: 2 },
];

export const section2 = [
  { icon: <Lock />, text: "Securité", id: 3 },
  { icon: <Folder />, text: "Documents", id: 4 },
];

export const section3 = [
  { icon: <SupportAgent />, text: "Aide & Support", id: 5 },
  { icon: <ChatBubble />, text: "Contactez-nous", id: 6 },
  { icon: <Security />, text: "Politique de confidentialité", id: 7 },
];
