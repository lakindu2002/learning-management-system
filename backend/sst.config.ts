import { SSTConfig } from "sst";
import { APIGateway } from "./stacks/API";

export default {
  config(_input) {
    return {
      name: "lms-backend",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app
      .stack(APIGateway)
  }
} satisfies SSTConfig;
