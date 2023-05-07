import api from "./index";

export async function getNotifications() {
  return (await api.get("/notifications")).data;
}

export function createNotification(notification) {
  return api.post("/notifications", notification);
}

export function deleteNotification(id) {
  return api.delete(`/notifications/${id}`);
}
