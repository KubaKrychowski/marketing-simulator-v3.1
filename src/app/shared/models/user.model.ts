export interface User {
  IsLoggedIn?: boolean;
  username?: string;
  externalId?: string;
  password?: string;
  email?: string;
  birthDate?: Date;
  money?: number;
}
