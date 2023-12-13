interface Credentials {
  username: string;
  password: string;
}

export interface Users {
  standard_user: Credentials;
  locked_out_user: Credentials;
  problem_user: Credentials;
  performance_glitch_user: Credentials;
  error_user: Credentials;
  visual_user: Credentials;
}
