import { useEffect, useState } from "react";
import { getAnimals } from "../../api/animals";
import AnimalCard from "./AnimalCard";
import { Box } from "@mui/material";
import AnimalListControls from "./AnimalListControls";

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [visibleAnimals, setVisibleAnimals] = useState([]);
  const [filter, setFilter] = useState("all");
  const [type, setType] = useState("all");

  useEffect(() => {
    getAnimals().then((animals) => setAnimals(animals));
  }, []);

  useEffect(() => {
    setVisibleAnimals(
      animals
        .filter((animal) => {
          if (filter === "all") return true;
          if (filter === "adopted") return animal.isAdopted;
          if (filter === "non-adopted") return !animal.isAdopted;
        })
        .filter((animal) => {
          if (type === "all") return true;
          if (type === "dog") return animal.type === "dog";
          if (type === "cat") return animal.type === "cat";
          if (type === "other")
            return animal.type !== "dog" && animal.type !== "cat";
        })
    );
  }, [animals, filter, type]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <AnimalListControls
        filter={filter}
        type={type}
        setFilter={setFilter}
        setType={setType}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          pt: 4,
          pb: 4,
        }}
      >
        {visibleAnimals.map((animal) => (
          <AnimalCard key={animal.id} {...animal} />
        ))}
      </Box>
    </Box>
  );
}
