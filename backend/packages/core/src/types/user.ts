export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: number;
  updatedAt: number;
}

export interface InstituteUser extends User {
  instituteId: string;
  role: InstituteUserRole
}

export enum InstituteUserRole {
  ADMINISTRATOR = 'administrator',
  OWNER = 'owner',
  LECTURER = 'lecturer',
  STUDENT = 'student'
}