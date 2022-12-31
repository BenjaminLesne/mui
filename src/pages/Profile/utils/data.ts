export const generalInformation = [
  {
    id: "gender",
    type: "select",
    options: ["Monsieur", "Madame", "Autre"],
    label: "Genre",
    defaultValue: "Monsieur",
  },
  {
    id: "firstName",
    type: "text",
    label: "Prénom",
    helperText: "maximum 35 caractères",
    defaultValue: "Benjamin",
  },
  {
    id: "lastName",
    type: "text",
    label: "Nom",
    helperText: "maximum 35 caractères",
    defaultValue: "Lesné",
  },
  {
    id: "birthday",
    type: "date",
    label: "Date de naissance",
    defaultValue: "Lesné",
  },
];
