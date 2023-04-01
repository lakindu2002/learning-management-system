export interface User {
  id: string;
  name: string;
  institutes: {
    id: string,
    name: string,
    role: InstituteUserRole
  }[]
  currentInstitute: {
    id: string,
    name: string,
    role: InstituteUserRole
  }
}
export enum InstituteUserRole {
  ADMINISTRATOR = 'administrator',
  OWNER = 'owner',
  LECTURER = 'lecturer',
  STUDENT = 'student'
}