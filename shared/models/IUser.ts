
export interface IUser {
  user_id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
  created_date: Date;
  created_ip: string;
}
