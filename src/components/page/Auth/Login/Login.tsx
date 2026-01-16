import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as yup from 'yup';

import AuthLayout from '@/components/layouts/AuthLayout';
import TextField from '@/components/ui/Form/TextField/TextField';
import services from '@/services';
import session from '@/utils/session';

const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formValues: { email: string; password: string }) => {
    try {
      const response = await services.auth.login(formValues);
      const { data } = response.data;
      session.setSession(data.access_token);
      navigate('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Paper sx={{ width: 500, padding: 2 }}>
        <Typography
          variant="h5"
          component={'h1'}
          align="center"
          marginBottom={2}
        >
          Login Page
        </Typography>
        <Stack
          flexDirection={'column'}
          gap={1}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField id="email" label="Email" control={control} name="email" />
          <TextField
            id="password"
            label="Password"
            control={control}
            name="password"
            secureText
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
          >
            Login
          </Button>
          <Button
            type="button"
            variant="text"
            fullWidth
            onClick={() => navigate('/signup')}
            disabled={loading}
          >
            Register
          </Button>
        </Stack>
      </Paper>
    </AuthLayout>
  );
};

export default Login;
