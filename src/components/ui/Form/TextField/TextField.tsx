import { TextField as BaseTextField, Box } from '@mui/material';
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  type PathValue,
} from 'react-hook-form';

interface TextFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  helperText?: string;
  defaultValue?: PathValue<T, Path<T>>;
}

const TextField = <T extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  helperText,
  ...props
}: TextFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({ field: { onChange, onBlur, value } }) => (
        <Box
          sx={{
            marginBottom: 2,
          }}
        >
          <BaseTextField
            {...props}
            fullWidth
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            helperText={helperText}
          />
        </Box>
      )}
    />
  );
};

export default TextField;
