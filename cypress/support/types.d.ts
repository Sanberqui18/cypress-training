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

type Email = `${string}@${string}.com`;
type DateOfBirth = `${number} ${string} ${number}`;

type Genders = "Male" | "Female" | "Other";

type Hobbies = "Sports" | "Reading" | "Music";
export type HoobbieList = Hobbies[];

export interface FormData {
  name: string;
  lastName: string;
  email: Email;
  gender: Genders;
  dateOfBirth: DateOfBirth;
  mobileNumber: string;
  hobbies: HoobbieList;
  currentAddress: string;
}

export interface FormDataClass {
  name: string;
  lastName: string;
  email: Email;
  gender: Genders;
  dateOfBirth: DateOfBirth;
  mobileNumber: number;
  hobbies: HoobbieList;
  currentAddress: string;
}
