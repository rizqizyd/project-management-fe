import network from '@/utils/network';

const auth = {
  login(payload: { email: string; password: string }) {
    return network.post('/auth/login', payload);
  },
  signUp(payload: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    return network.post('/auth/register', payload);
  },
};

export default auth;
