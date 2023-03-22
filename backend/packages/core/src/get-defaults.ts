import { Institute } from "./types/institute";
import { InstituteUser, InstituteUserRole, User } from "./types/user";
import { createDefinedUUID } from "./nano-id";

export const getDefaultInstitute = ({
  name = "",
}: Partial<Institute>): Institute => ({
  name,
  id: createDefinedUUID(),
  createdAt: Date.now(),
  updatedAt: Date.now(),
});

export const getDefaultUser = ({
  email = "",
  id = "",
  name = "",
}: Partial<User>): User => ({
  email,
  id,
  name,
  createdAt: Date.now(),
  updatedAt: Date.now(),
});

export const getDefaultInstituteUser = ({
  email = "",
  id = "",
  name = "",
  instituteId = "",
  role = InstituteUserRole.OWNER
}: Partial<InstituteUser>): InstituteUser => ({
  email,
  id,
  name,
  instituteId,
  role,
  createdAt: Date.now(),
  updatedAt: Date.now(),
});
