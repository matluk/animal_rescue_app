import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import AnimalForm from "../shared/AnimalForm";

const saveLabel = "Save";

export default function AnimalEditDialog({ animal, onClose, onSubmit }) {
  return (
    <Dialog open={!!animal} onClose={onClose}>
      <DialogTitle>
        Editing {animal?.name} (ID: {animal?.id})
      </DialogTitle>
      <DialogContent>
        <AnimalForm
          submitButtonText={saveLabel}
          editedAnimal={animal}
          onSubmit={onSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}
