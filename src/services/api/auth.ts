import network from '@/utils/network';

const auth = {
  login(payload: { email: string; password: string }) {
    return network.post('/auth/login', payload);
  },
};

export default auth;
