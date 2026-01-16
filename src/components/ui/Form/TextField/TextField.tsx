import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useEffect, useState } from 'react';
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
  id: string;
  helperText?: string;
  defaultValue?: PathValue<T, Path<T>>;
  secureText?: boolean;
}

const TextField = <T extends FieldValues>({
  name,
  label,
  control,
  defaultValue,
  helperText,
  id,
  secureText = false,
  ...props
}: TextFieldProps<T>) => {
  const [hidePassword, setHidePassword] = useState(false);

  useEffect(() => {
    setHidePassword(secureText);
  }, [secureText]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as PathValue<T, Path<T>>}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <FormControl
          sx={{
            marginBottom: 2,
          }}
          variant="outlined"
        >
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <OutlinedInput
            {...props}
            fullWidth
            label={label}
            value={value}
            type={hidePassword ? 'password' : 'text'}
            onChange={onChange}
            onBlur={onBlur}
            error={Boolean(error)}
            endAdornment={
              secureText && (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setHidePassword(!hidePassword)}
                  >
                    {hidePassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }
          />
          <FormHelperText error={Boolean(error)}>
            {error?.message ? error?.message : helperText}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default TextField;
