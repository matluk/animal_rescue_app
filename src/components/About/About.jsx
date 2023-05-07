import { Box } from "@mui/material";
import LeafletMap from "./LeafletMap";
import GeneralInfo from "./GeneralInfo";
import ContactForm from "./ContactForm";

export default function About() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <GeneralInfo />
      <LeafletMap />
      <ContactForm />
    </Box>
  );
}
