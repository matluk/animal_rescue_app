import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import format from "date-fns/format";

export default function Notification({
  id,
  title,
  description,
  isImportant,
  createdAt,
  showDelete,
  onDelete,
}) {
  return (
    <Card sx={{ minWidth: 600, maxWidth: 600 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: isImportant ? "secondary.main" : "primary.main",
          color: "primary.contrastText",
          p: 1,
        }}
      >
        <Typography sx={{ width: 200 }}>{title}</Typography>
        <Typography sx={{ width: 100 }}>
          {isImportant ? "IMPORTANT!" : ""}
        </Typography>
        <Typography sx={{ width: 200, textAlign: "right" }}>
          {format(new Date(createdAt), "dd.MM.yyyy")}
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {showDelete && (
          <Button
            sx={{ marginLeft: "auto" }}
            size="small"
            color="error"
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
