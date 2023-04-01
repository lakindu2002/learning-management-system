import { InstituteUserRole } from "src/models/user";

const roles = [{ label: 'Student', value: InstituteUserRole.STUDENT },
{ label: 'Lecturer', value: InstituteUserRole.LECTURER },
{ label: 'Administrator', value: InstituteUserRole.ADMINISTRATOR },
{ label: 'Owner', value: InstituteUserRole.OWNER },]

export const useRoles = (rolesToFilterOut: InstituteUserRole[] = []) => rolesToFilterOut.length > 0 ?
    roles.filter((role) => !rolesToFilterOut.includes(role.value)) : roles;