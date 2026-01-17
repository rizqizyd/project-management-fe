import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as yup from 'yup';

import AuthLayout from '@/components/layouts/AuthLayout';
import Dialog from '@/components/ui/Dialog';
import TextField from '@/components/ui/Form/TextField/TextField';
import services from '@/services';

const signUpSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<{
    title: string;
    message: string;
  }>({ title: '', message: '' });
  const [dialogActions, setDialogActions] = useState<
    { label: string; onClick: () => void }[]
  >([]);

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (formValues: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      await services.auth.signUp(formValues);
      navigate('/login');
    } catch (error) {
      setOpenDialog(true);
      let errorMessage = 'Register Failed. Please try again.';
      if (error instanceof AxiosError) {
        errorMessage = error.response?.data?.message || errorMessage;
      }
      setDialogMessage({
        title: 'Oops! Something went wrong',
        message: errorMessage,
      });
      setDialogActions([
        {
          label: 'Close',
          onClick: () => setOpenDialog(false),
        },
      ]);
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
          Sign Up Page
        </Typography>
        <Stack
          flexDirection={'column'}
          gap={1}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField id="name" label="Name" control={control} name="name" />
          <TextField id="email" label="Email" control={control} name="email" />
          <TextField
            id="password"
            label="Password"
            control={control}
            name="password"
            secureText
          />
          <TextField
            id="confirmPassword"
            label="Confirm Password"
            control={control}
            name="confirmPassword"
            secureText
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
          >
            Sign Up
          </Button>
          <Button
            type="button"
            variant="text"
            fullWidth
            onClick={() => navigate('/login')}
            disabled={loading}
          >
            Have an account? Login
          </Button>
        </Stack>
      </Paper>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title={dialogMessage.title}
        message={dialogMessage.message}
        actions={dialogActions}
      />
    </AuthLayout>
  );
};

export default SignUp;
