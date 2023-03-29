import { InstituteUserRole } from "./types/user";

type TokenInstitute = {
  [key: string]: {
    role: InstituteUserRole;
  };
};

export const isAuthorized = (
  instituteId: string,
  institutesInToken: TokenInstitute,
  roles: InstituteUserRole[]
) => {
  const institute = institutesInToken[instituteId];
  if (!institute) {
    return false;
  }
  if (roles.includes(institute.role)) {
    return true;
  }
  return false;
};
