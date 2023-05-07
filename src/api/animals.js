import api from "./index";

export async function getAnimals() {
  return (await api.get("/animals")).data;
}

export async function createAnimal(animal) {
  return api.post("/animals", animal);
}

export async function updateAnimal(animal) {
  return api.put(`/animals/${animal.id}`, animal);
}