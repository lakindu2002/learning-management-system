import { ApiHandler } from "sst/node/api";
import { Time } from "@backend/core/time";

const USERS_TABLE_NAME = process.env.USERS_TABLE_NAME;

export const getLoggedInUserInformation = ApiHandler(async (event) => {
  return {
    body: `Hello world. The time is ${Time.now()}`,
  };
});
