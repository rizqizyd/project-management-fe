import { Box } from '@mui/material';
import { DatePicker as BaseDatePicker } from '@mui/x-date-pickers';
import type { Dayjs } from 'dayjs';
import { type Control, Controller, type FieldValues } from 'react-hook-form';

interface DatePickerProps {
  name: string;
  label: string;
  control: Control<FieldValues>;
  defaultValue?: Dayjs | null;
  helperText?: string;
}

const DatePicker = ({
  name,
  label,
  control,
  defaultValue,
  helperText,
  ...props
}: DatePickerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, onBlur } }) => (
        <Box
          sx={{
            marginBottom: 2,
          }}
        >
          <BaseDatePicker
            {...props}
            label={label}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            slotProps={{
              textField: {
                fullWidth: true,
                helperText,
                onBlur,
              },
            }}
          />
        </Box>
      )}
    />
  );
};

export default DatePicker;
