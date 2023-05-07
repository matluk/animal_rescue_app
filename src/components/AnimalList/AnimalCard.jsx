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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="240" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2, height: "32px" }}>
          {isChipped && <Chip label={chippedLabel} color="success" />}
          {isAdopted && <Chip label={adoptedLabel} color="success" />}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
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
