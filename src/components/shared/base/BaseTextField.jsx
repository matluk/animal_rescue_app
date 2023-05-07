import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function BaseTextField({
  name,
  control,
  rules,
  errorMessage,
  muiProps = {},
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          variant="outlined"
          fullWidth
          error={!!errorMessage}
          // use empty space to prevent content from moving
          helperText={errorMessage || " "}
          {...muiProps}
          {...field}
        />
      )}
    />
  );
}
