import { Paper, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

import DatePicker from '@/components/ui/Form/DatePicker';
import Select from '@/components/ui/Form/Select/Select';
import TextField from '@/components/ui/Form/TextField';

const Login = () => {
  const { control } = useForm();

  return (
    <Stack
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      <Paper sx={{ width: 600, padding: 2 }}>
        <DatePicker
          control={control}
          label="Choose Date"
          name="filterDate"
          defaultValue={null}
        />
        <TextField
          control={control}
          label="Username"
          name="username"
          defaultValue=""
          helperText=""
        />
        <Select
          control={control}
          label="Role"
          name="role"
          id="role"
          options={[
            { label: 'Admin', value: 'admin' },
            { label: 'User', value: 'user' },
          ]}
          defaultValue=""
          value={''}
        />
      </Paper>
    </Stack>
  );
};

export default Login;
