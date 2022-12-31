export const generalInformation = [
  {
    id: "gender",
    label: "Genre",
    type: "select",
    options: [
      { value: "Male", label: "Monsieur" },
      { value: "Woman", label: "Madame" },
      { value: "Other", label: "Autre" },
    ],
    defaultValue: "Male",
  },
  {
    id: "firstName",
    label: "Prénom",
    helperText: "maximum 35 caractères",
    defaultValue: "Benjamin",
  },
  {
    id: "lastName",
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
