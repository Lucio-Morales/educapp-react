import { fakeUsers } from '../utils/data/fakeUsers';

export const login = (email: string, password: string) => {
  const user = fakeUsers.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error('Credenciales incorrectas');
  }

  localStorage.setItem('user', JSON.stringify(user));

  return user;
};

export const getCurrentUser = () => {
  const stored = localStorage.getItem('user');
  return stored ? JSON.parse(stored) : null;
};

export const logout = () => {
  localStorage.removeItem('user');
};
