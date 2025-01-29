interface UserCreateDTO {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface UserProps {
  id?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: string;
  updatedAt?: string;
}
