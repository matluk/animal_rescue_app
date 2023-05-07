import api from "./index";

export async function getAnimals() {
  return (await api.get("/animals")).data;
}
