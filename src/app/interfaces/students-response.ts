import { Student } from './student';

export interface StudentsResponse {
  success: boolean;
  students: Student[];
}
