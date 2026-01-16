import { Stack } from '@mui/material';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      flex={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100dvh'}
      width={'100%'}
    >
      {children}
    </Stack>
  );
};

export default AuthLayout;
