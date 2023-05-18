export interface LoginReq {
  username?: string;
  password?: string;
}

export interface logedUser{
  token: string;
  username: string;
  userId: number;
}
