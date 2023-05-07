import { useEffect, useState } from "react";
import { getAnimals } from "../../api/animals";
import AnimalCard from "./AnimalCard";
import { Box } from "@mui/material";
import AnimalListControls from "./AnimalListControls";
import {
  createFilterByAdoption,
  createFilterByType,
  createFilterByName,
} from "../../utils/animal";
import AnimalEditDialog from "./AnimalEditDialog";
import { updateAnimal } from "../../api/animals";

export default function AnimalList() {
  const [animals, setAnimals] = useState([]);
  const [adoptionFilter, setAdoptionFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("");
  const [editDialog, setEditDialog] = useState(null);

  useEffect(() => {
    getAnimals().then((animals) => setAnimals(animals));
  }, []);

  const visibleAnimals = animals
    .filter(createFilterByAdoption(adoptionFilter))
    .filter(createFilterByType(typeFilter))
    .filter(createFilterByName(nameFilter));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AnimalListControls
        setAdoptionFilter={setAdoptionFilter}
        setTypeFilter={setTypeFilter}
        setNameFilter={setNameFilter}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          pt: 4,
          pb: 4,
        }}
      >
        {visibleAnimals.length
          ? visibleAnimals.map((animal) => (
              <AnimalCard
                key={animal.id}
                {...animal}
                onAdopt={() =>
                  updateAnimal({ ...animal, isAdopted: true })
                    .then(getAnimals)
                    .then(setAnimals)
                    .then(() => setEditDialog(null))
                }
                onEdit={() => setEditDialog({ animal })}
              />
            ))
          : "No animals found"}
      </Box>
      <AnimalEditDialog
        animal={editDialog?.animal}
        onClose={() => setEditDialog(null)}
        onSubmit={(animal) =>
          updateAnimal(animal)
            .then(getAnimals)
            .then(setAnimals)
            .then(() => setEditDialog(null))
        }
      />
    </Box>
  );
}
