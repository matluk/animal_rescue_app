export const initAnimal = () => ({
  name: "",
  description: "",
  type: "",
  isChipped: false,
  isAdopted: false,
  age: "",
  image: "",
  lastExaminatedAt: "",
});

export const supportedPetTypes = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "other", label: "Other" },
];

export const createFilterByAdoption = (adoptionFilter) => {
  return (animal) => {
    if (adoptionFilter === "all") return true;
    if (adoptionFilter === "adopted") return animal.isAdopted;
    if (adoptionFilter === "non-adopted") return !animal.isAdopted;
  };
};

export const createFilterByType = (typeFilter) => {
  return (animal) => {
    if (typeFilter === "all") return true;
    if (typeFilter === "dog") return animal.type === "dog";
    if (typeFilter === "cat") return animal.type === "cat";
    if (typeFilter === "other")
      return animal.type !== "dog" && animal.type !== "cat";
  };
};

export const serializeAnimal = (data) => {
  // tranforms form data into a format that can be sent to the server
  return {
    ...data,
    age: parseInt(data.age, 10),
    image: data.image || null,
    lastExaminatedAt: data.lastExaminatedAt
      ? new Date(data.lastExaminatedAt).toISOString()
      : null,
  }
}

export const deserializeAnimal = (animal) => {
  return animal;
}