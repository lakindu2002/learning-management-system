import { SSTConfig } from "sst";
import { APIGateway } from "./stacks/API";
import { cognito } from "./stacks/cognito";

export default {
  config(_input) {
    return {
      name: "lms-backend",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app
      .stack(cognito)
      .stack(APIGateway)
      .setDefaultFunctionProps({
        memorySize: 1024,
      })
  }
} satisfies SSTConfig;
