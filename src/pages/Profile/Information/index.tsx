import { Box, Button, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Form } from "../Form";
import { goBack, page } from "./styles";
import { InputData } from "../utils/Types";

interface Props {
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
  data: {
    title: string;
    inputs: InputData[];
  };
}

export const Information = ({ setSelectedId, data }: Props) => {
  return (
    <Box sx={page}>
      <Button
        startIcon={<ArrowBack />}
        color="warning"
        sx={goBack}
        onClick={() => setSelectedId(null)}
      >
        Retour
      </Button>
      <Typography
        variant="h5"
        component="h1"
        textAlign="center"
        margin="25px 0 45px 0"
        fontWeight="bold"
      >
        {data.title}
      </Typography>
      <Form inputs={data.inputs} />
    </Box>
  );
};
