export interface FakeUser {
  id: number;
  email: string;
  password: string;
  role: 'ADMIN' | 'PROFESOR' | 'ALUMNO';
  name: string;
}

export const fakeUsers: FakeUser[] = [
  {
    id: 1,
    email: 'admin@gmail.com',
    password: 'admin123$',
    role: 'ADMIN',
    name: 'Lucio Morales',
  },
];
