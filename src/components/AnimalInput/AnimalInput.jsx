import { Box, Typography } from "@mui/material";
import AnimalForm from "./AnimalForm";
import { createAnimal } from "../../api/animals";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";

const title = "Add a new animal";

export default function AnimalInput() {
  const navigate = useNavigate();

  const onSubmit = (animal) => {
    createAnimal(animal).then(() => {
      navigate(routes.animalList.path);
    });
  };

  return (
    <Box sx={{ maxWidth: 750, margin: "16px auto" }}>
      <Typography alignCenter mb={2} variant="h4">
        {title}
      </Typography>
      <AnimalForm submitButtonText="Add Animal" onSubmit={onSubmit} />
    </Box>
  );
}
