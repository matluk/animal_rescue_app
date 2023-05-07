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
import { useContext, memo, useState } from "react";
import { UserRoleContext } from "../../utils/context/role";
import PawsImage from "../../assets/paws.jpeg";

const adopt = "Adopt";
const edit = "Edit";
const chippedLabel = "CHIPPED";
const adoptedLabel = "ADOPTED";

const memoizedAnimalCard = memo(function AnimalCard({
  name,
  description,
  image,
  isAdopted,
  isChipped,
  onEdit,
  onAdopt,
}) {
  const [raised, setRaised] = useState(false);
  const isAdmin = useContext(UserRoleContext);

  return (
    <Card
      raised={raised}
      onMouseOver={() => setRaised(true)}
      onMouseOut={() => setRaised(false)}
      sx={{
        width: 345,
        maxWidth: 345,
        minWidth: 345,
        height: 405,
        minHeight: 405,
        maxHeight: 405,
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        height="240"
        image={image || PawsImage}
      />
      <CardContent sx={{ pb: 0 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {isChipped && <Chip label={chippedLabel} size="small" />}
            {isAdopted && <Chip label={adoptedLabel} size="small" />}
          </Box>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: 62,
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", minHeight: 47 }}>
        {!isAdopted && (
          <Button size="small" disabled={isAdopted} onClick={onAdopt}>
            {adopt}
          </Button>
        )}
        {isAdmin && (
          <Button size="small" onClick={onEdit}>
            {edit}
          </Button>
        )}
      </CardActions>
    </Card>
  );
});

export default memoizedAnimalCard;
