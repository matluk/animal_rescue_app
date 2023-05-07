import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UserRoleContext } from "../../utils/context/role";
import PawsImage from '../../assets/paws.jpeg'

const adopt = "Adopt";
const edit = "Edit";
const chippedLabel = "CHIPPED";
const adoptedLabel = "ADOPTED";

export default function AnimalList({
  name,
  description,
  image,
  isAdopted,
  isChipped,
}) {
  const isAdmin = useContext(UserRoleContext);

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardMedia component="img" alt={name} height="240" image={image || PawsImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2, minHeight: 32 }}>
          {isChipped && <Chip label={chippedLabel} color="success" />}
          {isAdopted && <Chip label={adoptedLabel} color="success" />}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", minHeight: 47 }}>
        {!isAdopted && (
          <Button size="small" disabled={isAdopted}>
            {adopt}
          </Button>
        )}
        {isAdmin && <Button size="small">{edit}</Button>}
      </CardActions>
    </Card>
  );
}
