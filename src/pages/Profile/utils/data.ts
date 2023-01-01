import { InputData } from "../../../utils/Types";

export const data: { title: string; inputs: InputData[] }[] = [
  {
    title: "Information générales",
    inputs: [
      {
        id: "identifier",
        label: "Identifiant",
        helperText: "reçu par mail lors de la création de votre compte",
        defaultValue: "",
      },
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
    ],
  },
  {
    title: "Me contacter / Coordonnées",
    inputs: [
      {
        id: "email",
        label: "Email",
        type: "email",
        defaultValue: "",
      },
      {
        id: "phoneNumber",
        label: "téléphone fixe",
        defaultValue: "",
      },
      {
        id: "mobilePhoneNumber",
        label: "téléphone portable",
        defaultValue: "",
      },
    ],
  },
  {
    title: "Adresse",
    inputs: [
      {
        id: "address",
        label: "Numéro et rue",
        defaultValue: "",
      },
      {
        id: "address2",
        label: "Complément d'adresse",
        defaultValue: "",
      },
      {
        id: "zipCode",
        label: "Code postal",
        defaultValue: "",
      },
      {
        id: "city",
        label: "Ville",
        defaultValue: "",
      },
    ],
  },
  {
    title: "Sécurité",
    inputs: [
      {
        label: "Mot de passe",
        type: "password",
        defaultValue: "",
      },
      {
        label: "Confirmation mot de passe",
        type: "password",
        defaultValue: "",
      },
    ],
  },
  {
    title: "Documents",
    inputs: [
      {
        id: "documents",

        documents: [
          {
            date: 123,
            name: "string",
            visibility: "string",
          },
        ],
      },
    ],
  },
];
