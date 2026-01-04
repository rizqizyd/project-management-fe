import { TextField as BaseTextField, Box } from '@mui/material';
import { type Control, Controller, type FieldValues } from 'react-hook-form';

interface TextFieldProps {
  name: string;
  label: string;
  control: Control<FieldValues>;
  defaultValue: string | number;
  helperText: string;
}

const TextField = ({
  name,
  label,
  control,
  defaultValue,
  helperText,
  ...props
}: TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
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
