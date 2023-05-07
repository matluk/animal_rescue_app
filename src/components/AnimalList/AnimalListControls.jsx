import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const typeOfPetLabel = "Type of Pet";
const dog = "Dog";
const cat = "Cat";
const other = "Other";
const filterLabel = "Filter";
const all = "All";
const adopted = "Adopted";
const nonAdopted = "Non-Adopted";

export default function AnimalListControls({
  type,
  filter,
  setFilter,
  setType,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column " },
        minWidth: 150,
        pt: 4,
        pb: 4,
        gap: 4,
      }}
    >
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          {typeOfPetLabel}
        </FormLabel>
        <RadioGroup
          name="row-radio-buttons-group"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label={all} />
          <FormControlLabel value="dog" control={<Radio />} label={dog} />
          <FormControlLabel value="cat" control={<Radio />} label={cat} />
          <FormControlLabel value="other" control={<Radio />} label={other} />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          {filterLabel}
        </FormLabel>
        <RadioGroup
          name="row-radio-buttons-group"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label={all} />
          <FormControlLabel
            value="adopted"
            control={<Radio />}
            label={adopted}
          />
          <FormControlLabel
            value="non-adopted"
            control={<Radio />}
            label={nonAdopted}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
