export interface Student {
  id?: number;
  name: string;
  email: string;
  age: number;
  gender: Gender;
};
export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
};
