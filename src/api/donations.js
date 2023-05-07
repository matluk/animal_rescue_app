import api from "./index";

export async function getDonations() {
  return (await api.get("/donations")).data;
}

export function deleteDonation(donationId) {
  return api.delete(`/donations/${donationId}`);
}

export function createDonation(donation) {
  return api.post("/donations", donation);
}

export function updateDonation(donation) {
  return api.put(`/donations/${donation.id}`, donation);
}
