export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: string | undefined;
  updated_at: string | undefined;
}
