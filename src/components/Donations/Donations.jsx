import { useContext, useEffect, useState } from "react";
import DonationTable from "./DonationTable";
import { getDonations } from "../../api/donations";
import groupBy from "lodash/groupBy";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { UserRoleContext } from "../../utils/context/role";
import {
  deleteDonation,
  updateDonation,
  createDonation,
} from "../../api/donations";
import DonationForm from "./DonationForm";

export default function Donations() {
  const [donations, setDonations] = useState([]);
  const [dialog, setDialog] = useState(false);
  const isAdmin = useContext(UserRoleContext);

  const resetDonations = () => getDonations().then(setDonations);

  useEffect(() => {
    resetDonations();
  }, []);

  const onAdminDeleteDonation = (donation) => {
    deleteDonation(donation.id).then(resetDonations);
  };

  const onUserMakeDonation = (donation) => {
    updateDonation({ ...donation, category: "donated" }).then(resetDonations);
  };
  const onAdminMarkAsDonated = (donation) => {
    updateDonation({ ...donation, category: "donated" }).then(resetDonations);
  };

  const onAdminAcceptDonation = (donation) => {
    updateDonation({ ...donation, category: "donated" }).then(resetDonations);
  };

  const onAdminRepeatDonation = (donation) => {
    createDonation({ ...donation, category: "seeking", id: null }).then(
      resetDonations
    );
  };

  const onSubmit = (donation) => {
    createDonation({ ...donation, category: isAdmin ? "seeking" : "offered" })
      .then(resetDonations)
      .then(() => setDialog(false));
  };

  const donationsByCategory = groupBy(donations, "category");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: 700, display: "flex", mt: 2 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setDialog(true)}
        >
          {isAdmin ? "Request donation" : "Donate"}
        </Button>
        <Dialog open={dialog} onClose={() => setDialog(false)}>
          <DialogTitle>{isAdmin ? "Request donation" : "Donate"}</DialogTitle>
          <DialogContent sx={{ width: 500 }}>
            <DonationForm onSubmit={onSubmit} />
          </DialogContent>
        </Dialog>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          mt: 2,
          maxWidth: 700,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Seeking
          </Typography>
          <DonationTable
            donations={donationsByCategory["seeking"]}
            isAdmin={isAdmin}
            onAdminMarkAsDonated={onAdminMarkAsDonated}
            onAdminDeleteDonation={onAdminDeleteDonation}
            onUserMakeDonation={onUserMakeDonation}
          />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Offered
          </Typography>
          <DonationTable
            donations={donationsByCategory["offered"]}
            isAdmin={isAdmin}
            onAdminAcceptDonation={onAdminAcceptDonation}
          />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Donated
          </Typography>
          <DonationTable
            donations={donationsByCategory["donated"]}
            isAdmin={isAdmin}
            onAdminRepeatDonation={onAdminRepeatDonation}
            onAdminDeleteDonation={onAdminDeleteDonation}
          />
        </Box>
      </Box>
    </Box>
  );
}
