import { InstituteUserRole } from "src/models/user";

const roles = [{ label: 'Student', value: InstituteUserRole.STUDENT, color: 'info' },
{ label: 'Lecturer', value: InstituteUserRole.LECTURER, color: 'primary' },
{ label: 'Administrator', value: InstituteUserRole.ADMINISTRATOR, color: 'warning' },
{ label: 'Owner', value: InstituteUserRole.OWNER, color: 'warning' },]

export const useRoles = (rolesToFilterOut: InstituteUserRole[] = []) => rolesToFilterOut.length > 0 ?
    roles.filter((role) => !rolesToFilterOut.includes(role.value)) : roles;