import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller } from "react-hook-form";

export default function BaseRadioGroup({
  radioButtons,
  errorMessage,
  control,
  label,
  name,
}) {
  return (
    <FormControl error={!!errorMessage}>
      <FormLabel>{label}</FormLabel>
      <Controller
        rules={{ required: true }}
        control={control}
        name={name}
        render={({ field }) => (
          <RadioGroup name={name} row {...field}>
            {radioButtons.map(({ value, label }) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        )}
      />
      <FormHelperText>{errorMessage || " "}</FormHelperText>
    </FormControl>
  );
}
