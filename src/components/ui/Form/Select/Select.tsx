import {
  Select as BaseSelect,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  type SelectChangeEvent,
} from '@mui/material';
import { type Control, Controller, type FieldValues } from 'react-hook-form';

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  control: Control<FieldValues>;
  label: string;
  value: string | number;
  options: SelectOption[];
  name: string;
  id: string;
  helperText?: string;
  defaultValue?: string | number;
}

const Select = ({
  control,
  label,
  helperText,
  name,
  id,
  options,
  defaultValue,
  ...props
}: SelectProps) => {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => {
        const handleChange = (event: SelectChangeEvent) => {
          onChange(event.target.value);
        };

        return (
          <FormControl fullWidth>
            <InputLabel id={id}>{label}</InputLabel>
            <BaseSelect
              {...props}
              labelId={id}
              id={`${id}-select`}
              value={value}
              label={label}
              onChange={handleChange}
              onBlur={onBlur}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </BaseSelect>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default Select;
